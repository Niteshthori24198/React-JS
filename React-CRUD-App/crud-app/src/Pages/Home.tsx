import React from 'react'
import Sidebar from '../Components/Sidebar'
import RestaurantList from '../Components/RestaurantList'
import styled from 'styled-components'


function Home() {

    return (
        <HomeWrapper>

            <div>

                <Sidebar />

            </div>

            <div>

                <RestaurantList />

            </div>

        </HomeWrapper>
    )
}

export default Home




const HomeWrapper = styled.div`
    
    width:95%;
    display: flex;
    gap: 15px;
    margin: 50px auto;
    

`