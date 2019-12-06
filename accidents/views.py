from django.shortcuts import render , redirect
from django.contrib.auth import login ,authenticate ,logout
from django.contrib.auth.forms import UserCreationForm
from django.contrib.admin.views.decorators import staff_member_required 
from django.contrib.auth.decorators import login_required
from django.views.generic.edit import FormView
from accidents.forms import UserLoginForm ,SignUpForm #, AccidentForm , DriverForm, PassangerForm , PedestrianForm, VehicleForm
from django.views.generic.edit import CreateView
from django.http import HttpResponse
from .models import Accident , Vehicle , Driver , Passanger , Pedestrian , Witness , Road
from . import raycasting
import datetime

from django.views.generic.list import ListView
from django.views.generic.detail import DetailView
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
def index(request):
    return render(request,'accidents/index.html')
    
@staff_member_required
def signup_view(request):
    form = SignUpForm(request.POST)
    
    if request.method =='POST': 
        if form.is_valid():
            form.save()
            return redirect('/')
        else:
            form = SignUpForm()

    context = {
        'form':form,
    }
    return render(request,'authentications/signup.html',context)


def login_view(request):
    next = request.GET.get('next')  
    form = UserLoginForm(request.POST or None)
    if form.is_valid():
        username = form.cleaned_data.get('username')
        password = form.cleaned_data.get('password')
        user = authenticate(username=username , password = password)
        login(request,user)
        if next:
            return redirect(next)
        return redirect('/')

    context = {
        'form':form,
    }
    return render(request,"authentications/login.html",context)
        

def logout_view(request):
    logout(request)
    return redirect('/')



class AccidentListView(ListView):
    template_name = 'accidents/showdata.html'
    model = Accident
    context_object_name = 'accidents'

    def get_queryset(self):
        return Accident.objects.all()

class AccidentDetailView(DetailView):
    model = Accident
    template_name = 'accidents/accidentdetail.html'



class AccidentCreateView(CreateView):
    model = Accident
    fields = '__all__'
    template_name = 'accidents/accident_form.html'

class VehicleCreateView(CreateView):
    model = Vehicle
    fields = '__all__'
    template_name = 'accidents/vehicle_form.html'

class DriverCreateView(CreateView):
    model = Driver
    fields = '__all__'
    template_name = 'accidents/driver_form.html'





