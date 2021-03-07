//My things
import MyComponent from '../templates/MyComponent.js'
import getFormFields from '../methods/getFormFields.js';
import GetHistoricPrices from '../methods/getHistoricPrices.js'
import GetCoins from '../methods/GetCoins.js'
//Router
import { Link, Redirect } from 'react-router-dom';
//Material
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


export default class MovementForm extends MyComponent {
  constructor(props, postUrl, redirectUrl) {
    super(props, props.post_url, 'POST');
    this.content = [];
    this.value = '';
  }
  componentDidMount() {
    this.setState({active: "bitcoin"});
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
        <Container maxWidth="sm" className="my-container">
          <Typography component="h2" variant="h6" color="primary" gutterBottom>
            {this.props.title}
          </Typography>
        <form className={this.props.formClass}>
          <div className="form-movement-type">
            {this.content[0]}
          </div>
          <div className="form-movement-type">
            {this.content[2]}
          </div>
          {this.content[1]}
          <div className="form-movement-price">
            {this.content[3]}
            {this.content[4]}
          </div>
          <div className="form-movement-price">
            {this.content[6]}
            <GetCoins method={this.handleChange} market={false}/>
          </div>
          <div className="form-movement-price">
            <GetHistoricPrices
              method={this.handleChange}
              date={this.state.date}
              active={this.state.active}
              label={this.props.fields[7].hint}
            />
          </div>
          <div className="form-movement-price">
            {this.content[8]}
            {this.content[9]}
          </div>
          <input
            type="hidden"
            name="csrf_token"
            value={this.props.csrf_token}
          />
          <div className="mt-10 mb-10">
            <Button
              variant="outlined"
              color= "primary"
              onClick={this.onSubmit}
              fullWidth>
              {this.props.submit_button}
            </Button>
          </div>
        </form>
        </Container>
      )
    } else {
      return <Redirect to={this.props.redirect_url} />
    }
  }
}
