import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const productsResponse = await axios.get('/api/products');
        setProducts(productsResponse.data);

        const categoriesResponse = await axios.get('/api/categories');
        setCategories(categoriesResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <main>
        <section>
          <h2>Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
        <section>
          <h2>Categories</h2>
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <div key={category.id} className="p-4 border rounded">
                {category.name}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
