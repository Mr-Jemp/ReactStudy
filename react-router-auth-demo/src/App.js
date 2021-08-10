import React, { Component } from 'react';
import './App.css';
import routes from './routes/index'
import AuthRoute from './routes/AuthRoute';
import { Switch } from 'react-router-dom';

class App extends Component {
	state = {
    isLogin: false,
    userInfo: {
      // role: ['public', 'user', 'admin']
      role: ['public']
    }
  };

  handleLogin = ({data, router}) => {
    console.log(data)
    this.setState({
      isLogin: true,
      userInfo: {
        role: ['public', 'user', 'admin']
      }
    })
    router.history.replace('/')
  }

	render() {
		return (
			<div className="App">
				<Switch>
          {routes.map(route => (
            <AuthRoute 
              userInfo={this.state.userInfo} 
              isLogin={this.state.isLogin} 
              key={route.path} 
              {...route}
              onLogin={this.handleLogin}
            />
          ))}
				</Switch>
			</div>
		);
	}
}

export default App;
