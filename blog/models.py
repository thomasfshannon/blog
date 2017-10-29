from django import forms
from django.db import models

from modelcluster.fields import ParentalKey, ParentalManyToManyField
from modelcluster.tags import ClusterTaggableManager
from taggit.models import TaggedItemBase

from wagtail.wagtailcore.blocks import RichTextBlock, RawHTMLBlock, StructBlock, ChoiceBlock, StreamBlock
from wagtail.wagtailimages.blocks import ImageChooserBlock
from wagtail.wagtailcore.models import Page, Orderable
from wagtail.wagtailcore.fields import RichTextField, StreamField
from wagtail.wagtailadmin.edit_handlers import FieldPanel, InlinePanel, MultiFieldPanel, StreamFieldPanel
from wagtail.wagtailimages.edit_handlers import ImageChooserPanel
from wagtail.wagtailsearch import index
from wagtail.wagtailsnippets.models import register_snippet


@register_snippet
class BlogCategory(models.Model):
    name = models.CharField(max_length=255)
    icon = models.ForeignKey(
        'wagtailimages.Image', null=True, blank=True,
        on_delete=models.SET_NULL, related_name='+'
    )

    panels = [
        FieldPanel('name'),
        ImageChooserPanel('icon'),
    ]

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'blog categories'


class BlogIndexPage(Page):
    intro = RichTextField(blank=True)

    content_panels = Page.content_panels + [
        FieldPanel('intro', classname="full")
    ]

    def get_context(self, request):
        # Update context to include only published posts, ordered by reverse-chron
        context = super(BlogIndexPage, self).get_context(request)
        blogpages = self.get_children().live().order_by('-first_published_at')
        context['blogpages'] = blogpages
        return context

class BlogPageTag(TaggedItemBase):
    content_object = ParentalKey('BlogPage', related_name='tagged_items')


class BlogTagIndexPage(Page):

    def get_context(self, request):

        # Filter by tag
        tag = request.GET.get('tag')
        blogpages = BlogPage.objects.filter(tags__name=tag)

        # Update template context
        context = super(BlogTagIndexPage, self).get_context(request)
        context['blogpages'] = blogpages
        return context

class CodeBlock(StructBlock):
    language_choices = [
        ('javascript', 'Javascript'),
        ('python', 'Python'),
        ('html', 'HTML'),
        ('css', 'CSS'),
        ('c', 'C')
    ]
    language = ChoiceBlock(choices = language_choices)
    code = RawHTMLBlock()
    # language = ChoiceBlock(choices = language_choices)
    # code = RawHTMLBlock()


class RawCodeBlock(StructBlock):
    code = RawHTMLBlock()


class ImageBlock(StructBlock):
    image = ImageChooserBlock()
    caption = RichTextBlock(max_length=255, required=False)

    panels = [ 
        ImageChooserPanel('image'),
        FieldPanel('caption'),
    ]


class BlogBlock(StreamBlock):
    content = RichTextBlock(icon="pilcrow")
    code = CodeBlock(icon='code')
    raw_code = RawCodeBlock(icon='placeholder')
    image = ImageBlock(icon='image')


class BlogPage(Page):
    date = models.DateField("Post date")
    intro = models.CharField(max_length=250)
    body = StreamField(BlogBlock())
    tags = ClusterTaggableManager(through=BlogPageTag, blank=True)
    categories = ParentalManyToManyField('blog.BlogCategory', blank=True)

    # def main_image(self):
    #         gallery_item = self.gallery_images.first()
    #         if gallery_item:
    #             return gallery_item.image
    #         else:
    #             return None

    search_fields = Page.search_fields + [
        index.SearchField('intro'),
        index.SearchField('body'),
    ]

    content_panels = Page.content_panels + [
        MultiFieldPanel([
            FieldPanel('date'),
            FieldPanel('tags'),
            FieldPanel('categories', widget=forms.CheckboxSelectMultiple),
        ], heading="Blog information"),
        FieldPanel('intro'),
        StreamFieldPanel('body'),
        # InlinePanel('gallery_images', label="Gallery images"),
    ]


class ContentPage(Page):
    body = StreamField(BlogBlock())
# class BlogPageGalleryImage(Orderable):
#     page = ParentalKey(BlogPage, related_name='gallery_images')
#     image = models.ForeignKey(
#         'wagtailimages.Image', on_delete=models.CASCADE, related_name='+'
#     )
#     caption = models.CharField(blank=True, max_length=250)

#     panels = [
#         ImageChooserPanel('image'),
#         FieldPanel('caption'),
#     ]