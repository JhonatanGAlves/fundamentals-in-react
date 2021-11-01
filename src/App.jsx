import React from  'react'
import './Index.css'
import { RandomNumber } from './Components/RandomNumber'
import { Card } from './Components/layout/Card'

export const App = () => {
  return (
    <div>
      <Card title="Desafio número aleatório">
        <RandomNumber //Passei este compenente dentro do componente Card, mas para que ele fique acessível, preciso ir até o arquivo do componente Card e passar uma props.children
          min={ 0 }
          max={ 10 }
        />
      </Card>
    </div>
  )
}

export default App