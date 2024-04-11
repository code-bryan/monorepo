import { createStore } from 'jotai';
import { exampleAtom } from './atoms/example';
import { translate } from '../../locales';

const store = createStore();
store.set(exampleAtom, translate('base.hello-example'));

export { store };
export * from './atoms';