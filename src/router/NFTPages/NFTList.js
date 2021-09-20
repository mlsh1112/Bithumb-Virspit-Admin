import React,{useState} from 'react'
import NFTItem from './NFTItem'

export default function NFTList() {
    const [nfts,setntfs] = useState([
        {nftimg:"https://cdn.pixabay.com/photo/2012/10/26/02/30/american-football-63109_1280.jpg",detailImg:"https://cdn.pixabay.com/photo/2012/11/28/11/11/football-67701_1280.jpg", name:'alex',title:'my first game',sport:'rugby',describtion:"new nft",price:10, count:10, startDate:"2020-09-24T10:30", exhibition: true, soldout:false},
        {nftimg:"https://cdn.pixabay.com/photo/2012/10/26/02/30/american-football-63109_1280.jpg",detailImg:"https://cdn.pixabay.com/photo/2012/11/28/11/11/football-67701_1280.jpg", name:'alex',title:'my first game',sport:'rugby',describtion:"new nft",price:10, count:10, startDate:"2020-09-24T10:30", exhibition: true, soldout:false}
    
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
