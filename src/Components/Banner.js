import React from 'react'
import "../CSS/Banner.css"
import bannerImage from "../Images/black-banner.webp"

function Banner() {

        function truncate(string, n){
            //Elipses Function
            return string?.length > n ? string.substring(0,n-1) +'...':string
        }

  return (
    <header 
        className="banner" 
        style={{
            backgroundSize:"cover",
            backgroundImage:`url(${bannerImage})`,
            backgroundPosition:"center center",
    }}
    >
    <div className="banner_contents">
        <h1 className="banner_title">Movie Name</h1>
        <div className="banner_buttons">
        <button className="banner_button">Play</button>
        <button className="banner_button">My List</button>
    </div>
    <h1 className="banner_description">
        {truncate(`This is a test description
    This is a test description
    This is a test description
    This is a test description
    This is a test description
    This is a test description
    This is a test description
    This is a test description
    This is a test description
    This is a test description
    This is a test description
    This is a test description

    This is a test description
    This is a test description
    This is a test description
    This is a test description
    This is a test descriptionThis is a test descriptionThis is a test description

    This is a test description
    This is a test description`,
    150)}
    </h1>
    </div>
    <div className="banner--fadeBottom"/>
    </header>
  )
}

export default Banner