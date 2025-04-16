from config.database import city_collection, state_collection
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from bson import ObjectId


async def getState():
    try:
        # Get the states and convert cursor to list
        cursor = state_collection.find()
        states = await cursor.to_list(length=None)
        
        if not states:
            raise HTTPException(status_code=404, detail="States not found")
        
        # Format response data
        formatted_states = []
        for state in states:
            # Convert ObjectId to string
            state["_id"] = str(state["_id"])
            
            # Get cities for this state
            cities_cursor = city_collection.find({"stateId": state["stateId"]})
            cities = await cities_cursor.to_list(length=None)
            
            # Format cities
            formatted_cities = []
            for city in cities:
                city["_id"] = str(city["_id"])
                city["cityId"] = str(city["cityId"])
                formatted_cities.append(city)
            
            state["cities"] = formatted_cities
            formatted_states.append(state)
        
        return (formatted_states)
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
