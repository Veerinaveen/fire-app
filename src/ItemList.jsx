import React from 'react'

const ItemList = ({ things, handleClick, handleClick2, handleDelete}) => {

  
  return (
    <div>
      <ul>
         {things.map((thing) => 
  <li>
    <input 
        type="checkbox"
        checked={thing.checked} 
        onChange={() => handleClick(thing.id)}
   />

   <label style={(thing.checked)? {textDecoration:'underline'} : null}
          onDoubleClick={() => handleClick2(thing.id)}
   >
    {thing.item}
   </label>

   <button
          onClick={() => handleDelete(thing.id)}
   >delete</button>
  </li>
)
}
       </ul>
    </div>
  )
}

export default ItemList
