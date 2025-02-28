import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { createPost } from "../store/slices/postsSlice"
import "./AddPost.style.css"

const AddPost = () => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const newPost = {
        title,
        body,
        userId: 1,
      }

      await dispatch(createPost(newPost))

      navigate("/")
    } catch (error) {
      console.error("Erreur lors de la création d'un post", error)
    }
  }

  return (
    <div className="container">
      <h2>Ajouter un nouveau post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Titre"
          required
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Contenu"
          required></textarea>
        <button type="submit">Publier</button>
      </form>
    </div>
  )
}

export default AddPost
