import React from 'react'
import PaymentSearchPage from './PaymentSearchPage'
import PaymentList from './PaymentList';
import Pager from '../../components/Pager';
import { getorderByDate, getorder, getorderByPage} from '../../api/API'


export default function PaymentPage() {
    const [payment,setPayment] = React.useState([])
    const [date, setDate] = React.useState([null, null]);

    const [page,setPage] = React.useState(1)
    const [total,setTotal] = React.useState(0)

    React.useEffect(()=>{
        getorder()
        .then(res=>setTotal(res.data.data.length))
        .catch(err=>console.log(err))
    },[])

    React.useEffect(()=>{
        setPayment([])
        getorderByPage({page:page,size:5})
        .then(res=>setPayment(res.data.data))
        .catch(err=>console.log(err))
    },[page])
    

    const handleNFTsubmit = (e) =>{
        e.preventDefault()
        const searchStartDate = String(date[0].getFullYear())+'-'+String(date[0].getMonth()+1).padStart(2,'0')+'-'+String(date[0].getDate()).padStart(2,'0')
        const searchEndDate = String(date[1].getFullYear())+'-'+String(date[1].getMonth()+1).padStart(2,'0')+'-'+String(date[1].getDate()).padStart(2,'0')
        
        const searchData = {
            startDate:searchStartDate,
            endDate:searchEndDate
        }

        setPayment([])
        getorderByDate(searchData)
        .then(res=>setPayment(res.data))
        .catch(err=>console.log(err))

    }

    const handleSearchDate = (newValue) => {
        setDate(newValue);
    }
    const handlePaging = (e) =>{
        setPage(e.target.value)
    }

    return (
        <div>
            <PaymentSearchPage
                date={date}
                handleSearchDate={handleSearchDate}
            ></PaymentSearchPage>
            <PaymentList
                payment={payment}
            ></PaymentList>
            <Pager page={page} count={5} total={total} paging={handlePaging}/>
        </div>
    )
}
