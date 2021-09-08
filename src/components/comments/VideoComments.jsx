import React from 'react'
import CommentItem from './CommentItem'

const VideoComments = ({ videoComments }) => {
    
    const listOfComments = videoComments.map((comment, i) => <CommentItem key={i} comment={comment}/>);
    
    return (
        <>
            <h3 style={{marginTop: '50px', marginLeft:'26px'}}>Comments</h3>
            <hr/>
            {listOfComments}
        </>
    )
}

export default VideoComments
