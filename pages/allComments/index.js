import React , {useState} from "react";
import styles from "./index.module.scss";
import CommonLayout from "../../layout/commonLayout";
import { Grid , Container , Paper , Pagination } from "@mui/material";
import SingleCommentComponent from "../../components/SingleCommentComponent";
import { getCatalogData } from "../../api/catalogContent";



const demoComments = [
    {
    image: "" , 
    title: "Дарья Шапошник" , 
    comment: "Супер смм-сервис. Очень оперативно работают. Обратилась к ним, чтоб раскрутили мой аккаунт в Инстаграм и помогли набрать целевую аудиторию. Они с поставленной задачей справились. Всё сделали качественно, быстро и самое главное недорого. Очень довольна, что обратилась именно к ним. Спасибо." , 
    },
    {
    image: "" , 
    title: "Дарья Шапошник" , 
    comment: "Очень оперативно работают. Спасибо." , 
    },

]


const AllComments = ({catalog}) => {
    const [page , setPage] = useState(1); 


    const handleChange = (event , value) => {
        setPage(value); 
    }

    return(
       <CommonLayout catalog={catalog}>
        <Container>
            <Paper elevation={2} className={styles.papper}>
                <Grid container>
                    <Grid item  xs={12} >
                        <div className={styles.titleCon}>
                            <h2>Service catalog</h2>
                            <div className={styles.line}></div>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        {
                            demoComments.map(
                            (comment, index)=>
                            <SingleCommentComponent
                            key={`allcomments${index}`}
                            data={comment}
                            rating={true}
                            />
                            )
                        }
                    </Grid>
                    <Grid item xs={12} >
                        <div className={styles.paginationCon}>
                            <Pagination 
                            count={20} 
                            page={page} 
                            onChange={handleChange}
                            variant="outlined"
                            size="small"
                            />
                        </div>
                    </Grid>
                </Grid>
            </Paper> 
        </Container>
       </CommonLayout>
    )
}


export const getStaticProps = async (context) => {

    // this request have to be each page 
    const catalogData =  await getCatalogData() ; 
    const catalog =  catalogData.data ;
    // *********************** 
  
    
   
    return {
      props : {
        catalog , 
      } 
    }
}


export default AllComments ; 