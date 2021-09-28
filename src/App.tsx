import { Header, Footer, ErrorBoundary } from 'containers';
import { Home } from 'pages';

function App() {

  return (
    <div className="App">
      <Header />
      <ErrorBoundary>
        <Home />
      </ErrorBoundary>
      <Footer />
    </div>
  );
}

export default App;
