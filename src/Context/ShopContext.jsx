import React, {createContext, useEffect, useState } from 'react'
import { bookdata } from '../assets/data';

export const ProductContext = createContext();

export const ProductProvider = ({children}) =>{
  const[products, setProducts] =useState([]);

  useEffect(()=>{
    setProducts(bookdata);
  },[])
  return(
    <ProductContext.Provider value={{products}}>
      {children}
    </ProductContext.Provider>
  )
};