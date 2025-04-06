from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class payment(BaseModel):
    paymentId: Optional[str] = None
    orderId: str
    userId: str
    amount: int
    paymentDate: Optional[datetime] = None