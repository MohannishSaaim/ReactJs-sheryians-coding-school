import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
import Pagination from "./components/Pagination";

const App = () => {
  const [productData, setProductData] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);

  useEffect(() => {
    console.log("Fetching data for page:", pageIndex);
    axios
      .get(`https://dummyjson.com/products?limit=8&skip=${pageIndex * 8 - 8}`)
      .then((resp) => {
        console.log(resp);
        setProductData(resp.data.products);
      })
      .catch((err) => console.log(err));
  }, [pageIndex]);

  const handleNext = () => {
    setPageIndex(pageIndex + 1);
    setProductData([]);
  };
  const handlePrev = () => {
    setPageIndex(pageIndex - 1);
    setProductData([]);
  };

  return (
    <div className="h-screen w-full flex flex-col">
      <div className="bg-gray-500 w-full h-auto justify-center items-center flex p-4 text-white text-2xl font-bold">
        <h1>Photo Gallery</h1>
      </div>

      {productData.length > 0 ? (
        <div className="bg-red w-full flex gap-6 flex-wrap justify-center items-center p-10 overflow-auto h-full scrollbar-hide">
          {productData.map((p, i) => {
            return (
              <Card key={p.id} product={p}/>
            );
          })}
        </div>
      ) : (
        <div className="h-screen w-full flex items-center justify-center">
          <span className="text-2xl font-bold">Loading...</span>
        </div>
      )}

      <Pagination
        pageIndex={pageIndex}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
      
    </div>
  );
};

export default App;
