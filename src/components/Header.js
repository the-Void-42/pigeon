import React from 'react'

const Header = (props) => {
    return (
        <div>
            {/* <h1>Header</h1> */}
            <h1>{props.username}</h1>
        </div>
    )
}

export default Header