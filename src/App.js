import './App.css';
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import Products from './components/pages/Products'
import Limpieza from './components/pages/Limpieza'
import Packs from './components/pages/Packs'
import Mision from './components/pages/Mision';
import Blog from './components/pages/Blog'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/products' exact component={Products} />
        <Route path='/limpieza' exact component={Limpieza} />
        <Route path='/packs' exact component={Packs} />
        <Route path='/mision' exact component={Mision} />
        <Route path='/blog' exact component={Blog} />
      </Switch>
    </Router>
  );
}

export default App;
