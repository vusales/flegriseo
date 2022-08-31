import React from "react"; 
import styles from "./index.module.scss";
import { TextField , Input } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';



const Search = () => {

    return(
        <div className={styles.searchContainer}>
          <form>
            <input 
            type="text" 
            name="search" 
            className={styles.searchInput}
            placeholder="Search..."
             />
          </form>
          <button 
          className={styles.submitButton}
          type="submit"
          > 
            <SearchIcon/>
          </button>
        </div>
    )
}

Search.getInitialProps = async (ctx) => {
};


export default Search ; 