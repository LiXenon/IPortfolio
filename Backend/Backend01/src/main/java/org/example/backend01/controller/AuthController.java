package org.example.backend01.controller;

import org.example.backend01.model.User;
import org.example.backend01.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.util.Date;
import java.util.Optional;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    @Value("${JWT_SECRET_KEY}")
    private String secretKey;

    @Autowired
    public AuthController(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    //register api
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        if (userRepository.findByUsername(user.getUsername()).isPresent()) {
            return new ResponseEntity<>("Username already exists", HttpStatus.BAD_REQUEST);
        }

        // hash the password
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        userRepository.save(user);

        return new ResponseEntity<>("User registered successfully", HttpStatus.CREATED);



    }

    //login api
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User loginuser){
        Optional<User> user = userRepository.findByUsername(loginuser.getUsername());

        if(user.isPresent() && passwordEncoder.matches(loginuser.getPassword(), user.get().getPassword())){



            if (secretKey == null) {
                return new ResponseEntity<>("Server configuration error: missing secret key", HttpStatus.INTERNAL_SERVER_ERROR);
            }
            // generate JWT token

            String token = Jwts.builder()
                    .setSubject(user.get().getUsername())
                    .setIssuedAt(new Date())
                    .setExpiration(new Date(System.currentTimeMillis() + 3600000))
                    .signWith(SignatureAlgorithm.HS512, secretKey)
                    .compact();

            return ResponseEntity.ok("Login successful, Token: " + token);
        } else {
            return new ResponseEntity<>("Invalid username or password", HttpStatus.UNAUTHORIZED);
        }
    }





}
