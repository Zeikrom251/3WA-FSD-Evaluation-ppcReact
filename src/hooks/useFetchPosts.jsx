import { useDispatch, useSelector } from "react-redux"
import { loadPosts } from "../store/slices/postsSlice"
import { useEffect } from "react"

const useFetchPosts = () => {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts.posts)
  const status = useSelector((state) => state.posts.status)

  useEffect(() => {
    if (status === "idle") {
      dispatch(loadPosts())
    }
  }, [dispatch, status])

  return { posts, status }
}

export default useFetchPosts
