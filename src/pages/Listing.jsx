import React from 'react'

const Listing = (props) => {
    return(
        <div>
        <p>{props.Title}</p>
        <img src={props.img}/>
        <p>{props.price}</p>
        </div>
    )
}
export default Listing;



