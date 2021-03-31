interface IPerson {
  readonly name: string;
  age: number;
  sex?: string;
  run(): void;
}
let tom: IPerson = {
  name: '123',
  age: 18,
  run() {
    console.log(this.name);
  },
};
