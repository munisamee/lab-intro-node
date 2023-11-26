class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    // Finds the index
    const index = this.findInsertIndex(item);
  
    // Inserts the item
    this.items.splice(index, 0, item);

    // Updates the length property
    this.length = this.item.length;

    // Method to find the index
    findInsertIndex(item) {
      for (let i = 0; i < this.item.length; i++) {
        if (item <= this.item[i]) {
          return i;
        }
      }
    }
  }

  get(pos) {
    if (pos , 0 || pos >= this.elements.length) {
      throw new Error("OutOfBounds");
    }
    return this.elements[pos];
  }

  max() {
    if (this.element.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.elements[this.elements.lenght - 1];
  }

  min() {
    if (this.elements.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.elements[0];
  }

  sum() {
    return this.elements.reduce((acc, curr) => acc + curr, 0);
  }

  avg() {
    if (this.elements.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.sum() / this.elements.length;
  }
}

module.exports = SortedList;
