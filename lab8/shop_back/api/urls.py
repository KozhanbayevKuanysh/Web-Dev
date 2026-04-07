#lab 8
#from django.urls import path
#from . import views

#urlpatterns = [
#    path('products/', views.products_list),
#    path('products/<int:id>/', views.product_detail),
#    path('categories/', views.categories_list),
#    path('categories/<int:id>/', views.category_detail),
#    path('categories/<int:id>/products/', views.category_products),
#]

# lab 9
#from rest_framework.routers import DefaultRouter
#from .views import CategoryViewSet, ProductViewSet

#router = DefaultRouter()
#router.register('categories', CategoryViewSet)
#router.register('products', ProductViewSet)

#urlpatterns = router.urls

# lab 10
from django.urls import path
from api.views.generics import (
    ProductListAPIView,
    ProductDetailAPIView,
    CategoryListAPIView,
    CategoryDetailAPIView,
    CategoryProductsAPIView
)

urlpatterns = [
    path('products/', ProductListAPIView.as_view()),
    path('products/<int:product_id>/', ProductDetailAPIView.as_view()),
    path('categories/', CategoryListAPIView.as_view()),
    path('categories/<int:category_id>/', CategoryDetailAPIView.as_view()),
    path('categories/<int:category_id>/products/', CategoryProductsAPIView.as_view()),
]