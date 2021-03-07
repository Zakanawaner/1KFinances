//My things
import MyComponent from '../templates/MyComponent.js'
import AuthForm from '../forms/AuthForm.js'
//Router
import { Link } from 'react-router-dom';
//Material
import Container from '@material-ui/core/Container';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Avatar from '@material-ui/core/Avatar';


export default class Signup extends MyComponent {
  constructor(props) {
    super(props, '/signup');
  }
  render () {
    const form = [];
    const foot = [];
    var navbar = [];
    if (this.state.body !== undefined) {
      if (this.state.body.navbar !== undefined) {
        navbar = this.getNavbar();
      }
      if (this.state.body.content.signup_form !== undefined) {
        form.push(
          <AuthForm
            post_url='/signup'
            redirect_url='/home'
            formClass='signup'
            fields={this.state.body.content.signup_form.fields}
            csrf={this.state.body.content.signup_form.csrf}
            submit_button={this.state.body.content.signup_form.submit_button}
            key='signupform' />
        );
      }
      if (this.state.body.content.goto_login !== undefined) {
        foot.push(
          <Link key='gotologin' className="btn small-text" to="/login" size='small'>
            {this.state.body.content.goto_login.already_registered} {this.state.body.content.goto_login.login}
          </Link>
        );
      }
      return (
        <div id='signupPage' className='page'>
          {navbar}
          <div id='signupContent' className='content'>
            <Container maxWidth="xs" className="my-container">
              <div className="avatar">
                <Avatar>
                  <AddCircleOutlineOutlinedIcon />
                </Avatar>
              </div>
              {form}
              <div className="foot mt-10">
                {foot}
              </div>
            </Container>
          </div>
          <div id='signupFooter' className='footer'>
          </div>
        </div>
      );
    }
    return (
      <div />
    )
  }
}
