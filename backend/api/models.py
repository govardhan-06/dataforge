from django.db import models
from django.contrib.auth.models import User

#CTF Questions   
class Challenges(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    flag=models.CharField(max_length=50)

    #dropdown choices for points
    points=models.IntegerField()

    difficulty_choices = [
        ('Easy', 'EASY'),
        ('Medium', 'MEDIUM'),
        ('Difficult', 'DIFFICULT'),
    ]
    difficulty=models.CharField(max_length=10,choices=difficulty_choices,default='Easy')

    DATA_SCIENCE = 'DataScience'
    EDA = 'EDA'
    TIME_SERIES = 'TimeSeries'
    GEN_AI = 'GenAI'
    cat_choices = [
        (DATA_SCIENCE, 'Data Science'),
        (EDA, 'Exploratory Data Analysis'),
        (TIME_SERIES, 'Time Series'),
        (GEN_AI, 'Generative AI'),
    ]
    
    category=models.CharField(max_length=50,choices=cat_choices,default=DATA_SCIENCE)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="challenge_owner")
    hints=models.TextField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_on=models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class Points(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user_points")
    points=models.IntegerField(default=0)

    def __str__(self):
        return self.user.username