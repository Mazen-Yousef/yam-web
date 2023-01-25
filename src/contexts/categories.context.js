import { createContext, useState,useEffect } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';
// import { getCategoriesAndDocuments,addCollectionAndDocuments } from '../utils/firebase/firebase.utils';
//  import {SHOP_DATA} from '../shop-data.js';


export const CategoriesContext = createContext({
  categoriesMap:{},
  });

export const CategoreisProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
 
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
     // console.log(categoryMap);
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []); 
  

//    useEffect(()=>{

//     addCollectionAndDocuments('categories', SHOP_DATA);

//  },[]);


  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};







