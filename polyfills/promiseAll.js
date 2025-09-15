/* The Promise.all method takes an iterable of promises and returns a single promise that resolves when all of the promises resolve or rejects when any of the promises reject. */

const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("resolved 1");
  }, 1000);
});

const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("rejected 2");
  }, 2000);
});

const p3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("resolved 3");
  }, 3000);
});

const p4 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("resolved 4");
  }, 3000);
});

Promise.all = function (promises) {
  return new Promise(function (resolve, reject) {
    let result = [];
    let total = 0;

    promises.forEach((item, index) => {
      Promise.resolve(item)
        .then((res) => {
          result[index] = res;
          total++;
          if (total === promises.length) resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

Promise.all([p1, p2])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

Promise.all([p3, p4])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

/* 
    The all function returns a new promise.
    It resolves with an array of results when all promises are resolved or rejects with the first encountered rejection.
*/
