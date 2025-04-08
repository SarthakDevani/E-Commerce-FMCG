from fastapi import APIRouter
from pydantic import BaseModel
from models.product import product
from controllers.ProductController import getproducts,getoneproducts,addproduct
router = APIRouter()



@router.get("/products")
async def Products():
    return await getproducts() 

@router.get("/products/{productId}") 
async def Product(productId: str):
    return await getoneproducts(productId)       

@router.post("/products")
async def create_product(product: product):
    return await addproduct(product)

