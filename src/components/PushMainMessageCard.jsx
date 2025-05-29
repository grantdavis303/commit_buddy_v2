import { useState } from 'react'
import { Button } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import './component_styles.css'

function PushMainMessageCard() {
  const [copyButtonText, setCopyButtonText] = useState('Copy');

  function copyToClipboard() {
    const pushMain = 'git push origin main';

    navigator.clipboard.writeText(pushMain);

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

  const theme = createTheme({
    palette: {
      white: '#FFFFFF'
    }
  });

  return (
    <div className='messageCard'>
      <p> git push origin main </p>

      <ThemeProvider theme={theme}>
        <Button variant='outlined' color='white' onClick={copyToClipboard}>{copyButtonText}</Button>
      </ThemeProvider>
    </div>
  )
}

export default PushMainMessageCard
