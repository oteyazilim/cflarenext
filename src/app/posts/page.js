import Link from "next/link";
import PostList from "../components/PostList/PostList";

const Index = () => {
  return (
   <div style={{minHeight:"100vh",padding:20}}>
      <Link href={"/"}>Go Home</Link>
      <PostList />
  </div>);
};

export default Index;
