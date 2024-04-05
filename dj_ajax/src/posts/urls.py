from django.urls import path 
from .views import (
    por_list_and_create,
)

app_name = 'posts'

urlpatterns = [
    path('', por_list_and_create, name='main-board'),
]