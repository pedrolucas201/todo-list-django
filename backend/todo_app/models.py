# todo_app/models.py
from django.db import models

class Task(models.Model):
    title = models.CharField(max_length=255)  # Título da tarefa
    description = models.TextField(blank=True)  # Descrição opcional
    completed = models.BooleanField(default=False)  # Estado da tarefa
    created_at = models.DateTimeField(auto_now_add=True)  # Data de criação
    updated_at = models.DateTimeField(auto_now=True)  # Data de última atualização

    def __str__(self):
        return self.title
