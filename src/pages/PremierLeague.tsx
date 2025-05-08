
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
  premierLeagueTable,
  premierLeaguePenalties,
  premierLeagueCleanSheets,
  premierLeagueGoals,
  premierLeagueXG
} from '@/services/leagueData';
import { Card, CardContent } from '@/components/ui/card';

const PremierLeague = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Format data for charts
  const penaltyChartData = premierLeaguePenalties.map(item => ({
    team: item.team,
    'Penalties Won': item.won,
    'Penalties Conceded': item.conceded
  }));

  const cleanSheetsChartData = premierLeagueCleanSheets.map(item => ({
    team: item.team,
    'Home': item.home,
    'Away': item.away
  }));

  const goalsChartData = premierLeagueGoals.map(item => ({
    team: item.team,
    'Goals Scored (Home)': item.goalsScored.home,
    'Goals Scored (Away)': item.goalsScored.away,
    'Goals Conceded (Home)': item.goalsConceded.home,
    'Goals Conceded (Away)': item.goalsConceded.away
  }));

  const xgChartData = premierLeagueXG.map(item => ({
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
          title="Premier League" 
          subtitle="England's Top Division" 
          gradientClass="premier-gradient"
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
                  value="387"
                  description="Average: 2.91 per match"
                />
                <StatCard 
                  title="Home Win %"
                  value="48.2%"
                  description="119 home victories"
                />
                <StatCard 
                  title="Away Win %"
                  value="31.8%"
                  description="84 away victories"
                />
                <StatCard 
                  title="Clean Sheets"
                  value="92"
                  description="34.8% of all matches"
                />
              </div>
              
              <TeamStatsTable stats={premierLeagueTable} title="Current Standings" />
              
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
                      { dataKey: 'Home', fill: '#a3e635' },
                      { dataKey: 'Away', fill: '#15803d' }
                    ]}
                  />
                </ChartContainer>
              </div>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Premier League Key Facts</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Founded in 1992, replacing the First Division as England's top tier.</li>
                    <li>Features 20 clubs competing in a double round-robin format.</li>
                    <li>Manchester United have won the most titles (13), followed by Manchester City and Chelsea.</li>
                    <li>Known for its high intensity, physical play, and global fan base.</li>
                    <li>The most-watched sports league in the world, broadcast in 212 territories to 643 million homes.</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Team Stats Tab */}
            <TabsContent value="stats" className="space-y-6">
              <TeamStatsTable stats={premierLeagueTable} title="Complete Premier League Table" />
              
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
                      { dataKey: 'Home', fill: '#a3e635' },
                      { dataKey: 'Away', fill: '#15803d' }
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
                  value="Liverpool (74)"
                  description="2.85 goals per match"
                />
                <StatCard 
                  title="Fewest Goals Conceded"
                  value="Arsenal (27)"
                  description="1.04 goals per match"
                />
              </div>
              
              <ChartContainer title="Goals Scored: Home vs Away">
                <BarChart 
                  data={goalsChartData} 
                  xKey="team" 
                  bars={[
                    { dataKey: 'Goals Scored (Home)', fill: '#a3e635', name: 'At Home' },
                    { dataKey: 'Goals Scored (Away)', fill: '#15803d', name: 'Away' }
                  ]}
                />
              </ChartContainer>
              
              <ChartContainer title="Goals Conceded: Home vs Away">
                <BarChart 
                  data={goalsChartData} 
                  xKey="team" 
                  bars={[
                    { dataKey: 'Goals Conceded (Home)', fill: '#fdba74', name: 'At Home' },
                    { dataKey: 'Goals Conceded (Away)', fill: '#b91c1c', name: 'Away' }
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
                      { dataKey: 'xG For', fill: '#c4b5fd', name: 'xG For / Match' },
                      { dataKey: 'Goals Scored', fill: '#15803d', name: 'Goals Scored / Match' }
                    ]}
                  />
                </ChartContainer>
                
                <ChartContainer title="xG Against vs Goals Conceded">
                  <BarChart 
                    data={xgChartData} 
                    xKey="team" 
                    bars={[
                      { dataKey: 'xG Against', fill: '#fda4af', name: 'xG Against / Match' },
                      { dataKey: 'Goals Conceded', fill: '#b91c1c', name: 'Goals Conceded / Match' }
                    ]}
                  />
                </ChartContainer>
              </div>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Advanced Metrics Explained</h3>
                  <dl className="space-y-4">
                    <div>
                      <dt className="font-semibold">Expected Goals (xG)</dt>
                      <dd>A statistical measure of the quality of chances created and conceded.</dd>
                    </div>
                    <div>
                      <dt className="font-semibold">xG Overperformance</dt>
                      <dd>Teams scoring more goals than their xG suggests are overperforming, possibly due to exceptional finishing.</dd>
                    </div>
                    <div>
                      <dt className="font-semibold">xG Underperformance</dt>
                      <dd>Teams scoring fewer goals than their xG suggests are underperforming, possibly due to poor finishing.</dd>
                    </div>
                    <div>
                      <dt className="font-semibold">Defensive Efficiency</dt>
                      <dd>Teams conceding fewer goals than their xG Against suggests have efficient defenses or exceptional goalkeepers.</dd>
                    </div>
                  </dl>
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

export default PremierLeague;
