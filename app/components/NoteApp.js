'use client'
import React, { useEffect, useReducer, useState } from 'react'
import AddNote from './AddNote'
import NoteList from './NoteList'
import notesContext from './NotesContext'
import NotesFilter from './NotesFilter'
import noteService from '../services/noteService'

const noteReducer = (state, action) => {
    switch (action.type) {
        case 'SET_NOTES':
            return {
                ...state,
                notes: action.payload
            }
        case 'SET_DESC':
            return {
                ...state,
                desc: action.payload
            }
        case 'SET_FILTER':
            return {
                ...state,
                filter: action.payload
            }
        default:
            throw new Error('action not defined')
    }
}
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
