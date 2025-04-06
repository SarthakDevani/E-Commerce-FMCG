from motor.motor_asyncio import AsyncIOMotorClient

#db url
MONGO_URL = "mongodb://localhost:27017/"
DATABASE_NAME ="Ecom"

client = AsyncIOMotorClient(MONGO_URL)
db = client[DATABASE_NAME]
user_collection = db["user"]
state_collection = db["state"]
city_collection = db["city"]
user_address = db["user_address"]
category_collection = db["category"]
sub_category_collection = db["subCategory"]
product_collection = db["product"]
cart_collection = db["cart"]
orders_collection = db["orders"]
orderDetail_collection = db["orderDetail"]
wishlist_collection = db["wishlist"]
reviews_collection = db["reviews"]


   






