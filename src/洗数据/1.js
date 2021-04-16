function list_to_tree(list) {
  let map = {},
    node,
    roots = [];

  for (let i = 0; i < list.length; i++) {
    map[list[i].id] = i; // initialize the map
    list[i].children = []; // initialize the children
  }
  console.log(map);
  // { '6': 1, '7': 2, '9': 3, '11': 4, '12': 0 } map的值是对应id的元素映射到list中的位置
  // 即 id '6'= lsit[1] , id '7' = list[2]
  for (let i = 0; i < list.length; i++) {
    node = list[i];
    // if element know his parentId
    if (node.parentId) {
      // not the first element
      if (node.parentId !== '0') {
        // if you have dangling branches check that map[node.parentId] exists
        list[map[node.parentId]].children.push(node);
      } else {
        roots.push(node);
      }
    }
    // if element doesn't know his parentId, so it has no parent
    else {
      roots.push(node);
    }
  }
  return roots;
}
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
console.log(list_to_tree(People));
