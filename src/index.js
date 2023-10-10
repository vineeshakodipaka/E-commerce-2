import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import store from './store'; // Import the separate store configuration
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // Add this line for Bootstrap Icons
import { AuthProvider } from './AuthContext '; // Import the AuthProvider from your context file

// const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AuthProvider> {/* Wrap your App with AuthProvider */}
      <App />
      </AuthProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
);
