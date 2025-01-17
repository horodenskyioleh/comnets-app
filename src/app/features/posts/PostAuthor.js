import { useSelector } from "react-redux";
import { selectAllUser } from "../users/usersSlice";

import React from 'react'

const PostAuthor = ( { userId } ) => {
    const users = useSelector(selectAllUser)

    const author = users.find(user => user.id === userId)

    return (
    <span>
        by {author ? author.name : 'Uknown author'}
    </span>
  )
}

export default PostAuthor