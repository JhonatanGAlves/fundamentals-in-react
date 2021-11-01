import React from  'react'
import './Index.css'
import './App.css'
import { FirstComponent } from './Components/basicos/FirstComponent'
import { CompWithParameter } from './Components/basicos/CompWithParameter'
import { UsingFragment } from './Components/basicos/UsingFragment'
import { RandomNumber } from './Components/RandomNumber'
import { Card } from './Components/layout/Card'

export const App = () => {
  const name = "Jhonatan Alves"
  const notaP1 = 10
  const notaP2 = 10
  const media = (notaP1 + notaP2) / 2
  const result = media >= 6 ? "Aprovado" : "Reprovado"

  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      <div className="Cards">
        <Card title="#04 - Desafio número aleatório" color="#DC1360" /*Estou passando uma cor por props*/ >
          <RandomNumber //Passei este compenente dentro do componente Card, mas para que ele fique acessível, preciso ir até o arquivo do componente Card e passar uma props.children
            min={ 0 }
            max={ 10 }
          />
        </Card>

        <Card title="#03 - Fragmento" color="#00A89F" /*Estou passando uma cor por props*/ >
          <UsingFragment />
        </Card>

        <Card title="#02 - Comp. com Parâmetro" color="#00B4E1" /*Estou passando uma cor por props*/ >
          <CompWithParameter
            title={"Situação do Aluno"}
            name={ name }
            media={ media }
            result={ result }
          />
        </Card>

        <Card title="#01 - Primeiro Componente" color="#8B479E" /*Estou passando uma cor por props*/ >
          <FirstComponent />
        </Card>
      </div>
    </div>
  )
}

export default App