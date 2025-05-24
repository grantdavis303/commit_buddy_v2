import { useState } from 'react'
import { TextField } from '@mui/material'
import GeneratedMessageCard from './GeneratedMessageCard.jsx'
import PushMainMessageCard from './PushMainMessageCard.jsx'
import './component_styles.css'

function MainPage() {
  const [data, setData] = useState({
    filePath: '',
    messageContent: ''
  })

  function changeFilePath(path) {
    setData({
      ...data,
      filePath: path.target.value,
    });
  }

  function changeMessageContent(content) {
    setData({
      ...data,
      messageContent: content.target.value,
    });
  }

  return (
    <>
      <h1> Commit Buddy v2 </h1>

      <p> A simple JavaScript tool that dynamically creates Git commit commands based on user input. </p>

      <div>
        <p><b> Files and File Paths </b></p>

        <p> You can manually type in the file or file path, or copy and paste the relative path from your IDE. Add multiple files or file paths with spaces. </p>

        <TextField fullWidth value={data.filePath} onChange={changeFilePath} />
      </div>

      <div>
        <p><b> Commit Message </b></p>

        <TextField fullWidth value={data.commitMessage} onChange={changeMessageContent} />
      </div>

      <p><b> Generated Message </b></p>

      <GeneratedMessageCard content={data} />
      <PushMainMessageCard />
    </>
  )
}

export default MainPage
