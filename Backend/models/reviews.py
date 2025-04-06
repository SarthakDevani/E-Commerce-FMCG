from pydantic import BaseModel
from datetime import datetime
from typing import Optional


class reviews(BaseModel):  
    reviewId: Optional[str] = None
    productId: str
    userId: str
    rating: int
    reviewText: Optional[str] = None
    createdAt: Optional[datetime] = None 