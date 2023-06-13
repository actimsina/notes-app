'use client'
import React, { useEffect, useReducer, useState } from 'react'
import AddNote from './AddNote'
import NoteList from './NoteList'
import notesContext from '../services/NotesContext'
import NotesFilter from './NotesFilter'
import noteService from '../services/noteService'
import noteReducer from '../services/noteReducer'


export default function NoteApp() {
    const [state, dispatch] = useReducer(noteReducer, {
        notes: [],
        desc: "",
        filter: ""
    })

    useEffect(() => {
        noteService.getAllNotes()
            .then(data => dispatch({
                type: 'SET_NOTES',
                payload: data
            }))
    }, [])



    return (
        <div>
            <notesContext.Provider value=
                {{
                    state,
                    dispatch
                }}>

                <NotesFilter />
                <NoteList />
                <br />
                <AddNote />
            </notesContext.Provider>
        </div>
    )
}
