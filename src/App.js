import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';

class App extends React.Component {

  render(){
    return (
      <div>
        Hello React!!!
        <Router>
        <div>
          <Switch>
            {/* <Route exact path='/' component={Login} />
            <Route path='/login' component={Login} />
            <Route path='/home' component={Home} /> */}
            {routes.map((route, index)=>{
              return (
                <Route 
                    key={index} 
                    exact={route.exact?route.exact:false} 
                    path={route.path}
                    render={(props)=>(
                      <route.component {...props} routes={Array.isArray(route.routes)?route.routes:[]} />  
                    )}  
                />
              );
            })}
          </Switch>
        </div>
      </Router> 
      </div>
    );
  }
}

export default App;
