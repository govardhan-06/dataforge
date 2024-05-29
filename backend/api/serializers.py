from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Challenges,Points


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create_user(**validated_data)
        return user


class ChallengeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Challenges
        fields = ["id", "title", "description","flag","difficulty","created_at", "author","points","category",
                  "hints","updated_on"]
        extra_kwargs = {"author": {"read_only": True}}

class PointSerializer(serializers.ModelSerializer):
    class Meta:
        model = Points
        fields = ["id", "user", "points"]
        extra_kwargs={"points":{"read_only":True}}
