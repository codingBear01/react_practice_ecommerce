import { React, Component } from 'react';

class Register extends Component {
  state = {
    first: '',
    last: '',
    username: '',
    password: '',
    confirm: '',
  };

  handleChange = (e) => {
    const fields = Object.assign({}, this.state);
    fields[e.target.name] = e.target.value;
    this.setState({ ...fields });
  };

  render() {
    const registerDivStyle = 'flex mt-3';
    const registerInputStyle =
      'w-[100%] p-2 border-[2px] rounded-lg outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200';
    return (
      <div className="flex justify-center">
        <div className="flex flex-col absolute p-5 w-[60%] top-[30%] shadow-lg border-[2px] rounded-lg mobile:w-[90%]">
          <text className="text-2xl">Register</text>
          <div className={registerDivStyle}>
            <input
              className={registerInputStyle}
              type="text"
              placeholder="first name"
              name="first"
              value={this.state.first}
              onChange={this.handleChange}
              required
            />
            <input
              className={`${registerInputStyle} ml-3`}
              type="text"
              placeholder="last name"
              name="last"
              value={this.state.last}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className={registerDivStyle}>
            <input
              className={registerInputStyle}
              type="text"
              placeholder="username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className={registerDivStyle}>
            <input
              className={registerInputStyle}
              type="password"
              placeholder="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <input
              className={`${registerInputStyle} ml-3`}
              type="password"
              placeholder="confirm password"
              name="confirm"
              value={this.state.confirm}
              onChange={this.handleChange}
              required
            />
          </div>
          <input
            className="btn mt-7 hover:scale-[1.02]"
            type="button"
            value="Register"
          />
        </div>
      </div>
    );
  }
}

export default Register;
