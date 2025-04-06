from pydantic import BaseModel
from datetime import datetime
from typing import Optional
# import bcrypt

class category(BaseModel): 
    categoryId: Optional[str] = None
    categoryName: str

class subCategory(BaseModel):
    subCategoryId: Optional[str] = None
    categoryId:str  
    subCategoryName:str  

class product(BaseModel):
    productId: Optional[str] = None
    productName: str
    categoryId: str
    sbucategoryId: str
    password: str
    basePrice: str
    offerPrice: Optional[int] = None
    productDetail:str
    productImageURL1: Optional[int] = None
    productImageURL2: Optional[int] = None
    quantity: bool
    createdAt:Optional[int] = None