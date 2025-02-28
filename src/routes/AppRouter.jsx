import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import PostDetail from "../pages/PostDetail"
import AddPost from "../pages/AddPost"

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<PostDetail />} />
      <Route path="/add-post" element={<AddPost />} />
    </Routes>
  )
}

export default AppRouter
