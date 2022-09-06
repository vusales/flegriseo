import react from "react"
import styles from "./index.module.scss";
import CommonLayout from "../../layout/commonLayout";
import Container from '@mui/material/Container';
import { Grid ,  Paper } from "@mui/material";
import ProductDetailsComponent from "../../components/ProductDetailsComponent";
import ProductDetailsCardsComponent from "../../components/ProductDetailsCardsComponent";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CommentsComponent from "../../components/CommentsComponent";


const detailsCardDemo = [
    {
        id:1 , 
        icon: <BusinessCenterIcon /> , 
        title: "Тариф" , 
        detail: "Стандарт", 
    },
    {
        id:2 , 
        icon: <PeopleOutlineIcon /> , 
        title: "География" , 
        detail: "Все страны", 
    },
    {
        id:3 , 
        icon: <AvTimerIcon/> , 
        title: "Время запуска" , 
        detail: "В течении ± 2 часов", 
    },
    {
        id:4, 
        icon: <CreditCardIcon/> , 
        title: "Источник" , 
        detail: "Официальные источники", 
    },
]; 

const demoComments = [
    {
    image: "/cardImg.png" , 
    title: "Дарья Шапошник" , 
    comment: "Супер смм-сервис. Очень оперативно работают. Обратилась к ним, чтоб раскрутили мой аккаунт в Инстаграм и помогли набрать целевую аудиторию. Они с поставленной задачей справились. Всё сделали качественно, быстро и самое главное недорого. Очень довольна, что обратилась именно к ним. Спасибо." , 
    },
    {
    image: "" , 
    title: "Дарья Шапошник" , 
    comment: "Очень оперативно работают. Спасибо." , 
    },

]



const ProductDetails = () => {
    return (
        <CommonLayout>
            <Container>
                <Grid container spacing={2} >
                    <Grid item xs={12} md={3}></Grid>
                    <Grid item xs={12} md={9} >
                        <Paper elevation={2} className={styles.papper}>
                            <ProductDetailsComponent />
                            <Grid container spacing={2} p={3}>
                                {
                                    detailsCardDemo?.map((item, index)=>{
                                        return(
                                            <ProductDetailsCardsComponent
                                            key={`detailsCard${index}-${item.id+1}`}
                                            data={item}
                                            />
                                        )
                                    })
                                }
                            </Grid>

                            <div className={styles.productDescriptionContainer}>
                                <p>- Качественные лайки с охватом и показами. Повышают вовлеченность и взаимодействие.</p>
                                <p>Лайки позволяющие вывести фотографию в ТОП и тренды Инстаграм. Заказывайте максимальное доступное количество премиальных лайков и лайков с охватом на нужный вам пост (будь то фото или видео). В большинстве случаев данного действия достаточно, чтобы ваша фотография (или видеоролик, публикация) попала в рекомендации Инстаграм. Дополнительно можете воспользоваться услугой увеличения активности, сохранения поста и заказа целевых комментариев под пост.

                                В случае если у вас уже давно создан аккаунт в социальной сети Instagram. Для вас скорее всего уже давно ведомо, собственно что это лайки дают в продвижении публикаций. И почему так важно, и для чего важно продвижение в Инстаграме через рекламу. По статистике социальной сети и нашим собственным наблюдениям, фото посты и видео посты в продвижении показывают более высокую динамику попадания в тренды, при статистике превышающей среднестатистическую статистику инстаграм постов у других пользователей социальной сети.

                                Численность лайков в Инстаграме впрямую отображает, как помещенные вами фото или видеоролики пришлись по вкусу юзерам. На каждый заказ по данной услуге, вы получаете небольшой бонус в виде лайков. Высокий охват поста, и дополнительные посещения профиля, а также сохранения вашей публикации в избранное при крупном заказе - гарантированы!

                                Пользователи, которые ставят лайки на фотографию, все имеют фотографию в профиле. Качественное выполнение услуги с гарантией. Высокая скорость и наилучшее качество всех предоставляемых услуг по Инстаграм лайкам. Большинство пользователей из России, после идёт Украина и Беларусь с Казахстаном.

                                Лайки СМО Сервис повышают охват и вовлеченность, положительно влияют на статистику коммерческих бизнес аккаунтов. Наши лайки для Инстаграм абсолютно безопасны для ваших личных и бизнес профилей, фото и видео публикаций. Качественные лайки от реальных живых и активных пользователей социальной сети, которые помогут попасть вашим постам (видео и фото) в рекомендации Инстаграм.</p>
                            </div>


                            <CommentsComponent 
                            data={demoComments}
                            />


                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </CommonLayout>
    )
}

export default ProductDetails ; 