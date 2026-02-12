import { useState } from "react";
import { Input } from "/workspaces/vite-frontend-project/vite-project/src/components/ui/input.tsx";
import { Button } from "/workspaces/vite-frontend-project/vite-project/src/components/ui/button.tsx";

const LoginPage = ({ onLogin }: { onLogin: () => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      onLogin();
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-[#f0f2f5] pt-10 pb-28 px-4">
      {/* Left Side: Branding */}
      <div className="lg:w-[500px] lg:pr-8 mb-8 lg:mb-0 text-center lg:text-left">
        <h1 className="text-[#1877f2] text-6xl font-bold mb-4">facebook</h1>
        <p className="text-2xl text-gray-800 leading-tight">
          Connect with friends and the world around you on Facebook.
        </p>
      </div>

      {/* Right Side: Login Card */}
      <div className="w-full max-w-[400px]">
        <div className="bg-white shadow-xl rounded-lg p-4 space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Email or phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 text-lg focus-visible:ring-blue-500"
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-12 text-lg focus-visible:ring-blue-500"
            />
            <Button 
              type="submit" 
              className="w-full bg-[#1877f2] hover:bg-[#166fe5] text-white text-xl font-bold py-6 rounded-md"
            >
              Log In
            </Button>
          </form>

          <div className="text-center border-b pb-6">
            <a href="#" className="text-[#1877f2] text-sm hover:underline">Forgot password?</a>
          </div>

          <div className="pt-2 flex justify-center">
            <Button 
              type="button"
              className="bg-[#42b72a] hover:bg-[#36a420] text-white text-lg font-bold px-4 py-6"
            >
              Create new account
            </Button>
          </div>
        </div>
        <p className="mt-6 text-sm text-center lg:text-left">
          <span className="font-bold hover:underline cursor-pointer">Create a Page</span> for a celebrity, brand or business.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
