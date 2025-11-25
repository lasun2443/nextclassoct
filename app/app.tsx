
"use client"

import React from 'react'

const Error = ({error}:{error:Error}) => {
    console.log(error.message);
    
  return (
    <div>An Error Occured</div>
  )
}

export default Error