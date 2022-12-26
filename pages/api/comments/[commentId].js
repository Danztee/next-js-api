import { comments } from "../../../data/comments";

export default function handler(req, res) {
  const { commentId } = req.query;

  if (req.method === "GET") {
    const comment = comments.find(
      (comment) => comment.id === parseInt(commentId)
    );
    res.status(200).json(comment);
  } else if (req.method === "DELETE") {
    const comment = comments.find(
      (comment) => comment.id === parseInt(commentId)
    );
    res.status(200).json(comment);
    const index = comments.findIndex(
      (comment) => comment.id === parseInt(commentId)
    );
    comments.splice(index, 1);
    res.status(200).json(deletedComment);
  } else if (req.method === "PATCH") {
    const { comment } = req.body;
    const updatedComment = comments.find(
      (comment) => comment.id === parseInt(commentId)
    );
    updatedComment.text = comment;
    res.status(200).json(updatedComment);
  }
}
