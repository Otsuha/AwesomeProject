import {makeObservable, observable, action} from 'mobx';

export class Doubler {
  value = 0;

  constructor(value) {
    makeObservable(this, {
      value: observable,
      increment: action,
    });
  }

  increment() {
    this.value++;
    console.log(this.value);
    this.value++;
    console.log(this.value);
  }
}

export const myState = observable({value: 0});

export const increment = action(object => {
  object.value++;
  object.value++;
});
