const { default: axios } = require("axios")

const baseUrl = "http://localhost:4000/notes"

const getAllNotes = () => {
    return axios.get(baseUrl).then(res => res.data)
}

const createNote = (newNote) => {
    return axios.post(baseUrl, newNote).then(res => res.data)
}

const deleteNote = (noteId) => {
    return axios.delete(`${baseUrl}/${noteId}`).then(res => res)
}

export default {
    getAllNotes,
    createNote,
    deleteNote
}