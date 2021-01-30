
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './routes';
// import ConfigStore from './common/ConfigStore';
import store from './store';

// const store = ConfigStore();
import './assets/theme/index.scss';



function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter basename="/">
            <Routes />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
