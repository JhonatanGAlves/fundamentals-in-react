import React, { useState } from 'react'
import { IndirectChild } from './IndirectChild'

export const IndirectParents = props => {

  const [name, setName] = useState("")
  const [age, setAge] = useState()
  const [ageStatus, setAgeStatus] = useState("")

  function passingInformation(name, age, ageStatus) {
    setName(name)
    setAge(age)
    if(age >= "18" && ageStatus == true) {
      setAgeStatus("maior de idade!")
    }else {
      setAgeStatus("menor de idade!")
    }
  }

  return (
    <div>
      <h3>Passando informações de componente <strong>filho</strong> para <strong>pai</strong> usando <i>Hook State</i></h3>
      <hr />
      <div className="containerIndirect">
        <span>{ name }</span>
        <span> { age }</span>
        <span>{ ageStatus }</span>
      </div>
      <IndirectChild whenToClick={ passingInformation } />
    </div>
  )
}