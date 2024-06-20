import React, { Children } from "react";
import { createContext, useState } from "react";


export const WatchListContext = createContext();

export const WatchListProvider = ( {children} ) => {
  const [watchList, setWatchList] = useState([])

    

  return (
    <WatchListContext.Provider value={[watchList, setWatchList]}>
        {children}
    </WatchListContext.Provider>
  )
}
