import React, { useState } from "react";

const CommentPage = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const fetchComments = async () => {
    const res = await fetch("/api/comments");
    const data = await res.json();
    setComments(data);
  };

  const submitComment = async (e) => {
    const res = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    fetchComments();
  };

  const deleteComment = async (commentId) => {
    const res = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });
    console.log(res);
    const data = await res.json();
    console.log(data);
    fetchComments();
  };

  const editComment = async (commentId) => {
    console.log(commentId);
    console.log(comment);
    const res = await fetch(`/api/comments/${commentId}`, {
      method: "PATCH",
      body: JSON.stringify({ comment }),
      headers: {
        "content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    fetchComments();
  };

  return (
    <>
      <input
        type="text"
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button onClick={submitComment}>Submit comment</button> <br /> <br />
      <button onClick={fetchComments}>Load comments</button>
      <br />
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <br />
            <div
              contentEditable
              onBlur={(e) => {
                setComment(e.target.textContent);
              }}
            >
              {comment.id} {comment.text} <br />
            </div>
            <button
              onClick={() => {
                editComment(comment.id);
              }}
            >
              Edit comment
            </button>
            <button
              onClick={() => {
                deleteComment(comment.id);
              }}
            >
              delete comment
            </button>
          </div>
        );
      })}
    </>
  );
};

export default CommentPage;
