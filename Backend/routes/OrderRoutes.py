from fastapi import APIRouter
from pydantic import BaseModel
from models.orders import orders, orderDetail,OrderData
from controllers.OrderController import orderComlete, getOrder
router = APIRouter()



@router.post("/orders/{userId}")
async def orderplace(userId: str, orderData: OrderData):
    return await orderComlete(userId,orderData) 

@router.get("/orders/{userId}")
async def get_orders(userId: str):
    return await getOrder(userId)


