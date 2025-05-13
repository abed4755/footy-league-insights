
import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { ChartContainer } from '@/components/ChartContainer';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { ChevronRight, TrendingUp, Search, Trash2 } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

type MatchPrediction = {
  id: string;
  homeTeam: string;
  awayTeam: string;
  league: string;
  date: string;
  prediction: string;
  confidence: number;
};

type FormData = {
  homeTeam: string;
  awayTeam: string;
  league: string;
};

const defaultPredictions: MatchPrediction[] = [
  {
    id: "1",
    homeTeam: "Arsenal",
    awayTeam: "Liverpool",
    league: "Premier League",
    date: "May 15, 2025",
    prediction: "Home Win",
    confidence: 75,
  },
  {
    id: "2",
    homeTeam: "Barcelona",
    awayTeam: "Real Madrid",
    league: "La Liga",
    date: "May 16, 2025",
    prediction: "Draw",
    confidence: 60,
  },
  {
    id: "3",
    homeTeam: "Bayern Munich",
    awayTeam: "PSG",
    league: "Champions League",
    date: "May 18, 2025",
    prediction: "Away Win",
    confidence: 65,
  },
];

type TeamData = {
  [key: string]: string[];
};

const leagueTeams: TeamData = {
  "Premier League": [
    "Arsenal", "Aston Villa", "Bournemouth", "Brentford", "Brighton", "Burnley",
    "Chelsea", "Crystal Palace", "Everton", "Fulham", "Liverpool", "Luton Town",
    "Manchester City", "Manchester United", "Newcastle United", "Nottingham Forest",
    "Sheffield United", "Tottenham Hotspur", "West Ham United", "Wolverhampton Wanderers"
  ],
  "La Liga": [
    "Alaves", "Almeria", "Athletic Bilbao", "Atletico Madrid", "Barcelona", "Cadiz",
    "Celta Vigo", "Getafe", "Girona", "Granada", "Las Palmas", "Mallorca",
    "Osasuna", "Rayo Vallecano", "Real Betis", "Real Madrid", "Real Sociedad",
    "Sevilla", "Valencia", "Villarreal"
  ],
  "Champions League": [
    "Arsenal", "Atletico Madrid", "Barcelona", "Bayern Munich", "Benfica",
    "Borussia Dortmund", "Inter Milan", "Lazio", "Manchester City", "Napoli",
    "Paris Saint-Germain", "Porto", "PSV Eindhoven", "Real Madrid", "Real Sociedad",
    "RB Leipzig"
  ]
};

