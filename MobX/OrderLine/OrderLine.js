import {makeObservable, observable, computed, autorun} from 'mobx';

class OrderLine {
  price = 0;
  amount = 1;

  constructor(price) {
    makeObservable(this, {
      price: observable,
      amount: observable,
      total: computed,
    });
    this.price = price;
  }

  get total() {
    console.log('computing...');
    const result = this.price * this.amount;
    console.log('computed result:' + result);
    return result;
  }
}

export default OrderLine;
