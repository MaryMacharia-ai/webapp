import { useState } from 'react';

const SignUpForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:3000/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log(data); // handle success or error
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 p-6 bg-white shadow-md rounded">
      <input type="text" placeholder="Name" className="w-full p-2 border" onChange={e => setFormData({ ...formData, name: e.target.value })} />
      <input type="email" placeholder="Email" className="w-full p-2 border" onChange={e => setFormData({ ...formData, email: e.target.value })} />
      <input type="password" placeholder="Password" className="w-full p-2 border" onChange={e => setFormData({ ...formData, password: e.target.value })} />
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
