import React from 'react'

const PropsTest = ({firstname="Syed",lastname}:{firstname?:string,lastname:string}) => {

  return (
    <div>
      <h1>First Name = {firstname}</h1>
      <h1>Last Name = {lastname}</h1>
    </div>
  )
}

export default PropsTest
