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
    return(
        <div className={styles.bannerContainer}>
            <Slider {...settings} >
                {
                    data?.map((item , index)=>{
                        return(
                            <div key={`slickBanner${item.id}`} className={styles.subContainer}>
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
                                    <Image src={item.image} width={300} height={300} alt="banner" /> 
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