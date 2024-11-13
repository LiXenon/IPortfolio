package org.example.backend01.controller;


import org.example.backend01.model.Template;
import org.example.backend01.repository.TemplateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

import java.util.List;

@RestController
@RequestMapping("/templates")
public class TemplateController {

    private final TemplateRepository templateRepository;

    @Autowired
    public TemplateController(TemplateRepository templateRepository) {
        this.templateRepository = templateRepository;
    }

    // api for saving a template
    @PostMapping("/save")
    public ResponseEntity<Template> saveTemplate(@RequestBody Template template) {
        Template savedTemplate = templateRepository.save(template);
        return ResponseEntity.ok(savedTemplate);
    }

    // api for getting all templates
    @GetMapping("/all")
    public ResponseEntity<List<Template>> getAllTemplates() {
        List<Template> templates = templateRepository.findAll();
        return ResponseEntity.ok(templates);
    }

    @PutMapping("/update")
    public ResponseEntity<Template> updateTemplate(@RequestBody Template updatedTemplate) {
        // check if the template exists
        Optional<Template> existingTemplate = templateRepository.findById(updatedTemplate.getId());
        if (existingTemplate.isPresent()) {
            // update the template
            Template savedTemplate = templateRepository.save(updatedTemplate);
            return ResponseEntity.ok(savedTemplate);
        } else {
            // return 404 if the template does not exist
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }


}
