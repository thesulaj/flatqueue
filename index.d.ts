declare module 'flatqueue' {
  export default class FlatQueue<A> {
    length: number;

    clear: () => void;

    push: (id: number, value: A) => void;

    pop: () => number|undefined;

    peek: () => number|undefined;

    peekValue: () => A|undefined;
  }
}
