import React from 'react'

function ContactButton({children} : {children:string}) {
  return (
    <div>
      <button>{children}</button>
    </div>
  )
}

export default ContactButton
