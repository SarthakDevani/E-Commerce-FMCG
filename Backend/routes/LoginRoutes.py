from fastapi import APIRouter, Response
from pydantic import BaseModel
from models.UserModel import User
from controllers.UserControllers import signup, login_user, activate,updateuser,getuser


router = APIRouter()

class LoginData(BaseModel):
    email: str
    password: str

class SignUpData(BaseModel):
    firstName: str
    lastName: str
    email: str
    password: str

# class Token(BaseModel):
#     access_token: dict
#     token_type: str
    

@router.post("/login")
async def login(login_data: LoginData):
    return await login_user(login_data.email, login_data.password)


@router.post("/sign-up")
async def sign_up(signup_data: SignUpData):
    return await signup(signup_data) 
   
@router.post("/update-user")
async def update_user(user: User):
    return await updateuser(user)

@router.post("/activate")
async def sign_up(login_data: LoginData):
    return await activate(login_data.email, login_data.password)

@router.get("/get-user/{email}") 
async def get_user(email: str):
    return await getuser(email)
  
