import { Person, greeter } from './greeter';

class Child implements Person {
  constructor(public firstName: string, public lastName: string) {}
}

const child = new Child('foo', 'bar');
console.log(greeter(child));
