# Create your views here.
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, ChallengeSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import challenges


class ChallengeList(generics.ListAPIView):
    serializer_class = ChallengeSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return challenges.objects.all()

class ChallengeCreate(generics.CreateAPIView):
    serializer_class = ChallengeSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)

class ChallengeDelete(generics.DestroyAPIView):
    serializer_class = ChallengeSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return challenges.objects.filter(author=user)

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
