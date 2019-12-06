from django.db import models
from django.conf import settings
from django.urls import reverse
from django.contrib.auth.models import User
import datetime
# Create your models here.
class Accident(models.Model):
    report_no = models.IntegerField(null = False, primary_key = True)
    police_office_name = models.CharField(max_length = 150)

    PROVINCE = (
        (0,'province 1'),
        (1,'province 2'),
        (2,'province 3'),
        (3,'Gandaki'),
        (4,'province 5'),
        (5,'KarnaSli'),
        (6,'Sudurpashchim'),
    )
    police_office_province = models.IntegerField(choices = PROVINCE)

    police_office_district = models.CharField(max_length = 100)
    no_of_vehicle_involved = models.IntegerField(null = False)
    no_of_driver_involved = models.IntegerField(null=False)
    no_of_passanger_involved = models.IntegerField()
    no_of_pedestrian_involved = models.IntegerField()
    
    ACCIDENT_SERIOUSNESS = [
        (0,'death'),
        (1,'serious injury'),
        (2,'simple injury'),
        (3,'loss only'),
    ]
    accident_seriousness = models.IntegerField( choices = ACCIDENT_SERIOUSNESS)

    accident_date_and_time = models.DateField(default = datetime.date.today)
    
    DAY_OF_WEEK = [
        (0,'sunday'),
        (1,'monday'),
        (2,'tuesday'),
        (3,'wednesday'),
        (4,'thursday'),
        (5,'friday'),
        (6,'saturday'),
    ]
    day_of_week = models.IntegerField(choices=DAY_OF_WEEK , null = True)

    #time = models.TimeField(  blank=True)

    

    VEHICLE_CONTROL = [
        (0,'yes '),
        (1,'spot map only'),
        (2,'zebra crossing'),
        (3,'police involved'),
        (4,'traffic symbol'),
        (5,'stop signal'),
        (6,'wait , look , go signal'),
        (7,'others'),
    ]
    vehicle_control = models.IntegerField(choices =VEHICLE_CONTROL)

    COLLISION_TYPE = [
        (0,'face to face'),
        (1,'face and back'),
        (2,'90 degree angle'),
        (3,'sideways collision'),
        (4,'upside down , unable to move'),
        (5,'collide with anythings inside road '),
        (6,'collide with anythings outside road '),
        (7,'collide with parked vehicle'),
        (8,'collide with pedestrian'),
        (9,'collide with animals'),
        (10,'others'),
    ]
    collision_type = models.IntegerField(choices = COLLISION_TYPE)

    

    WEATHER_CONDITION = [
        (0,'clean weather'),
        (1,'rainy'),
        (2,'foggy'),
        (3,'smoke and dust'),
    ]
    weather_condition = models.IntegerField(choices= WEATHER_CONDITION)


    LIGHTING_CONDITION = [
        (0,'day'),
        (1,'light on'),
        (2,'light off'),
    ]
    lighting_condition = models.IntegerField(choices = LIGHTING_CONDITION)

    
    hit_and_run = models.BooleanField(null = False)
    accident_place_name = models.CharField(max_length = 100)
    accident_location = models.CharField(max_length = 100)

    accident_location_latitude = models.DecimalField(max_digits=15 , decimal_places= 5)
    accident_location_longitude = models.DecimalField(max_digits=15 , decimal_places= 5)
    
    road_number = models.IntegerField()
    road_length = models.IntegerField()
    # hundred_meters = models.BooleanField(null = False)

    # node_map = models.IntegerField(null = True)
    # node_no = models.IntegerField(null = True)
    # node_2 = models.IntegerField(null = True)

   # accident_spot_show_map = models.ImageField(upload_to=None, height_field=None, width_field=None, max_length=100)
  #  accident_spot_measured_map = models.ImageField(upload_to=None, height_field=None, width_field=None, max_length=100)
    police_info = models.TextField()
    investigation_officers_name = models.CharField(max_length = 100)
    investigation_officers_name_standard = models.IntegerField()

    reinvestigation_officers_name= models.CharField(max_length =100)
    reinvestigation_officers_name_standard = models.IntegerField()
    noted_action = models.CharField(max_length = 100)

    def get_absolute_url(self):
        return reverse('accident-detail', kwargs = {'pk': self.pk})

    def __str__(self):
        return self.accident_place_name +" report no : "+ str(self.report_no)
    
    def yearacci(self):
        return self.accident_date_and_time.strftime('%Y')

    def monthacci(self):
        return self.accident_date_and_time.strftime('%m')

    def dayacci(self):
        return self.accident_date_and_time.strftime('%d')

    def houracci(self):
        return self.accident_date_and_time.strftime('%H')

    def minacci(self):
        return self.accident_date_and_time.strftime('%M')


