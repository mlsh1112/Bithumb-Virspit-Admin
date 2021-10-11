import React, {useState, useEffect} from 'react'
import AdsItem from './AdvertisementItem';
import { getads } from '../../api/API';


export default function AdvertisementList() {

    const [AdsData, setAdsData] = useState([]);
    
    useEffect(() => {
        getads()
         .then(res => setAdsData(res.data))
         .catch(err => console.log(err))
    }, [])

    return (
        <div>
           {AdsData && AdsData.map((adsData, index) => (
               <AdsItem adsData={adsData} key={index} />
           ))}

        </div>
    )
}