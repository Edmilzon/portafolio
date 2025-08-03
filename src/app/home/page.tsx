"use client";
import Button from "@/components/forms/button";

export default function Home() {

    const proyects = () => {
        console.log("proyectos");
    }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
          {/* Animated Greeting */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-4xl font-light text-purple-200 mb-4 animate-fade-in">
              ¡Hola! 👋
            </h2>
            <div className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6 animate-slide-up">
              Mi nombre es
            </div>
            <div className="text-6xl md:text-8xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-8 animate-bounce-in">
              Edmilzon
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl animate-fade-in-delay">
            Desarrollador Full Stack apasionado por crear experiencias digitales únicas
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-delay-2">
            <Button size="lg" variant="primary" onClick={proyects}>
              Ver Proyectos
            </Button>
            <Button size="lg" variant="outline">
              Contactar
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-purple-500/20 hover:bg-white/10 transition-all duration-300">
            <div className="text-4xl font-bold text-purple-400 mb-2">3+</div>
            <div className="text-gray-300">Años de Experiencia</div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-purple-500/20 hover:bg-white/10 transition-all duration-300">
            <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
            <div className="text-gray-300">Proyectos Completados</div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-purple-500/20 hover:bg-white/10 transition-all duration-300">
            <div className="text-4xl font-bold text-pink-400 mb-2">100%</div>
            <div className="text-gray-300">Satisfacción del Cliente</div>
          </div>
        </div>
      </div>
    </div>
  );
}