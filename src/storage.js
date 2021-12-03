export default class LocalStorage {
  // retrieve to-do list
  static getList() {
    let toDoList = JSON.parse(localStorage.getItem('toDoList'));
    if (!toDoList) {
      toDoList = [
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
    }
    return toDoList;
  }

  // save list to local storage
  static save(toDoList) {
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
  }
}