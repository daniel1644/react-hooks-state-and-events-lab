import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // Create a state variable to store the dark mode status
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Use the state variable to determine the class name
  const appClass = isDarkMode ? "App dark" : "App light";

  // Create an event handler to toggle the dark mode
  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeToggle}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;