from wagtail.contrib.settings.models import BaseSetting, register_setting
from wagtail.wagtailcore.fields import StreamField
from wagtail.wagtailcore.blocks import (
    StructBlock, PageChooserBlock, CharBlock
)
from wagtail.wagtailadmin.edit_handlers import StreamFieldPanel


@register_setting(icon='site')
class Header(BaseSetting):
    links = StreamField([
        ('links', StructBlock([
            ('link', PageChooserBlock(required=True)),
            ('text', CharBlock(max_length=255)),
        ], blank=True, null=True))
    ], null=True)

    panels = [
        StreamFieldPanel('links')
    ]
