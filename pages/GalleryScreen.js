import React from 'react';
import Layout from './Layout/Layout';
import ImageGallery from 'react-image-gallery';
import style from '../styles/About.module.css'
import 'react-image-gallery/styles/css/image-gallery.css'
import 'react-image-gallery/styles/scss/image-gallery.scss'

const images = [
    {
        original: 'https://i.ibb.co/r5zjB7r/1.jpg',
        thumbnail: 'https://i.ibb.co/7zfMBQV/1.jpg',
    },
    {
        original: 'https://i.ibb.co/3CnqZBS/2.jpg',
        thumbnail: 'https://i.ibb.co/PYVySjm/2.jpg',
    },
    {
        original: 'https://i.ibb.co/whMN5jv/3.jpg',
        thumbnail: 'https://i.ibb.co/k4fp9vP/3.jpg',
    },
    {
        original: 'https://i.ibb.co/pv7bw3Q/4.jpg',
        thumbnail: 'https://i.ibb.co/Cw9hgT7/4.jpg',
    },
    {
        original: 'https://i.ibb.co/CHssvY2/5.jpg',
        thumbnail: 'https://i.ibb.co/FXYhd88/5.jpg',
    },
    {
        original: 'https://i.ibb.co/hMFdL8j/6.jpg',
        thumbnail: 'https://i.ibb.co/HCSsqvp/6.jpg',
    },
    {
        original: 'https://i.ibb.co/mb8QtTQ/8.jpg',
        thumbnail: 'https://i.ibb.co/s51VwgT/8.jpg',
    },
    {
        original: 'https://i.ibb.co/0Xhfd9v/9.jpg',
        thumbnail: 'https://i.ibb.co/nzqskwC/9.jpg',
    },
    {
        original: 'https://i.ibb.co/T0R3SzQ/crest.jpg',
        thumbnail: 'https://i.ibb.co/k6T9qZr/crest.jpg',
    },
    {
        original: 'https://i.ibb.co/0XQ7Np6/gift-item.jpg',
        thumbnail: 'https://i.ibb.co/4N9nhVP/gift-item.jpg',
    },
    {
        original: 'https://i.ibb.co/rGRL2PC/gift-items.jpg',
        thumbnail: 'https://i.ibb.co/ZGjdhj3/gift-items.jpg',
    },
    {
        original: 'https://i.ibb.co/4J7yX52/IMG-0263.jpg',
        thumbnail: 'https://i.ibb.co/r71S1j3/IMG-0263.jpg',
    },
    {
        original: 'https://i.ibb.co/bNszRmg/IMG-0798.jpg',
        thumbnail: 'https://i.ibb.co/7trcLmr/IMG-0798.jpg',
    },
    {
        original: 'https://i.ibb.co/d7jGTbh/IMG-7247.jpg',
        thumbnail: 'https://i.ibb.co/TPPGZVc/IMG-7247.jpg',
    },
    {
        original: 'https://i.ibb.co/w6MsNG2/jute-bag-1.jpg',
        thumbnail: 'https://i.ibb.co/FWG0k2q/jute-bag-1.jpg',
    },
    {
        original: 'https://i.ibb.co/cbVm4Kc/printt-item.jpg',
        thumbnail: 'https://i.ibb.co/QJmXtjy/printt-item.jpg',
    },
    {
        original: 'https://i.ibb.co/824YHkp/web-pic-g-2.jpg',
        thumbnail: 'https://i.ibb.co/gjJhys7/web-pic-g-2.jpg',
    },
    {
        original: 'https://i.ibb.co/ZxWwXLt/web-pic-g-3.jpg',
        thumbnail: 'https://i.ibb.co/yktDZRd/web-pic-g-3.jpg',
    },
    {
        original: 'https://i.ibb.co/RDgWDtz/Whats-App-Image-2022-03-07-at-12-36-39-PM.jpg',
        thumbnail: 'https://i.ibb.co/vZ52hRf/Whats-App-Image-2022-03-07-at-12-36-39-PM.jpg',
    },
    {
        original: 'https://i.ibb.co/pP8Zgch/wood.jpg',
        thumbnail: 'https://i.ibb.co/5xDqJD3/wood.jpg',
    }
];

const GalleryScreen = () => {
    return (
        <Layout title="Gallery">
            <section className={style.body}>
                <div className='pt-12 pb-12'>
                    <ImageGallery items={images} />;
                </div>
            </section>
        </Layout>
    );
};

export default GalleryScreen;