@login_required
@csrf_exempt
def accident_add(request):
    if request.method == 'POST':
        
        data = request.POST
        day = int(data['day'])
        month = int(data['month']) +1
        year = int(data['year'])
        hour = int(data['hour'])
        minute = int(data['minute'])
        print(data['day_of_week'])
        accident_date = datetime.datetime(year , month , day ,hour , minute)
        print(accident_date)
        print(data)
        no_of_veh = int(data['no_of_vehicle_involved'])
        no_of_passang = int(data['no_of_passanger_involved'])
        no_of_driver = data['no_of_driver_involved']
        no_of_pedest = int(data['no_of_pedestrian_involved'])

        ret = Accident.objects.create(
            report_no = data['report_no'],
            police_office_name =data['police_office_name'],
            police_office_province = int(data['police_office_province']),
            police_office_district =data['police_office_district'],
            no_of_vehicle_involved =int(data['no_of_vehicle_involved']),
            no_of_driver_involved =int(data['no_of_driver_involved']),
            no_of_passanger_involved = int(data['no_of_passanger_involved']),
            no_of_pedestrian_involved =int(data['no_of_pedestrian_involved']),
            accident_seriousness =int(data['accident_seriousness']),
            accident_date_and_time = datetime.datetime(year , month , day, hour , minute),
            day_of_week =int(data['day_of_week']),
            # time =data['time'],
            vehicle_control =int(data['vehicle_control']),
            collision_type =int(data['collision_type']),
            weather_condition =int(data['weather_condition']),
            lighting_condition =int(data['lighting_condition']),
            hit_and_run =bool(data['hit_and_run']=='0'),
            accident_place_name =data['accident_place_name'],
            accident_location =data['accident_location'],
            accident_location_latitude =float(data['accident_location_latitude']),
            accident_location_longitude =float(data['accident_location_longitude']),
            road_number =int(data['road_number']),
            road_length =int(data['road_length']),
            police_info =data['police_info'],
            investigation_officers_name =data['investigation_officers_name'],
            investigation_officers_name_standard =int(data['investigation_officers_name_standard']),
            reinvestigation_officers_name=data['reinvestigation_officers_name'],
            reinvestigation_officers_name_standard =int(data['reinvestigation_officers_name_standard']),
            noted_action =data['noted_action']
        )
        s = 0
        for x in range(no_of_veh):
            veh = Vehicle.objects.create(
                accident = ret ,
                vehicle_registration_no =int( data['vehicle_registration_no'+str(s)]),
                vehicle_owner_name = data['vehicle_owner_name'+str(s)],
                vehicle_owner_address = data['vehicle_owner_address'+str(s)],
                third_party_insurance =bool( data['third_party_insurance'+str(s)]=='0'),
                name_of_vehicle_company = data['name_of_vehicle_company'+str(s)],
                vehicle_type =int( data['vehicle_type'+str(s)]),
                vehicle_action = int(data['vehicle_action'+str(s)]),
                load_condition = int(data['load_condition'+str(s)]),
                mistake = int(data['mistake'+str(s)]),
                vehicle_loss = int(data['vehicle_loss'+str(s)]),
                owner_type = int(data['owner_type'+str(s)])
            )

            dri = Driver.objects.create(
                vehicle = veh ,
                driver_name = data['driver_name'+str(s)],
                driver_address = data['driver_address'+str(s)],
                driver_licence_no = data['driver_licence_no'+str(s)],
                report_taking_office = data['report_taking_office'+str(s)],
                driver_sex = bool(data['driver_sex'+str(s)]=='0'),
                driver_age = int(data['driver_age'+str(s)]),
                driver_fault = int(data['driver_fault'+str(s)]),
                driving_licence_type = int(data['driving_licence_type'+str(s)]),
                driver_injury_type = int(data['driver_injury_type'+str(s)]),
                alcohol_used = int(data['alcohol_used'+str(s)]),
                seatbelt_or_helmet_used =bool( data['seatbelt_or_helmet_used'+str(s)] == '0')
            )
            s= s+1

        
        s = 0
        for x in range(no_of_passang):

            pas = Passanger.objects.create(
                accident = ret,
                passanger_name = data['passanger_name'+str(s)],
                passanger_address = data['passanger_address'+str(s)],
                vehicle_no = int(data['vehicle_no'+str(s)]),
                passanger_sex = bool(data['passanger_sex'+str(s)]=='0'),
                passanger_age = int(data['passanger_age'+str(s)]),
                injury_seriousness = int(data['injury_seriousness'+str(s)]),
                passanger_condition = int(data['passanger_condition'+str(s)]),
                passanger_action = int(data['passanger_action'+str(s)]),
                passanger_seatbelt_or_helmet_used = bool(data['passanger_seatbelt_or_helmet_used'+str(s)]=='0')
            )
            s= s+1

        s=0
        for x in range(no_of_pedest):    
            ped = Pedestrian.objects.create(
                accident = ret,
                pedestrian_name = data['pedestrian_name'+str(s)],
                pedestrian_address = data['pedestrian_address'+str(s)],
                pedestrian_sex = bool(data['pedestrian_sex'+str(s)]=='0'),
                pedestrian_age = int(data['pedestrian_age'+str(s)]),
                pedestrian_injury_seriousness = int(data['pedestrian_injury_seriousness'+str(s)]),
                pedestrian_condition = int(data['pedestrian_condition'+str(s)]),
                pedestrian_action = int(data['pedestrian_action'+str(s)]),
                pedestrian_alcohol_used =int( data['pedestrian_alcohol_used'+str(s)])
            )
            s= s+1

        road = Road.objects.create(
            accident = ret ,
            road_runway_type = int(data['road_runway_type']),
            intersection_type = int(data['intersection_type']),
            road_description = int(data['road_description']),
            road_surface = int(data['road_surface']),
            road_condition =int( data['road_condition']),
            surface_condition = int(data['surface_condition']),
            road_construction = bool(data['road_construction']=='0')
        )

        print(road)

        # wit = Witness.objects.create(
        #     accident = ret ,
        #     witness_name = data['witness_name']
        # )
    return render(request,'accidents/abcd.html')

    


