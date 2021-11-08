import React from  'react'
import './Index.css'
import './App.css'
import { FirstComponent } from './Components/basicos/FirstComponent'
import { CompWithParameter } from './Components/basicos/CompWithParameter'
import { UsingFragment } from './Components/basicos/UsingFragment'
import { RandomNumber } from './Components/RandomNumber'
import { Card } from './Components/layout/Card'
import { Family } from './Components/basicos/Family'
import { InputButton } from './Components/InputButton/InputButton'
import { StudentList } from './Components/repetition/StudentList'
import { ProductsList } from './Components/repetition/ProductsList'
import { EvenOrOdd } from './Components/conditional/EvenOrOdd'
import { DirectParents } from './Components/communication/DirectParents'
import { IndirectParents } from './Components/communication/IndirectParents'
import { Input } from './Components/form/input'
import Counter from './Components/counter/Counter'
import { Mega } from './Components/megaSena/Mega'

export const App = (props) => {

  //Variáveis do Componente "CompWithParameter"
  const name = "Jhonatan Alves"
  const notaP1 = 9
  const notaP2 = 8
  const media = (notaP1 + notaP2) / 2
  const result = media >= 6 ? "Aprovado" : "Reprovado"

  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <div className="Button">
        <a href="https://github.com/JhonatanGAlves/fundamentals-in-react" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github fa-3x"></i>
        </a>
        <InputButton color="#212121"
          link="https://github.com/JhonatanGAlves/fundamentals-in-react"
          value="REPOSITÓRIO"
        />
      </div>
      <hr />

      <div className="Cards">
        <Card title="#13 - Gerador de Números Aleatórios" color="#005b96" /*Estou passando uma cor por props*/ >
          <Mega quantities={ 6 }/>
          <InputButton color="#005b96"
            link="https://github.com/JhonatanGAlves/fundamentals-in-react/commit/11e4721c9a9c508dee9e25ebce685d771274f35d"
            value="Acessar Commit"
          />
        </Card>

        <Card title="#12 - Contador" color="#03396c" /*Estou passando uma cor por props*/ >
          <Counter />
          <InputButton color="#03396c"
            link="https://github.com/JhonatanGAlves/fundamentals-in-react/commit/11e4721c9a9c508dee9e25ebce685d771274f35d"
            value="Acessar Commit"
          />
        </Card>

        <Card title="#11 - Componente Controlado (INPUT)" color="#011f4b" /*Estou passando uma cor por props*/ >
          <Input />
          <InputButton color="#011f4b"
            link="https://github.com/JhonatanGAlves/fundamentals-in-react/commit/c55bdb0ef20cd16bb1c363842fdaf2c90591a842"
            value="Acessar Commit"
          />
        </Card>

        <Card title="#10 - Comunicação entre Filho e Pai" color="#b3cde0" /*Estou passando uma cor por props*/ >
          <IndirectParents />
          <InputButton color="#b3cde0"
            link="https://github.com/JhonatanGAlves/fundamentals-in-react/commit/48fd967eb16132d9486f039482d26d06bdef3eb0"
            value="Acessar Commit"
          />
        </Card>

        <Card title="#09 - Comunicação entre Pai e Filho" color="#6497b1" /*Estou passando uma cor por props*/ >
          <DirectParents />
          <InputButton color="#6497b1"
            link="https://github.com/JhonatanGAlves/fundamentals-in-react/commit/bace02d752e90a4572b3c0e3739efc62fcb3b7e5"
            value="Acessar Commit"
          />
        </Card>

        <Card title="#08 - Renderização Condicional" color="#005b96" /*Estou passando uma cor por props*/ >
          <EvenOrOdd />
          <InputButton color="#005b96"
            link="https://github.com/JhonatanGAlves/fundamentals-in-react/commit/498ca019e2aa5007dea619aa6eda55880b859776"
            value="Acessar Commit"
          />
          <div className="commitInput">
            <p>Commit Input number utilizando Hook State</p>
            <InputButton color="#005b96"
              link="https://github.com/JhonatanGAlves/fundamentals-in-react/commit/57539045a60ffce50d6d03fd8e46ed5c6f62f7a1"
              value="Commit Input"
            />
          </div>
        </Card>

        <Card title="#07 - Desafio usando o .map" color="#03396c" /*Estou passando uma cor por props*/ >
          <ProductsList />
          <InputButton color="#03396c"
            link="https://github.com/JhonatanGAlves/fundamentals-in-react/commit/e32b9fa08617a3470565d66e942865aeb5af045a"
            value="Acessar Commit"
          />
        </Card>

        <Card title="#06 - Repetição com .map" color="#011f4b" /*Estou passando uma cor por props*/ >
          <StudentList />
          <InputButton color="#011f4b"
            link="https://github.com/JhonatanGAlves/fundamentals-in-react/commit/bfa1cdb8eb3b44489b46a2510473c79ac621e7ed"
            value="Acessar Commit"
          />
        </Card>

        <Card title="#05 - Componentes com Filhos" color="#b3cde0" /*Estou passando uma cor por props*/ >
          <Family
            lastName="Alves" /*Passando "Alves" como props para ser acessada no component "Family"*/
            otherName="Thomaz"
          />
          <InputButton color="#b3cde0"
            link="https://github.com/JhonatanGAlves/fundamentals-in-react/commit/6511685464cede7ad7e387c09b37bb04ee4e00f5"
            value="Acessar Commit"
          />
        </Card>

        <Card title="#04 - Desafio número aleatório" color="#6497b1" /*Estou passando uma cor por props*/ >
          <RandomNumber //Passei este compenente dentro do componente Card, mas para que ele fique acessível, preciso ir até o arquivo do componente Card e passar uma props.children
            min={ 0 }
            max={ 10 }
          />
          <InputButton color="#6497b1"
            link="https://github.com/JhonatanGAlves/fundamentals-in-react/commit/49346110429a6bccdf23612c942f1d6b3590d4cc"
            value="Acessar Commit"
          />
        </Card>

        <Card title="#03 - Fragmento" color="#005b96" /*Estou passando uma cor por props*/ >
          <UsingFragment />
          <InputButton color="#005b96"
            link="https://github.com/JhonatanGAlves/fundamentals-in-react/commit/f97621bbd20663ad6c46507379578223beda6d5a"
            value="Acessar Commit"
          />
        </Card>

        <Card title="#02 - Comp. com Parâmetro" color="#03396c" /*Estou passando uma cor por props*/ >
          <CompWithParameter
            title={"Situação do Aluno"}
            name={ name }
            notaP1={ notaP1 }
            notaP2={ notaP2 }
            media={ media }
            result={ result }
          />
          <InputButton color="#03396c"
            link="https://github.com/JhonatanGAlves/fundamentals-in-react/commit/f97621bbd20663ad6c46507379578223beda6d5a"
            value="Acessar Commit"
          />
        </Card>

        <Card title="#01 - Primeiro Componente" color="#011f4b" /*Estou passando uma cor por props*/ >
          <FirstComponent />
          <InputButton color="#011f4b"
            link="https://github.com/JhonatanGAlves/fundamentals-in-react/commit/f97621bbd20663ad6c46507379578223beda6d5a"
            value="Acessar Commit"
          />
        </Card>
      </div>
    </div>
  )
}

export default App