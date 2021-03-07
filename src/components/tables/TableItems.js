//Material
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


function TableItemMovement(props) {
  if (!props.reduced) {
    return (
      <TableRow className='movement'>
        <TableCell component="th" scope="row">
          {props.movement.date}
        </TableCell>
        <TableCell align="right">{props.movement.type}</TableCell>
        <TableCell align="right">{props.movement.platform}</TableCell>
        <TableCell align="right">{props.movement.price} {props.movement.currency}</TableCell>
        <TableCell align="right">{props.movement.amount} {props.movement.active}</TableCell>
        <TableCell align="right">{props.movement.active_price} {props.movement.currency}</TableCell>
        <TableCell align="right">{props.movement.commission} {props.movement.currency}</TableCell>
        <TableCell align="right">{props.movement.revenue}</TableCell>
      </TableRow>
    );
  } else {
    return (
      <TableRow className='movement'>
        <TableCell component="th" scope="row">
          {props.movement.date}
        </TableCell>
        <TableCell align="right">{props.movement.platform}</TableCell>
        <TableCell align="right">{props.movement.price} {props.movement.currency}</TableCell>
        <TableCell align="right">{props.movement.amount} {props.movement.active}</TableCell>
      </TableRow>
    );
  }
}

function TableItemWallet(props) {
  if (props.reduced) {
    return (
      <TableRow className='movement'>
        <TableCell component="th" scope="row">
          {props.active.name}
        </TableCell>
        <TableCell align="right">{props.active.total} {props.active.symbol}</TableCell>
      </TableRow>
    );
  } else {
    return (
      <p/>
    );
  }
}

export {
  TableItemMovement,
  TableItemWallet,
}
