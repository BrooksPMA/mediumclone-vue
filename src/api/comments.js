import axios from '@/api/axios'

const getComments = (slug) => {
  return axios
    .get(`/articles/${slug}/comments`)
    .then((response) => response.data.comments)
}

const deleteComment = (slug, id) => {
  return axios.delete(`/articles/${slug}/comments/${id}`)
}

export default {
  getComments,
  deleteComment,
}
