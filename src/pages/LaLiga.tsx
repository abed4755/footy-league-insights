
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeagueHeader from '@/components/LeagueHeader';
import ChartContainer from '@/components/ChartContainer';
import BarChart from '@/components/BarChart';
import TeamStatsTable from '@/components/TeamStatsTable';
import StatCard from '@/components/StatCard';
import {
  laLigaTable,
  laLigaPenalties,
  laLigaCleanSheets,
  laLigaGoals,
  laLigaXG
} from '@/services/leagueData';
import { Card, CardContent } from '@/components/ui/card';

const LaLiga = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Format data for charts
  const penaltyChartData = laLigaPenalties.map(item => ({
    team: item.team,
    'Penalties Won': item.won,
    'Penalties Conceded': item.conceded
  }));

  const cleanSheetsChartData = laLigaCleanSheets.map(item => ({
    team: item.team,
    'Home': item.home,
    'Away': item.away
  }));

  const goalsChartData = laLigaGoals.map(item => ({
    team: item.team,
    'Goals Scored (Home)': item.goalsScored.home,
    'Goals Scored (Away)': item.goalsScored.away,
    'Goals Conceded (Home)': item.goalsConceded.home,
    'Goals Conceded (Away)': item.goalsConceded.away
  }));

  const xgChartData = laLigaXG.map(item => ({
    team: item.team,
    'xG For': item.xgFor,
    'Goals Scored': item.goalsScored,
    'xG Against': item.xgAgainst,
    'Goals Conceded': item.goalsConceded
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <LeagueHeader 
          title="La Liga" 
          subtitle="Spain's Premier Division" 
          gradientClass="laliga-gradient"
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="stats">Team Stats</TabsTrigger>
              <TabsTrigger value="goals">Goals Analysis</TabsTrigger>
              <TabsTrigger value="advanced">Advanced Metrics</TabsTrigger>
            </TabsList>
            
            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard 
                  title="Total Goals"
                  value="341"
                  description="Average: 2.63 per match"
                />
                <StatCard 
                  title="Home Win %"
                  value="46.4%"
                  description="112 home victories"
                />
                <StatCard 
                  title="Away Win %"
                  value="27.6%"
                  description="67 away victories"
                />
                <StatCard 
                  title="Clean Sheets"
                  value="105"
                  description="40.2% of all matches"
                />
              </div>
              
              <TeamStatsTable stats={laLigaTable} title="Current Standings" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ChartContainer title="Penalties: Won vs Conceded">
                  <BarChart 
                    data={penaltyChartData} 
                    xKey="team" 
                    bars={[
                      { dataKey: 'Penalties Won', fill: '#60a5fa' },
                      { dataKey: 'Penalties Conceded', fill: '#f87171' }
                    ]}
                  />
                </ChartContainer>
                
                <ChartContainer title="Clean Sheets: Home vs Away">
                  <BarChart 
                    data={cleanSheetsChartData} 
                    xKey="team" 
                    bars={[
                      { dataKey: 'Home', fill: '#93c5fd' },
                      { dataKey: 'Away', fill: '#2563eb' }
                    ]}
                  />
                </ChartContainer>
              </div>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">La Liga Key Facts</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Founded in 1929, La Liga is one of the oldest professional football leagues in the world.</li>
                    <li>Features 20 clubs with promotion and relegation to Segunda División.</li>
                    <li>Real Madrid has won the most titles (35), followed by Barcelona (26).</li>
                    <li>Known for technical excellence, tactical innovation, and developing world-class talent.</li>
                    <li>El Clásico between Barcelona and Real Madrid is one of the most watched sporting events globally.</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Team Stats Tab */}
            <TabsContent value="stats" className="space-y-6">
              <TeamStatsTable stats={laLigaTable} title="Complete La Liga Table" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ChartContainer title="Penalties: Won vs Conceded">
                  <BarChart 
                    data={penaltyChartData} 
                    xKey="team" 
                    bars={[
                      { dataKey: 'Penalties Won', fill: '#60a5fa' },
                      { dataKey: 'Penalties Conceded', fill: '#f87171' }
                    ]}
                  />
                </ChartContainer>
                
                <ChartContainer title="Clean Sheets: Home vs Away">
                  <BarChart 
                    data={cleanSheetsChartData} 
                    xKey="team" 
                    bars={[
                      { dataKey: 'Home', fill: '#93c5fd' },
                      { dataKey: 'Away', fill: '#2563eb' }
                    ]}
                  />
                </ChartContainer>
              </div>
            </TabsContent>
            
            {/* Goals Analysis Tab */}
            <TabsContent value="goals" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <StatCard 
                  title="Most Goals Scored"
                  value="Barcelona (69)"
                  description="2.65 goals per match"
                />
                <StatCard 
                  title="Fewest Goals Conceded"
                  value="Barcelona (22)"
                  description="0.85 goals per match"
                />
              </div>
              
              <ChartContainer title="Goals Scored: Home vs Away">
                <BarChart 
                  data={goalsChartData} 
                  xKey="team" 
                  bars={[
                    { dataKey: 'Goals Scored (Home)', fill: '#93c5fd', name: 'At Home' },
                    { dataKey: 'Goals Scored (Away)', fill: '#2563eb', name: 'Away' }
                  ]}
                />
              </ChartContainer>
              
              <ChartContainer title="Goals Conceded: Home vs Away">
                <BarChart 
                  data={goalsChartData} 
                  xKey="team" 
                  bars={[
                    { dataKey: 'Goals Conceded (Home)', fill: '#fca5a5', name: 'At Home' },
                    { dataKey: 'Goals Conceded (Away)', fill: '#991b1b', name: 'Away' }
                  ]}
                />
              </ChartContainer>
            </TabsContent>
            
            {/* Advanced Metrics Tab */}
            <TabsContent value="advanced" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ChartContainer title="xG vs Goals Scored">
                  <BarChart 
                    data={xgChartData} 
                    xKey="team" 
                    bars={[
                      { dataKey: 'xG For', fill: '#93c5fd', name: 'xG For / Match' },
                      { dataKey: 'Goals Scored', fill: '#2563eb', name: 'Goals Scored / Match' }
                    ]}
                  />
                </ChartContainer>
                
                <ChartContainer title="xG Against vs Goals Conceded">
                  <BarChart 
                    data={xgChartData} 
                    xKey="team" 
                    bars={[
                      { dataKey: 'xG Against', fill: '#fca5a5', name: 'xG Against / Match' },
                      { dataKey: 'Goals Conceded', fill: '#991b1b', name: 'Goals Conceded / Match' }
                    ]}
                  />
                </ChartContainer>
              </div>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">La Liga Style Analysis</h3>
                  <p className="mb-4">La Liga is known for its distinctive style of play, characterized by:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><span className="font-semibold">Technical Excellence:</span> Emphasis on ball control, first touch, and passing accuracy.</li>
                    <li><span className="font-semibold">Tactical Sophistication:</span> Teams exhibit complex positional play and tactical flexibility.</li>
                    <li><span className="font-semibold">Possession Football:</span> Barcelona's tiki-taka has influenced many teams to prioritize possession.</li>
                    <li><span className="font-semibold">Strong Defensive Structure:</span> Even smaller teams display organized defensive blocks.</li>
                    <li><span className="font-semibold">Individual Brilliance:</span> The league consistently produces technically gifted players who can decide matches with individual skill.</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LaLiga;
