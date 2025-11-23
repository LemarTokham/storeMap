from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    greeting = "hi"
    return {"Hello": "hi"}

@app.get("/api/get_fruits")
def read_item():


    x = "apple"
    y = "banana"
    return {"fruits": [x, y]}

@app.get("/api/get_tickets")
def read_item():

    x = "apple"
    y = "banana"
    return {"fruits": [x, y]}