def getdata(request):
    accident_list  = []
    
    for data in Accident.objects.all():
        accident_info = []
        vehicle_and_driver_info  = []
        passanger_info = []
        pedestrian_info = []
        witness_info = []
        road_info = []

        accident_detail = [
            data.report_no,
            data.police_office_name,
            data.police_office_province,
            data.police_office_district,
            data.no_of_vehicle_involved,
            data.no_of_driver_involved,
            data.no_of_passanger_involved,
            data.no_of_pedestrian_involved,
            data.accident_seriousness,
            data.accident_date_and_time,
            data.day_of_week,
            data.vehicle_control,
            data.collision_type,
            data.weather_condition,
            data.lighting_condition,
            data.hit_and_run,
            data.accident_place_name,
            data.accident_location,
            data.accident_location_latitude,
            data.accident_location_longitude,
            data.road_number,
            data.road_length,
            data.police_info,
            data.investigation_officers_name,
            data.investigation_officers_name_standard,
            data.reinvestigation_officers_name,
            data.reinvestigation_officers_name_standard,
            data.noted_action
        ]

        accident_info.append(accident_detail)

        for vehicle_data in Vehicle.objects.filter(accident = data):
            driver_data = Driver.objects.get(vehicle = vehicle_data)

            vehicle_and_driver_data  = [
                vehicle_data.vehicle_registration_no,
                vehicle_data.vehicle_owner_name,
                vehicle_data.vehicle_owner_address,
                vehicle_data.third_party_insurance,
                vehicle_data.name_of_vehicle_company,
                vehicle_data.vehicle_type,
                vehicle_data.vehicle_action,
                vehicle_data.load_condition,
                vehicle_data.mistake,
                vehicle_data.vehicle_loss,
                vehicle_data.owner_type,
                driver_data.driver_name,
                driver_data.driver_address,
                driver_data.driver_licence_no,
                driver_data.report_taking_office,
                driver_data.driver_sex,
                driver_data.driver_age,
                driver_data.driver_fault,
                driver_data.driving_licence_type,
                driver_data.driver_injury_type,
                driver_data.alcohol_used,
                driver_data.seatbelt_or_helmet_used
            ]
            vehicle_and_driver_info.append(vehicle_and_driver_data)
            
        accident_info.append(vehicle_and_driver_info)
        
        road_data = Road.objects.get(accident = data)
        road_info = [
            road_data.road_runway_type,
            road_data.intersection_type,
            road_data.road_description,
            road_data.road_surface,
            road_data.road_condition,
            road_data.surface_condition,
            road_data.road_construction
            
        ]

        accident_info.append(road_info)

        for passanger_data in Passanger.objects.filter(accident = data):
            passanger_detail = [
                passanger_data.passanger_name,
                passanger_data.passanger_address,
                passanger_data.vehicle_no,
                passanger_data.passanger_sex,
                passanger_data.passanger_age,
                passanger_data.injury_seriousness,
                passanger_data.passanger_condition,
                passanger_data.passanger_action,
                passanger_data.passanger_seatbelt_or_helmet_used
                
            ]
            passanger_info.append(passanger_detail)

        accident_info.append(passanger_info)

        for pedestrian_data in Pedestrian.objects.filter(accident = data):
            pedestrian_detail = [
                pedestrian_data.pedestrian_name,
                pedestrian_data.pedestrian_address,
                pedestrian_data.pedestrian_sex,
                pedestrian_data.pedestrian_age,
                pedestrian_data.pedestrian_injury_seriousness,
                pedestrian_data.pedestrian_condition,
                pedestrian_data.pedestrian_action,
                pedestrian_data.pedestrian_alcohol_used
                
            ]
            pedestrian_info.append(pedestrian_detail)

        accident_info.append(pedestrian_info)
        for witness_data in Witness.objects.filter(accident = data):
            witness_info.append(witness_data.witness_name)

        accident_info.append(witness_info)

        accident_list.append(accident_info)

    print(accident_list)
            
            
        

    
    # data = list(Accident.objects.all())

    # for i in range:
    # print(data[0].accident_location_latitude)

