from django.conf.urls import url 
from django.urls import path
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static

from django.views.static import serve

from . import views
from django.contrib.auth import views as auth_views



urlpatterns = [
   path('login/',views.login_view, name = 'login_view'),
   path('logout/',views.logout_view,name = 'logout_view'),
   path('signup/',views.signup_view,name = 'signup_view'),
   path('password_change/',auth_views.PasswordChangeView.as_view(), name = 'password_change'),
   path('password_change/done/',auth_views.PasswordChangeDoneView.as_view(), name='password_change_done'),
   path('password_reset/',auth_views.PasswordResetView.as_view(),name = 'password_reset'),
   path('password_reset/done/',auth_views.PasswordResetDoneView.as_view(), name = 'password_reset_done'),
   path('password_reset_confirm/<uidb64>/<token>/',auth_views.PasswordResetConfirmView.as_view(),name = 'password_reset_confirm'),
   path('password_reset_confirm/done/',auth_views.PasswordResetCompleteView.as_view(), name = 'password_reset_complete'),


   path('accident_add/',views.accident_add, name = 'accident_add'),
   path('getdata/', views.getdata, name = 'getdata'),
   # path('vehicle_add/',views.vehicle_add, name = 'vehicle_add'),
   # path('driver_add/',views.driver_add, name = 'driver_add'),
   # path('passanger_add/',views.passanger_add, name = 'passanger_add'),
   # path('pedestrian_add/',views.pedestrian_add, name = 'pedestrian_add'),
   # path('add_data/',views.generateView, name = 'add_data'),

   path('',views.index, name = 'index'),

   path('accidents/', views.AccidentListView.as_view() , name = 'accidentslist'),
   path('accident/<pk>/', views.AccidentDetailView.as_view(), name = 'accident-detail' ),
   path('accidents/add/', views.AccidentCreateView.as_view(), name = 'accident-add'),
   path('accidents/add/vehicle/', views.VehicleCreateView.as_view(), name = 'vehicle-add'),
   path('accidents/add/driver/', views.DriverCreateView.as_view(), name = 'driver-add'),
]

if settings.DEBUG:
   urlpatterns += static(settings.STATIC_URL, document_root = settings.STATIC_ROOT)
   urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)