'use client'
import React, { useEffect, useState } from 'react'
import AddNote from './AddNote'
import NoteList from './NoteList'
import notesContext from './NotesContext'
import NotesFilter from './NotesFilter'
import noteService from '../services/noteService'

export default function NoteApp() {
    const [notes, setNotes] = useState([])
    const [desc, setDesc] = useState("")
    const [filter, setFilter] = useState("")

    useEffect(() => {
        noteService.getAllNotes()
            .then(data => setNotes(data))
    }, [])

    const handleAdd = (evt) => {
        evt.preventDefault()
        const newNote = {
            desc: desc,
            important: Math.random() < 0.5
        }
        noteService.createNote(newNote)
            .then(data => setNotes(notes.concat(data)))
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
