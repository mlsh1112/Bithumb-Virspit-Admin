import React from 'react'
import SportsItem from './SportsItem'
export default function SportsList(props) {

    return (
        <ul>
            {
                props.sports.length>0?
                props.sports.map((sport,i)=>{
                    return(<SportsItem key={i} sport={sport}></SportsItem>)
                })
                :
                <>데이터가 없습니다.</>
            }
        </ul>
    )
}
