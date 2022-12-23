import React , {
    useEffect , 
    useState , 
} from "react";
import styles from "./index.module.scss";
import { Grid , Container} from "@mui/material";
import CommonLayout from "../../layout/commonLayout";
import FilterCatalog from "../../components/FilterCatalog";
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import Card from "../../components/Card";
import FilterButtons from "../../components/FilterButtons";
// api
import { getProducts , filter  } from "../../api/productContent";
import {getCatalogData} from "../../api/catalogContent"; 

// ***




const Filter = ({products , catalog , query }) => {
    const [ dynamicProducts , setDynamicProducts ] = useState([]); 
    const [ subCategories , setSubCategories ] = useState([]); 

    useEffect(()=>{setDynamicProducts(products)},[]);

    useEffect(()=> {
        getFilteredData(); 
        getSuitableSubCategories(); 
    } , [query.categoryId , query.subCategoryId]); 

    const getFilteredData = async () => {
        try {
            if(query.categoryId || query.subCategoryId ){
                console.log("Query in Filter" , query );
                const filteredProducts =  await filter(query); 
                console.log("filtered products" ,  filteredProducts  );
                setDynamicProducts(filteredProducts.products); 
            }
        }catch(err) {
            console.log("error" , err) ; 
        }
    }


    const getSuitableSubCategories = () => {
        if(query.categoryId) {
            let filteredData =  catalog.filter((item) => item._id === query.categoryId ); 
            setSubCategories(filteredData); 
        }else {
            return ; 
        }
    }

    return (
        <CommonLayout catalog={catalog}>
            <Container>
                <Grid container spacing={2} > 
                    <Grid item  xs={12} md={3}>
                        <FilterCatalog
                        data={catalog}
                        /> 
                    </Grid>
                    <Grid item  xs={12} md={9}>
                        <Grid container spacing={2} sx={{padding:0}}>
                            {
                                subCategories.length ? 
                                <Grid item xs={12}>
                                    <FilterButtons 
                                    data={subCategories}
                                    />
                                </Grid>
                                :null
                            }
                            {
                                dynamicProducts?.map((item, index)=>{
                                    return (
                                        <Card
                                        key={`filter=${index}`}
                                        data={item}
                                        md={4}
                                        sm={6}
                                        xs={12}
                                        />
                                    )
                                })
                            }  
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </CommonLayout>  
    )
}

Filter.getInitialProps = async (context) => {
    const [ result ]= await Promise.all([
        getProducts() , 
    ]); 
    const { products } = result ; 

    // this request have to be each page 
    const catalogData =  await getCatalogData() ; 
    const catalog =  catalogData.data ;
    // ***********************
    return {
      products, 
      catalog ,
      query :  context.query  , 
        
    }
}

export default Filter ;