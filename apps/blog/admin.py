from django.contrib import admin
from django.shortcuts import redirect

# Register your models here.
from django.http import HttpResponse
from wagtail.wagtailcore import hooks

@hooks.register('after_edit_page')
def do_after_page_edit(request, page):
    return redirect(request.path)
