import React from 'react'
import { useDispatch } from 'react-redux'
import { reactionAdded } from './postSlice'

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️️',
    rocket: '🚀',
    coffee: '🍵'
}


const ReactionButton = ({post}) => {
    const dispatch = useDispatch()
    const ReactionsButton = Object.entries(reactionEmoji).map(([name, emoji]) => {
        <button 
            key={name}
            type="button"
            className='reactionButton'
            onClick={ () => dispatch(reactionAdded({ postsId: post.id, reaction: name}))}
            
        >{emoji} {post.reactions[name]}</button>
    })
  return (
    <div>ReactionButton</div>
  )
}

export default ReactionButton

//min 44:29