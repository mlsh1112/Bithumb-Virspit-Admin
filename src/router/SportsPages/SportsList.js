import React,{useEffect, useState} from 'react'
import SportsItem from './SportsItem'
import { useDispatch } from 'react-redux'
import { callSports } from '../../_actions/sports_action'
export default function SportsList() {

    const [sports, setsports] = useState([])
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(callSports).payload.then(res=>setsports(res.data))
    },[])

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
