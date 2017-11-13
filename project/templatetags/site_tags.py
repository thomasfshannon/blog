from django import template
register = template.Library()

@register.filter(name='replace_entities')
def replace_entities(value):
    data = str(value)
    # data = data.replace("<", '&lt;')
    # data = data.replace(">", '&gt;')
    # data = data.replace('\n', '')
    return data