import { Provider, useSetAtom } from "jotai";
import { PropsWithChildren, useEffect } from "react";
import { store } from "../../../model/state";
import { changeLocale } from "../../../locales";

// TODO: find a way to change between laguages 
interface Props extends PropsWithChildren {
  locale?: 'en' | 'es';
}

export function RootLayout(props: Props) {
  const { children } = props;

  return (
    <Provider store={store}>
      <ChangeLanguage {...props} />
      {children}
    </Provider>
  );
}

function ChangeLanguage(props: Props) {
  const { locale = 'en' } = props;

  useEffect(() =>  changeLocale(locale), [locale]);

  return null;
}