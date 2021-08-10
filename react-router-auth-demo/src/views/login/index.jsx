import React, { PureComponent } from 'react';

class Login extends PureComponent {
	state = {
		account: '',
		password: ''
	};

	handleChangeAccount = (ev) => {
		this.setState({ account: ev.target.value });
	};

	handleChangePassword = (ev) => {
		this.setState({ password: ev.target.value });
	};

	render() {
		return (
			<div className="login">
				<input type="text" onChange={(ev) => this.handleChangeAccount(ev)} />
				<input type="password" onChange={(ev) => this.handleChangePassword(ev)} />
				<button onClick={() => this.props.onLogin({data: {...this.state}, router: {...this.props}})}>登录</button>
			</div>
		);
	}
}

export default Login;
