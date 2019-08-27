import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import App from '../components/App';
import {ErrorBoundary} from '../errorBoundary';
import { Provider } from "react-redux";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ErrorBoundary>
      <Provider>
          <App />
      </Provider>       
    </ErrorBoundary>
    , div);
});
