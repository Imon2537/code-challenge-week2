const shoppingList = [];

const newItemInput = document.getElementById('new-item');
const shoppingListContainer = document.getElementById('shopping-list');
const addButton = document.getElementById('add-button');
const markPurchasedButton = document.getElementById('mark-purchased');
const clearListButton = document.getElementById('clear-list');

function addItemToList(item) {
  shoppingList.push(item);
  const listItem = document.createElement('li');
  listItem.textContent = item;
  listItem.classList.add('p-2', 'border-b', 'border-gray-300');
  listItem.addEventListener('click', () => togglePurchased(listItem));
  shoppingListContainer.appendChild(listItem);
  newItemInput.value = ''; 
}

function togglePurchased(listItem) {
  listItem.classList.toggle('line-through'); 
}

function markAllPurchased() {
  const listItems = shoppingListContainer.querySelectorAll('li');
  for (const item of listItems) {
    togglePurchased(item);
  }
}

function clearList() {
  shoppingList.length = 0; 
  shoppingListContainer.innerHTML = ''; 
}

addButton.addEventListener('click', () => {
  const newItem = newItemInput.value.trim();
  if (newItem) {
    addItemToList(newItem);
  }
});

markPurchasedButton.addEventListener('click', markAllPurchased);
clearListButton.addEventListener('click', clearList);


  
  
  