export default function Predictions() {
  const [formData, setFormData] = useState<FormData>({
    homeTeam: "",
    awayTeam: "",
    league: "Premier League",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [predictions, setPredictions] = useState<MatchPrediction[]>(() => {
    const savedPredictions = localStorage.getItem('predictions');
    return savedPredictions ? JSON.parse(savedPredictions) : defaultPredictions;
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Save predictions to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('predictions', JSON.stringify(predictions));
  }, [predictions]);

  const handleDelete = (id: string) => {
    setPredictions(prev => prev.filter(prediction => prediction.id !== id));
    toast({
      title: "Prediction deleted",
      description: "The match prediction has been removed",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.homeTeam || !formData.awayTeam) {
      toast({
        title: "Missing information",
        description: "Please enter both home and away teams",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const outcomes = ["Home Win", "Draw", "Away Win"];
      const randomOutcome = outcomes[Math.floor(Math.random() * outcomes.length)];
      const randomConfidence = Math.floor(Math.random() * 30) + 55; // 55-85%
      
      const newPrediction: MatchPrediction = {
        id: Date.now().toString(),
        homeTeam: formData.homeTeam,
        awayTeam: formData.awayTeam,
        league: formData.league,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        prediction: randomOutcome,
        confidence: randomConfidence,
      };
      
      setPredictions(prev => [newPrediction, ...prev]);
      setFormData({
        homeTeam: "",
        awayTeam: "",
        league: formData.league,
      });
      
      toast({
        title: "Prediction created!",
        description: "Your match prediction has been generated",
      });
      
      setIsLoading(false);
    }, 1500);
  };

  const filteredPredictions = predictions.filter((pred) => {
    const query = searchQuery.toLowerCase();
    return (
      pred.homeTeam.toLowerCase().includes(query) ||
      pred.awayTeam.toLowerCase().includes(query) ||
      pred.league.toLowerCase().includes(query)
    );
  });

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 75) return "bg-green-100 text-green-800";
    if (confidence >= 60) return "bg-yellow-100 text-yellow-800";
    return "bg-red-100 text-red-800";
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Match Predictions</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Get data-driven predictions for upcoming football matches
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Create Prediction
                </CardTitle>
                <CardDescription>
                  Enter match details to generate a prediction
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="league">League</Label>
                    <select 
                      id="league"
                      name="league"
                      value={formData.league}
                      onChange={(e) => setFormData(prev => ({ ...prev, league: e.target.value }))}
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                    >
                      <option value="Premier League">Premier League</option>
                      <option value="La Liga">La Liga</option>
                      <option value="Champions League">Champions League</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="homeTeam">Home Team</Label>
                    <select
                      id="homeTeam"
                      name="homeTeam"
                      value={formData.homeTeam}
                      onChange={(e) => setFormData(prev => ({ ...prev, homeTeam: e.target.value }))}
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                    >
                      <option value="">Select home team</option>
                      {leagueTeams[formData.league].map((team) => (
                        <option key={team} value={team}>{team}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="awayTeam">Away Team</Label>
                    <select
                      id="awayTeam"
                      name="awayTeam"
                      value={formData.awayTeam}
                      onChange={(e) => setFormData(prev => ({ ...prev, awayTeam: e.target.value }))}
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                    >
                      <option value="">Select away team</option>
                      {leagueTeams[formData.league].map((team) => (
                        <option key={team} value={team}>{team}</option>
                      ))}
                    </select>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isLoading || !formData.homeTeam || !formData.awayTeam}
                  >
                    {isLoading ? "Generating..." : "Generate Prediction"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Match Predictions</CardTitle>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input
                      type="text"
                      placeholder="Search predictions..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-8 w-[200px]"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="grid grid-cols-3 mb-4">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="high">High Confidence</TabsTrigger>
                    <TabsTrigger value="recent">Recent</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="all" className="space-y-4">
                    {filteredPredictions.length > 0 ? (
                      filteredPredictions.map((prediction) => (
                        <div
                          key={prediction.id}
                          className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-medium">
                                {prediction.homeTeam} vs {prediction.awayTeam}
                              </div>
                              <div className="text-sm text-gray-500">
                                {prediction.league} • {prediction.date}
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <span 
                                className={`px-2 py-1 rounded-full text-xs font-medium ${getConfidenceColor(prediction.confidence)}`}
                              >
                                {prediction.prediction} ({prediction.confidence}%)
                              </span>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleDelete(prediction.id)}
                                className="h-8 w-8 text-gray-500 hover:text-red-600"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-gray-500">No predictions found</p>
                      </div>
                    )}
                  </TabsContent>
                  
                  <TabsContent value="high" className="space-y-4">
                    {filteredPredictions.filter(p => p.confidence >= 70).length > 0 ? (
                      filteredPredictions
                        .filter(p => p.confidence >= 70)
                        .map((prediction) => (
                          <div
                            key={prediction.id}
                            className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-medium">
                                  {prediction.homeTeam} vs {prediction.awayTeam}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {prediction.league} • {prediction.date}
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <span 
                                  className={`px-2 py-1 rounded-full text-xs font-medium ${getConfidenceColor(prediction.confidence)}`}
                                >
                                  {prediction.prediction} ({prediction.confidence}%)
                                </span>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => handleDelete(prediction.id)}
                                  className="h-8 w-8 text-gray-500 hover:text-red-600"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-gray-500">No high confidence predictions found</p>
                      </div>
                    )}
                  </TabsContent>
                  
                  <TabsContent value="recent" className="space-y-4">
                    {filteredPredictions.slice(0, 3).length > 0 ? (
                      filteredPredictions
                        .slice(0, 3)
                        .map((prediction) => (
                          <div
                            key={prediction.id}
                            className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-medium">
                                  {prediction.homeTeam} vs {prediction.awayTeam}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {prediction.league} • {prediction.date}
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <span 
                                  className={`px-2 py-1 rounded-full text-xs font-medium ${getConfidenceColor(prediction.confidence)}`}
                                >
                                  {prediction.prediction} ({prediction.confidence}%)
                                </span>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => handleDelete(prediction.id)}
                                  className="h-8 w-8 text-gray-500 hover:text-red-600"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-gray-500">No recent predictions found</p>
                      </div>
                    )}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