class Vehicle(models.Model):
    vehicle_registration_no = models.IntegerField(null=False, primary_key=True )
    accident = models.ForeignKey(Accident, on_delete = models.CASCADE)
    
    vehicle_owner_name = models.CharField(max_length = 100)
    vehicle_owner_address = models.CharField(max_length = 100)
    third_party_insurance = models.BooleanField(null = False)
    name_of_vehicle_company = models.CharField(max_length = 100)

    VEHICLE_TYPE = [
        (0,'bicycle'),
        (1,'Riksaw'),
        (2,'Motorcycle'),
        (3,'Autoriksaw'),
        (4,'Car'),
        (5,'Minibus'),
        (6,'Bus'),
        (7,'Truck'),
        (8,'others'),
    ]
    vehicle_type = models.IntegerField(choices = VEHICLE_TYPE)

    VEHICLE_ACTION = [
        (0,'left turn'),
        (1,'right turn'),
        (2,'U turn'),
        (3,'cross traffic'),
        (4,'meeting action'),
        (5,'departure action'),
        (6,'overtack action'),
        (7,'move ahead'),
        (8,'move backward'),
        (9,'instant start'),
        (10,'instant stop'),
        (11,'parking outside road'),
        (12,'parking inside road'),
        (13,'others'),
    ]
    vehicle_action = models.IntegerField(choices = VEHICLE_ACTION)

    LOAD_CONDITION = [
        (0,'correct load according to law'),
        (1,'extra load'),
        (2,'insecure load'),
        (3,'load come outside vehicle'),
        (4,'others improper load'),
    ]
    load_condition = models.IntegerField(choices = LOAD_CONDITION)

    MISTAKE = [
        (0,'No errors'),
        (1,'Brakes'),
        (2,'starring'),
        (3,'Tyres'),
        (4,'Vehicle lights'),
        (5,'More than one errors in vehicle'),
        (6,'Others'),
    ]
    mistake = models.IntegerField(choices = MISTAKE)

    VEHICLE_LOSS = [
        (0,'No loss'),
        (1,'Front'),
        (2,'rear end'),
        (3,'Right side '),
        (4,'Left side'),
        (5,'Roof'),
        (6,'More than one losses'),
        (7,'Others'),
    ]
    vehicle_loss = models.IntegerField(choices = VEHICLE_LOSS)

    OWNER_TYPE = [
        (0,'Government worker'),
        (1,'Institutional'),
        (2,'Political'),
        (3,'Private'),
        (4,'Rent'),
        (5,'Police'),
        (6,'Army'),
    ]
    owner_type = models.IntegerField(choices = OWNER_TYPE)

    def get_absolute_url(self):
        return reverse('accident-detail', kwargs = {'pk': self.pk})

    def __str__(self):
        return str(self.vehicle_registration_no)

class Driver(models.Model):
    vehicle = models.OneToOneField(Vehicle, on_delete = models.CASCADE)
    driver_name = models.CharField(max_length = 100 , null = False)
    driver_address = models.CharField(max_length = 100)
    driver_licence_no = models.CharField(max_length = 100)
    report_taking_office = models.CharField(max_length = 100)

    SEX = [
        (0,'male'),
        (1,'female'),
        (2,'other'),
    ]
    driver_sex = models.IntegerField(choices = SEX)

    driver_age = models.IntegerField(null= False)

    DRIVER_FAULT = [
        (0,'No fault'),
        (1,'No concentration'),
        (2,'Too fast'),
        (3,'Too close'),
        (4,'No signal'),
        (5,'Wrong method for overtake'),
        (6,'wrong directional turn'),
        (7,'Tired or Sleepy'),
        (8,'others'),
    ]
    driver_fault = models.IntegerField(choices = DRIVER_FAULT)

    DRIVING_LICENCE_TYPE = [
        (0,'Full Driving Licence'),
        (1,'Trial Period'),
        (2,'Temporary Driving Licence'),
        (3,'No Premission'),
    ]
    driving_licence_type = models.IntegerField(choices = DRIVING_LICENCE_TYPE)

    DRIVER_INJURY_TYPE = [
        (0,'Deathable'),
        (1,'Serious injury'),
        (2,'Normal injury'),
        (3,'No injury'),
    ]
    driver_injury_type = models.IntegerField(choices = DRIVER_INJURY_TYPE)

    ALCOHOL_USED = [
        (0,'No suspect'),
        (1,'Suspectable'),
    ]
    alcohol_used = models.IntegerField(choices = ALCOHOL_USED)

    seatbelt_or_helmet_used = models.BooleanField(null = False)

    def __str__(self):
        if self.driver_name == None :
            return "Error-DRIVER NAME IS NULL"
        return self.driver_name

