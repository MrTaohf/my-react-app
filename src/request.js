/**
 * Created by hongfei.tao on 2017/5/18.
 */
const runAsync = () => {
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                console.log('执行完成runAsync');
                resolve('模拟网络返回的数据runAsync');
            }, 2000);
        }
    );
};

const runAsync2 = () => {
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                console.log('执行完成runAsync2');
                resolve('模拟网络返回的数据runAsync2');
            }, 2000);
        }
    );
};

const runAsync3 = () => {
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                console.log('执行完成runAsync3');
                resolve('模拟网络返回的数据runAsync3');
            }, 2000);
        }
    );
};

const getNumber = () => {
    let p = new Promise(
        (resolve, reject) => {
            // 异步操作
            setTimeout(() => {
                let num = Math.ceil(Math.random() * 10);
                if (num <= 5) {
                    resolve(num);
                } else {
                    reject("num is too max!!");
                }
            }, 2000)
        }
    );

    return p;
};

const resolveData = () => {

    // Promise的链式调用：可以在上一个异步任务完成回来之后，再进行下一个异步任务操作
    /*runAsync()
     .then((data) => {
     console.log(data);
     return runAsync2();
     })
     .then((data) => {
     console.log(data);
     return runAsync3();
     })
     .then((data) => {
     console.log(data);
     });*/

    // Promise的then(resolve, reject)可以接收两个函数，分别代表成功的回调和失败的回调
    /*getNumber().then((data) => {
     console.log(data);
     }, (error) => {
     console.log(error);
     });*/

    // Promise的成功回调到then(resolve函数),失败的回调catch(reject)
    /*getNumber()
     .then((data) => {
     console.log(data);
     })
     .catch((error) => {
     console.log(error);
     })*/

    // 发出同个异步操作，所有异步操作都回来后，才会执行回调方法
    // 相当于RxJava的zip()操作符
    Promise
        .all([runAsync(), runAsync2(), runAsync3()])
        .then((results) => {
            console.log(results);
        })
        .catch((error) => {
            console.log(error);
        });
};

export default resolveData;