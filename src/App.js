

import Header from './Header';
import AddItems from './AddItems';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [things, setThings] = useState([
    {
      id: 1,
      checked: false,
      item: "Item 1"
    },
    {
      id: 2,
      checked: false,
      item: "Item 2"
    },
    {
      id: 3,
      checked: false,
      item: "Item 3"
    }
   ]);

   const [newItem, setNewItem] = useState('');

   const handleClick = (id) => {
    const checkbox = things.map((hari) => {
      return (hari.id === id) ? {...hari,checked: !hari.checked} : hari
     })
     setThings(checkbox);
}
const handleClick2 = (id) => {
const checkbox = things.map((hari) => (hari.id === id) ?  {...hari,checked: !hari.checked}: hari);
setThings(checkbox);
}

const handleDelete = (id) => {
 const checkbox = things.filter((hari) => hari.id !== id);
 setThings(checkbox);
} 

const handleSubmit = (e) => {
  e.preventDefault();
  
  console.log('submitet');
}
 
  return (
    <div className="App">
      <Header love='My React App' />
      <AddItems 
             newItem = {newItem}
             setNewItem = {setNewItem}
             handleSubmit = {handleSubmit}
      />
      <Content 
       things = {things}
       handleClick = {handleClick}
       handleClick2 = {handleClick2}
       handleDelete= {handleDelete}
       />
      <Footer love = {things.length}/>
      
    </div>
  );
}

export default App;
