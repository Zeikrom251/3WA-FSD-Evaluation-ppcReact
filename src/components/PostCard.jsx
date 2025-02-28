import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { fetchUsername } from "../services/apiService"

const PostCard = ({ post }) => {
  const [username, setUsername] = useState("")

  useEffect(() => {
    const getUsername = async () => {
      try {
        const name = await fetchUsername(post.userId)
        setUsername(name)
      } catch (error) {
        console.error(error)
      }
    }

    if (post.userId) {
      getUsername()
    }
  }, [post.userId])
  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <p>
        <strong>Posté par :</strong> {username || "Chargement..."}
      </p>
      <Link to={`/post/${post.id}`}>🔎 Voir plus</Link>
    </div>
  )
}

export default PostCard
