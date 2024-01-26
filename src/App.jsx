import Home from "./pages/home";
import Header from "./components/Header";
import Aboutus from "./pages/Aboutus";
import DevIntro from "./pages/devIntro"
import Footer from "./components/Footer";
import Expertise from "./pages/expertise"
import PageTest from "./pages/pageTest";
import MyProjects from "./pages/MyProjects";
import MySkills from "./pages/mySkills";
import EeInfo from "./pages/EeInfo";
import Testimonials from "./pages/testimonials";
import MyClients from "./pages/myClients";
import ContactUs from "./pages/contactUs";
function App() {
 
  return (
<>
    <div className="container">
        <Header/> 
      </div>
    <div className="container">
      
      <DevIntro/>
      {/* <PageTest/> */}
      <Expertise/>
      <MyProjects/>
      <MySkills/>
      <EeInfo/>
      <Testimonials/>
      <MyClients/>
      <ContactUs/>
      {/* <Aboutus/> */}
      <Footer/>
    </div>
  </>
  );
} 

export default App;



// function App() {
//   let product = {
//     id: 1,
//     title: "Zinger Burger",
//     imageUrl: "https://www.kfcpakistan.com/images/6249b820-0513-11ee-9e45-cb0ed000d4a6-Zinger_variant_0-2023-06-07091210.png", 
//     desc: "Our hero- crispy Zinger fillet, signature mayo and lettuce- sandwiched between a sesame seed bun"
//   }

//   return (
//     <div className="container">
//     <div className="row row-cols-1 row-cols-md-4 g-2">
//       <div className="col">
//     <div className="card" style={{ width: "18rem" }}>
//       <img src={product.imageUrl} className="card-img-top" alt="..." />
//       <div className="card-body">
//         <h5 className="card-title"> {product.title} </h5>
//         <p className="card-text"> {product.desc} </p>
//         <a href="#" className="btn btn-primary">
//           Add to Cart
//         </a>
//       </div>
//     </div>
//     </div>

//     <div className="col">
//     <div className="card" style={{ width: "18rem" }}>
//     <img src={product.imageUrl} className="card-img-top" alt="..." />
//     <div className="card-body">
//       <h5 className="card-title"> {product.title} </h5>
//       <p className="card-text"> {product.desc} </p>
//       <a href="#" className="btn btn-primary">
//         Add to Cart
//       </a>
//     </div>
//     </div>
//     </div>

//     <div className="col">
//     <div className="card" style={{ width: "18rem" }}>
//     <img src={product.imageUrl} className="card-img-top" alt="..." />
//     <div className="card-body">
//       <h5 className="card-title"> {product.title} </h5>
//       <p className="card-text"> {product.desc} </p>
//       <a href="#" className="btn btn-primary">
//         Add to Cart
//       </a>
//     </div>
//     </div>
//     </div>

//     <div className="col">
//     <div className="card" style={{ width: "18rem" }}>
//     <img src={product.imageUrl} className="card-img-top" alt="..." />
//     <div className="card-body">
//       <h5 className="card-title"> {product.title} </h5>
//       <p className="card-text"> {product.desc} </p>
//       <a href="#" className="btn btn-primary">
//         Add to Cart
//       </a>
//     </div>
//     </div>
//     </div>

//     <div className="col">
//     <div className="card" style={{ width: "18rem" }}>
//     <img src={product.imageUrl} className="card-img-top" alt="..." />
//     <div className="card-body">
//       <h5 className="card-title"> {product.title} </h5>
//       <p className="card-text"> {product.desc} </p>
//       <a href="#" className="btn btn-primary">
//         Add to Cart
//       </a>
//     </div>
//     </div>
//     </div>
//   </div>
//   </div>
//   );
// }

// export default App;