import { useState } from 'react';

const AdminLogin = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    setTimeout(() => {
      if (username === 'admin' && password === 'dalis2026') {
        localStorage.setItem('adminLoggedIn', 'true');
        onLoginSuccess();
      } else {
        setError('Invalid username or password');
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md">
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-accent text-4xl font-bold">DAL</span>
          </div>
          <h2 className="text-3xl font-bold text-primary">Admin Login</h2>
          <p className="text-gray-500 mt-2">Dona Asuncion Lee Integrated School</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-accent"
              placeholder="admin"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-accent"
              placeholder="••••••••"
              required
            />
          </div>

          {error && <p className="text-red-500 text-center text-sm font-medium">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary hover:bg-blue-950 disabled:bg-gray-400 text-white font-semibold py-4 rounded-2xl text-lg transition duration-200"
          >
            {loading ? "Logging in..." : "Login to Admin Panel"}
          </button>
        </form>

        <div className="mt-8 text-center text-xs text-gray-400">
          Default Credentials:<br />
          <strong>Username:</strong> admin | <strong>Password:</strong> dalis2026
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;