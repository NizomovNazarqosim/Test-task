import {useEffect, useState} from 'react'
import axios from 'axios';
import ProductList from './components/ProductList';
import Pagination from './components/Pagination';
import './App.css';
import Checkout from './components/Checkout';
import {Link} from 'react-router-dom'


const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  const [searchValue, setSearchValue] = useState('')
  const [products, setProducts] = useState([])
  const [allProducts, setAllProducts] = useState([])
  const skip = (Number(currentPage)-1)*20
  useEffect(() => {
    const response =  fetch(`https://dummyjson.com/products?limit=20&skip=${skip}&select=title,price`)
    .then(res => res.json())
    .then((data) => {
      setProducts(data.products)
    })
  }, [currentPage])
  useEffect(() => {
    fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data => {
  setAllProducts(data.products)
})
  }, [])

const getAllProducts = () => {
  fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(data => {
    if(searchValue){
      const results = data.products.filter((product) => product.title.toLowerCase().includes(searchValue.toLowerCase()))
      setProducts(results)
    }
  })
}

useEffect(() => {
  getAllProducts()
}, [searchValue])
const onClickFilter = () => {
  
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data => {
    var b =data.products.sort((a, b) => {
        let fa = a.title.toLowerCase(),
            fb = b.title.toLowerCase();
    
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    });
    
    setProducts(b)
    
});

}

// serach
const handleChange = (event) => {
  setSearchValue(event.target.value);
};


  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = products.slice(firstPostIndex, lastPostIndex);

  return (
   <div className='app'>
     <h1>Product lists {searchValue}</h1>
     <div className='filter'>
     <p onClick={onClickFilter}>Filter by title</p>
     <input   type="text"
        id="search"
        name="search"
        onChange={handleChange} placeholder='Search...'/>
        <Link to={'/checkout'}>Selected products</Link>
     </div>
    <ProductList products={products} />
    <Pagination
              allProducts={allProducts.length}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
          />
   </div>
  );
}

export default App;
