import { useEffect, useRef, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from "./HeroSection.module.css"

import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function HeroSection() {
    const [heroSectionProducts, setHeroSectionProducts] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=3&skip=79')
            .then(res => res.json())
            .then(data => setHeroSectionProducts(data.products))
    }, [])
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <section className={`${styles.heroSection}`}>
            <Swiper
                cssMode={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                pagination={
                    { clickable: true, }
                }
                mousewheel={true}
                keyboard={true}
                modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className={`container ${styles.swiper}`}
            >
                {
                    heroSectionProducts.length > 0 &&
                    heroSectionProducts.map(product =>
                        <SwiperSlide
                            style={{backgroundImage:`url(${product.thumbnail})`}}
                            className={styles.swiperSlide}
                            key={product.id}
                        >
                            <div className={styles.content} >
                                <h2>{product.title}</h2>
                                <p>{product.description.split(",")[0]}.</p>
                                <button>Shop Now</button>
                            </div>
                        </SwiperSlide>
                    )
                }
                <div className={styles.autoplayProgress} slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </section>
    )
}
