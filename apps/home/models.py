from __future__ import unicode_literals

# from django.db import models

from wagtail.wagtailcore.models import Page
from wagtail.wagtailadmin.edit_handlers import StreamFieldPanel
from wagtail.wagtailcore.fields import StreamField
from apps.sitewide.models import GeneralBlock
from apps.blog.models import BlogIndexPage


class HomePage(Page):
    body = StreamField(GeneralBlock())

    def blog(self):
        blog = BlogIndexPage.objects.first()
        return blog.get_children().live().order_by('-first_published_at')[:3]

    content_panels = Page.content_panels + [
        StreamFieldPanel('body'),
    ]

    def get_context(self, request):
        context = super(HomePage, self).get_context(request)
        context['blog'] = self.blog()
        return context


class ContentPage(Page):
    body = StreamField(GeneralBlock())

    content_panels = Page.content_panels + [
        StreamFieldPanel('body'),
    ]


class AboutPage(Page):
    pass


class ContactPage(Page):
    pass


class ProjectPage(Page):
    pass
