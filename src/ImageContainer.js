import './image.css';

function ImageContainer(props){
    return (
        <div className="image-container">
            <svg className="svg__bg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill={props.product.color} d="M44.1,-76.2C57.5,-68.6,69,-57.5,76.2,-44.2C83.5,-31,86.6,-15.5,87,0.3C87.5,16,85.3,32,78.1,45.5C71,58.9,58.8,69.9,45,76.8C31.1,83.8,15.6,86.7,0,86.6C-15.5,86.6,-31.1,83.7,-45.2,76.9C-59.4,70.1,-72.1,59.6,-79.4,46.1C-86.6,32.7,-88.3,16.3,-88.2,0.1C-88.1,-16.2,-86.2,-32.4,-78.8,-45.6C-71.4,-58.8,-58.5,-68.9,-44.5,-76.1C-30.4,-83.3,-15.2,-87.6,0.1,-87.7C15.3,-87.8,30.7,-83.7,44.1,-76.2Z" transform="translate(100 100)" />
            </svg>
            <img className="shoe__image" src={props.product.url} alt="Shoe"/>
        </div>
    );
}
export default ImageContainer;