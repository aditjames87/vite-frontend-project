import { useState } from "react";
import { Input } from "/workspaces/vite-frontend-project/vite-project/src/components/ui/input.tsx";
import { Button } from "/workspaces/vite-frontend-project/vite-project/src/components/ui/button.tsx";
import { X } from "lucide-react"; // Import for the close button

const LoginPage = ({ onLogin }: { onLogin: () => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignupOpen, setIsSignupOpen] = useState(false); // Modal state

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      onLogin();
    }
  };

    return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-[#f0f2f5] pt-10 pb-28 px-4 relative">
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
              onClick={() => setIsSignupOpen(true)} // Open Signup Modal
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

      {/* Signup Modal Overlay */}
      {isSignupOpen && (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white shadow-2xl rounded-lg w-full max-w-[432px] overflow-hidden">
            <div className="flex justify-between items-start p-4 border-b">
              <div>
                <h2 className="text-3xl font-bold">Sign Up</h2>
                <p className="text-gray-500 text-sm">It's quick and easy.</p>
              </div>
              <button onClick={() => setIsSignupOpen(false)} className="text-gray-500 hover:text-black">
                <X size={24} />
              </button>
            </div>
            
            <form className="p-4 space-y-3">
              <div className="flex gap-3">
                <Input placeholder="First name" className="bg-[#f5f6f7]" />
                <Input placeholder="Surname" className="bg-[#f5f6f7]" />
              </div>
              <Input placeholder="Mobile number or email address" className="bg-[#f5f6f7]" />
              <Input type="password" placeholder="New password" className="bg-[#f5f6f7]" />
              
              <div className="text-[11px] text-gray-500 leading-tight py-2">
                People who use our service may have uploaded your contact information to Facebook. <a href="#" className="text-blue-600 hover:underline">Learn more.</a>
                <br /><br />
                By clicking Sign Up, you agree to our <a href="#" className="text-blue-600 hover:underline">Terms</a>, <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> and <a href="#" className="text-blue-600 hover:underline">Cookies Policy</a>.
              </div>

              <div className="flex justify-center pt-2 pb-4">
                <Button className="bg-[#00a400] hover:bg-[#008a00] text-white font-bold px-12 py-5 text-lg min-w-[194px]">
                  Sign Up
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
