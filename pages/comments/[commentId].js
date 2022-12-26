import React from "react";
import { comments } from "../../data/comments";

const Comment = ({ comment }) => {
  return (
    <div>
      {comment.id} . {comment.text}
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { commentId: "1" } },
      { params: { commentId: "2" } },
      { params: { commentId: "3" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { commentId } = params;

  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );

  return {
    props: {
      comment,
    },
  };
}

export default Comment;
upda;
