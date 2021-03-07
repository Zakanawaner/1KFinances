//My things
import { TableItemWallet } from '../tables/TableItems.js';
//Material
import Typography from '@material-ui/core/Typography';
import TableHead from '@material-ui/core/TableHead';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Container from '@material-ui/core/Container';


function HomeWallet(wallet) {
  const result = [];
  const tableHead = [];
  for (var i = 0; i < wallet.wallet.length; i++) {
    result.push(
      <TableItemWallet
        key={i}
        active={wallet.wallet[i]}
        reduced={true}
      />
    );
  }
  tableHead.push(
    <TableCell
      key={0}>
      {wallet.head[0].name}
    </TableCell>
  );
  for (var i = 1; i < wallet.head.length; i++) {
    tableHead.push(
      <TableCell
        key={i}
        align='right'>
        {wallet.head[i].name}
      </TableCell>
    );
  }
  return (
    <Container maxWidth="xs" className="my-container home-movements">
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        {wallet.title}
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
    </Container>
  );
}


export default HomeWallet;
