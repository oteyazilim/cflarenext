import Link from "next/link";
import PostList from "../components/PostList/PostList";

const Index = () => {
  return (
   <div style={{minHeight:"100vh",padding:20}}>
      <Link href={"/"}>Go Homeeee2</Link>
      <PostList />
  </div>);
};

export default Index;
