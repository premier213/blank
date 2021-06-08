import { createContext, useState, useContext } from 'react';

export const nameContext = createContext({});
export const nameContextSetState = createContext({});

const NameProvider = ({ children }) => {
  const [name, setName] = useState('meysam');

  return (
    <nameContext.Provider value={name}>
      <nameContextSetState.Provider value={setName}>
        {children}
      </nameContextSetState.Provider>
    </nameContext.Provider>
  );
};

export const useNameState = () => useContext(nameContext);
export const useNameSetState = () => useContext(nameContextSetState);
export const useNameAction = () => {
  const setName = useNameSetState();
  const changeName = () => {
    setName('ali');
  };
  return { changeName };
};

export default NameProvider;
