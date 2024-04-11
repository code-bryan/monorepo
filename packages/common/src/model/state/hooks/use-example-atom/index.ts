import { useAtom } from "jotai";
import { exampleAtom } from "../../atoms/example";
import { store } from "../..";

export function useExampleAtom() {
  return useAtom(exampleAtom, { store });
}