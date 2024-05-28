from django.urls import path
from . import views

urlpatterns = [
    path("/view/points/", views.PointList.as_view(), name="view_points"),
    path("CTF/view/", views.ChallengeList.as_view(), name="list_challenges"),
    path("CTF/create/", views.ChallengeCreate.as_view(), name="create_challenges"),
    path("CTF/delete/<pk>", views.ChallengeDelete.as_view(), name="delete_challenges"),
]
