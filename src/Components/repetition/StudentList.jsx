import React from 'react'
import Students from '../../data/students'

export const StudentList = (props) => {

  const studentLi = Students.map((student) => {

    // Foi usado o .map para correr cada linha existente dentro do obj "Students" que se encontra dentro
    // de students.js que simula uma lista de alunos com ID, Nome e Nota.
    return (
      // É preciso passar uma key, pois quando o React precisar fazer alguma alteração de valor, a key é a primeira propriedade que ele vai buscar.
      // Rodaria normal sem a key, porém, no console aparecia o erro. Sem a key o React precisa se esforçar mais para fazer uma alteração de valor.

      // "student" é a variável passada dentro de .map. Ela é usada para receber as propriedades dentro do obj "students.js"
      <li key={student.id}>
        <strong>{student.id}</strong> : {student.name} ficou com a nota <strong>{student.nota}</strong>
      </li>
    )
  })

  return (
    <div className="list">
      <ul>
        {studentLi}
      </ul>
    </div>
  )
}