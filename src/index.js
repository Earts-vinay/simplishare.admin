import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import store from "./redux/store"

const GOOGLE_CLIENT_ID = "398107612868-i8st6vvmrk7nca9dn52rh18nplt5ubgn.apps.googleusercontent.com";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
    <Provider store={store}>  {/* Wrap the App with Redux Provider */}
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </GoogleOAuthProvider>
);

reportWebVitals();
