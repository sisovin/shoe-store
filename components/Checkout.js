import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Checkout({ onCheckout }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await onCheckout(data);
    } catch (error) {
      console.error('Checkout failed', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="checkout-form">
      <h2>Shipping Details</h2>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && <p className="error">{errors.name.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input
          id="address"
          type="text"
          {...register('address', { required: 'Address is required' })}
        />
        {errors.address && <p className="error">{errors.address.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="city">City</label>
        <input
          id="city"
          type="text"
          {...register('city', { required: 'City is required' })}
        />
        {errors.city && <p className="error">{errors.city.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="postalCode">Postal Code</label>
        <input
          id="postalCode"
          type="text"
          {...register('postalCode', { required: 'Postal Code is required' })}
        />
        {errors.postalCode && <p className="error">{errors.postalCode.message}</p>}
      </div>

      <h2>Payment Information</h2>
      <div className="form-group">
        <label htmlFor="cardNumber">Card Number</label>
        <input
          id="cardNumber"
          type="text"
          {...register('cardNumber', { required: 'Card Number is required' })}
        />
        {errors.cardNumber && <p className="error">{errors.cardNumber.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="expiryDate">Expiry Date</label>
        <input
          id="expiryDate"
          type="text"
          {...register('expiryDate', { required: 'Expiry Date is required' })}
        />
        {errors.expiryDate && <p className="error">{errors.expiryDate.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="cvv">CVV</label>
        <input
          id="cvv"
          type="text"
          {...register('cvv', { required: 'CVV is required' })}
        />
        {errors.cvv && <p className="error">{errors.cvv.message}</p>}
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Processing...' : 'Checkout'}
      </button>
    </form>
  );
}
