import hmac
import hashlib
import base64
import os

# 生成一个512位的随机密钥
def generate_hs512_key():
    # 创建64字节的随机密钥
    secret_key = os.urandom(64)
    # 使用Base64编码
    encoded_key = base64.urlsafe_b64encode(secret_key).decode('utf-8')
    return encoded_key

# 调用函数生成密钥
hs512_key = generate_hs512_key()
print("生成的HS512密钥:", hs512_key)
