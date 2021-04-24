const p = new Proxy(
  { notProxied: 'original value', proxied: 'original value' },
  {
    get(target, property, receiver) {
      console.log(`get ${property}`);
      if (property === 'proxied') {
        return 'replaced value';
      }
      return;
    },
    set(target, property, value, receiver) {
      console.log(`set ${property}`);
    },
  }
);

p.proxied;
p.proxied = 123;
console.log(p.proxied);