class Road(models.Model):
    accident = models.OneToOneField(Accident, on_delete = models.CASCADE)
    ROAD_RUNWAY_TYPE = [
        (0,'one way'),
        (1,'two way'),
    ]
    road_runway_type = models.IntegerField(choices = ROAD_RUNWAY_TYPE)
    #Around 20 meter


    INTERSECTION_TYPE = [
        (0,'no  junction'),
        (1,'+ intersection'),
        (2,'T intersection'),
        (3,'Z intersection'),
        (4,'Y intersection'),
        (5,'circular intersection'),
        (6,'others'),
    ]
    intersection_type = models.IntegerField(choices = INTERSECTION_TYPE)

    ROAD_DESCRIPTION = [
        (0,'straight and plane'),
        (1,'turns only'),
        (2,'ups and downs'),
        (3,'turns and ups and downs'),
        (4,'Bridge'),
    ]
    road_description = models.IntegerField(choices = ROAD_DESCRIPTION)

    ROAD_SURFACE = [
        (0,'Pitched'),
        (1,'Gravel'),
        (2,'Soil'),
    ]
    road_surface = models.IntegerField(choices = ROAD_SURFACE)

    ROAD_CONDITION = [
        (0,'Good'),
        (1,'Bad'),
    ]
    road_condition = models.IntegerField(choices = ROAD_CONDITION)

    SURFACE_CONDITION = [
        (0,'Dry'),
        (1,'wet'),
        (2,'mud'),
        (3,'collected water'),
    ]
    surface_condition = models.IntegerField(choices = SURFACE_CONDITION)

    # ROAD_CONSTRUCTION = [
    #     (1,'yes'),
    #     (2,'No'),
    # ]
    road_construction = models.BooleanField(null = False)

    def get_absolute_url(self):
        return reverse('accident-detail', kwargs = {'pk': self.pk})

    def __str__(self):
        return str(self.road_runway_type)

class Passanger(models.Model):
    accident = models.ForeignKey(Accident, on_delete = models.CASCADE)
    passanger_name = models.CharField(max_length = 100)
    passanger_address = models.CharField(max_length = 100)
    vehicle_no = models.IntegerField()

    SEX = [
        (0,'male'),
        (1,'female'),
        (2,'other'),
    ]
    passanger_sex = models.IntegerField(choices = SEX)

    passanger_age = models.IntegerField(null = False)

    INJURY_SERIOUSNESS = [
        (0,'death'),
        (1,'serious injury'),
        (2,'simple injury'),
    ]
    injury_seriousness = models.IntegerField( choices = INJURY_SERIOUSNESS)

    PASSANGER_CONDITION = [
        (0,'front seat'),
        (1,'back seat'),
        (2,'bicycle/motorcycle passanger'),
        (3,'Bus Passanger'),
        (4,'sitting outside'),
        (5,'Hangging outside'),
    ]
    passanger_condition = models.IntegerField(choices = PASSANGER_CONDITION)

    PASSANGER_ACTION = [
        (0,'No involvement'),
        (1,'Going in'),
        (2,'Coming out'),
        (3,'Fallen'),
        (4,'others',)
    ]
    passanger_action = models.IntegerField(choices = PASSANGER_ACTION)

    passanger_seatbelt_or_helmet_used = models.BooleanField(null = False)

    def __str__(self):
        return self.passanger_name

class Pedestrian(models.Model):
    accident = models.ForeignKey(Accident, on_delete = models.CASCADE)
    pedestrian_name = models.CharField(max_length = 100)
    pedestrian_address = models.CharField(max_length = 100)

    SEX = [
        (0,'male'),
        (1,'female'),
        (2,'other'),
    ]
    pedestrian_sex = models.IntegerField(choices = SEX)

    pedestrian_age = models.IntegerField()

    INJURY_SERIOUSNESS = [
        (0,'death'),
        (1,'serious injury'),
        (2,'simple injury'),
    ]
    pedestrian_injury_seriousness = models.IntegerField( choices = INJURY_SERIOUSNESS)

    PEDESTRIAN_CONDITION =[
        (0,'At zebra crossing'),
        (1,'50 meter inside zebra crossing'),
        (2,'at middle of the road'),
        (3,'outside scene middle of road'),
        (4,'At footpath'),
    ]    
    pedestrian_condition = models.IntegerField(choices= PEDESTRIAN_CONDITION)

    PEDESTRIAN_ACTION = [
        (0,'No involvement'),
        (1,'Road Crossing'),
        (2,'Walking at middle of road'),
        (3,'Walking at corner of road'),
        (4,'Playing at road'),
        (5,'Playing at footpath'),
    ]
    pedestrian_action = models.IntegerField(choices= PEDESTRIAN_ACTION)

    ALCOHOL_USED = [
        (0,'No suspect'),
        (1,'Suspectable'),
    ]
    pedestrian_alcohol_used = models.IntegerField(choices = ALCOHOL_USED)

    def __str__(self):
        return self.pedestrian_name

class Witness(models.Model):
    accident = models.ForeignKey(Accident, on_delete = models.CASCADE)
    witness_name = models.CharField(max_length = 500)
    
    def __str__(self):
        return self.witness_name