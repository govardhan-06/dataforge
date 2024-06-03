from django.urls import path
from . import views

urlpatterns = [
    path("current/user/", views.CurrentUserView.as_view(), name="current_user"),
    path("current/points/", views.PointList.as_view(), name="view_points"),
    path("update/points/", views.PointsViewUpdate.as_view(), name="update_points"),
    path("CTF/view/", views.ChallengeList.as_view(), name="list_challenges"),
    path("CTF/create/", views.ChallengeCreate.as_view(), name="create_challenges"),
    path("CTF/delete/<pk>", views.ChallengeDelete.as_view(), name="delete_challenges"),
    path("CTF/update/<pk>", views.ChallengeUpdate.as_view(), name="update_challenges"),
]
