import { createContext, useContext, useState } from "react";

const FiltersContext = createContext();

export const useFiltersContext = () => useContext(FiltersContext);

export const FiltersProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    category: "",
    age: "",
  });

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
