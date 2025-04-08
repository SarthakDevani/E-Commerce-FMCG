from bson import ObjectId
from config.database import product_collection
from datetime import datetime, timezone, timedelta
from fastapi import HTTPException
from models.orders import orders, orderDetail, OrderData
from pydantic import BaseModel


async def getproducts():
    try:
        cursor = product_collection.find({})
        products = await cursor.to_list(length=None)
        
        # Convert ObjectId to string for JSON serialization
        for product in products:
            product["_id"] = str(product["_id"])
            
        return {"products": product}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))