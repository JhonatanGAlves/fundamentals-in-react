import React from  'react'
import './Index.css'
import { FirstComponent } from './Components/basicos/FirstComponent'
import { CompWithParameter } from './Components/basicos/CompWithParameter'
import { UsingFragment } from './Components/basicos/UsingFragment'
import { RandomNumber } from './Components/RandomNumber'
import { Card } from './Components/layout/Card'

export const App = () => {
  const name = "Jhonatan Alves"
  const nota = 8

  return (
    <div>
      <Card title="#04 - Desafio número aleatório">
        <RandomNumber //Passei este compenente dentro do componente Card, mas para que ele fique acessível, preciso ir até o arquivo do componente Card e passar uma props.children
          min={ 0 }
          max={ 10 }
        />
      </Card>

      <Card title="#03 - Fragmento">
        <UsingFragment />
      </Card>

      <Card title="#02 - Comp. com Parâmetro">
        <CompWithParameter
          title={"Situação do Aluno"}
          name={ name }
          nota={ nota }
          aprovado={ nota >= 6 ? "Aprovado" : "Reprovado" }
        />
      </Card>

      <Card title="#01 - Primeiro Componente">
        <FirstComponent />
      </Card>
    </div>
  )
}

export default App