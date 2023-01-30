import ImageContainer from "./ImageContainer";
import ProductDescription from "./ProductDescription";
import './body.css';

function BodyContent(props){
    return (
        <div className="bodyContent">
            <ProductDescription product={props.product} updateState={props.updateState} />
            <ImageContainer product={props.product} />
        </div>
    )
}

export default BodyContent;