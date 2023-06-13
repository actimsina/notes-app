const { default: axios } = require("axios")

const baseUrl = "http://localhost:4000/notes"

const getAllNotes = () => {
    return axios.get(baseUrl).then(res => res.data)
}

const createNote = (newNote) => {
    return axios.post(baseUrl, newNote).then(res => res.data)
}

export default {
    getAllNotes,
    createNote
}