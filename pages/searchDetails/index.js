import React, {
    useEffect , 
    useState , 
} from 'react';
import { useRouter } from 'next/router';
import CommonLayout from "../../layout/commonLayout";
import {getCatalogData} from "../../api/catalogContent"; 
import Container from '@mui/material/Container';
import { Grid ,  Paper } from "@mui/material";
import styles from "./index.module.scss";
import Card from "../../components/Card";
import  {searchApi} from "../../api/productContent"; 


const SearchDetails = ({
    catalog , 
    searchResults ,
}) =>{ 
    const router =  useRouter(); 
    const [searchedResults ,  setSearchedResults] =  useState([]) ; 
    const [isRefreshing, setIsRefreshing] = React.useState(false);

   
    useEffect(()=>{
        console.log( "searchResults" ,  searchResults );
        refreshData();
    },[]);

    useEffect(() => {
        setSearchedResults(searchResults); 
        setIsRefreshing(false);
    }, [searchResults]);


    const refreshData = () => {
        router.replace(router.asPath);
        setIsRefreshing(true);
    }


    return (
    <CommonLayout
    catalog={catalog}
    >
        <Container>
            <Grid container spacing={2} >
                <Grid item xs={12} >
                    <Paper elevation={2} className={styles.papper}>
                        <Grid container spacing={2}>
                            {/* title */}
                            <Grid item xs={12}>
                                <div className={styles.titleCon} >
                                    <h1>Axtarış nətİcələrİ</h1>
                                    <div className={styles.line}></div>
                                </div>
                            </Grid>

                            {/* search results */}
                            {
                                searchedResults?.length ? 
                                searchedResults.map((item , index)=>{
                                    return (
                                        <Card
                                        key={`${index}cardsinsearch`}
                                        xs={3}
                                        md={3}
                                        data={item}
                                        containerStyle={styles.cardContainerCustomDesign}
                                        />
                                    )
                                })
                                :
                                <p>Heç bir məhsul tapılmadı</p>
                            }
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    </CommonLayout>
)};


export async function getServerSideProps (context) {
    const {searchText} = context.query ; 
    // this request have to be each page 
    const catalogData =  await getCatalogData() ; 
    const catalog =  catalogData.data ;
    // *********************** 

    const body =  {
        "title" : searchText , 
    }

    const results = await searchApi(body);

    return {
        props: {
            catalog , 
            searchResults: results || [] , 
        }
    }
}

// SearchDetails.getInitialProps = async (context) => {
//     const {searchText} = context.query ; 
//     // this request have to be each page 
//     const catalogData =  await getCatalogData() ; 
//     const catalog =  catalogData.data ;
//     // *********************** 

//     const body =  {
//         "title" : searchText , 
//     }

//     const results = await searchApi(body);

//     return {
//         catalog , 
//         searchResults: results || [] , 
//     }
// }


export default SearchDetails;
