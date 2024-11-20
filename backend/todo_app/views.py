from rest_framework import viewsets
from .models import Task
from .serializers import TaskSerializer

class TaskViewSet(viewsets.ModelViewSet):  # ModelViewSet já suporta POST
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
