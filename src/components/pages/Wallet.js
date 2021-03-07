//My things
import MyComponent from '../templates/MyComponent.js'
import WalletActive from '../objects/WalletActive.js'


export default class Wallet extends MyComponent {
  constructor(props) {
    super(props, '/wallet');
  }
  render () {
    super.render();
    const wallet = [];
    if (this.state.body !== undefined) {
      if (this.state.body.navbar !== undefined) {
        var navbar = this.getNavbar();
      }
      if (this.state.body.content !== undefined) {
        if (this.state.body.content.actives !== undefined) {
          for (var i = 0; i < this.state.body.content.actives.length; i++) {
            wallet.push(
              <WalletActive key={i} active={this.state.body.content.actives[i]} />
            );
          }
        }
      }
    }
    return (
      <div id='walletPage' className='page'>
        {navbar !== undefined ? navbar : null}
        <div id='walletContent' className='content'>
          {wallet}
        </div>
        <div id='walletFooter' className='footer'>
        </div>
      </div>
    );
  }
}
