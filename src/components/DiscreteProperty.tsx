import React, {useEffect} from 'react';
import '../styles/discrete-property.css';

export function DiscretePropertyReact() {
    useEffect(() => {
        function deleteListItem() {
            const listItem = this.parentNode;
            listItem.classList.add('is-deleting');
            setTimeout(() => {
                listItem.parentNode.removeChild(listItem);
            }, 500);
        }

        function addListItem() {
            const newItem = document.createElement('li');
            newItem.className = 'item';
            const itemText = document.createElement('p');
            itemText.textContent = 'New Item';
            newItem.appendChild(itemText);

            const deleteButton = document.createElement('button');
            deleteButton.className = 'delete';
            deleteButton.addEventListener('click', deleteListItem);

            const xSymbol = document.createElement('span');
            xSymbol.setAttribute('aria-hidden', 'true');
            xSymbol.textContent = '❌';
            deleteButton.appendChild(xSymbol);

            // Add the delete button to the list item element
            newItem.appendChild(deleteButton);

            // Add the new list item to the list
            const list = document.querySelector('.items');
            list?.appendChild(newItem);
        }

        const addButton = document.querySelector('.add');
        const deleteButtons = document.querySelectorAll('.delete');

        addButton?.addEventListener('click', addListItem);
        deleteButtons?.forEach((button) => {
            button.addEventListener('click', deleteListItem);
        });
    }, []);

    return (
        <div className='entry-anims-container'>
            <ul className='items'>
                <li className='item'>
                    <p>Item 1 Name</p>
                    <button className='delete'>
                        <span aria-hidden='true'>❌</span>
                    </button>
                </li>
                <li className='item'>
                    <p>Item 2 Name</p>
                    <button className='delete'>
                        <span aria-hidden='true'>❌</span>
                    </button>
                </li>
                <li className='item'>
                    <p>Item 3 Name</p>
                    <button className='delete'>
                        <span aria-hidden='true'>❌</span>
                    </button>
                </li>
                <li className='item'>
                    <p>Item 4 Name</p>
                    <button className='delete'>
                        <span aria-hidden='true'>❌</span>
                    </button>
                </li>
            </ul>

            <button className='add'>
                <span aria-hidden='true'>➕</span>
            </button>
        </div>
    );
}
