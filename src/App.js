import PostList from "./feature/post/PostList";
import "./index.css"
import AddPostForm from "./feature/post/AddPostForm";
function App() {
  return (
    <main className="App">
      <AddPostForm />
      <PostList/>

    </main>
  );
}

export default App;
