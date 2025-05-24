import { useState } from 'react'
import { Button } from '@mui/material'
import Snackbar from '@mui/material/Snackbar'
import './component_styles.css'

function GeneratedMessageCard(commitMessage) {
  const [copyButtonText, setCopyButtonText] = useState('Copy');
  const [open, setOpen] = useState(false);

  function copyToClipboard() {
    const filePath = `git add ${commitMessage.content.filePath}`;
    const messageContent = `git commit -m "${commitMessage.content.messageContent}"`;
    const commands = filePath + '\n' + messageContent;

    navigator.clipboard.writeText(commands);

    setCopyButtonText('Copied!');

    setTimeout(() => {
      setCopyButtonText('Copy');
    }, 1500);

    handleClick();
  }

  const handleClick = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='messageCard'>
      <p> git add <span className='filePath'>{commitMessage.content.filePath}</span> </p>
      <p> git commit -m <span className='messageContent'>"{commitMessage.content.messageContent}"</span> </p>

      <Button variant='contained' onClick={copyToClipboard}>{copyButtonText}</Button>

      <Snackbar
        open={open}
        message='Copied to the clipboard.'
        autoHideDuration={2000}
        onClose={handleClose}
      />
    </div>
  )
}

export default GeneratedMessageCard
