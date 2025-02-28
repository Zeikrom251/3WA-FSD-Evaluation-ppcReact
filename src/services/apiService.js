const API_URL = "https://jsonplaceholder.typicode.com"

export const fetchPosts = async () => {
  const response = await fetch(`${API_URL}/posts`)
  if (!response.ok) throw new Error("Erreur lors du chargement des posts")
  return await response.json()
}

export const fetchPostById = async (id) => {
  const response = await fetch(`${API_URL}/posts/${id}`)
  if (!response.ok) throw new Error("Erreur lors du chargement du post")
  return await response.json()
}

export const addPost = async (post) => {
  const response = await fetch(`${API_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  })
  if (!response.ok) throw new Error("Erreur lors de l'ajout du post")
  return await response.json()
}

export const fetchComments = async (postId) => {
  const response = await fetch(`${API_URL}/posts/${postId}/comments`)
  if (!response.ok)
    throw new Error("Erreur lors du chargement des commentaires")
  return await response.json()
}

export const addComment = async (comment) => {
  const response = await fetch(`${API_URL}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment),
  })
  if (!response.ok) throw new Error("Erreur lors de l'ajout du commentaire")
  return await response.json()
}

export const fetchUsername = async (userId) => {
  const response = await fetch(`${API_URL}/users/${userId}`)
  if (!response.ok) throw new Error("Erreur lors du chargement du username")
  const data = await response.json()
  return data.username
}
