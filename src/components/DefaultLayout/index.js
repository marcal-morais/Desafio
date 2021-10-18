import { useState, useEffect } from 'react';
import Header from '../Header';
import './styles.css';
import DataContext from '../../components/DataContext';
import api from '../../services/api';

function DefaultLayout({ children }) {
  const [data, setData] = useState();
  const [total, setTotal] = useState(
    {
      servidores: 0,
      memoria: 0,
      cpu: 0,
      discos: 0,
    }
  );
  useEffect(() => {
    async function getData() {
      try {
        const response = await api.get('servers');
        setData(response.data);
      } catch (error) {
        console.log(error)
      }
    }
    getData();

  }, []);

  function servidoresSelecionados() {
    let totalServidores = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].checked) totalServidores++;
    }
    setTotal(state => ({ ...state, servidores: totalServidores }));
  }

  function memoriaTotal() {
    let totalMemoria = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].checked)
        totalMemoria += data[i].configuracao.memoryProvisioned;
    }
    setTotal(state => ({ ...state, memoria: totalMemoria }));
  }

  function cpuTotal() {
    let totalCpu = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].checked)
        totalCpu += data[i].configuracao.cpuProvisioned;
    }
    setTotal(state => ({ ...state, cpu: totalCpu }));
  }

  function discoTotal() {
    let totalDisco = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].checked)
        totalDisco += data[i].configuracao.totalDiskGB;
    }
    setTotal(state => ({ ...state, discos: totalDisco }));
  }
  if (!data)
    return null;
  return (
    <>
      <Header />
      <div className="container">
        <DataContext.Provider value={{
          data,
          setData,
          servidoresSelecionados,
          total,
          memoriaTotal,
          discoTotal,
          cpuTotal
        }}>
          {children}
        </DataContext.Provider>
      </div>
    </>
  );
}

export default DefaultLayout;
