import { useContext } from 'react';
import DataContext from '../DataContext';
import './styles.css';
import '../../styles/global.css';

function Summary() {
  const { total } = useContext(DataContext);

  return (
    <div className="box">
      <div >
        <h3>Sumário dos recursos dos servidores</h3>
      </div>
      <div className="boxBody">
        <div className="containerTabela">
          <table className="tabelaSumario">
            <tbody>
              <tr>
                <th scope="row">Servidores Selecionados</th>
                <td>{total.servidores} servidores selecionados</td>
              </tr>
              <tr>
                <th scope="row">Total de Memória</th>
                <td>{total.memoria} GB</td>
              </tr>
              <tr>
                <th scope="row">Total de CPUs</th>
                <td>{total.cpu} vCPUs</td>
              </tr>
              <tr>
                <th scope="row">Total de Discos</th>
                <td>{total.discos} GB</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div >

  );
}

export default Summary;