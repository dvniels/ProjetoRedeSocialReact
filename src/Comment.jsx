import React from "react";

function Comment({ comment, onDelete }) {
  const firstName = comment.name.split(" ")[0];
  const lastName = comment.name.split(" ").slice(-1);
  const emailAlias = "@" + comment.email.split("@")[0].toLowerCase();

  return (
    <div className="comment-card">
      <h4>
        {firstName} {lastName}
      </h4>
      <p>{emailAlias}</p>
      <p>{comment.body.slice(0, 140)}...</p>
      <button
        onClick={() => {
          if (window.confirm("Excluir comentário?")) {
            onDelete(comment.id); // Chama a função de exclusão passando o ID do comentário
          }
        }}
      >
        Excluir
      </button>
    </div>
  );
}

export default Comment;
