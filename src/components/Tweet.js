import React from 'react'

const Tweet = (props) => {
    return (
        <div>
            <span>{props.author}</span>
            <span>{props.createdDate}</span>
            <p>{props.text}</p>
        </div>
    )
}

export default Tweet