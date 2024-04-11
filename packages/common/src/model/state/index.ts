import { createStore } from 'jotai';
import { exampleAtom } from './atoms/example';


const store = createStore();
store.set(exampleAtom, 'Hello from example');

export { store };
export { exampleAtom } from './atoms/example';
export { useExampleAtom } from './hooks/use-example-atom'; 