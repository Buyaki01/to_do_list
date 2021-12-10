const LocalStorage = require('./storage.js');
const ToDoList = require('./toDo.js');

describe('Check toDo List functions ', () => {
  test('check add function ', () => {
    expect(ToDoList.addToForm('Sweep the house')).toEqual({ description: 'Sweep the house', index: 1, completed: false });
    expect(ToDoList.addToForm('Wash the dishes')).toEqual({ description: 'Wash the dishes', index: 2, completed: false });
  });

  test('check delete function ', () => {
    ToDoList.deleteItem(1);
    const model = LocalStorage.getList();
    expect(model.length).toEqual(1);
  });
});
