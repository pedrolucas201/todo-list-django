from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TaskViewSet
from django.conf import settings
from django.conf.urls.static import static

# Configuração do DRF
router = DefaultRouter()
router.register(r'tasks', TaskViewSet, basename='task')

urlpatterns = [
    path('admin/', admin.site.urls),  # Página de administração
    path('', include(router.urls)),  # Rotas da API
]

# Servindo arquivos estáticos durante o desenvolvimento
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
