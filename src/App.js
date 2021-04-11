import Layout from './components/Layout/Layout';
import Toolbar from './components/Navigation/Toolbar/Toolbar'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

function App() {
  return (
    <>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </>
  );
}

export default App;
