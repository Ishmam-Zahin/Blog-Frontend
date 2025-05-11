import React from 'react'

export default function ShowErrors({errors}:{
    errors: string[]
}) {
  return (
    <ul>
        {errors.map((error) => <li style={{color: 'red'}} key={error}>{error}</li>)}
    </ul>
  )
}
