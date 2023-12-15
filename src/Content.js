import React from 'react'
import ItemList from './ItemList'

const Content = ({ things, handleClick, handleClick2, handleDelete }) => {
   
       return (
    <div className='content' >
      {things.length ? (
        <ItemList
         key={things.id}
         things={things}
         handleClick={handleClick}
         handleClick2={handleClick2}
         handleDelete={handleDelete}
        />
       ) : (
        <h2>sorry there is nothing...</h2>
       )} 
    </div>
  )
}

export default Content
