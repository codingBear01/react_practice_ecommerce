import { React, Component } from 'react';

class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  handleChange = (e) => {
    const fields = Object.assign({}, this.state);
    fields[e.target.name] = e.target.value;
    this.setState({ ...fields });
  };

  render() {
    const loginDivStyle = 'flex mt-3';
    const loginInputStyle =
      'w-[100%] p-2 border-[2px] rounded-lg outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200';

    return (
      <div className="flex justify-center">
        <div className="flex flex-col absolute p-5 w-[60%] top-[30%] shadow-lg border-[2px] rounded-lg mobile:w-[90%]">
          <text className="text-2xl">Login</text>
          <div className={loginDivStyle}>
            <input
              className={loginInputStyle}
              type="text"
              placeholder="username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className={loginDivStyle}>
            <input
              className={loginInputStyle}
              type="password"
              placeholder="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </div>
          <input
            className="btn mt-7 hover:scale-[1.02]"
            type="button"
            value="Login"
          />
        </div>
      </div>
    );
  }
}

export default Login;
