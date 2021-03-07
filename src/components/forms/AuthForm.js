//My things
import MyComponent from '../templates/MyComponent.js'
import getFormFields from '../methods/getFormFields.js';
//Router
import { Link, Redirect } from 'react-router-dom';
//Material
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';


export default class AuthForm extends MyComponent {
  constructor(props, postUrl, redirectUrl) {
    super(props, props.post_url, 'POST');
    this.content = [];
  }
  componentDidMount() {
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.apiEndpoint(this.state);
  }
  render() {
    if (!this.state.status) {
      this.content = getFormFields(this.props.fields, this.handleChange);
      return (
        <form className={this.props.formClass}>
          {this.content}
          <input
            key='1'
            type="hidden"
            name="csrf_token"
            value={this.props.csrf_token}
          />
          <Button
            key='2'
            variant="outlined"
            color= "primary"
            onClick={this.onSubmit}
            fullWidth>
            {this.props.submit_button}
          </Button>
        </form>
      )
    } else {
      return <Redirect to={this.props.redirect_url} />
    }
  }
}
