import * as React from "react";

type Context = {
  format?: {};
  setFormat?: React.Dispatch<React.SetStateAction<{}>>;
};
export const FilterContext = React.createContext<Context>({});
type Props = {
  children: React.ReactNode;
};
const FilterProvider: React.FC<Props> = ({ children }) => {
  let [format, setFormat] = React.useState({});
  return (
    <FilterContext.Provider value={{ format, setFormat }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
