from django.utils import translation
from wagtailtinymce.rich_text import TinyMCERichTextArea
from django.conf import settings


class CustomTinyMCE(TinyMCERichTextArea):

    @classmethod
    def getDefaultArgs(cls):
        return {
            'buttons': [
                [
                    ['undo', 'redo'],
                    ['styleselect'],
                    ['bold', 'italic'],
                    ['bullist', 'numlist', 'outdent', 'indent'],
                    ['table'],
                    ['link', 'unlink'],
                    ['wagtaildoclink', 'wagtailimage', 'wagtailembed'],
                    ['pastetext', 'fullscreen'],
                    ['code']
                ]
            ],
            'menus': False,
            'options': {
                'browser_spellcheck': True,
                'noneditable_leave_contenteditable': True,
                'language': translation.to_locale(translation.get_language()),
                'language_load': True,
            },
        }

    def __init__(self, *args, **kwargs):
        translation.trans_real.activate(settings.LANGUAGE_CODE)
        super(CustomTinyMCE, self).__init__(*args, **kwargs)
