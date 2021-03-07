//My things
import MyComponent from '../templates/MyComponent.js'
import TableMovements from '../tables/TableMovements.js'
import MovementForm from '../forms/MovementForm.js'


export default class Movements extends MyComponent {
  constructor(props) {
    super(props, '/movements');
  }
  render () {
    super.render();
    if (this.state.body !== undefined) {
      if (this.state.body.navbar !== undefined) {
        var navbar = this.getNavbar();
      }
      if (this.state.body.content !== undefined) {
        if (this.state.body.content.movements !== undefined) {
          var movements = TableMovements(this.state.body.content.movements, false, true);
        }
      }
      if (this.state.body.content !== undefined) {
        if (this.state.body.content.movement_form !== undefined) {
          var new_movement = <MovementForm
            post_url='/movements'
            redirect_url='/movements'
            formClass='new-movement'
            title={this.state.body.content.movement_form.title}
            fields={this.state.body.content.movement_form.fields}
            csrf={this.state.body.content.movement_form.csrf}
            submit_button={this.state.body.content.movement_form.submit_button}
            key='movementform' />
        }
      }
    }
    return (
      <div id='movementsPage' className='page'>
        {navbar !== undefined ? navbar : null}
        <div id='movementsContent' className='content'>
          {movements !== undefined ? movements : null}
          {new_movement !== undefined ? new_movement : null}
        </div>
        <div id='movementsFooter' className='footer'>
        </div>
      </div>
    );
  }
}
