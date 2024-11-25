from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from invoice_api.views import InvoiceViewSet

router = DefaultRouter()
router.register(r'invoices', InvoiceViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]