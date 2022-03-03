import { useEffect } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { fetchApiAction } from "./redux/actions/fetchApiAction";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "./redux/store";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Details } from "./pages/Details";
import { Checkout } from "./pages/Checkout";
import { Categories } from "./pages/Categories";
import { Faq } from "./pages/Faq";
import { Contact } from "./pages/Contact";
import {NoExistPage} from "./pages/NoExistPage";
import {SideBar} from "./components/Sidebar";


function App() {
  const dispatch = useDispatch();
  const { query } = useSelector((state: rootState) => state.query);
  const { products } = useSelector((state: rootState) => state.products);
  let {sidebar} = useSelector((state: rootState) => state.sidebar);

  useEffect(() => {
    dispatch(fetchApiAction());
  }, [dispatch]);

  function searching() {
    let result = products.filter((element) =>
      element.title.toLowerCase().includes(query.toLowerCase())
    );
    return result;
  }

  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route path="/" element={!sidebar ? <SideBar/>:<Home products={searching()} />} />
          <Route
            path="/details/:productId"
            element={!sidebar ? <SideBar/>:<Details products={products} />}
          />
          <Route path="/cart" element={!sidebar ? <SideBar/>:<Cart />} />
          <Route
            path="/categories"
            element={!sidebar ? <SideBar/>:<Categories products={searching()} />}
          />
          <Route path="/checkout" element={!sidebar ? <SideBar/>:<Checkout />} />
          <Route path="/faq" element={!sidebar ? <SideBar/>:<Faq />} />
          <Route path="/contact" element={!sidebar ? <SideBar/>:<Contact/>} />
        </Route>
        <Route path="*" element={<NoExistPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
