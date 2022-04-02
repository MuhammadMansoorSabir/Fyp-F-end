import React from 'react'
// import PropTypes from 'prop-types'
import { Button } from './Button'


const Header = ({ title }) => {

    return (
        <header className='header'>
            <h1 style={{}}>{title}</h1>
            <h2 style={{ fontSize: 30 }}></h2>

        </header>
    )
}
Header.defaultProps = {
    title: 'Chats',
}

// const HeadingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }
export default Header