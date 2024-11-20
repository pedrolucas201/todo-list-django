from rest_framework.routers import DefaultRouter
from django.urls import path, include
from todo_app.views import TaskViewSet
from django.contrib import admin

router = DefaultRouter()
router.register(r'tasks', TaskViewSet, basename='task')

urlpatterns = [
    path('api/', include(router.urls)),  # Inclui as rotas do router
    path('admin/', admin.site.urls),
]
