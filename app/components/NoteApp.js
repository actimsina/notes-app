'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AddNote from './AddNote'
import NoteList from './NoteList'
import notesContext from './NotesContext'
import NotesFilter from './NotesFilter'

export default function NoteApp() {
    const [notes, setNotes] = useState([])
    const [desc, setDesc] = useState("")
    const [filter, setFilter] = useState("")

    useEffect(() => {
        axios.get('http://localhost:3000/notes.json')
            .then(res => {
                console.log(res.data.notes)
                setNotes(res.data.notes)
            })
    }, [])

    const handleAdd = (evt) => {
        evt.preventDefault()
        const newNote = {
            id: notes.length + 1,
            desc: desc,
            important: Math.random() < 0.5
        }
        setNotes(notes.concat(newNote))
        setDesc('')
    }

    return (
        <div>
            <notesContext.Provider value=
                {{
                    notes,
                    handleAdd,
                    desc,
                    setDesc,
                    filter,
                    setFilter
                }}>

                <NotesFilter />
                <NoteList />
                <br />
                <AddNote />
            </notesContext.Provider>
        </div>
    )
}
