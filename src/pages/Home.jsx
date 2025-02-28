import { Link } from "react-router-dom"
import useFetchPosts from "../hooks/useFetchPosts"
import "./Home.style.css"
import { useSelector } from "react-redux"
import PostCard from "../components/PostCard"

const Home = () => {
  useFetchPosts()

  const posts = useSelector((state) => state.posts.posts)
  const status = useSelector((state) => state.posts.status)

  if (status === "loading") return <p>⏳ Chargement des posts...</p>
  if (status === "failed") return <p>❌ Une erreur est survenue.</p>

  return (
    <div className="container">
      <h2>📢 Liste des Posts</h2>
      <Link to="/add-post">➕ Ajouter un Post</Link>

      {posts.length === 0 ? (
        <p>😕 Aucun post disponible.</p>
      ) : (
        <div className="posts-container">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Home
