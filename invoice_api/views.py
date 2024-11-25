from rest_framework import viewsets
from rest_framework.pagination import PageNumberPagination
from .models import Invoice
from .serializers import InvoiceSerializer

class InvoiceViewSet(viewsets.ModelViewSet):
    queryset = Invoice.objects.all()
    serializer_class = InvoiceSerializer
    pagination_class = PageNumberPagination