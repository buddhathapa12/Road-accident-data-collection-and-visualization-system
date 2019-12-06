Delete these
	0001_inital.py
 	__pycache__ 


drop database and recreate trafficmaster
rename 0002_auto_.....py to 0002_auto_.....py.t
do regular:
	python manage.py migrate
	python manage.py makemigrations

then rename
	0002_auto_.....py.t BACK TO 0002_auto_.....py
then do:
	python manage.py makemigrations
	500 accident data should be added to the database.

if any problem comes. contact me....