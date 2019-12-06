import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE','TADAV.settings')

import django
django.setup()

import random
from accidents.models import Accident , Vehicle , Driver , Road , Passanger , Pedestrian , Witness

from faker import factory

faker = factory.create()

class AccidentFactory(factory.Factory):
    class Meta:
        model = Accident

    report_no = faker.random_number()
    computer_no = faker.random_number()
    police_office_name = faker.name()


fakegen = Faker()
fakegen.random
fakegen.random.getstate()
# def addAccident():
#     s = Accident()
#     s.accident_location = fakegen.integer()
#     return s

# a = addAccident()
# print(a.accident_location)
