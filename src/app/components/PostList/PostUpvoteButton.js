"use client";

import { useState } from "react";

const PostUpvoteButton = ({ upvotes }) => {
  const [upvoteCount, setUpvoteCount] = useState(upvotes);

  return (
    <>
      <button onClick={() => setUpvoteCount(upvoteCount + 1)}>
        {upvoteCount} Upvotes
      </button>
    </>
  );
};

export default PostUpvoteButton;
