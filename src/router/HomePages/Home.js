import React from 'react'
import Menu from '../../components/Menu/Menu'
import { Route } from 'react-router-dom';
import SportsPage from '../SportsPages/SportsPage';
import UserPage from '../UserPages/UserPage'
import NFTPage from '../NFTPages/NFTPage'
import NFTcreatePage from '../NFTPages/NFTcreate/NFTcreatePage'
import PaymentPage from '../PaymentPages/PaymentPage'
import AdvertisementPage from '../AdvertisementPages/AdvertisementPage'
import './Home.css'


export default function Home({match,history}) {
    
    return (
        <div className="Home"> 
            <section className="menu">
                <Menu match={match} history={history}></Menu>
            </section>
            <section className="contents">
                <Route exact path={match.path} component={SportsPage}/>
                <Route path={`${match.path}/user`} component={UserPage}/>
                <Route path={`${match.path}/nft`} component={NFTPage}/>
                <Route path={`${match.path}/nftcreate`} component={NFTcreatePage}/>
                <Route path={`${match.path}/payment`} component={PaymentPage}/>
                <Route path={`${match.path}/advertisement`} component={AdvertisementPage}/>
            </section>
        </div>
    )
}
