from bson import ObjectId
from config.database import user_collection
import bcrypt
from datetime import datetime, timezone, timedelta




# logger = logging.getLogger(__name__)
from fastapi import HTTPException
# from fastapi.security import OAuth2PasswordBearer
from models.UserModel import User
from pydantic import BaseModel

def User_Out(user):
    return {
    "userId": str(user["_id"]),
    "firstName": user["firstName"],
    "lastName": user["lastName"],
    "email": user["email"],
    "password": user["password"],
    "gender": user["gender"],
    "contactNum": user["contactNum"],
    "role":user["role"],
    "created_at": user["created_at"],
    "status": user["status"],}
# oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")
# ACCESS_TOKEN_EXPIRE_MINUTES = 30
# SECRET_KEY = "09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7"
# ALGORITHM = "HS256"

activation_link = "http://localhost:8000/activate"
def hash_password(password: str) -> str:
    salt = bcrypt.gensalt()
    hashed = bcrypt.hashpw(password.encode('utf-8'), salt)
    return hashed.decode('utf-8')

def verify_password(plain_password: str, hashed_password: str) -> bool:
    return bcrypt.checkpw(plain_password.encode('utf-8'), hashed_password.encode('utf-8'))

# def send_activation_email(email: str, activation_link: str):
#     sender_email = "ucloco12345@gmail.com"
#     sender_password = "owmh wsrz ixtq ohhp",
#     subject = "Activate your profile"
#     body = f"Please click the following link to activate your profile: {activation_link}"

    # msg = MIMEMultipart()
    # msg["From"] = sender_email
    # msg["To"] = email
    # msg["Subject"] = subject

    # msg.attach(MIMEText(body, "plain"))

    # try:
    #     server = smtplib.SMTP("smtp.example.com", 587)
    #     server.starttls()
    #     server.login(sender_email, sender_password)
    #     server.sendmail(sender_email, email, msg.as_string())
    #     server.close()
    #     logger.info(f"Activation email sent to {email}")
    # except Exception as e:
    #     logger.error(f"Failed to send activation email: {str(e)}")

# Signup User
async def signup(user: User):
    try:

        existing_user = await user_collection.find_one({"email": user.email})
        if existing_user:
            raise HTTPException(status_code=400, detail="Email already registered")

        current_time = datetime.now(timezone.utc)
        new_user = {
            "userId": "null",
            "firstName": user.firstName,
            "lastName": user.lastName,
            "email": user.email,
            "password": hash_password(user.password),
            "gender": None,
            "contactNum": None,
            "role": "Buyer",
            "created_at": current_time,
            "status": "0",
        }
        
        inserted_user = await user_collection.insert_one(new_user)
        
        if not inserted_user.inserted_id:
            raise HTTPException(status_code=400, detail="Failed to create user")
        
        
       
        # send_activation_email(user.email, activation_link)
           
        return {"status": "success", "message": "User created successfully"}
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"error: {str(e)}")
# Activate User
async def activate(email: str, password: str):
    try:
        user = await user_collection.find_one({"email": email})
        if not user:
            raise HTTPException(status_code=404, detail="User not found")
        
        if user.get("status") == "1":
            raise HTTPException(status_code=400, detail="User already activated")
        
        if not verify_password(password, user.get("password")):
            raise HTTPException(status_code=401, detail="Invalid credentials")
        
       
       
        
        await user_collection.update_one({"_id": ObjectId(user.userId)}, {"$set": {"status": "1"}})
        
        
        return {"status": "success", "message": "Activation email sent"}
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"error: {str(e)}") 
# Login User
# class Token(BaseModel):
#     access_token: dict
#     token_type: str



    
    
async def login_user(email: str, password: str):
    try:
        user = await user_collection.find_one({"email": email})
        if not user:
            raise HTTPException(status_code=404, detail="User not found")

        stored_password = user.get("password")
        if not verify_password(password, stored_password):
            raise HTTPException(status_code=401, detail="Invalid credentials")
        
        # def create_access_token(data: dict, expires_delta: timedelta | None = None):
        #     to_encode = data.copy()
        #     if expires_delta:
        #         expire = datetime.now(timezone.utc) + expires_delta
        #     else:
        #         expire = datetime.now(timezone.utc) + timedelta(minutes=15)
        #     to_encode.update({"exp": expire})
        #     # hashaccess_token = hash_password(to_encode)
        #     return to_encode
        # hashPassword = hash_password(password)
        # access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
        # access_token = create_access_token(
        # data={"email": email,"password":hashPassword}, expires_delta=access_token_expires
        # )
        # return Token(access_token=access_token, token_type="bearer")
        
        
        
        return User_Out(user)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"error: {str(e)}")
    

# update user
async def updateuser(user: User):
    try:
        if not user.userId:
            raise HTTPException(status_code=400, detail="User ID is required") 
        print(user.userId)   
        existing_user = await user_collection.find_one({"_id": ObjectId(user.userId)})
        if not existing_user:
            raise HTTPException(status_code=404, detail="User not found")
        current_time = datetime.now(timezone.utc)
        await user_collection.update_many(
            {"_id": ObjectId(user.userId)},  # Find document
           {"$set": {
            "userId":user.userId,
            "firstName": user.firstName,
            "lastName": user.lastName,
            "email": user.email,
            "gender": user.gender,
            "contactNum": user.contactNum,
            "role": "Buyer",
            "created_at": current_time,
            "status": "1",
        }})
        # await user_collection.update_one({"_id": user.userId}, {"$set": {"firstName": "paw"}})
        updatedUser = await user_collection.find_one({"_id": ObjectId(user.userId)})
        return User_Out(updatedUser)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"error: {str(e)}")
    

#get user
async def getuser(email:str):
    try:
        user = await user_collection.find_one({"email": email})
        if not user:
            raise HTTPException(status_code=404, detail="User not found")
        
        return User_Out(user)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"error: {str(e)}")
