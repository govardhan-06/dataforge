from django.contrib import admin
from .models import Challenges,Points,UserChallenge

# Register your models here.
admin.site.register(Challenges)
admin.site.register(Points)
admin.site.register(UserChallenge)