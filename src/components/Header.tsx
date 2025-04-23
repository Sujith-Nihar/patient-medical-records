
import { User } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-primary to-secondary text-white shadow-lg py-6 px-4 mb-8">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-white p-2 rounded-full shadow-md">
            <User className="text-primary h-6 w-6" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold">Patient Medical Records</h1>
        </div>
        <div className="hidden md:block">
          <div className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium">
            Professional Healthcare Portal
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
