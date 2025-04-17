import React from "react";
import { useState } from "react";
import Logo from "./logo";
import Form from "./form";
import  PackingList  from "./PackingList";
import  Stats  from "./Stats";
// const initialItems = [
//   { id: 1, description: "პასპორტი", quantity: 1, packed: true },
//   { id: 2, description: "წინდები", quantity: 12, packed: false },
//   { id: 3, description: "საცურაო კოსტუმი", quantity: 3, packed: false },
//   { id: 4, description: "ჟაკეტი", quantity: 1, packed: false },
//   { id: 5, description: "შარვალი", quantity: 5, packed: false },
//   { id: 6, description: "მაისური", quantity: 8, packed: false },
//   { id: 7, description: 'რა კარგი იდეაა ვოლანდი ოსტატი და მარგარიტაში ერთ-ერთი ყველაზე ამოუცნობი და შთამბეჭდავი', quantity: 8, packed: false },
// ];

export default function App() { 
  const [items, setItems] = useState([]);
  function handleItems(item){
    setItems((items) =>[...items,item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items)=>
    items.map((item)=>
    item.id===id ? {...item, packed : !item.packed} :item
     ) )
  }
  function handleClearList() {
    const confirmed =  window.confirm("Are you sure you want to clear the list?");
    if(!confirmed) return;
    setItems([]);
  } 
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleItems}/>
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem}
      onClearListr={handleClearList}/>
      <Stats items={items}/>
    </div>
  );
}




