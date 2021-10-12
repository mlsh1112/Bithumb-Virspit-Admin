import React from 'react'
import SportsItem from './SportsItem'
export default function SportsList(props) {

    return (
        <ul>
            {
                props.sports.map((sport,i)=>{
                    return(<SportsItem key={i} sport={sport}></SportsItem>)
                })
            }
        </ul>
    )
}
