import { createContext } from 'react';

const data = [];

const DataContext = createContext({
  data,
  setData: () => { },
  servidoresSelecionados: () => { }
});

export default DataContext;