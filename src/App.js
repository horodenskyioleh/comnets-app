import PostList from "./app/features/posts/PostList";
import AddPostForm from "./app/features/posts/AddPostForm";

function App() {
  return (
    <div className="App">
      <AddPostForm />
      <PostList />
    </div>
  );
}

export default App;
