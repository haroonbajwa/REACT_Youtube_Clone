import { Typography, Grid } from '@material-ui/core'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import React from 'react'

const CommentItem = ({ comment }) => {
    return (
        <>
        <div style={{ display: 'flex', alignItems:'center', marginLeft:'26px'}}>
            <a href={comment.snippet.topLevelComment.snippet.authorChannelUrl}>
            <img src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
                alt="ProfImg"
                style={{width:'36px', height:'36px', borderRadius:'50px', marginRight:'16px', }}
            />
            </a>
            <div>
                <Typography variant="subtitle2" style={{marginTop: '20px', fontWeight: 'bold'}}>
                    <a href={comment.snippet.topLevelComment.snippet.authorChannelUrl} style={{textDecoration:'none', color:'white'}}>
                        {comment.snippet.topLevelComment.snippet.authorDisplayName}
                    </a>
                </Typography>
                <Typography variant="body2">
                    {comment.snippet.topLevelComment.snippet.textOriginal}
                </Typography>
                <div style={{ display:'flex' }}>
                    <ThumbUpAltOutlinedIcon fontSize="small" style={{marginTop:'10px'}}/>
                    <Typography variant="subtitle2" style={{marginTop: '10px'}}>
                        &nbsp;{comment.snippet.topLevelComment.snippet.likeCount ?
                            comment.snippet.topLevelComment.snippet.likeCount
                        : null}
                    </Typography>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default CommentItem
