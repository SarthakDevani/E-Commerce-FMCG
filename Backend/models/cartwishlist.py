from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class cart(BaseModel):
    cartId: Optional[str] = None
    userId: str
    productId: str
    quantity: int

class wishlist(BaseModel):
    wishlistId: Optional[str] = None
    userId: str
    productId: str 
    createdAt: Optional[int] = None   