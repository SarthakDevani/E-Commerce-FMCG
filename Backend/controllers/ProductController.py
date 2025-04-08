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
    
async def getoneproducts(productId: str):
    try:
        product = await product_collection.find_one({"_id": ObjectId(productId)})
        if product:
            product["_id"] = str(product["_id"])
            return {"product":product}
        else:
            raise HTTPException(status_code=404, detail="Product not found")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
async def addproduct(product: BaseModel):
    try:
        new_product = {
            "productId": "",
            "productName": product.productName,
            "categoryId": product.categoryId,
            "subcategoryId": product.subcategoryId,
            "basePrice": product.basePrice,
            "offerPrice": product.offerPrice,
            "offerPercentage": product.offerPercentage,
            "productDetail": product.productDetail,
            "productImageURL1": product.productImageURL1,
            "productImageURL2": product.productImageURL2,
            "productImageURL3": product.productImageURL3,
            "soldQuantity": 0,
            "quantity": product.quantity,
            "createdAt": datetime.now(timezone.utc)
        }
        productId = await product_collection.insert_one(new_product)
        await product_collection.update_one({"_id": productId.inserted_id}, {"$set": {"productId": str(productId.inserted_id)}})
        return {"status": "success", "message": "Product added successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))