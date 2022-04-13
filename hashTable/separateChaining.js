class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

class HashTable {
  constructor(size = 2 ** 16 + 1) {
    this._table = new Array(size);
  }

  _hash(key) {
    return key % this._table.length;
  }

  get(key) {
    const index = this._hash(key);
    let head = this._table[index];

    while (head) {
      const [headKey, headValue] = head.value;

      if (headKey === key) {
        return headValue;
      }

      head = head.next;
    }

    return undefined;
  }

  put(key, value) {
    const index = this._hash(key);
    let head = this._table[index];

    while (head) {
      let [headKey] = head.value;

      if (headKey === key) {
        head.value[1] = value;
        return;
      }

      head = head.next;
    }

    const newHead = new Node([key, value], this._table[index]);
    this._table[index] = newHead;
  }

  delete(key) {
    const index = this._hash(key);
    let head = this._table[index];
    let prev = null;

    while (head) {
      const [headKey, headValue] = head.value;

      if (headKey === key) {
        if (prev !== null) {
          prev.next = head.next;
        } else {
          this._table[index] = undefined;
        }

        return headValue;
      }

      prev = head;
      head = head.next;
    }

    return undefined;
  }
}
