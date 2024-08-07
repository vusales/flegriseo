import React, {
  useState , 
  useEffect , 
} from "react"; 
import styles from "./index.module.scss";
import SearchIcon from '@mui/icons-material/Search';
import {searchApi } from "../../../api/productContent";
import { useRouter } from "next/router";

const Search = ({containerStyle}) => {
  const router  =  useRouter(); 
  const  [searchText , setSearcText ] = useState(""); 

  useEffect(()=>{
  },[searchText]);

  return(
      <div className={styles.searchContainer}  style={containerStyle}>
        <div className={styles.form}>
          <input 
          type="text" 
          name="search" 
          className={styles.searchInput}
          placeholder="Search..."
          value={searchText}
          onChange={(e)=>setSearcText(e.target.value)}
          />
        </div>
        <button 
        className={styles.submitButton}
        onClick={()=> router.push({
          pathname: "/SearchDetails",
          query: { searchText: searchText },
        })}
        > 
          <SearchIcon/>
        </button>
      </div>
  )
}

Search.getInitialProps = async (ctx) => {
};


export default Search ; 