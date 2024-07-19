import logo from './logo.svg';
import './App.css';
import { Home } from './pages/index'
import './styles/globals.css'
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
}

export default App;
