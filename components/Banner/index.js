import React from "react"; 
import styles from "./index.module.scss";
import Slider from "react-slick";
import Image from "next/image"; 
import Link from "next/link";


const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, 
            display: "block", 
            // ...styles.nextArrow ,
            backgroundColor: "#DADADA", 
            borderRadius: 100 ,
        }}
        onClick={onClick}
      ></div>
    );
  }
  
const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ 
            ...style,
            // display: "block", 
            // ...styles.prevArrow
            backgroundColor: "#DADADA", 
            borderRadius: 100 ,
            display:"flex", 
            alignItems:"center" , 
            justifyContent:"center",
        }}
        onClick={onClick}
      />
    );
}

var settings = {
    dots: false,
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1 ,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true , 
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
};


const Banner = ({data}) => {

    // const imageLoader = ({src , width , quality }) => {
    //     return `http://localhost:3002${src}?w=${width}&q=${quality || 75}` ; 
    // }

    return(
        <div className={styles.bannerContainer}>
            <Slider {...settings} >
                {
                    data?.map((item , index)=>{
                        console.log("BANNER IMAGE " , item );
                        return(
                            <div key={`slickBanner${item._id}`} className={styles.subContainer}>
                                <div className={styles.textContainer}>
                                    <div>
                                        <p className={styles.subTitle}>{item.intro}</p>
                                        <p className={styles.title}>{item.title}</p>
                                        <p className={styles.subTitleSecond}>{item.subTitle}</p>
                                    </div>
                                    
                                    <p className={styles.description}>{item.description}</p>

                                    {
                                        item.buttons && item.buttons.length ? 
                                        <div className={styles.buttonsContainer}>
                                            <Link href={item.buttons[0].link}>
                                                <a  className={styles.bannerButton}>{item.buttons[0].title}</a>
                                            </Link>
                                            <Link href={item.buttons[0].link}>
                                                <a 
                                                className={styles.bannerButton}
                                                style={{backgroundColor: "#000"}}
                                                >{item.buttons[1].title}</a>
                                            </Link>
                                        </div>
                                        :null
                                    }
                                </div>
                                <div className={styles.imageContainer}>
                                    <Image 
                                    src={"http://localhost:3002/images" + item?.uploadedFile?.path } 
                                    //src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"}
                                    width={300} 
                                    height={300} 
                                    alt={item?.uploadedFile?.path}  
                                    // loader={imageLoader}
                                    /> 
                                    {/* <img  src={"http://localhost:3002/public/images" + item.image}  alt ="banner image" /> */}
                                </div>
                         </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
} 


export default Banner;