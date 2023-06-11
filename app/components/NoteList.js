import React from 'react'

export default function NoteList({ notes }) {
    return (
        <div>
            <ul>
                {
                    notes.map(note => (
                        <li key={note.id}>{note.desc}</li>
                    ))
                }
            </ul>
        </div>
    )
}
