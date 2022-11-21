import React from 'react'

function Info({ color1, color2, color3}) {
  return (
    <div className='info'>
        <ol>
            <li style={{color: color1}}>A white dog (Dalmata) </li>
            <li style={{color: color2}}>Red boots</li>
            <li style={{color: color3}}>A cookie man</li>
        </ol>
    </div>
  )
}

export default Info