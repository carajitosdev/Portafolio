const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contacto</h3>
            <p className="text-gray-400">Email: iqlizaid@gmail.com</p>
            <p className="text-gray-400">GitHub: @carajitosdev</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Navegación</h3>
            <ul className="text-gray-400">
              <li className="mb-2"><a href="#" className="hover:text-white transition-colors">Inicio</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white transition-colors">Proyectos</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Tecnologías</h3>
            <ul className="text-gray-400">
              <li className="mb-2">React</li>
              <li className="mb-2">Next.js</li>
              <li className="mb-2">TailwindCSS</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()}  Vidudev. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
