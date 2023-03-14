const aa: string = 'a'

const xs: number[] = [1, 2, 3];
const ys: Array<number> = xs.map(x => 2 * x);

class Mx {
  public static get myField1() {
    return 1;
  }

  private get ['myField2']() {
    return 'hello world';
  }
}

// type alias
type Book = {
  author: Author;
  rating: number;
};

// interface keyword
interface Author {
  name: string;
  bestSeller: Book;
}

class Animal {
  // No accessibility modifier
  constructor(breed, name) {
    this.animalName = name;
  }
  
  // No accessibility modifier
  animalName: string; 

  // No accessibility modifier
  get name(): string {
    return this.animalName;
  }

  // No accessibility modifier
  set name(value: string) {
    this.animalName = value;
  }
  
  // method
  walk() {}
}

Array(0, 1, 2);
new Array(0, 1, 2);

const foo11: { bar: number } | null = null;
const bar = foo!!!.bar;

function foo2(bar: number | undefined) {
  const bar: number = bar!!!;
}

function foo(bar?: { n: number }) {
  return bar!?.n;
}
// Example 1
interface Foo {
  (): string;
}

// Example 2
function foo1(bar: { (): number }): number {
  return bar();
}

// Example 3
interface Foo extends Function {
  (): void;
}

declare namespace Lib {
  //
}

// @ts-ignore
const str: string = 1;

const isOptionEnabled = (key: string): boolean => {
  // @ts-ignore: if key isn't in globalOptions it'll be undefined which is false
  return !!globalOptions[key];
};
