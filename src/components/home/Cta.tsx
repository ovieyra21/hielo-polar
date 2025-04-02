
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <section className="py-24 bg-ice-700 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTUgMTVMNDUgNDVNMTUgNDVMNDUgMTUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==')]"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Solicita nuestros productos hoy mismo
          </h2>
          <p className="text-xl mb-8 text-ice-100">
            Ofrecemos precios especiales para mayoristas y entregas a domicilio para bolsas de hielo.
            Contáctanos para más información.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-ice-700 hover:bg-ice-100 hover:text-ice-800">
              <Link to="/contacto">
                Contactar ahora
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-ice-700"
            >
              <Link to="/productos">
                Ver productos
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
