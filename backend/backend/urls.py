from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', lambda request: HttpResponse('Bem-vindo ao Todo List!')),  # Página inicial simples
]
