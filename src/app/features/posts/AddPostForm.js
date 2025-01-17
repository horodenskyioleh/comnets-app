import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import { nanoid } from '@reduxjs/toolkit'

import { selectAllUser } from '../users/usersSlice'
import { postAdded } from './postSlice'



const AddPostForm = () => {
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')

    const users = useSelector(selectAllUser)

    const onTitleChanged =  event => setTitle(event.target.value)
    const onContentChanged =  event => setContent(event.target.value)
    const onAuthorChanged =  event => setUserId(event.target.value)

    const onSavePostClicked = () => {
        if(title && content){
            // dispatch(
            //     postAdded({
            //         id: nanoid(),
            //         title,
            //         content,
            //     })
                dispatch(
                    postAdded(title, content, userId )
                )
            

            setTitle('')
            setContent('')
        }
                
    }

    //ha bisogno di disabilitare il buttone per inviare il post 
    //se tutti i campi non sono riempiti
    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    const userOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))
    

  return (
    <section>
        <h2>Add a New Post</h2>
        <form className='form'>
            <label className='label' htmlFor='postTitle'>Post Title</label>
            <input
                type='text'
                id='postTitle'
                name='postTitle'
                value={title}
                onChange={onTitleChanged}
            />
            <label htmlFor='postAuthor'>Author: </label>
            <select
                id='postAuthor'
                value={userId}
                onChange={onAuthorChanged} 
            >
                <option value=""></option>
                {userOptions}
            </select>

            <label className='label' htmlFor='postTitle'>Content:</label>
            <input
                
                id='postContent'
                name='postContent'
                value={content}
                onChange={onContentChanged}
            />
            <button
                className='button' 
                type='button'
                onClick={onSavePostClicked}
                disabled={!canSave}
            >Save Post</button>
        </form>
    </section>
  )
}

export default AddPostForm