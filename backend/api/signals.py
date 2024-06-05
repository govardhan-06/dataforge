from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import User
from .models import Points

@receiver(post_save, sender=User)
def create_user_points(sender, instance, created, **kwargs):
    if created:
        Points.objects.create(user=instance, points=0)
