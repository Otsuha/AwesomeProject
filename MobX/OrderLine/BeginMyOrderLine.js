import React from 'react';
import {autorun, observable, runInAction} from 'mobx';
import {observer} from 'mobx-react';
import OrderLine from './OrderLine';

const order = new OrderLine(0);

const BeginMyOrderLine = () => {
  // runInAction(() => {
  //   change1();
  //   change2();
  //   change3();
  // });
  change1();
  change2();
  change3();
};

const change1 = () => {
  runInAction(() => {
    console.log('第一次action：');
    // 并没有重新计算，没有调用 total get 方法。
    console.log(order.total);
  });
};

const change2 = () => {
  runInAction(() => {
    console.log('第二次action：');
    // 重新计算了。没有调用 autorun，因为 total 的输出未发生任何改变，
    // 也就是 total 的值未发生任何变化，所以 autorun 不会调用。
    order.amount = 5;
  });
};

const change3 = () => {
  runInAction(() => {
    console.log('第三次action：');
    // 重新计算了，并且调用了 autorun，因为此时 total 值变化了。
    order.price = 2;
  });
};

const change4 = () => {
  runInAction(() => {
    console.log('第四次action：');
    stop()();
  });
};

const change5 = () => {
  runInAction(() => {
    console.log('第四次action：');
    order.price = 3;
  });
};

const stop = autorun(() => {
  console.log('Total:' + order.total);
});

export default BeginMyOrderLine;
