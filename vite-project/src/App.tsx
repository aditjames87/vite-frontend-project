import { useState } from "react";
import { Input } from "/workspaces/vite-frontend-project/vite-project/src/components/ui/input.tsx";
import { Button } from "/workspaces/vite-frontend-project/vite-project/src/components/ui/button.tsx";

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showSignup, setShowSignup] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email && password) onLogin();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl px-6">
        {/* Left Side: Facebook Branding */}
        <div className="flex-1 mb-10 md:mb-0 md:mr-12">
          <h1 className="text-blue-600 text-5xl font-bold mb-4">facebook</h1>
          <p className="text-xl">Facebook helps you connect and share with the people in your life.</p>
        </div>

        {/* Right Side: Login Form */}
        <div className="flex-1 max-w-md">
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-4">
            <Input type="email" placeholder="Email address or phone number" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-md text-lg">Log In</Button>
            
            <div className="flex justify-center space-x-2 text-sm">
              <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
              <span className="text-gray-400">•</span>
              <button type="button" onClick={() => setShowSignup(true)} className="text-blue-600 hover:underline font-semibold">Signup</button>
            </div>
          </form>
        </div>
      </div>

      {/* Signup Modal Overlay */}
      {showSignup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl relative">
            <button onClick={() => setShowSignup(false)} className="absolute top-2 right-4 text-2xl text-gray-500">&times;</button>
            <h2 className="text-2xl font-bold mb-2">Sign Up</h2>
            <p className="text-gray-600 mb-4">It's quick and easy.</p>
            <hr className="mb-4" />
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <Input placeholder="First name" />
                <Input placeholder="Last name" />
              </div>
              <Input placeholder="Mobile number or email" />
              <Input type="password" placeholder="New password" />
              <Button type="button" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2">Sign Up</Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
