import DataContext from '../DataContext';
import { useContext } from 'react';
import './styles.css';
import '../../styles/global.css';

function ServersTable() {
  const { data, setData, servidoresSelecionados, cpuTotal, memoriaTotal, discoTotal } = useContext(DataContext);
  function checkItem(item) {
    item.checked = !item.checked;
    setData(data);
    servidoresSelecionados();
    cpuTotal();
    memoriaTotal();
    discoTotal();
  }
  return (
    <div className="box">
      <div >
        <h3>Tabela de servidores</h3>
      </div>
      <div className="boxBody">
        <div className="containerTabela">
          <table className="tabela">
            <thead>
              <tr>
                <th>Select</th>
                <th>Hostname</th>
                <th>Memória</th>
                <th>vCPUs</th>
                <th>Disco</th>
                <th>IP</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((item) =>
                  <tr key={item.id_vm}>
                    <td>
                      <input
                        type="checkbox"
                        value={item.id_vm}
                        onChange={() => checkItem(item)} />
                    </td>
                    <td>{item.hostname}</td>
                    <td>{item.configuracao.memoryProvisioned}</td>
                    <td>{item.configuracao.cpuProvisioned}</td>
                    <td>{item.configuracao.totalDiskGB}</td>
                    <td>{item.ip}</td>
                  </tr>
                )
              }

            </tbody>
          </table>
        </div>

      </div>
    </div >

  );
}

export default ServersTable;