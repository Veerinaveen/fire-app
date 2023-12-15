import React from 'react'

const AddItems = ({ newItem, setNewItem,  handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input 
           type="text"  
           autoFocus
           id='addItem'   
           placeholder='Add Item'
           required 
           value={newItem}
           onChange={(e) => setNewItem(e.target.value)}
      />
      <button
             type='submit'
             aria-label='Add Item'
             >
         add
      </button>
    </form>
  )
}

export default AddItems