# @login_required
# def vehicle_add(request):
#     if request.method == 'POST':
#         data = request.POST
#         ret = Vehicle
#     form = VehicleForm(request.POST)
#     if request.method == 'POST':
#         if form.is_valid():
#             form.save(commit=False)
#             # post.user = request.user
#             # post.save()
#             return redirect('/')
#         else:
#             form = VehicleForm()
        
#     context = {
#         'form':form,
#     }
#     return render(request,'authentications/accident.html',context)

# @login_required
# def driver_add(request):
#     form = DriverForm(request.POST)
#     if request.method == 'POST':
#         if form.is_valid():
#             form.save(commit=False)
#             # post.user = request.user
#             # post.save()
#             return redirect('/')
#         else:
#             form = DriverForm()
        
#     context = {
#         'form':form,
#     }
#     return render(request,'authentications/accident.html',context)

# @login_required
# def passanger_add(request):
#     form = PassangerForm(request.POST)
#     if request.method == 'POST':
#         if form.is_valid():
#             form.save(commit=False)
#             # post.user = request.user
#             # post.save()
#             return redirect('/')
#         else:
#             form = PassangerForm()
        
#     context = {
#         'form':form,
#     }
#     return render(request,'authentications/accident.html',context)

# @login_required
# def pedestrian_add(request):
#     form = PedestrianForm(request.POST)
#     if request.method == 'POST':
#         if form.is_valid():
#             form.save(commit=False)
#             # post.user = request.user
#             # post.save()
#             return redirect('/')
#         else:
#             form = PedestrianForm()
        
#     context = {
#         'form':form,
#     }
#     return render(request,'authentications/accident.html',context)


# def generateView(request):
#     accident_form = AccidentForm(request.POST)
#     vehicle_form = VehicleForm(request.POST)
#     driver_form = DriverForm(request.POST)
#     passanger_form = PassangerForm(request.POST)
#     pedestrian_form = PedestrianForm(request.POST)

#     if request.method == 'POST':
#         if accident_form.is_valid() and vehicle_form.is_valid() and driver_form.is_valid() and passanger_form.is_valid() and pedestrian_form.is_valid():
#             accident_form.save()
#             vehicle_form.save()
#             driver_form.save()
#             passanger_form.save()
#             pedestrian_form.save()

#         else:
#             accident_form = AccidentForm()
#             vehicle_form = VehicleForm()
#             driver_form = DriverForm()
#             passanger_form = PassangerForm()
#             pedestrian_form = PedestrianForm()
    
#     context = {
#         'accident_form':accident_form,
#         'vehicle_form' : vehicle_form,
#         'driver_form' : driver_form,
#         'passanger_form': passanger_form,
#         'pedestrian_form': pedestrian_form
#     }
#     return render(request,'authentications/accident.html',context)



#Raycasting Functions

# def polygon_vertex(request):
#     if request.method == 'POST':
#         accident_list = Accidents
        