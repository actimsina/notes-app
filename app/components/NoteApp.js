'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AddNote from './AddNote'
import NoteList from './NoteList'

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
            <input type='text'
                value={filter}
                onChange={(e) => setFilter(e.target.value)} />

            <NoteList
                notes={notes}
            />
            <br />
            <AddNote
                handleAdd={handleAdd}
                desc={desc}
                setDesc={setDesc}
            />
        </div>
    )
}
