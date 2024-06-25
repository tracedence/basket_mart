import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/styles/index.css'
import './assets/styles/bootstrap_custom.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Home from './screens/Home';
import ProductScreen from './screens/ProductScreen';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<Home />} />
      <Route  path='/product/:id' element={<ProductScreen />} />
      </Route>
      )
    )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <HelmetProvider> */}
      {/* <Provider store={store}> */}
        {/* <PayPalScriptProvider deferLoading={true}> */}
          <RouterProvider router={router} />
        {/* </PayPalScriptProvider> */}
      {/* </Provider> */}
    {/* </HelmetProvider> */}
  </React.StrictMode>
);

reportWebVitals();
