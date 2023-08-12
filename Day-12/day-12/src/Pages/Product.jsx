import data from '../db.json'

import { Link } from 'react-router-dom'



import React from 'react'

import { useSearchParams } from 'react-router-dom'

export default function Product() {


    const [searchParams, setSearchParams] = useSearchParams()

    const [page, setpage] = React.useState(getPageNumber(searchParams.get('page')))

    const [russianData, setrussianData] = React.useState([])


    React.useEffect(() => {
        fetchAndRender(page);
    }, [page])


    React.useEffect(() => {

        setSearchParams({ page })

    }, [page])


    function getPageNumber(pno) {
        if (+pno <= 1) {
            pno = 1;
        }
        if (+pno >= 4) {
            pno = 4;
        }
        return +pno;
    }


    function fetchAndRender(page) {

        if (page <= 0) {
            page = 1;
        }

        if (page > 4) {
            page = 1
        }

        let Data = getData(page)
        setrussianData(Data)

    }

    return (
       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', width: '80%', margin: '100px  auto', gap: '50px' }}>

            {
                russianData.map((ele, i) => {
                    return <div key={ele.id}>
                        <img style={{ width: '360px', height: '360px', borderRadius: '50%' }} src={ele.image} alt="Russian" />
                        <p>Charge : - {ele.Price} Rs</p>
                        <button><Link to={`/book/${ele.id}`}>Book Now</Link></button>
                    </div>

                })
            }

            <Paginate />

        </div>

    )




    function Paginate() {


        const handlepagechange = (val) => {
            let newpage = page + val;
            if (newpage > 4) {
                newpage = 4;
            }
            if (newpage <= 1) {
                newpage = 1;
            }
            setpage(newpage)
        }

        return <div>

            <button disabled={page <= 1} onClick={() => handlepagechange(-1)}>Prev</button>
            <span>{page}</span>
            <button disabled={page >= 4} onClick={() => handlepagechange(1)}>Next</button>

        </div>
    }

    function getData(page) {

        let rdata = data.data.filter((ele, i) => {
            if (page === 1) {
                if (i <= 1) {
                    return ele
                }

            }
            else if (page === 2) {
                if (i >= 2 && i <= 3) {
                    return ele
                }

            }
            else if (page === 3) {
                if (i >= 4 && i <= 5) {
                    return ele
                }
            }
            else if (page === 4) {
                if (i >= 6 && i <= 7) {
                    return ele
                }
            }
            else {
                return []
            }

        })

        return rdata

    }


}
