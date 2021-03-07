//My things
import MyComponent from '../templates/MyComponent.js'


export default class Root extends MyComponent {
  constructor(props) {
    super(props, '/welcome');
  }
  render () {
    var to_home = super.render();
    if (to_home == null) {
      var navbar = [];
      if (this.state.body !== undefined) {
        if (this.state.body.navbar !== undefined) {
          navbar = this.getNavbar();
        }
      }
      return (
        <div id='rootPage' className='page'>
          {navbar !== undefined ? navbar : null}
          <div id='rootContent' className='content'>
          </div>
          <div id='rootFooter' className='footer'>
          </div>
        </div>
      );
    } else {
      return to_home
    }
  }
}
