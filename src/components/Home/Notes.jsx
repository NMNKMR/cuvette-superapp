import React, { useEffect, useState } from 'react'
import '../css/Notes.scss'

export default function Notes() {
    const [notes, setNotes] = useState("");

    useEffect(()=> {
        const storedNotes = localStorage.getItem('notes');
        storedNotes && setNotes(storedNotes);
    }, [])

    const handleNotesChange = (e)=> {
        setNotes(e.target.value);
        localStorage.setItem('notes', e.target.value);
    }

  return (
    <div className='notes'>
        <label htmlFor="notes">All Notes</label>
        <textarea name="notes" id="notes" placeholder='Take My Notes...' value={notes} onChange={handleNotesChange}></textarea>
    </div>
  )
}
