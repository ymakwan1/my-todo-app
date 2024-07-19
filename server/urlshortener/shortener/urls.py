from django.urls import path
from . import views

urlpatterns = [
    path('shorten/', views.shorten_url, name='shorten_url'),
    path('analytics/', views.get_analytics, name='get_analytics'),
    path('urls/', views.get_all_urls, name='get_all_urls'),
    path('urls/<str:short_code>/', views.get_url_details, name='get_url_details'),
    path('<str:short_code>/', views.redirect_url, name='redirect_url'),
]
