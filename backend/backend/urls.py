from django.urls import path, include
from django.contrib import admin
from rest_framework import routers
from todo_app import views

router = routers.DefaultRouter()
router.register(r'tasks', views.TaskViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),
]
