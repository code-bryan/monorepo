import { atom, useAtom } from 'jotai';
import { store } from '../..';

export const exampleAtom = atom('')

export function useExampleAtom() {
  return useAtom(exampleAtom, { store });
}