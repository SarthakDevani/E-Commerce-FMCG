from pydantic import BaseModel,Field, field_validator
from datetime import datetime
from typing import Optional
# import bcrypt



class User(BaseModel):
    userId: Optional[str] = None
    firstName: str
    lastName: str
    email: str
    password: str
    gender: str
    contactNum: Optional[int] = None
    role:str
    created_at: Optional[int] = None
    status: bool

   
    # @field_validator('password')
    # def hash_password(cls,password:str)->str:
    #     salt = bcrypt.gensalt()
    #     hashed = bcrypt.hashpw(password.encode('utf-8'),salt)
    #     return hashed.decode('utf-8')
    # @classmethod
    # def verify_password(cls, plain_password: str, hashed_password: str) -> bool:
    #     return bcrypt.checkpw(
    #         plain_password.encode('utf-8'),
    #         hashed_password.encode('utf-8')
    #     )
