async function loadPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {cache:'no-store'});
  return res.json();
}

export default loadPosts;
