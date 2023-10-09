import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <Home/>
      </header>
    </div>
    </Provider>
  );
}

export default App;
