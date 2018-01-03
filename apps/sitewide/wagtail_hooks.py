from wagtail.wagtailcore import hooks
from wagtail.wagtailcore.whitelist import attribute_rule, check_url, allow_without_attributes

@hooks.register('construct_whitelister_element_rules')
def whitelister_element_rules():
    return {
        'a': attribute_rule({'class': True, 'href': check_url, 'target': True}),
        'span': attribute_rule({'class': True}),
        'p': attribute_rule({'class': True}),
        'div': attribute_rule({'class': True}),
        'table': attribute_rule({'class': True}),
        'thead': attribute_rule({'class': True}),
        'tbody': attribute_rule({'class': True}),
        'tr': attribute_rule({'class': True}),
        'td': attribute_rule({'class': True}),
        'th': attribute_rule({'class': True}),
        'blockquote': attribute_rule({'class': True}),
        'pre': attribute_rule({'class': True}),
        'code': attribute_rule({'class': True}),
        'h1': attribute_rule({'class': True}),
        'h2': attribute_rule({'class': True}),
        'h3': attribute_rule({'class': True}),
        'h4': attribute_rule({'class': True}),
        'h5': attribute_rule({'class': True}),
        'h6': attribute_rule({'class': True}),
        'ul': attribute_rule({'class': True}),
        'ol': attribute_rule({'class': True}),
        'li': attribute_rule({'class': True}),
        'img': attribute_rule({'class': True}),
    }