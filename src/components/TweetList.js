import React from 'react'
import Tweet from './Tweet.js'

const TweetList = (props) => {
    // const Tweets = props.tweets
    const Tweets = props.tweets.map((tweetData, index) => {
        // line below doesn't work 
        // return <Tweet key={index} tweetData={tweetData}/>
        return (
            <Tweet key={index}
                    {...tweetData}/>
        )
    })
    return (
        <div>
            {Tweets}
        </div>
    )
}

export default TweetList