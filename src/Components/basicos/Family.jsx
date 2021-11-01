import React from 'react'
import { MembersFamily } from './MembersFamily'

export const Family = (props) => {
    return (
        <div>
            <MembersFamily name="Jhonatan" lastName={ props.lastName } /*Recebendo a props passada em outro componente e referenciando ela no componente filho "MembersFamily"*/ />
            <MembersFamily name="Chaiene" {...props} /*Outra forma de receber props, nesse caso, ele pega todas as props passada dentro do componente "Family" quando foi chamado em "App.jsx"*/ />
            <MembersFamily name="Babi" lastName="Cristina" />
            <MembersFamily name="Buck" lastName="Alves" />
            <MembersFamily name="Laka" lastName="Maria" />
            <MembersFamily name="Nina" lastName="Cristina" />
            <MembersFamily name="Bastião" lastName="Alves" />
            <MembersFamily name="Paçoca" lastName="Alves" />
            <MembersFamily name="Floquinho" lastName="Flokis" />
            <MembersFamily name="Julie" lastName="Perlie" />
        </div>
    )
}