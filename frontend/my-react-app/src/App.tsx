
import { useState } from 'react'
import './App.css'

function App() {

  const [fruitList, setFruitList] = useState([])

   async function getData() {
    const url = 'http://127.0.0.1:8000/api/get_fruits'

    const response = await fetch(url)
    const fruits = await response.json()
    setFruitList(fruits.fruits)
    console.log(fruitList)
  }

  const handleClick = () => {
    getData()
  }
  

  return (
    <>
    <h1>Tesco store 1</h1>
    <svg width="746" height="544" viewBox="0 0 746 544" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Group 1">
        <g id="store" fill='grey' onClick={() => console.log("Clicked store")}>
        <path id="Icon" d="M590.583 68H155.417C121.083 68 93.25 88.2964 93.25 113.333V430.667C93.25 455.704 121.083 476 155.417 476H590.583C624.917 476 652.75 455.704 652.75 430.667V113.333C652.75 88.2964 624.917 68 590.583 68Z" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <g id="aisle-1" fill='red' onClick={handleClick}>
        <path id="Icon_2" d="M227.875 205.25H205.125C203.33 205.25 201.875 211.891 201.875 220.083V323.917C201.875 332.109 203.33 338.75 205.125 338.75H227.875C229.67 338.75 231.125 332.109 231.125 323.917V220.083C231.125 211.891 229.67 205.25 227.875 205.25Z" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <g id="aisle-2" fill='red' onClick={() => console.log("Clicked 2")}>
        <path id="Icon_4" d="M384.875 205.25H362.125C360.33 205.25 358.875 211.891 358.875 220.083V323.917C358.875 332.109 360.33 338.75 362.125 338.75H384.875C386.67 338.75 388.125 332.109 388.125 323.917V220.083C388.125 211.891 386.67 205.25 384.875 205.25Z" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <g id="aisle-3" fill='red' onClick={() => console.log("Clicked 3")}>
        <path id="Icon_3" d="M541.875 205.25H519.125C517.33 205.25 515.875 211.891 515.875 220.083V323.917C515.875 332.109 517.33 338.75 519.125 338.75H541.875C543.67 338.75 545.125 332.109 545.125 323.917V220.083C545.125 211.891 543.67 205.25 541.875 205.25Z" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </g>
    </svg>
    </>
  )
}

export default App
