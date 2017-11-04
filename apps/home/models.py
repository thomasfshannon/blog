from __future__ import unicode_literals

# from django.db import models

from wagtail.wagtailcore.models import Page
from wagtail.wagtailadmin.edit_handlers import StreamFieldPanel
from wagtail.wagtailcore.fields import StreamField
from apps.sitewide.models import GeneralBlock


class HomePage(Page):
    body = StreamField(GeneralBlock())

    content_panels = Page.content_panels + [
        StreamFieldPanel('body', classname="full"),
    ]


class ContentPage(Page):
    body = StreamField(GeneralBlock())

    content_panels = Page.content_panels + [
        StreamFieldPanel('body', classname="full"),
    ]
