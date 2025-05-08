
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center md:text-left md:max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animated-entrance">
                Football Stats & Analytics
              </h1>
              <p className="text-lg md:text-xl mb-8 text-blue-100 animated-entrance delayed-animation">
                Comprehensive statistics and insights for Premier League, La Liga, and Champions League.
              </p>
              <div className="space-x-4 animated-entrance" style={{ animationDelay: "0.4s" }}>
                <Link to="/premier-league">
                  <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                    Explore Stats
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Leagues Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Explore Leagues</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Premier League */}
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="h-40 premier-gradient flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">Premier League</h3>
                </div>
                <CardContent className="p-6">
                  <p className="mb-6 text-gray-600">
                    The world's most-watched football league, featuring top English clubs 
                    competing in high-intensity matches.
                  </p>
                  <Link to="/premier-league">
                    <Button variant="ghost" className="w-full flex items-center justify-between">
                      View Stats
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* La Liga */}
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="h-40 laliga-gradient flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">La Liga</h3>
                </div>
                <CardContent className="p-6">
                  <p className="mb-6 text-gray-600">
                    Spain's top division known for technical excellence and 
                    the historic rivalry between Barcelona and Real Madrid.
                  </p>
                  <Link to="/la-liga">
                    <Button variant="ghost" className="w-full flex items-center justify-between">
                      View Stats
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Champions League */}
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="h-40 champions-gradient flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">Champions League</h3>
                </div>
                <CardContent className="p-6">
                  <p className="mb-6 text-gray-600">
                    Europe's elite club competition bringing together the continent's 
                    best teams in pursuit of the ultimate prize.
                  </p>
                  <Link to="/champions-league">
                    <Button variant="ghost" className="w-full flex items-center justify-between">
                      View Stats
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Key Features</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="stat-card">
                <CardHeader className="pb-2">
                  <CardTitle>Team Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Comprehensive team performance metrics including goals, 
                    clean sheets, and expected goals.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="stat-card">
                <CardHeader className="pb-2">
                  <CardTitle>League Tables</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Up-to-date league standings with points, goal difference, 
                    and form indicators.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="stat-card">
                <CardHeader className="pb-2">
                  <CardTitle>Advanced Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Sophisticated statistics like xG, possession efficiency, 
                    and defensive solidity.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="stat-card">
                <CardHeader className="pb-2">
                  <CardTitle>Visual Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Interactive charts and visualizations to understand team 
                    performance at a glance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
