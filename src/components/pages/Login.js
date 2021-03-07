//My things
import MyComponent from '../templates/MyComponent.js'
import AuthForm from '../forms/AuthForm.js'
//Router
import { Link } from 'react-router-dom';
//Material
import Container from '@material-ui/core/Container';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Avatar from '@material-ui/core/Avatar';


export default class Login extends MyComponent {
  constructor(props) {
    super(props, '/login');
  }
  render () {
    const form = [];
    const foot = [];
    var navbar = [];
    if (this.state.body !== undefined) {
      if (this.state.body.navbar !== undefined) {
        navbar = this.getNavbar();
      }
      if (this.state.body.content.login_form !== undefined) {
        form.push(
          <AuthForm
            post_url='/login'
            redirect_url='/home'
            formClass='login'
            fields={this.state.body.content.login_form.fields}
            csrf={this.state.body.content.login_form.csrf}
            submit_button={this.state.body.content.login_form.submit_button}
            key='loginform' />
        );
      }
      if (this.state.body.content.goto_signup !== undefined) {
        foot.push(
          <Link key='forgotpass' className="btn small-text" to="/forgotten_password">
            {this.state.body.content.goto_signup.forgotten_password}
          </Link>
        );
        foot.push(
          <Link key='gotologin' className="btn small-text" to="/signup" size='small'>
            {this.state.body.content.goto_signup.not_registered} {this.state.body.content.goto_signup.register}
          </Link>
        );
      }
      return (

        <div id='loginPage' className='page'>
          {navbar}
          <div id='loginContent' className='content'>
            <Container maxWidth="xs" className="my-container">
              <div className="avatar">
                <Avatar>
                  <LockOutlinedIcon />
                </Avatar>
              </div>
              {form}
              <div className="foot mt-10">
                {foot}
              </div>
            </Container>
          </div>
          <div id='loginFooter' className='footer'>
          </div>
        </div>
      );
    }
    return (
      <div />
    )
  }
}
