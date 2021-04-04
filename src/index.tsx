import 'antd/dist/antd.css';
import './index.scss';
import 'moment/locale/vi';
import thunk from 'redux-thunk'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { PageLayout } from './shared/components/layout';
import { rootReducer } from './store/root.reducer';
import { BrowserRouter } from 'react-router-dom';

const devToolsCompose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancer = process.env.NODE_ENV !== 'production' && devToolsCompose ? devToolsCompose : compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PageLayout />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
