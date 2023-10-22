import UpvoteButton from "./PostUpvoteButton";
import loadPosts from "./loadPosts";
import "./PostList.css";

const PostList = async () => {
  const posts = await loadPosts();

  return (
    <div className="post-list">
      {posts.map((post) => (
        <div key={post.id} className="post-listing">
          <h3 className="post-title">{post.title}</h3>
          <p className="post-body">{post.body}</p>
          <UpvoteButton upvotes={Math.floor(Math.random() * 1000)} />
        </div>
      ))}
    </div>
  );
};

export default PostList;
