import React from 'react'
import s from './Output.module.css'

export default function Output({data}) {
    return (
        <>
        <div key={data?.id} className={data? s.conteiner : s.conteiner1}>
        <div className={s.conteiner_head}>
            <div className={s.head_card}>
                <h3>{data?.name}</h3>
                <p>{data?.weather[0].description}</p>
                <div className={s.head_temp}>
                    <p>max: {Math.round(data?.main.temp_max-273)} °</p>
                    <p>min: {Math.round(data?.main.temp_min-273)} °</p>
                </div>
            </div>
            <div>
                <img width="150px" src={'https://openweathermap.org/img/wn/' + data?.weather[0].icon + '.png'} alt="" />
            </div>
            
        </div>
        <div className={s.conteiner_body}>
            <p>Humidity <br/> {data?.main.humidity} %</p>
            <p>Visibility <br/> {data?.visibility/1000} km</p>
            <p>Wind <br/>deg: {data?.wind.deg} <br/>speed: {data?.wind.speed} km/h</p>
            
        </div>
        </div>
        </>
    )
}
