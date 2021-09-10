import React,{useState} from 'react'
import SportsItem from './SportsItem'

export default function SportsList() {

    const [sports, setsports] = useState([
        {name:"soccer",image:""},
        {name:"baseball",image:""},
        {name:"basketball",image:""},
    ])

    return (
        <ul>
            {
                sports.map((sport,i)=>{
                    return(<SportsItem key={i} sport={sport}></SportsItem>)
                })
            }
        </ul>
    )
}
