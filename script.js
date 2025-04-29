function addNote() {
    const noteText = document.getElementById('noteText').value.trim();
    if (noteText === '') {
      alert('Please enter a note.');
      return;
    }
  
    const notesList = document.getElementById('notesList');
  
    const note = document.createElement('div');
    note.className = 'note';
  
    const noteContent = document.createElement('p');
    noteContent.textContent = noteText;
  
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '×';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = () => notesList.removeChild(note);
  
    note.appendChild(noteContent);
    note.appendChild(deleteBtn);
    notesList.appendChild(note);
  
    document.getElementById('noteText').value = '';
  }
  