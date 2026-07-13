const ar = [20, 5];
const arObj = {
  0: 20,
  1: 5,
  push: function (newitem) {
    const key = this.length;
    this[key] = newitem;
    this.length = this.length + 1;
  },
  length: 2,
};
console.log(ar);
console.table(arObj);
