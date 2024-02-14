import React from 'react'
import "./ewsLatter.css"
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { Button } from '@mui/material';
const NewsLatter = () => {
  return (
    <div className="newsLetterBanner">
         <input type="text" placeholder='Your email address' />
            <Button className='bg-g'>Subscribe</Button>
            <SendOutlinedIcon/>
    </div>
  )
}

export default NewsLatter