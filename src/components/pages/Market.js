//My things
import MyComponent from '../templates/MyComponent.js';
import MarketCoinInfo from '../objects/MarketCoinInfo.js';
import GetCoins from '../methods/GetCoins.js'


export default class Market extends MyComponent {
  constructor(props) {
    super(props, '/market');
    this.state = { coin: "bitcoin", options: [] };
  }

  handleChange = (event) => {
    this.setState({ coin: event.target.value });
  };

  render() {
    super.render();
    const result = this.state.coin !== "" ? this.state.coin : "bitcoin";
    const foot = [];
    var navbar = [];
    if (this.state.body !== undefined) {
      if (this.state.body.navbar !== undefined) {
        navbar = this.getNavbar();
      }

    }
    return (
      <div id='marketPage' className='page'>
        {navbar !== undefined ? navbar : null}
        <div id='marketContent' className='content'>
          <GetCoins coin={this.state.coin} method={this.handleChange} market={true} />
          <MarketCoinInfo id={result} />
        </div>
        <div id='marketFooter' className='footer'>
        </div>
      </div>
    );
  }
}
