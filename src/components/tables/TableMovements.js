//My things
import { TableItemMovement } from './TableItems.js';
//Material
import Typography from '@material-ui/core/Typography';
import TableHead from '@material-ui/core/TableHead';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Container from '@material-ui/core/Container';



export default function TableMovements(movements, reduced, withContainer) {
  const result = [];
  const tableHead = [];
  for (var i = 0; i < movements.movements.length; i++) {
    result.push(
      <TableItemMovement
        key={i}
        movement={movements.movements[i]}
        reduced={reduced}
      />
    );
  }
  tableHead.push(
    <TableCell
      key={0}>
      {movements.head[0].name}
    </TableCell>
  );
  for (var i = 1; i < movements.head.length; i++) {
    tableHead.push(
      <TableCell
        key={i}
        align='right'>
        {movements.head[i].name}
      </TableCell>
    );
  }
  if (withContainer) {
    return (
      <Container maxWidth={reduced ? "sm" : "md"} className="my-container home-movements">
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          {movements.title}
        </Typography>
        <Table size="small" aria-label="a dense table">
          <TableHead className='table-head'>
            <TableRow>
            {tableHead}
            </TableRow>
          </TableHead>
          <TableBody className="text-12">
            {result}
          </TableBody>
        </Table>
      </Container>
    );
  } else {
    return (
      <>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          {movements.title}
        </Typography>
        <Table size="small" aria-label="a dense table">
          <TableHead className='table-head'>
            <TableRow>
            {tableHead}
            </TableRow>
          </TableHead>
          <TableBody>
            {result}
          </TableBody>
        </Table>
      </>
    );
  }

}
