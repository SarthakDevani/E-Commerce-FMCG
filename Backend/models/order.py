from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class orders(BaseModel):
    orderId: Optional[str] = None
    userId: str
    totalAmount: int
    orderStatus: str
    createdAt: Optional[int] = None


class orderDetail(BaseModel):
    orderDetailId: Optional[str] = None
    orderId: str
    productId: str
    quantity: int
    price: int
    status:Optional[str]=None
    paymentId:Optional[str]=None