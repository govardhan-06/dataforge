# Create your views here.
from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer, ChallengeSerializer, PointSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Challenges,Points


class ChallengeList(generics.ListAPIView):
    serializer_class = ChallengeSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Challenges.objects.all()

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

    def get_queryset(self,pk):
        user = self.request.user
        return Challenges.objects.filter(author=user)

class PointList(generics.ListAPIView):
    serializer_class = PointSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Points.objects.filter(user=user)


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class CurrentUserView(APIView):
    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)

class ChallengeUpdate(generics.UpdateAPIView):
    queryset=Challenges.objects.all()
    serializer_class=ChallengeSerializer
    lookup_field = 'pk'
    permission_classes = [IsAuthenticated]

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Challenge updated successfully"})

        else:
            return Response({"message": "Failed to update", "details": serializer.errors})

class PointsViewUpdate(generics.RetrieveUpdateAPIView):
    serializer_class = PointSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        # Get the user from the request
        user = self.request.user
        # Return the instance for the logged-in user
        obj, created = Points.objects.get_or_create(user=user)
        return obj
    
    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        request.data['points']=request.data['points']+instance.points
        serializer = self.get_serializer(instance, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.update(instance, serializer.validated_data)
            return Response({"message": "Points updated successfully"})

        else:
            return Response({"message": "Failed to update Points", "details": serializer.errors})
