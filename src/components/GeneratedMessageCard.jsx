import { useState } from 'react'
import { Button } from '@mui/material'
import './Components.css'

function GeneratedMessageCard(commitMessage) {
  const [copyButtonText, setCopyButtonText] = useState('Copy');

  function copyToClipboard() {
    const filePath = `git add ${commitMessage.content.filePath}`;
    const messageContent = `git commit -m "${commitMessage.content.messageContent}"`;
    const commands = filePath + '\n' + messageContent;

    navigator.clipboard.writeText(commands);

    setCopyButtonText('Copied!');

    setTimeout(() => {
      setCopyButtonText('Copy');
    }, 1500);
  }

  return (
    <>
      <p><b> Generated Message </b></p>

      <div className='commitMessageCard'>
        <p> git add <span className='filePath'>{commitMessage.content.filePath}</span> </p>
        <p> git commit -m <span className='messageContent'>"{commitMessage.content.messageContent}"</span> </p>
        <Button variant='contained' onClick={copyToClipboard}> {copyButtonText} </Button>
      </div>
    </>
  )
}

export default GeneratedMessageCard