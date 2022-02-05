class Stack {
  data: number[];
  private maxHistory: number[];

  constructor() {
    this.data = [];
    this.maxHistory = [];
  }

  push(val: number) {
    this.data.push(val);

    if (this.maxHistory.length === 0 || val > this.max)
      this.maxHistory.push(val);
  }

  pop() {
    if (this.peek === this.max) this.maxHistory.pop();

    return this.data.pop();
  }

  get peek() {
    return this.data[this.data.length - 1];
  }

  get max() {
    return this.maxHistory[this.maxHistory.length - 1];
  }
}

export { Stack };
