from django.contrib.auth.models import User
from rest_framework import serializers
from .models import challenges


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
        model = challenges
        fields = ["id", "title", "description","flag","created_at", "author","points","category",
                  "hints","updated_on"]
        extra_kwargs = {"author": {"read_only": True}}
