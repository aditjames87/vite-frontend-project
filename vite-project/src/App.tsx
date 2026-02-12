import { useState } from "react";
import { Input } from "/workspaces/vite-frontend-project/vite-project/src/components/ui/input.tsx";
import { Button } from "/workspaces/vite-frontend-project/vite-project/src/components/ui/button.tsx";

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email && password) {
      onLogin();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl px-6">
        
        {/* Left side: Facebook branding */}
        <div className="flex-1 mb-10 md:mb-0 md:mr-12">
          <h1 className="text-blue-600 text-5xl font-bold mb-4">facebook</h1>
          <p className="text-xl">
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>

        {/* Right side: Login form */}
        <div className="flex-1">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg p-6 space-y-4"
          >
            <Input
              type="email"
              placeholder="Email address or phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded"
            >
              Log In
            </Button>
            <div className="text-center">
              <a href="#" className="text-blue-600 text-sm hover:underline">
                Forgotten password?
              </a>
            </div>
            <hr />
            <div className="flex justify-center">
              <Button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                Create New Account
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;