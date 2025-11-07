import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InstagramLogo from "@/components/InstagramLogo";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
      return;
    }
  }, [navigate]);

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
              <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">📱</div>
                  <p className="text-muted-foreground">Phone mockup placeholder</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - 404 Error panel */}
          <div className="bg-card border border-border rounded-lg p-10">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              404 - Server Busy
            </h2>

            <div className="space-y-6">
              <div className="p-6 bg-secondary rounded-lg text-center">
                <div className="text-6xl mb-4">🚧</div>
                <p className="text-foreground mb-2">
                  Server is currently busy
                </p>
                <p className="text-sm text-muted-foreground">
                  Please try again later
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
