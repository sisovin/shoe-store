import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Failed to fetch products', error);
    }
  };

  const onSubmit = async (data) => {
    try {
      if (editingProduct) {
        await axios.put(`/api/products/${editingProduct.id}`, data);
      } else {
        await axios.post('/api/products', data);
      }
      fetchProducts();
      reset();
      setEditingProduct(null);
    } catch (error) {
      console.error('Failed to save product', error);
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    reset(product);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/products/${id}`);
      fetchProducts();
    } catch (error) {
      console.error('Failed to delete product', error);
    }
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="product-form">
        <input
          type="text"
          placeholder="Name"
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && <p className="error">{errors.name.message}</p>}

        <input
          type="text"
          placeholder="Description"
          {...register('description', { required: 'Description is required' })}
        />
        {errors.description && <p className="error">{errors.description.message}</p>}

        <input
          type="number"
          placeholder="Price"
          {...register('price', { required: 'Price is required' })}
        />
        {errors.price && <p className="error">{errors.price.message}</p>}

        <input
          type="text"
          placeholder="Image URL"
          {...register('imageUrl', { required: 'Image URL is required' })}
        />
        {errors.imageUrl && <p className="error">{errors.imageUrl.message}</p>}

        <input
          type="text"
          placeholder="Category"
          {...register('category', { required: 'Category is required' })}
        />
        {errors.category && <p className="error">{errors.category.message}</p>}

        <input
          type="text"
          placeholder="Brand"
          {...register('brand', { required: 'Brand is required' })}
        />
        {errors.brand && <p className="error">{errors.brand.message}</p>}

        <input
          type="text"
          placeholder="Size"
          {...register('size', { required: 'Size is required' })}
        />
        {errors.size && <p className="error">{errors.size.message}</p>}

        <input
          type="text"
          placeholder="Color"
          {...register('color', { required: 'Color is required' })}
        />
        {errors.color && <p className="error">{errors.color.message}</p>}

        <input
          type="number"
          placeholder="Stock"
          {...register('stock', { required: 'Stock is required' })}
        />
        {errors.stock && <p className="error">{errors.stock.message}</p>}

        <button type="submit">
          {editingProduct ? 'Update Product' : 'Add Product'}
        </button>
      </form>

      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id} className="product-item">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => handleEdit(product)}>Edit</button>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
