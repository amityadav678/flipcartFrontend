// Componants/ContextApi/DataProvider.js

import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [productPropdata, setProductPropdata] = useState([]);

    return (
        <DataContext.Provider value={{ productPropdata, setProductPropdata }}>
            {children}
        </DataContext.Provider>
    );
};
