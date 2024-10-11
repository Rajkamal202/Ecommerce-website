import { useState } from 'react';

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [resetPassword, setResetPassword] = useState(false);

  const validateForm = () => {
    if (currentState === 'Sign Up' && formData.name === '') {
      setError('Name is required for Sign Up.');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email address.');
      return false;
    }
    if (formData.password.length < 6 && !resetPassword) {
      setError('Password must be at least 6 characters.');
      return false;
    }
    return true;
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setError(null);

    if (!validateForm()) return;

    setLoading(true);
    try {
      if (resetPassword) {
        // Simulate sending a password reset email (or an API call)
        setTimeout(() => {
          setLoading(false);
          alert('Password reset link has been sent to your email.');
          setResetPassword(false);
        }, 2000);
      } else {
        // Simulate normal login/signup flow
        setTimeout(() => {
          setLoading(false);
          alert(`Successfully ${currentState === 'Login' ? 'logged in' : 'signed up'}!`);
          setFormData({ name: '', email: '', password: '' });
        }, 2000);
      }
    } catch (error) {
      setLoading(false);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-red-100">
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col items-center w-[90%] sm:max-w-lg mx-auto py-10 px-8 bg-white shadow-lg rounded-lg space-y-6"
      >
        <div className="inline-flex items-center gap-2">
          <p className="font-semibold text-3xl text-pink-600">
            {resetPassword ? 'Reset Password' : currentState}
          </p>
          <hr className="border-none h-[1.5px] w-8 bg-pink-600" />
        </div>

        {error && (
          <p className="w-full text-center text-red-500 bg-red-50 p-2 rounded">{error}</p>
        )}

        {/* Conditional field for sign-up */}
        {resetPassword || currentState === 'Login' ? null : (
          <input
            className="w-full px-4 py-3 border border-pink-200 focus:border-pink-600 rounded focus:outline-none"
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        )}

        <input
          className="w-full px-4 py-3 border border-pink-200 focus:border-pink-600 rounded focus:outline-none"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />

        {!resetPassword && (
          <input
            className="w-full px-4 py-3 border border-pink-200 focus:border-pink-600 rounded focus:outline-none"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
        )}

        <div className="flex justify-between w-full text-sm mt-[-8px]">
          {!resetPassword && (
            <p
              onClick={() => setResetPassword(true)}
              className="cursor-pointer text-pink-500 hover:text-pink-700 transition"
            >
              Forgot Your Password?
            </p>
          )}
          {resetPassword ? (
            <p
              onClick={() => setResetPassword(false)}
              className="cursor-pointer text-pink-500 hover:text-pink-700 transition"
            >
              Back to Login
            </p>
          ) : currentState === 'Login' ? (
            <p
              onClick={() => setCurrentState('Sign Up')}
              className="cursor-pointer text-pink-500 hover:text-pink-700 transition"
            >
              Create Account
            </p>
          ) : (
            <p
              onClick={() => setCurrentState('Login')}
              className="cursor-pointer text-pink-500 hover:text-pink-700 transition"
            >
              Login Here
            </p>
          )}
        </div>

        <button
          type="submit"
          className={`w-full py-3 bg-pink-600 text-white rounded-lg font-medium hover:bg-pink-700 transition ${
            loading && 'cursor-not-allowed'
          }`}
          disabled={loading}
        >
          {loading
            ? 'Processing...'
            : resetPassword
            ? 'Send Reset Link'
            : currentState === 'Login'
            ? 'Sign In'
            : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default Login;

