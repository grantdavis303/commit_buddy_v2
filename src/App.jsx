import { useState } from 'react'
import { TextField } from '@mui/material'
import CommitMessageCard from './components/CommitMessageCard.jsx'
import './App.css'

function App() {
  const [commitMessage, setCommitMessage] = useState({
    filePath: '',
    messageContent: ''
  })

  function handleFilePathChange(path) {
    setCommitMessage({
      ...commitMessage,
      filePath: path.target.value,
    });
  }

  function handleMessageContentChange(content) {
    setCommitMessage({
      ...commitMessage,
      messageContent: content.target.value,
    });
  }

  return (
    <>
      <h1> Commit Buddy </h1>

      <p> A simple JavaScript tool that dynamically creates Git commit commands based on user input. </p>

      <p><b> File or File Path </b></p>

      <p> You can manually type in the file or file path, or copy and paste the relative path from your IDE. </p>

      <TextField fullWidth value={commitMessage.filePath} onChange={handleFilePathChange} />

      <p><b> Commit Message </b></p>

      <TextField fullWidth value={commitMessage.messageContent} onChange={handleMessageContentChange} />

      <p><b> Generated Message </b></p>

      <CommitMessageCard content={commitMessage} />
    </>
  )
}

export default App
