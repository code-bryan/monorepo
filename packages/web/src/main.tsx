
import ReactDOM from 'react-dom/client'
import { RouteComponentProps, Router } from "@reach/router";
import { PageOne, PageTwo, RootLayout } from "@sa/common";

function WebPageOne(props: RouteComponentProps) {
  const { navigate } = props;
  return <PageOne onPage={() => navigate?.('/second')} />;
}

function WebPageTwo(props: RouteComponentProps) {
  const { navigate } = props;
  return <PageTwo onPage={() => navigate?.('/')} />
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RootLayout>
    <Router style={{ height: '100%' }}>
      <WebPageOne path="/" />
      <WebPageTwo path="/second" />
    </Router>
  </RootLayout>
)
