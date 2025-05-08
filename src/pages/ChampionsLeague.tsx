
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
  championsLeagueTable,
  championsLeaguePenalties,
  championsLeagueCleanSheets,
  championsLeagueGoals,
  championsLeagueXG
} from '@/services/leagueData';
import { Card, CardContent } from '@/components/ui/card';

const ChampionsLeague = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Format data for charts
  const penaltyChartData = championsLeaguePenalties.map(item => ({
    team: item.team,
    'Penalties Won': item.won,
    'Penalties Conceded': item.conceded
  }));

  const cleanSheetsChartData = championsLeagueCleanSheets.map(item => ({
    team: item.team,
    'Home': item.home,
    'Away': item.away
  }));

  const goalsChartData = championsLeagueGoals.map(item => ({
    team: item.team,
    'Goals Scored (Home)': item.goalsScored.home,
    'Goals Scored (Away)': item.goalsScored.away,
    'Goals Conceded (Home)': item.goalsConceded.home,
    'Goals Conceded (Away)': item.goalsConceded.away
  }));

  const xgChartData = championsLeagueXG.map(item => ({
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
          title="Champions League" 
          subtitle="UEFA's Elite Club Competition" 
          gradientClass="champions-gradient"
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
                  value="289"
                  description="Average: 3.01 per match"
                />
                <StatCard 
                  title="Home Win %"
                  value="52.1%"
                  description="50 home victories"
                />
                <StatCard 
                  title="Away Win %"
                  value="26.0%"
                  description="25 away victories"
                />
                <StatCard 
                  title="Clean Sheets"
                  value="36"
                  description="37.5% of all matches"
                />
              </div>
              
              <TeamStatsTable stats={championsLeagueTable} title="Group Stage Leaders" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ChartContainer title="Penalties: Won vs Conceded">
                  <BarChart 
                    data={penaltyChartData} 
                    xKey="team" 
                    bars={[
                      { dataKey: 'Penalties Won', fill: '#4ade80' },
                      { dataKey: 'Penalties Conceded', fill: '#f87171' }
                    ]}
                  />
                </ChartContainer>
                
                <ChartContainer title="Clean Sheets: Home vs Away">
                  <BarChart 
                    data={cleanSheetsChartData} 
                    xKey="team" 
                    bars={[
                      { dataKey: 'Home', fill: '#d8b4fe' },
                      { dataKey: 'Away', fill: '#7e22ce' }
                    ]}
                  />
                </ChartContainer>
              </div>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Champions League Key Facts</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Established in 1955 as the European Cup, rebranded as Champions League in 1992.</li>
                    <li>Europe's most prestigious club competition featuring top teams from all UEFA member associations.</li>
                    <li>Real Madrid has won the most titles (14), followed by AC Milan (7).</li>
                    <li>The famous anthem, composed by Tony Britten, is based on Handel's Zadok the Priest.</li>
                    <li>The competition culminates in a single-match final held at a neutral venue, one of the most watched annual sporting events in the world.</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Team Stats Tab */}
            <TabsContent value="stats" className="space-y-6">
              <TeamStatsTable stats={championsLeagueTable} title="Champions League Standings" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ChartContainer title="Penalties: Won vs Conceded">
                  <BarChart 
                    data={penaltyChartData} 
                    xKey="team" 
                    bars={[
                      { dataKey: 'Penalties Won', fill: '#4ade80' },
                      { dataKey: 'Penalties Conceded', fill: '#f87171' }
                    ]}
                  />
                </ChartContainer>
                
                <ChartContainer title="Clean Sheets: Home vs Away">
                  <BarChart 
                    data={cleanSheetsChartData} 
                    xKey="team" 
                    bars={[
                      { dataKey: 'Home', fill: '#d8b4fe' },
                      { dataKey: 'Away', fill: '#7e22ce' }
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
                  value="Bayern Munich (18)"
                  description="3.0 goals per match"
                />
                <StatCard 
                  title="Fewest Goals Conceded"
                  value="Manchester City (4)"
                  description="0.67 goals per match"
                />
              </div>
              
              <ChartContainer title="Goals Scored: Home vs Away">
                <BarChart 
                  data={goalsChartData} 
                  xKey="team" 
                  bars={[
                    { dataKey: 'Goals Scored (Home)', fill: '#d8b4fe', name: 'At Home' },
                    { dataKey: 'Goals Scored (Away)', fill: '#7e22ce', name: 'Away' }
                  ]}
                />
              </ChartContainer>
              
              <ChartContainer title="Goals Conceded: Home vs Away">
                <BarChart 
                  data={goalsChartData} 
                  xKey="team" 
                  bars={[
                    { dataKey: 'Goals Conceded (Home)', fill: '#fda4af', name: 'At Home' },
                    { dataKey: 'Goals Conceded (Away)', fill: '#be123c', name: 'Away' }
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
                      { dataKey: 'xG For', fill: '#d8b4fe', name: 'xG For / Match' },
                      { dataKey: 'Goals Scored', fill: '#7e22ce', name: 'Goals Scored / Match' }
                    ]}
                  />
                </ChartContainer>
                
                <ChartContainer title="xG Against vs Goals Conceded">
                  <BarChart 
                    data={xgChartData} 
                    xKey="team" 
                    bars={[
                      { dataKey: 'xG Against', fill: '#fda4af', name: 'xG Against / Match' },
                      { dataKey: 'Goals Conceded', fill: '#be123c', name: 'Goals Conceded / Match' }
                    ]}
                  />
                </ChartContainer>
              </div>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Champions League Performance Insights</h3>
                  <p className="mb-4">The Champions League presents unique challenges compared to domestic competitions:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><span className="font-semibold">Higher Tactical Variability:</span> Teams face opponents from different countries with diverse tactical approaches.</li>
                    <li><span className="font-semibold">Away Performance Premium:</span> The away goals rule (until recently) placed emphasis on scoring away from home.</li>
                    <li><span className="font-semibold">Increased Pressure:</span> The knockout format amplifies pressure, affecting both tactical approaches and player performance.</li>
                    <li><span className="font-semibold">Quality Concentration:</span> Teams face a higher concentration of quality opponents than in domestic leagues.</li>
                    <li><span className="font-semibold">Specialized Preparation:</span> Teams often adapt their style specifically for European competitions.</li>
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

export default ChampionsLeague;
