from fastapi import APIRouter
from pydantic import BaseModel
from controllers.ProductController import getproducts
router = APIRouter()



@router.get("/products")
async def Products():
    return await getproducts() 


