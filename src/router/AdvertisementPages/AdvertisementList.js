import React, {useState} from 'react'
import AdsItem from './AdvertisementItem';

export default function AdvertisementList(props) {




    const [AdsData, setAdsData] = useState([
        {
            id : 0,
            img : 'https://cdn.pixabay.com/photo/2012/11/28/11/11/football-67701_960_720.jpg',
            text : 'A 광고',
            url : 'https://pixabay.com/ko/photos/%ec%b6%95%ea%b5%ac-%ec%bf%bc%ed%84%b0%eb%b0%b1-%ec%8a%a4%ed%8f%ac%ec%b8%a0-%ed%94%8c%eb%a0%88%ec%9d%b4%ec%96%b4-67701/'
        },
        {   
            id : 1,
            img : 'https://cdn.pixabay.com/photo/2016/11/29/03/53/athletes-1867185_960_720.jpg',
            text : 'B 광고',
            url : 'https://pixabay.com/ko/photos/%ec%9a%b4%eb%8f%99%ec%84%a0%ec%88%98-%eb%af%b8%ec%8b%9d-%ec%b6%95%ea%b5%ac-%ec%84%a0%ec%88%98-1867185/'
        },
        
        
    ]);


    return (
        <div>
           {AdsData.map((adsData, index) => (
               <AdsItem adsData={adsData} key={index} />
           ))}
        </div>
    )
}