import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header';
import Login from './login';
import Categories from './components/categories';
import Home from './Home';
import PostsContainer from './components/posts'
import createStore from './createStore'




const Index = () => {
  return (
    <div>


    </div>
  );
};





ReactDOM.render(
<Router>
<React.Fragment>
  <Route path="/" component={Header} />
     <Route exact path="/" component={Home} />
   <Route exact path="/index" component={Index} />
   <Route exact path="/categories/:id/posts" component={PostsContainer} />
<Route exact path="/login" component={Login} />
<Route exact path="/categories" component={Categories} />

   </React.Fragment>
  </Router>,
   document.getElementById('root'));
registerServiceWorker();
