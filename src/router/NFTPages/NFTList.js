import React,{useState} from 'react'
import NFTItem from './NFTItem'

export default function NFTList(props) {
    const [nfts,setntfs] = useState([
        {img:"https://cdn.pixabay.com/photo/2012/11/28/11/11/football-67701_1280.jpg", name:'alex',title:'my first game',sport:'rugby',price:10, count:10, startDate:"2020-09-08 10AM", exhibition: true, soldout:false},
        {img:"https://cdn.pixabay.com/photo/2012/11/28/11/11/football-67701_1280.jpg", name:'alex',title:'my first game',sport:'rugby',price:10, count:10, startDate:"2020-09-08 10AM", exhibition: true, soldout:false}
    
    ])
    return (
        <div>
            <ul>
                {
                    nfts.map((nft)=>{
                        return (<NFTItem nft={nft}></NFTItem>)
                    })
                }
            </ul>
        </div>
    )
}
