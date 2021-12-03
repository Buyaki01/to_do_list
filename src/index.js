import './style.css';

const itemArray = [
  {
    description: 'Water maize',
    completed: false,
    index: 0,
  },
  {
    description: 'Wash Kitten',
    completed: false,
    index: 1,
  },
  {
    description: 'Take a nap',
    completed: false,
    index: 2,
  },
];

function component() {
  const element = document.createElement('ul');
  element.classList.add('items_list');
  const todayList = document.createElement('li');
  todayList.innerHTML = `<h5>Today's To Do</h5> <button>
            <i class="fa fa-refresh" aria-hidden="true"></i></button> `;
  element.appendChild(todayList);
  const addToList = document.createElement('li');
  addToList.innerHTML = `<input type="text" placeholder="Add to your list..">
            <button><i class="fa fa-plus" aria-hidden="true"></i>
            </button>`;
  element.appendChild(addToList);
  itemArray.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.classList.add('items_created');
    listItem.innerHTML = `<input type="checkbox" class="check_box"> <p>${item.description}</p> <button>
                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
              </button>`;
    element.appendChild(listItem);
  });
  const clearCompleted = document.createElement('button');
  clearCompleted.classList.add('clear_completed');
  clearCompleted.innerHTML = 'Clear all completed';
  element.appendChild(clearCompleted);
  return element;
}

document.querySelector('.listContainer').appendChild(component());