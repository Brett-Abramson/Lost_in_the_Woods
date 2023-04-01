import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <>
        <h1>header</h1>
        <Link to='/home'>Home</Link>
        <Link to='/hikingviewall'>Hiking</Link>
        <Link to='/campingviewall'>Camping</Link>
        </>
    )

}

export default Header