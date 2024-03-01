import usescrollreataurent from '../Hooks/usescrollreataurent'
import Slider from "react-slick";
import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';


export const Body = () => {

    const { data } = usescrollreataurent()

    const { header, imageGridCards } = data



    let sliderRef = useRef(null);

    const next = () => {
        sliderRef.slickNext();

    };
    const previous = () => {
        sliderRef.slickPrev();

    };


    const settings = {
        speed: 1000,
        slidesToShow: 8,
        slidesToScroll: 5,
    }

    let resid = []

    const filterdata = data?.gridElements?.infoWithStyle?.info.map(item => {


    })

    // let res = filterdata.shift().join('')

    // console.log(res);

    return (
        <div className="max-md:mx-10 mx-40 my-10 pb-5 border-b-2 border-slate-300" >
            <div className='flex justify-between'>
                <div>
                    <h1 className="text-2xl font-bold">{header?.title}</h1>
                </div>
                <div className='inline-flex mx-4'>
                    <ArrowLeft className='size-7 mx-2 rounded-full p-1 bg-slate-300' onClick={previous} />
                    <ArrowRight className='size-7 rounded-full p-1 bg-slate-300' onClick={next} />
                </div>
            </div>
            <Slider className='flex cursor-pointer' ref={slider => {
                sliderRef = slider;
            }}
                {...settings}>
                {
                    imageGridCards?.info.map((imgitem) => {

                        if (imgitem.entityId > 5 === false) {
                            const numbersString = imgitem.entityId.replace(/\D/g, '');
                            let idArray = numbersString.split('');
                            idArray.shift();
                            let id = idArray.join("");

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

    )
}
