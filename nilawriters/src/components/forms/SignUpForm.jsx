import { useState } from 'react';
import axios from 'axios';
import { API_BASE } from '../../config';

const SignUpForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${API_BASE}/signup`, formData);

      // ✅ Store token and redirect
      localStorage.setItem('token', res.data.token);
      window.location.href = '/dashboard';
    } catch (error) {
      console.error('Signup failed:', error.response?.data?.message || error.message);
      // Optionally show error to user
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 p-6 bg-white shadow-md rounded">
      <input
        type="text"
        placeholder="Name"
        className="w-full p-2 border"
        onChange={e => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 border"
        onChange={e => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 border"
        onChange={e => setFormData({ ...formData, password: e.target.value })}
        required
      />
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
