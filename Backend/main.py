
from routes.LoginRoutes import router as Login_Router
from routes.OrderRoutes import router as Order_Router
from routes.ProductRoutes import router as Product_Router
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(Login_Router)
app.include_router(Order_Router)
app.include_router(Product_Router)

