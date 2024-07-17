from django.db import models
import string
import random

def generate_short_code(length = 8):
    characters = string.ascii_letters + string.digits
    return ''.join(random.choice(characters) for i in range(length))

class URL(models.Model):
    original_url = models.URLField()
    short_code = models.CharField(max_length=8, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.original_url
    