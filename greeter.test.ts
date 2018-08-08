import { Person, Student, greeter } from './greeter';

describe('greeter', () => {
  it('greeter(foo bar) to be "Hello, foo bar"', () => {
    let person: Person = new Student("foo", "M", "bar");
    expect(greeter(person)).toBe('Hello, foo bar');
  });
});
