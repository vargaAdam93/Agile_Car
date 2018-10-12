import React,{Component} from 'react';
import UserService from '../Components/Services/UserService'


class LoginUser extends Component {
    constructor(props) {
        super(props);
        this.state = {email: '', password: ''};

        this.EmailhandleChange = this.EmailhandleChange.bind(this);
        this.PasswdhandleChange = this.PasswdhandleChange.bind(this);

        this.addUserService = new UserService();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    EmailhandleChange(event)
    {
        this.setState({email: event.target.value});
    }


    PasswdhandleChange(event)
    {
        this.setState({password: event.target.value});
    }

    handleSubmit(event)
    {
        event.preventDefault();
        this.addUserService.login(this.state);
        this.props.history.push('/');
    }

    render()
    {
        return(
            <div className="container">
        <form onSubmit={this.handleSubmit}>
    <label>
    Email:
    <input type="text" value={this.state.email} onChange={this.EmailhandleChange} className="form-control"/>
        </label>
        <br/>
        <label>
        Passwd:
    <input type="text" value={this.state.password} onChange={this.PasswdhandleChange} className="form-control"/>
        </label>
        <br/>
        <input type="submit" value="Submit" className="btn btn-primary"/>
        </form>
        </div>
    );
    }
}

export default LoginUser;