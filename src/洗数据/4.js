const _ = require('lodash');

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
function list_to_tree(array, parent) {
  let tree = [];
  // tree = typeof tree !== 'undefined' ? tree : [];
  parent = typeof parent !== 'undefined' ? parent : { id: 0 };

  var children = _.filter(array, function (child) {
    return child.parentid == parent.id;
  });

  if (!_.isEmpty(children)) {
    if (parent.id == 0) {
      tree = children;
    } else {
      parent['children'] = children;
    }
    _.each(children, function (child) {
      unflatten(array, child);
    });
  }

  return tree;
}
console.log(list_to_tree(People));
