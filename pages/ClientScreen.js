import React from 'react';
import PhotoAlbum from "react-photo-album";
import Layout from './Layout/Layout';

const photos = [
    { src: 'https://i.ibb.co/bgLKb7s/Basf-2.png', width: 20, height: 10 },
    { src: 'https://i.ibb.co/z8hNrJ8/alexander.png', width: 20, height: 10 },
    { src: 'https://i.ibb.co/1GqsnDD/Untitled-2-2.png', width: 20, height: 10 },
    { src: 'https://i.ibb.co/dgvFvGc/unicef.png', width: 20, height: 10 },
    { src: 'https://i.ibb.co/0F3dYhq/Redcre-2.png', width: 20, height: 10 },
    { src: 'https://i.ibb.co/wWm0mmJ/redapple-logo.png', width: 20, height: 10 },
    { src: 'https://i.ibb.co/5G4WgjG/oronno.png', width: 20, height: 10 },
    { src: 'https://i.ibb.co/LrqdRKz/MGH.png', width: 20, height: 10 },
    { src: 'https://i.ibb.co/fdHdYgz/mango.png', width: 20, height: 10 },
    { src: 'https://i.ibb.co/bNXCFnY/Landmark.png', width: 20, height: 10 },
    { src: 'https://i.ibb.co/d7ZxRNs/Johnson-johnson.png', width: 20, height: 10 },
    { src: 'https://i.ibb.co/cx8Tfd5/General-pharma.png', width: 20, height: 10 },
    { src: 'https://i.ibb.co/WVpkS0w/dow-1.png', width: 20, height: 10 },
    { src: 'https://i.ibb.co/GpDkbgv/doctorola.png', width: 20, height: 10 },
    { src: 'https://i.ibb.co/GkDkWtz/DEW-1.png', width: 20, height: 10 },
    { src: 'https://i.ibb.co/Kzw0MSL/coffee-bean.png', width: 20, height: 10 },
    { src: 'https://i.ibb.co/j8s1F2M/CAD-1.png', width: 20, height: 10 },
    { src: 'https://i.ibb.co/fpsZDpV/CDDL-1.png', width: 20, height: 10 },
];

const ClientScreen = () => {
    return (
        <Layout title="Clients">
            <PhotoAlbum layout="columns" photos={photos} />
        </Layout>
    );
};

export default ClientScreen;