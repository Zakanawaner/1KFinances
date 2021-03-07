//My things
import MyComponent from '../templates/MyComponent.js';
import TableMovements from '../tables/TableMovements.js';
import HomeWallet from '../objects/HomeWallet.js';
import HomeMarket from '../objects/HomeMarket.js';
//Material
import Container from '@material-ui/core/Container';


export default class Home extends MyComponent {
  constructor(props) {
    super(props, '/home');
  }
  render () {
    super.render();
    if (this.state.body !== undefined) {
      if (this.state.body.navbar !== undefined) {
        var navbar = this.getNavbar();
      }
      if (this.state.body.content !== undefined) {
        if (this.state.body.content.movements !== undefined) {
          var movements = TableMovements(this.state.body.content.movements, true, true);
        }
        if (this.state.body.content.wallet !== undefined) {
          var wallet = HomeWallet(this.state.body.content.wallet);
        }
        if (this.state.body.content.market !== undefined) {
          var market = HomeMarket(this.state.body.content.market);
        }
      }
    }
    return (
      <div id='homePage' className='page'>
        {navbar !== undefined ? navbar : null}
        <div id='homeContent' className='content'>
          {movements !== undefined ? movements : null}
          {wallet !== undefined ? wallet : null}
          {market !== undefined ? market : null}
        </div>
        <div id='homeFooter' className='footer'>
        </div>
      </div>
    );
  }
}
