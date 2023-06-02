from django.urls import path

from . import views

urlpatterns = [
    path('chat/', views.chat),
    path('get_tags/', views.get_tags),
    path('create_tag/', views.create_tag),
    path('edit_tag/', views.edit_tag),
    path('delete_tag/', views.delete_tag),
    path('get_text_content/', views.get_text_content),
    path('update_text_content/', views.update_text_content),
    path('', views.index, name='index'),  # 添加这一行
]
