from django.contrib import admin

from .models import Accident
from .models import Vehicle
from .models import Driver
from .models import Road
from .models import Passanger
from .models import Pedestrian
from .models import Witness

# Register your models here.

class AccidentAdmin(admin.ModelAdmin):
    pass
admin.site.register(Accident,AccidentAdmin)

class VehicleAdmin(admin.ModelAdmin):
    pass
admin.site.register(Vehicle,VehicleAdmin)

class DriverAdmin(admin.ModelAdmin):
    pass
admin.site.register(Driver,DriverAdmin)

class RoadAdmin(admin.ModelAdmin):
    pass
admin.site.register(Road,RoadAdmin)

class PassangerAdmin(admin.ModelAdmin):
    pass
admin.site.register(Passanger,PassangerAdmin)

class PedestrianAdmin(admin.ModelAdmin):
    pass
admin.site.register(Pedestrian,PedestrianAdmin)

class WitnessAdmin(admin.ModelAdmin):
    pass
admin.site.register(Witness,WitnessAdmin)