import React, { useContext } from 'react'
import notesContext from '../services/NotesContext'

export default function NoteList() {
    const { state: { notes, filter } } = useContext(notesContext)
    return (
        <div>
            <ul>
                {
                    notes.filter(note => note.desc.toLowerCase().includes(filter.toLowerCase()))
                        .map(note => (
                            <li key={note.id}>{note.desc}</li>
                        ))
                }
            </ul>
        </div>
    )
}
