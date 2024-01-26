import KfcCard from "./KfcCard";

export default function CardsSection(props) {
    let {products} = props;
  return (
    <div className="row row-cols-4 row-cols-md-4 g-2">
        {products.map(product => <KfcCard key={product.id} product={product} />)}
      </div>
  )
}
