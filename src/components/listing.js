import React from 'react'
import pizzaCon from "./pizza";
function Listing(props) {

    return (
        <div>
        <h1>
        {props.name}
        </h1>
        <h1>
        {props.price}
       </h1>
       <h1>
        {props.discerption}
       </h1>
        </div>
    )
}

export default  Listing;