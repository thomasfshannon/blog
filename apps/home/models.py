from __future__ import unicode_literals

# from django.db import models

from wagtail.wagtailcore.models import Page
from wagtail.wagtailadmin.edit_handlers import StreamFieldPanel
from wagtail.wagtailcore.fields import StreamField
from apps.sitewide.models import GeneralBlock
from apps.blog.models import BlogIndexPage
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

class HomePage(Page):
    body = StreamField(GeneralBlock())

    def blog(self, request):
        blog = BlogIndexPage.objects.first()
        blog_resource = blog.get_children().live().order_by('-first_published_at')
        paginator = Paginator(blog_resource, 5)
        page = request.GET.get('page')
        try:
            resources = paginator.page(page)
        except PageNotAnInteger:
            # If page is not an integer, deliver first page.
            resources = paginator.page(1)
        except EmptyPage:
            # If page is out of range (e.g. 9999), deliver last page of results.
            resources = paginator.page(paginator.num_pages)

        # make the variable 'resources' available on the template
        return resources

    content_panels = Page.content_panels + [
        StreamFieldPanel('body'),
    ]

    def get_context(self, request):
        context = super(HomePage, self).get_context(request)
        context['blog_posts'] = self.blog(request)
        return context


class ContentPage(Page):
    body = StreamField(GeneralBlock())

    content_panels = Page.content_panels + [
        StreamFieldPanel('body'),
    ]


class AboutPage(Page):
    body = StreamField(GeneralBlock(), null=True)

    content_panels = Page.content_panels + [
        StreamFieldPanel('body'),
    ]


class ContactPage(Page):
    pass


class ProjectPage(Page):
    pass
