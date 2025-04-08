from bson import ObjectId
from config.database import orders_collection,orderDetail_collection
from datetime import datetime, timezone, timedelta
from fastapi import HTTPException
from models.orders import orders, orderDetail,OrderData
from pydantic import BaseModel


async def orderComlete(userId: str,OrderData: OrderData):
    try:
        current_time = datetime.now(timezone.utc)
        new_order ={
            "orderId": "",
            "userId": userId,
            "totalAmount": OrderData.totalAmount,
            "orderStatus": "Pending",
            "createdAt": current_time}

        orderId =  await orders_collection.insert_one(new_order)
        await orders_collection.update_one({"userId": userId}, {"$set": {"orderId": str(orderId.inserted_id)}})
        new_order_detail = {
            "orderDetailId": "",
            "orderId": str(orderId.inserted_id),
            "productId": OrderData.productId,
            "quantity": OrderData.quantity,
            "price": OrderData.price,
            "status": "Pending",
            "paymentId": None
        }
        orderDetailId = await orderDetail_collection.insert_one(new_order_detail)
        await orderDetail_collection.update_one({"orderId": str(orderId.inserted_id)}, {"$set": {"orderDetailId": str(orderDetailId.inserted_id)}})
        return {"status": "success", "message": "Order placed successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))