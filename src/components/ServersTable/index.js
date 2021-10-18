import { useState } from 'react';
import DataContext from '../DataContext';
import { useContext } from 'react';
import './styles.css';
import '../../styles/global.css';

function ServersTable() {
  const { data, setData, servidoresSelecionados, cpuTotal, memoriaTotal, discoTotal } = useContext(DataContext);
  const [ordem, setOrdem] = useState({
    hostname: 0,
    memoria: 0,
    cpu: 0,
    disco: 0,
  })
  function checkItem(item) {
    item.checked = !item.checked;
    setData(data);
    servidoresSelecionados();
    cpuTotal();
    memoriaTotal();
    discoTotal();
  }
  function ordenar(campo) {
    switch (campo) {
      case 'hostname':
        if (ordem.hostname) {
          data.sort((a, b) => b.hostname > a.hostname);
          setOrdem(state => ({ ...state, hostname: false }));
        } else {
          data.sort((a, b) => a.hostname > b.hostname);
          setOrdem(state => ({ ...state, hostname: true }));
        }
        break;
      case 'memoria':
        if (ordem.memoria) {
          data.sort((a, b) => Number(b.configuracao.memoryProvisioned) - Number(a.configuracao.memoryProvisioned));
          setOrdem(state => ({ ...state, memoria: false }));
        } else {
          data.sort((a, b) => Number(a.configuracao.memoryProvisioned) - Number(b.configuracao.memoryProvisioned));
          setOrdem(state => ({ ...state, memoria: true }));
        }
        break;
      case 'cpu':
        if (ordem.cpu) {
          data.sort((a, b) => Number(b.configuracao.cpuProvisioned) - Number(a.configuracao.cpuProvisioned));
          setOrdem(state => ({ ...state, cpu: false }));
        } else {
          data.sort((a, b) => Number(a.configuracao.cpuProvisioned) - Number(b.configuracao.cpuProvisioned));
          setOrdem(state => ({ ...state, cpu: true }));
        }
        break;
      case 'disco':
        if (ordem.disco) {
          data.sort((a, b) => Number(b.configuracao.totalDiskGB) - Number(a.configuracao.totalDiskGB));
          setOrdem(state => ({ ...state, disco: false }));
        } else {
          data.sort((a, b) => Number(a.configuracao.totalDiskGB) - Number(b.configuracao.totalDiskGB));
          setOrdem(state => ({ ...state, disco: true }));
        }
        break;
    }
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
                <th>
                  <a className="pointer" onClick={() => ordenar('hostname')}>
                    Hostname
                  </a>
                </th>
                <th>
                  <a className="pointer" onClick={() => ordenar('memoria')}>
                    Memória
                  </a>
                </th>
                <th>
                  <a className="pointer" onClick={() => ordenar('cpu')}>
                    vCPUs
                  </a>
                </th>
                <th>
                  <a className="pointer" onClick={() => ordenar('disco')}>
                    Disco
                  </a>
                </th>
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