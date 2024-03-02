import usescrollreataurent from '../Hooks/usescrollreataurent'
import Slider from "react-slick";
import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TopRatedRestaurant } from './TopRatedRestaurant';


export const Body = () => {

    const { data } = usescrollreataurent()

    console.log(data);

    const { header, imageGridCards } = data

        

    let sliderRef = useRef("");

    console.log(sliderRef);

    const next = () => {
        sliderRef.current.slickNext();

    };
    const previous = () => {
        sliderRef.current.slickPrev();

    };

    const settings = {
        speed: 1000,
        slidesToShow: 8,
        slidesToScroll: 5,
    }

    return (
        <div className='max-md:mx-10 mx-40 my-10 pb-5'>
            <div className=" border-b-2 border-slate-200 pb-4" >
                <div className='flex justify-between'>
                    <div>
                        <h1 className="text-2xl font-bold">{header?.title}</h1>
                    </div>
                    <div className='inline-flex mx-4'>
                        <ArrowLeft className='size-7 mx-2 rounded-full p-1 bg-slate-300' onClick={previous} />
                        <ArrowRight className='size-7 rounded-full p-1 bg-slate-300' onClick={next} />
                    </div>
                </div>
                <Slider
                    className='flex cursor-pointer'
                    ref={sliderRef}
                    {...settings}>
                    {
                        imageGridCards?.info.map((imgitem) => {
                            console.log(sliderRef);


                            if (imgitem.entityId > 5 === false) {
                                const numbersString = imgitem.entityId.replace(/\D/g, '');
                                let splitnum = numbersString.split('');
                                splitnum.shift();
                                let id = splitnum.join("");

                                console.log(id, imgitem?.accessibility?.altText);

                                return (
                                    <Link key={imgitem.id} to={'/specificdish/' + id || imgitem.entityId}>
                                        <img key={imgitem.id}
                                            className=''
                                            width={"120em"}
                                            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" + imgitem?.imageId} alt="img-not-found" />
                                    </Link>
                                )
                            }

                        })
                    }
                </Slider>
            </div >
            < TopRatedRestaurant />
        </div>
    )
}