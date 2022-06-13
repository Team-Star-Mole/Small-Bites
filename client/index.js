import React from "react";
import reactDom from "react-dom";
import App from "./App";
import { BrowserRouter as Router} from 'react-router-dom';
import BodegaOneMenu from "./component/BodegaOneMenu";
import { Switch, Route } from 'react-router-dom';

reactDom.render(<App />, document.getElementById('root'));

// const root = reactDom.createRoot(document.getElementById('root'));
// root.render(<App />); */}

// reactDom.render(
//     <Router>
//         <App />
//      </Router>,
//     document.getElementById("root")
//     );

// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);

// // 👇️ wrap App in Router
// root.render(
//   <Router>
//     <App />
//   </Router>
// );