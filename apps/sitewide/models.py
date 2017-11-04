from wagtail.wagtailcore.blocks import (
    RichTextBlock, RawHTMLBlock, StructBlock, ChoiceBlock, StreamBlock
)
from wagtail.wagtailimages.blocks import ImageChooserBlock
from wagtail.wagtailadmin.edit_handlers import (
    FieldPanel
)
from wagtail.wagtailimages.edit_handlers import ImageChooserPanel


class CodeBlock(StructBlock):
    language_choices = [
        ('javascript', 'Javascript'),
        ('python', 'Python'),
        ('html', 'HTML'),
        ('css', 'CSS'),
        ('c', 'C')
    ]
    language = ChoiceBlock(choices=language_choices)
    code = RawHTMLBlock()


class RawCodeBlock(StructBlock):
    code = RawHTMLBlock()


class ImageBlock(StructBlock):
    image = ImageChooserBlock()
    caption = RichTextBlock(max_length=255, required=False)

    panels = [
        ImageChooserPanel('image'),
        FieldPanel('caption'),
    ]


class GeneralBlock(StreamBlock):
    content = RichTextBlock(icon="pilcrow")
    code = CodeBlock(icon='code')
    raw_code = RawCodeBlock(icon='placeholder')
    image = ImageBlock(icon='image')
