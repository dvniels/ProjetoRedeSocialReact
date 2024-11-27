import React, { useState } from "react";
import "./App.css";
import FetchData from "./FetchData";
import User from "./User";
import Post from "./Post";
import Comment from "./Comment";

function App() {
  const [view, setView] = useState("users");
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [isGridLayout, setIsGridLayout] = useState(true);

  // nesta parte fiz o uso da ferramenta "ChatGpt" para auxiliar na implementação da troca de layout.
    const toggleLayout = () => {
      setIsGridLayout((prev) => !prev);
    };

  // Função para excluir os comentários
  const handleDeleteComment = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  return (
    <div className="App">
      <header>
        <h1>JSONPlaceholder App</h1>
      </header>
      <main>
        <div className="layout-toggle">
          {/* botão para mudar de lista para grade. Implementação da função toogleLayout*/}
          <button onClick={toggleLayout}>
            {isGridLayout ? "Exibir em Lista" : "Exibir em Grade"}
          </button>
        </div>

        {view === "users" && <FetchData endpoint="users" setData={setUsers} />}
        {view === "posts" && (
          <FetchData
            endpoint={`posts?userId=${selectedUser.id}`}
            setData={setPosts}
          />
        )}
        {view === "comments" && (
          <FetchData
            endpoint={`comments?postId=${selectedPost.id}`}
            setData={setComments}
          />
        )}

        <div className={isGridLayout ? "grid-layout" : "list-layout"}>
          {view === "users" &&
            users.map((user) => (
              <User
                key={user.id}
                user={user}
                onClick={() => {
                  setSelectedUser(user);
                  setView("posts");
                }}
              />
            ))}

          {view === "posts" &&
            posts.map((post) => (
              <Post
                key={post.id}
                post={post}
                onClick={() => {
                  setSelectedPost(post);
                  setView("comments");
                }}
              />
            ))}

          {view === "comments" &&
            comments.map((comment) => (
              <Comment
                key={comment.id}
                comment={comment}
                onDelete={handleDeleteComment} // Passa a função de exclusão
              />
            ))}
        </div>

        <footer>
          <button onClick={() => setView("users")}>Voltar aos Usuários</button>
        </footer>
      </main>
    </div>
  );
}

export default App;
