import { Provider } from "jotai";
import { PropsWithChildren } from "react";
import { store } from "../../../model/state";

export function RootLayout(props: PropsWithChildren) {
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  );
}