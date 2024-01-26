import { products } from "../data/products";
import CardsSection from "../components/CardsSection";


function Home() {
 
  return (
      <CardsSection products={products} />
  );
}

export default Home;