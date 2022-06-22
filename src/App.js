import React, { useEffect, useState } from 'react'
import './App.css'
import Output from './components/Output/Output'
import Search from './components/Search/Search'
import { API } from './Config'
import { KEY } from './Key'

export default function App() {
  const [count, setCount] = useState()
  const [data, setData] = useState()
  const getWeather = async (e) => {
    e.preventDefault()
    const request = await fetch(API + count + KEY)
    const response = await request.json()
    setData(response)
    console.log(response);

  }
  // useEffect(() => {
  //   getWeather()
  // }, [count])
  return (
    <div className='body'>
      <Search 
        count={count}
        setCount={setCount}
        getWeather={getWeather}
      />
      <Output data={data}/>
    </div>
  )
}

