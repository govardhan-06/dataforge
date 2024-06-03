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
    
    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.description = validated_data.get('description', instance.description)
        instance.flag = validated_data.get('flag', instance.flag)
        instance.difficulty = validated_data.get('difficulty', instance.difficulty)
        instance.points = validated_data.get('points', instance.points)
        instance.category = validated_data.get('category', instance.category)
        instance.hints = validated_data.get('hints', instance.hints)
        instance.save()
        return instance

class PointSerializer(serializers.ModelSerializer):
    class Meta:
        model = Points
        fields = ["user", "points"]
        extra_kwargs={"user":{"read_only":True}}
    
    def update(self, instance, validated_data):
        instance.points = validated_data.get('points', instance.points)
        instance.save()
        return instance
