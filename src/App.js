import React from "react";
import { useState } from "react";

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
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleItems}/>
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem}/>
      <Stats items={items}/>
    </div>
  );
}


function Logo() {
  return <h1>🌴Far Away💼</h1>;
}
function Form ({onAddItems}) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
 


 
  function HandleSubmit(e) {
    e.preventDefault();
    if(!description)return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }
 
  return (
    <form className="add-form" onSubmit={HandleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList({items, onDeleteItem,onToggleItem}) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} 
          onDeleteItem={onDeleteItem}
          onToggleItem={onToggleItem}
          key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item ,onDeleteItem, onToggleItem}) {
  return (
    <li>
      <input type="checkbox" 
      value={item.packed}
      onChange={()=>onToggleItem(item.id)}/>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={()=>onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Stats({items}) {
  if(!items.length)
  return (
    <footer className="stats">
      <em>Start packing your bag!🧨</em>
    </footer>
  );
  const numItems=items.length;
  const numPacked=items.filter((item)=>item.packed).length;
  const percentPacked= Math.round((numPacked/numItems)*100);
  return (
    <footer className="stats">
       <em>
      {percentPacked ===100 ? "You got everything! Ready to go 🎉" 
      :`💼 You have ${numItems} items on your list, and you already packed ${numPacked}
      (${percentPacked}%)`}</em>
    </footer>
  );
}




// import { useState } from "react";
// import "./styles.css";

// export default function App() {
//   return (
//     <div className="App">
//       <FlashCards />
//     </div>
//   );
// }

// const questions = [
//   {
//     id: 3457,
//     question: "What language is React based on?",
//     answer: "JavaScript",
//   },
//   {
//     id: 7336,
//     question: "What are the building blocks of React apps?",
//     answer: "Components",
//   },
//   {
//     id: 8832,
//     question: "What's the name of the syntax we use to describe a UI in React?",
//     answer: "JSX",
//   },
//   {
//     id: 1297,
//     question: "How to pass data from parent to child components?",
//     answer: "Props",
//   },
//   {
//     id: 9103,
//     question: "How to give components memory?",
//     answer: "useState hook",
//   },
//   {
//     id: 2002,
//     question:
//       "What do we call an input element that is completely synchronised with state?",
//     answer: "Controlled element",
//   },
// ];

// function FlashCards() {
//   const [selectedId, setselectedId] = useState(null);

//   function handleClick(id) {
//     setselectedId(id !== selectedId ? id : null);
//   }
//   return (
//     <div className="flashcards">
//       {questions.map((question) => (
//         <div
//           key={question.id}
//           onClick={() => handleClick(question.id)}
//           className={question.id === selectedId ? "selected" : ""}
//         >
//           <p>
//             {question.id === selectedId ? question.answer : question.question}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// }
//