import React from 'react'
import Products from '../../data/products'

export const ProductsList = () => {

  const productLi = Products.map((product) => {
    return (
        <tr key={ product.id }>
          <td>{ product.id }</td>
          <td>{ product.name }</td>
          <td>R$ { product.price }</td>
        </tr>
    )
  })

  return (
    <div className="containerList">
      <table>
        <tr>
          <th>ID</th>
          <th>Produto</th>
          <th>Preço</th>
        </tr>
        { productLi }
      </table>
    </div>
  )
}
