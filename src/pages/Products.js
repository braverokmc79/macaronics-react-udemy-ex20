import React from 'react'
import { NavLink } from 'react-router-dom'


const PRODUCTS=[
  {id:'p1', title:'Product 1'},
  {id:'p2', title:'Product 2'},
  {id:'p3', title:'Product 3'},
]

const ProductsPage = () => {
  return (
    <>
      <h1>The Products Page</h1>
      <ul>
        {/* <li><NavLink to="/products/product-1">Product 1</NavLink></li>
        <li><NavLink to="/products/product-2">Product 2</NavLink></li>
        <li><NavLink to="/products/product-3">Product 3</NavLink></li> */}
        {
          PRODUCTS.map((prod) =>(
            <li key={prod.id}>
               <NavLink to={`/products/${prod.id}`} >
                  {prod.title}               
               </NavLink>
            </li>
          )
        )}
      </ul>
    </>
  )
}

export default ProductsPage