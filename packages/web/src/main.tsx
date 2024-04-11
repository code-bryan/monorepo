
import ReactDOM from 'react-dom/client'
import { RouteComponentProps, Router } from "@reach/router";
import { PageOne, PageTwo, RootLayout, changeLocale } from "@sa/common";
import { useEffect } from 'react';

function WebPageOne(props: RouteComponentProps) {
  const { navigate } = props;
  return <PageOne onPage={() => navigate?.('/second')} />;
}

function WebPageTwo(props: RouteComponentProps) {
  const { navigate } = props;
  return <PageTwo onPage={() => navigate?.('/')} />
}

function ChangeLanguage() {
  useEffect(() => {
    console.log('here');
    changeLocale('es');
  }, []);

  return null;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RootLayout>
    <ChangeLanguage />
    <Router style={{ height: '100%' }}>
      <WebPageOne path="/" />
      <WebPageTwo path="/second" />
    </Router>
  </RootLayout>
)
