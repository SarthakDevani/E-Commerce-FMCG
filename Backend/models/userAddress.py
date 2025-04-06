from pydantic import BaseModel
from datetime import datetime
from typing import Optional


class usre_address(BaseModel):
    userAddressId: Optional[str] = None
    userId: str
    title:str
    addressLine1: str
    addressLine2: Optional[str] = None
    city: str
    state: str
    country: str
    zipCode: str
    createdAt: Optional[int] = None