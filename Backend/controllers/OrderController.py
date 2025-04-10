from bson import ObjectId
from config.database import orders_collection,orderDetail_collection,product_collection
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
    

async def getOrder(userId: str):
    try:
        # Get the orders and convert cursor to list
        cursor = orders_collection.find({"userId": userId})
        orders = await cursor.to_list(length=None)
        
        if not orders:
            raise HTTPException(status_code=404, detail="Orders not found")
        
        # Format response data
        formatted_orders = []
        for order in orders:
            # Convert ObjectId to string
            order["_id"] = str(order["_id"])
            
            # Get order details for this order
            details_cursor = orderDetail_collection.find({"orderId": order["orderId"]})
            order_details = await details_cursor.to_list(length=None)
            
            # Format order details
            formatted_details = []
            for detail in order_details:
                detail["_id"] = str(detail["_id"])
                detail["orderDetailId"] = str(detail["orderDetailId"])
                formatted_details.append(detail)
            
            # Add details to order
            order["details"] = formatted_details
            formatted_orders.append(order)
        
        return {
            "orders": formatted_orders
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))