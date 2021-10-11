import React from 'react'
import NFTItem from './NFTItem'

export default function NFTList(props) {
    
    return (
        <div>
            <ul>
                {
                    props.resultNFT.length>0?
                        props.resultNFT.map((search,i)=>{
                                return (<NFTItem key={i} nft={search} sports={props.sports}></NFTItem>)
                            })
                    :
                        <>데이터가 없습니다.</>
                    
                }
            </ul>
        </div>
    )
}