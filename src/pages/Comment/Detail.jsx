import React from 'react'
import Comment from './Comment'
import { useParams } from 'react-router-dom'

export const Detail = () => {
    const params = useParams()
    const postId = params.postId

    return (
        <>    
            <Comment currentPostId={postId}/>
        </>
    )
};


