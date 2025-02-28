import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { loadPostById } from "../store/slices/postsSlice"
import { createComment, loadComments } from "../store/slices/commentSlice"

const PostDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const post = useSelector((state) => state.posts.selectedPost)
  const comments = useSelector((state) => state.comments.comments)

  useEffect(() => {
    dispatch(loadPostById(id))
    dispatch(loadComments(id))
  }, [dispatch, id])

  const handleAddComment = (e) => {
    e.preventDefault()
    const comment = {
      postId: Number(id),
      name: "Utilisateur",
      email: "utilisateur@post.com",
      body: e.target.comment.value,
    }
    dispatch(createComment(comment))
    e.target.reset()
  }

  if (!post) return <p>Chargement...</p>

  return (
    <div className="container">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <h3>Commentaires</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.name}: </strong>
            {comment.body}
          </li>
        ))}
      </ul>
      <form onSubmit={handleAddComment}>
        <textarea
          name="comment"
          required
          placeholder="Ajouter un commentaire"></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  )
}

export default PostDetail
