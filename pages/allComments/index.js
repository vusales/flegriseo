import React , {useState} from "react";
import styles from "./index.module.scss";
import CommonLayout from "../../layout/commonLayout";
import { Grid , Container , Paper , Pagination } from "@mui/material";
import SingleCommentComponent from "../../components/SingleCommentComponent";


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


const AllComments = () => {
    const [page , setPage] = useState(1); 


    const handleChange = (event , value) => {
        setPage(value); 
    }

    return(
       <CommonLayout>
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


export default AllComments ; 