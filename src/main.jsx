import React from 'react'
import ReactDOM from 'react-dom/client'

import App from "./HW/HW4/App"
import './index.css'
import { Provider } from 'react-redux'
import { store } from './HW/HW4/store'

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store} >
    <App />
  </Provider>
);