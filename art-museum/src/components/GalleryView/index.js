import { useParams } from "react-router-dom";

const GalleryView = (props) => {
    let { galleryId } = useParams();
    const galleries = props.galleries;
    // console.log(galleryId) // why double print? Something with routes/route???

    for(const gallery in galleries) {
        let gal = galleries[gallery]
        if(gal.gallerynumber === galleryId) {
            return (
                <>
                    <h1>Hello from GalleryView</h1>
                    <h2>{gal.theme}</h2>
                </>
            )
        };
    };
};

export default GalleryView;