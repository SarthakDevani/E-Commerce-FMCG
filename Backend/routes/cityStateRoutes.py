from fastapi import APIRouter
from pydantic import BaseModel
from controllers.cityStateController import getState
router = APIRouter()



@router.get("/cityState")
async def ServiceState():
    return await getState() 



