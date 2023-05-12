import { NavLink } from "react-router-dom";
import './GalleryNavigation.css'

const GalleryNavigation = (props) => {
    const galleries = props.galleries;
    console.log(galleries)

    return (
        <nav>
            <h1>Galleries</h1>
            <NavLink exact to="/">Home</NavLink>

            {galleries.map((ele) => {
                return (
                <div key={ele.id}>
                    <NavLink to={`/galleries/${ele.id}`}>
                        {ele.name}
                    </NavLink>
                </div>
                )
            })}
        </nav>
    )
}

export default GalleryNavigation;