import React from 'react'

const TweetForm = (props) => {
    const tweetSubmit = e => {
        e.preventDefault()
        const message = e.target.querySelector('textarea')
        // logic to add tweets
    }
    return (
        <form onSubmit = {tweetSubmit} >
            <label>Enter Your Tweet</label>
            <textarea maxlength = '140' />
            <button type = 'submit'>Submit</button> 
        </form>
    )
}

export default TweetForm