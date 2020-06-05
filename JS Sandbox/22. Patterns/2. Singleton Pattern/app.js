// singleton is immediate anonymous function which returns only 1 instance of an object at a time
const Singleton = (function () {
  let instance;

  function createInstance() {
    const object = new Object({ name: "Shaurya" });
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA === instanceB);

// console.log(instanceA);
// there will always be one instance and even if we try, we will get back the same instance.
