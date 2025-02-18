
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButton from './ReactionButton'

const PostList = () => {

    //const posts = useSelector(state => state.posts)
    const posts = useSelector(selectAllPosts)

    const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date))

    const renderedPosts = posts.map(post => (
        <article className='post-article' key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,50)}</p>
            <p className='postCredit'>
              <PostAuthor userId = {post.userId} />
              <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButton post={post}/>

        </article>
    ))

  return (
    
    <section>
        <h2>Posts</h2>
        {renderedPosts}
    </section>
    
  )
}

export default PostList