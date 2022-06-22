import React from 'react'
import s from './Search.module.css'

export default function Search({count, setCount, getWeather}) {
    return (
        <div>
            <div className={s.search_conteiner}>
                <input type='text'
                    placeholder='enter country or city'
                    value={count}
                    onChange={(e) => { setCount(e.target.value) }}
                />
                <button onClick={getWeather}>Search random user</button>
            </div>
        </div>
    )
}
