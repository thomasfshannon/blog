from __future__ import absolute_import, unicode_literals

from .base import *

DEBUG = False
WEBPACK_DEV_SERVER = False

try:
    from .local import *
except ImportError:
    pass
