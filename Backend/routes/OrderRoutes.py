from fastapi import APIRouter
from pydantic import BaseModel
from models.orders import orders, orderDetail,OrderData
from controllers.OrderController import orderComlete
router = APIRouter()



@router.post("/orders/{userId}")
async def sign_up(userId: str, orderData: OrderData):
    return await orderComlete(userId,orderData) 


