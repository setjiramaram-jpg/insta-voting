import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import InstagramLogo from "@/components/InstagramLogo";
import friendsMoments from "@/assets/friends-moments.png";
import { Facebook } from "lucide-react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        toast.success("Logged in successfully");
        navigate("/home");
      } else {
        toast.error(data.error || "Login failed");
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error("Network error. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left side - Hero content */}
          <div className="space-y-8">
            <div className="mb-12">
              <InstagramLogo />
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                See everyday moments from your{" "}
                <span 
                  className="bg-gradient-to-r from-[hsl(25,100%,50%)] to-[hsl(340,82%,52%)] bg-clip-text text-transparent"
                >
                  close friends
                </span>
                .
              </h1>
            </div>

            <div className="relative mt-12">
              <img 
                src={friendsMoments} 
                alt="Friends sharing moments on Instagram" 
                className="w-full rounded-2xl"
              />
            </div>
          </div>

          {/* Right side - Login panel */}
          <div className="bg-[hsl(200,20%,15%)] rounded-lg p-10">
            <h2 className="text-2xl font-semibold text-foreground mb-8">
              Log in to Instagram
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Mobile number, username or email address"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-[hsl(200,15%,12%)] border-[hsl(200,10%,25%)] text-foreground placeholder:text-muted-foreground h-12 rounded-md"
              />
              
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-[hsl(200,15%,12%)] border-[hsl(200,10%,25%)] text-foreground placeholder:text-muted-foreground h-12 rounded-md"
              />

              <Button 
                type="submit" 
                className="w-full bg-[hsl(214,100%,50%)] hover:bg-[hsl(214,100%,45%)] text-white font-semibold h-12 rounded-lg"
              >
                Log in
              </Button>
            </form>

            <div className="mt-6 text-center">
              <a href="#" className="text-sm text-foreground hover:text-muted-foreground">
                Forgotten password?
              </a>
            </div>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[hsl(200,10%,25%)]"></div>
              </div>
            </div>

            <Button 
              type="button"
              variant="outline"
              className="w-full bg-transparent border-[hsl(200,10%,25%)] text-foreground hover:bg-[hsl(200,15%,12%)] h-12 rounded-lg flex items-center justify-center gap-2"
            >
              <Facebook className="w-5 h-5 text-[hsl(214,100%,50%)]" />
              Log in with Facebook
            </Button>

            <div className="mt-8 text-center">
              <img
                src="/meta logo.jpg"
                alt="Meta Logo"
                className="h-6 mx-auto"
              />
            </div>


          </div>
        </div>
      </div>
    </div>
  )
};

export default Login;
