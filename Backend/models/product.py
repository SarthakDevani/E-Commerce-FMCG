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
    subcategoryId: str
    basePrice: Optional[int] = None
    offerPrice: Optional[int] = None
    offerPercentage: Optional[int] = None
    productDetail:str
    productImageURL1: Optional[str] = None
    productImageURL2: Optional[str] = None
    productImageURL3: Optional[str] = None
    quantity: Optional[int] = None
    createdAt:Optional[int] = None