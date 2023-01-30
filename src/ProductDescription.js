import './decription.css';
function ProductDescription(props){
    return (
        <div className="description__container">
            <h1 className='title' style={{color:props.product.color}}>{props.product.name}</h1>
            <div className="detailsContainer">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed modi aperiam, porro aliquam error praesentium dicta, perspiciatis sapiente, dignissimos debitis voluptates natus commodi excepturi. Sequi expedita ipsum voluptate unde accusantium totam impedit accusamus voluptatibus ad</p>
            </div>
            <h1>₹ {props.product.price}</h1>
            <div className="colorContainer">
                <div className="colorPalete" id="red" onClick={() => props.updateState(0)}></div>
                <div className="colorPalete" id="green" onClick={() => props.updateState(1)}></div>
                <div className="colorPalete" id="blue" onClick={() => props.updateState(2)}></div>
                <div className="colorPalete" id="pink" onClick={() => props.updateState(3)}></div>
            </div>
        </div>
    );
}
export default ProductDescription;