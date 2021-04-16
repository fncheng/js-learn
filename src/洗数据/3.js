const People = [
  {
    id: '12',
    parentId: '0',
    text: 'Man',
    level: '1',
    children: null,
  },
  {
    id: '6',
    parentId: '12',
    text: 'Boy',
    level: '2',
    children: null,
  },
  {
    id: '7',
    parentId: '12',
    text: 'Other',
    level: '2',
    children: null,
  },
  {
    id: '9',
    parentId: '0',
    text: 'Woman',
    level: '1',
    children: null,
  },
  {
    id: '11',
    parentId: '9',
    text: 'Girl',
    level: '2',
    children: null,
  },
];
function list_to_tree() {
  const map = {},
    roots = []; // roots to store result
  People.forEach((item) => {
    item.children = [];
    map[item.id] = item;
  });
  console.log(map);
  People.forEach((item) => {
    // if element know his parentId
    if (item.parentId) {
      // not the first element
      if (item.parentId !== '0') {
        // find item's parent index in list
        map[item.parentId].children.push(item);
        // item.children.push(item);
        // }
      } else {
        roots.push(item);
      }
    } else {
      roots.push(item);
    }
  });
  return roots;
}

console.log(list_to_tree(People));
