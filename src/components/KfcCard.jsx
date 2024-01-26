// functional component
export default function KfcCard(props){
    let {product} = props;

    return(
        <div className="col">
        <div className="card" style={{ width: "18rem" }}>
          <img src={product.imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> {product.title} </h5>
            <p className="card-text"> {product.desc} </p>
            <a href="#" className="btn btn-primary" >
              Add to Bucket
            </a>
          </div>
        </div>
      </div>
    )
}