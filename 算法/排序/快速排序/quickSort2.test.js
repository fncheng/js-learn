// [16, 97, 9, 17, 1, 8];
// 16, 97, 9, 17, 1, 8
// left : 16, 9, 1, 8
// piovt: 17
// right: 97
// 16 9 1 8, 17, 97
// return quickSort(left).concat(pivot,array[right])
// 16 9 1 8:
// left:
// pivot: 1
// right: 16 9 8
// 1, 16 9 8
// 1 16 9 8 17 97

// 16 9 8 :
// left: 8
// piovt: 9
// right: 16
