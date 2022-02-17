import React from 'react';
// import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { products } from '../store';

const SearchBar = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = data.filter((value) => {
      const combo = `${value.brand} ${value.model}`;
      return combo.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" placeholder={placeholder} onChange={handleFilter} />
        <div className="searchIcon"></div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 5).map((value, key) => {
            return (
              <a key={key} className="dataIcon" href={`/products/${value.id}`}>
                <p>
                  {value.brand} {value.model}
                </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
