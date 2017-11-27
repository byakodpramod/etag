from django.contrib import admin
from .models import AccessoryData,ReaderLocation,Readers,TagAnimal,TagReads,Tags
admin.site.register(AccessoryData)
admin.site.register(ReaderLocation)
admin.site.register(Readers)
admin.site.register(TagAnimal)
admin.site.register(TagReads)
admin.site.register(Tags)
# Register your models here.
