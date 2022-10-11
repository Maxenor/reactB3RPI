import Table from 'react-bootstrap/Table';

function BasicTable() {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>Name</th>
          <th>Color</th>
          <th>Cost</th>
          <th>Power</th>
          <th>Toughness</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Rasaad yn Bashir</td>
          <td>white</td>
          <td>3</td>
          <td>0</td>
          <td>3</td>
        </tr>
        <tr>
          <td>Wyleth, Soul of Steel</td>
          <td>white</td>
          <td>3</td>
          <td>0</td>
          <td>3</td>
        </tr>
        <tr>
        <td>Sram</td>
          <td>white</td>
          <td>3</td>
          <td>0</td>
          <td>3</td>
        </tr>
        <tr>
        <td>Puresteel Paladin</td>
          <td>white</td>
          <td>3</td>
          <td>0</td>
          <td>3</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default BasicTable;