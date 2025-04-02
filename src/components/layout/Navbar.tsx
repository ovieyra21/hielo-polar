
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  Phone, 
  Mail,
  MapPin,
  ChevronDown
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="relative z-50">
      {/* Top info bar */}
      <div className="bg-ice-800 text-white py-3">
        <div className="container flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-6 mb-2 md:mb-0">
            <a href="tel:+521234567890" className="flex items-center hover:text-ice-300 transition-colors">
              <Phone size={16} className="mr-2" />
              <span>+52 (123) 456-7890</span>
            </a>
            <a href="mailto:info@hielopolardelcentro.com" className="flex items-center hover:text-ice-300 transition-colors">
              <Mail size={16} className="mr-2" />
              <span>info@hielopolardelcentro.com</span>
            </a>
          </div>
          <div className="flex items-center">
            <MapPin size={16} className="mr-2" />
            <span>Guanajuato y Michoacán, México</span>
          </div>
        </div>
      </div>
      
      {/* Main navbar */}
      <nav className={`${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/90 backdrop-blur-md py-5'} transition-all duration-300`}>
        <div className="container flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-ice-700">HIELO POLAR</span>
            <span className="text-xs bg-ice-700 text-white px-2 py-1 ml-1 rounded-sm">DEL CENTRO</span>
          </Link>
          
          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink to="/" active={location.pathname === "/"}>Inicio</NavLink>
            <NavLink to="/nosotros" active={location.pathname === "/nosotros"}>Quiénes Somos</NavLink>
            <NavLink to="/productos" active={location.pathname === "/productos"}>Productos</NavLink>
            <NavLink to="/servicios" active={location.pathname === "/servicios"}>Servicios</NavLink>
            <NavLink to="/contacto" active={location.pathname === "/contacto"}>Contacto</NavLink>
            <Button asChild className="bg-ice-600 hover:bg-ice-700 text-white">
              <Link to="/contacto">
                Solicitar Servicio
              </Link>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="lg:hidden text-ice-700"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      
      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-50 pt-[4rem]">
          <div className="container py-8 flex flex-col space-y-6">
            <MobileNavLink to="/" onClick={toggleMenu} active={location.pathname === "/"}>Inicio</MobileNavLink>
            <MobileNavLink to="/nosotros" onClick={toggleMenu} active={location.pathname === "/nosotros"}>Quiénes Somos</MobileNavLink>
            <MobileNavLink to="/productos" onClick={toggleMenu} active={location.pathname === "/productos"}>Productos</MobileNavLink>
            <MobileNavLink to="/servicios" onClick={toggleMenu} active={location.pathname === "/servicios"}>Servicios</MobileNavLink>
            <MobileNavLink to="/contacto" onClick={toggleMenu} active={location.pathname === "/contacto"}>Contacto</MobileNavLink>
            <Button asChild className="bg-ice-600 hover:bg-ice-700 text-white mt-4">
              <Link to="/contacto">
                Solicitar Servicio
              </Link>
            </Button>
            
            <div className="pt-8 border-t border-gray-200 mt-4">
              <h3 className="font-bold text-ice-800 mb-4">Contáctanos</h3>
              <div className="space-y-4">
                <a href="tel:+521234567890" className="flex items-center text-gray-600 hover:text-ice-600">
                  <Phone size={18} className="mr-2" />
                  <span>+52 (123) 456-7890</span>
                </a>
                <a href="mailto:info@hielopolardelcentro.com" className="flex items-center text-gray-600 hover:text-ice-600">
                  <Mail size={18} className="mr-2" />
                  <span>info@hielopolardelcentro.com</span>
                </a>
                <div className="flex items-center text-gray-600">
                  <MapPin size={18} className="mr-2" />
                  <span>Guanajuato y Michoacán, México</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  active?: boolean;
}

const NavLink = ({ to, children, active }: NavLinkProps) => (
  <Link 
    to={to} 
    className={`relative font-medium transition-colors hover:text-ice-600 ${
      active ? 'text-ice-600' : 'text-ice-800'
    }`}
  >
    {children}
    {active && (
      <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-ice-600"></span>
    )}
  </Link>
);

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

const MobileNavLink = ({ 
  to, 
  children, 
  onClick,
  active
}: MobileNavLinkProps) => (
  <Link 
    to={to} 
    className={`text-2xl font-medium transition-colors hover:text-ice-600 ${
      active ? 'text-ice-600' : 'text-ice-800'
    }`}
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
