import React from 'react'

import styled from 'styled-components'



function Sidebar() {


    return (

        <SideWrapper>

            <h2>Filter By Restaurant Type</h2>

            <div>

                <input type="checkbox" value={"ethnic"} />
                <label>ethnic</label>

            </div>

            <div>

                <input type="checkbox" value={"fast_food"} />
                <label>fast_food</label>

            </div>

            <div>

                <input type="checkbox" value={"cafe"} />
                <label>cafe</label>

            </div>

            <div>

                <input type="checkbox" value={"casual_dining"} />
                <label>casual_dining</label>

            </div>




            <h2>Filter by Rating</h2>

            <div>

                <input type="checkbox" value={"5"} />
                <label>5⭐ Rating Top One</label>

            </div>

            <div>

                <input type="checkbox" value={"4"} />
                <label>4⭐ Rating & Above</label>

            </div>

            <div>

                <input type="checkbox" value={"3"} />
                <label>3⭐ Rating & Above</label>

            </div>

            <div>

                <input type="checkbox" value={"2"} />
                <label>2⭐ Rating & Above</label>

            </div>


            <h2>Sort by Price</h2>

            <div>

                <input type="radio" name="" id="" />
                <input type="radio" name="" id="" />
            </div>


        </SideWrapper>




    )
}

export default Sidebar


const SideWrapper = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: baseline;
    margin: auto;
    min-height: 80vh;
    border-right: 2px solid black;
    padding-right: 18px;

    div{
        margin: 5px;
    }

`
