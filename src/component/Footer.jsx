import React from 'react'

const paraStyle ={
    fontSize: "1.5em",
    fontFamily: "cursive",
    fontWeight: 800,
    textShadow: "1px 1px 3px white",
    textAlign:"center"
}
const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center p-3">
    <div className='d-flex justify-content-center align-items-center'>
      <p style={paraStyle} >&copy; All rights reserved @Yasir Ali</p>
    </div>
  </footer>
  )
}

export default Footer
