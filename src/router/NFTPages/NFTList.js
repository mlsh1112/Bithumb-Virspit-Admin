import React,{useState,useEffect} from 'react'
import NFTItem from './NFTItem'
import {getproducts} from '../../api/API'

export default function NFTList() {
    const [nfts,setntfs] = useState([])

    useEffect(() => {
        getproducts()
         .then(res=>setntfs(res.data.data))
         .catch(err=>console.log(err))
    }, [])

    

    return (
        <div>
            <ul>
                {
                    nfts.map((nft,i)=>{
                        return (<NFTItem key={i} nft={nft} ></NFTItem>)
                    })
                }
            </ul>
        </div>
    )
}
