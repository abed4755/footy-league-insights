// Premier League Data
export const premierLeagueTable = [
  {
    team: 'Manchester City',
    played: 3,
    won: 3,
    drawn: 0,
    lost: 0,
    goalsFor: 8,
    goalsAgainst: 2,
    goalDiff: 6,
    points: 9,
  },
  {
    team: 'Liverpool',
    played: 3,
    won: 3,
    drawn: 0,
    lost: 0,
    goalsFor: 7,
    goalsAgainst: 2,
    goalDiff: 5,
    points: 9,
  },
  {
    team: 'Brighton',
    played: 3,
    won: 2,
    drawn: 1,
    lost: 0,
    goalsFor: 6,
    goalsAgainst: 1,
    goalDiff: 5,
    points: 7,
  },
  {
    team: 'Arsenal',
    played: 3,
    won: 2,
    drawn: 1,
    lost: 0,
    goalsFor: 4,
    goalsAgainst: 1,
    goalDiff: 3,
    points: 7,
  },
  {
    team: 'Aston Villa',
    played: 3,
    won: 2,
    drawn: 0,
    lost: 1,
    goalsFor: 7,
    goalsAgainst: 5,
    goalDiff: 2,
    points: 6,
  },
];

export const premierLeaguePenalties = [
  { team: 'Arsenal', won: 2, conceded: 3 },
  { team: 'Chelsea', won: 4, conceded: 6 },
  { team: 'Liverpool', won: 9, conceded: 1 },
  { team: 'Man City', won: 3, conceded: 3 },
  { team: 'Man United', won: 3, conceded: 4 },
];

export const premierLeagueCleanSheets = [
  { team: 'Liverpool', home: 6, away: 7 },
  { team: 'Arsenal', home: 6, away: 5 },
  { team: 'Man City', home: 4, away: 5 },
  { team: 'Man United', home: 4, away: 5 },
  { team: 'Chelsea', home: 4, away: 4 },
];

export const premierLeagueGoals = [
  {
    team: 'Liverpool',
    goalsScored: { home: 34, away: 40 },
    goalsConceded: { home: 12, away: 19 }
  },
  {
    team: 'Arsenal',
    goalsScored: { home: 31, away: 26 },
    goalsConceded: { home: 13, away: 14 }
  },
  {
    team: 'Man City',
    goalsScored: { home: 37, away: 25 },
    goalsConceded: { home: 21, away: 21 }
  },
  {
    team: 'Man United',
    goalsScored: { home: 21, away: 17 },
    goalsConceded: { home: 25, away: 20 }
  },
  {
    team: 'Chelsea',
    goalsScored: { home: 30, away: 26 },
    goalsConceded: { home: 17, away: 22 }
  },
];

export const premierLeagueXG = [
  { team: 'Liverpool', xgFor: 1.18, goalsScored: 2.32, xgAgainst: 1.19, goalsConceded: 0.97 },
  { team: 'Arsenal', xgFor: 1.08, goalsScored: 1.81, xgAgainst: 1.09, goalsConceded: 0.84 },
  { team: 'Man City', xgFor: 1.84, goalsScored: 1.85, xgAgainst: 1.17, goalsConceded: 1.28 },
  { team: 'Man United', xgFor: 1.35, goalsScored: 1.19, xgAgainst: 1.34, goalsConceded: 1.32 },
  { team: 'Chelsea', xgFor: 1.28, goalsScored: 1.74, xgAgainst: 1.26, goalsConceded: 1.19 },
];

// La Liga Data
export const laLigaTable = [
  {
    team: 'Barcelona',
    played: 3,
    won: 3,
    drawn: 0,
    lost: 0,
    goalsFor: 8,
    goalsAgainst: 2,
    goalDiff: 6,
    points: 9,
  },
  {
    team: 'Real Madrid',
    played: 3,
    won: 2,
    drawn: 1,
    lost: 0,
    goalsFor: 4,
    goalsAgainst: 1,
    goalDiff: 3,
    points: 7,
  },
  {
    team: 'Atletico Madrid',
    played: 3,
    won: 2,
    drawn: 0,
    lost: 1,
    goalsFor: 8,
    goalsAgainst: 3,
    goalDiff: 5,
    points: 6,
  },
  {
    team: 'Villarreal',
    played: 3,
    won: 2,
    drawn: 0,
    lost: 1,
    goalsFor: 5,
    goalsAgainst: 3,
    goalDiff: 2,
    points: 6,
  },
  {
    team: 'Real Betis',
    played: 3,
    won: 2,
    drawn: 0,
    lost: 1,
    goalsFor: 4,
    goalsAgainst: 2,
    goalDiff: 2,
    points: 6,
  },
];

export const laLigaPenalties = [
  { team: 'Barcelona', won: 6, conceded: 3 },
  { team: 'Real Madrid', won: 12, conceded: 3 },
  { team: 'Atletico Madrid', won: 5, conceded: 4 },
];

export const laLigaCleanSheets = [
  { team: 'Barcelona', home: 6, away: 4 },
  { team: 'Real Madrid', home: 6, away: 5 },
  { team: 'Atletico Madrid', home: 8, away: 5 },
];

export const laLigaGoals = [
  {
    team: 'Barcelona',
    goalsScored: { home: 41, away: 43 },
    goalsConceded: { home: 11, away: 18 }
  },
  {
    team: 'Real Madrid',
    goalsScored: { home: 37, away: 27 },
    goalsConceded: { home: 16, away: 15 }
  },
  {
    team: 'Atletico Madrid',
    goalsScored: { home: 31, away: 22 },
    goalsConceded: { home: 14, away: 12 }
  },
];

export const laLigaXG = [
  { team: 'Barcelona', xgFor: 0.98, goalsScored: 2.83, xgAgainst: 0.97, goalsConceded: 0.97 },
  { team: 'Real Madrid', xgFor: 1.19, goalsScored: 2.09, xgAgainst: 1.19, goalsConceded: 1.02 },
  { team: 'Atletico Madrid', xgFor: 1.28, goalsScored: 1.61, xgAgainst: 1.28, goalsConceded: 0.80 },
];

// Champions League Data
export const championsLeagueTable = [
  {
    team: 'Liverpool',
    played: 1,
    won: 1,
    drawn: 0,
    lost: 0,
    goalsFor: 3,
    goalsAgainst: 1,
    goalDiff: 2,
    points: 3,
  },
  {
    team: 'PSG',
    played: 1,
    won: 1,
    drawn: 0,
    lost: 0,
    goalsFor: 2,
    goalsAgainst: 0,
    goalDiff: 2,
    points: 3,
  },
  {
    team: 'Bayern Munich',
    played: 1,
    won: 1,
    drawn: 0,
    lost: 0,
    goalsFor: 9,
    goalsAgainst: 2,
    goalDiff: 7,
    points: 3,
  },
  {
    team: 'Aston Villa',
    played: 1,
    won: 1,
    drawn: 0,
    lost: 0,
    goalsFor: 3,
    goalsAgainst: 0,
    goalDiff: 3,
    points: 3,
  },
  {
    team: 'Sporting CP',
    played: 1,
    won: 1,
    drawn: 0,
    lost: 0,
    goalsFor: 2,
    goalsAgainst: 0,
    goalDiff: 2,
    points: 3,
  },
];

export const championsLeaguePenalties = [
  { team: 'Arsenal', won: 4, conceded: 3 },
  { team: 'Aston Villa', won: 2, conceded: 1 },
  { team: 'Barcelona', won: 3, conceded: 2 },
  { team: 'Bayern', won: 5, conceded: 1 },
  { team: 'Dortmund', won: 4, conceded: 3 },
  { team: 'Inter Milan', won: 6, conceded: 1 },
  { team: 'PSG', won: 1, conceded: 0 },
  { team: 'Real Madrid', won: 3, conceded: 4 },
];

export const championsLeagueCleanSheets = [
  { team: 'Barcelona', home: 3, away: 1 },
  { team: 'Real Madrid', home: 0, away: 1 },
  { team: 'Arsenal', home: 5, away: 1 },
  { team: 'PSG', home: 2, away: 3 },
  { team: 'Bayern', home: 3, away: 1 },
  { team: 'Aston Villa', home: 4, away: 1 },
  { team: 'Inter Milan', home: 4, away: 4 },
  { team: 'Dortmund', home: 2, away: 3 },
];

export const championsLeagueGoals = [
  {
    team: 'Barcelona',
    goalsScored: { home: 21, away: 16 },
    goalsConceded: { home: 4, away: 13 }
  },
  {
    team: 'Real Madrid',
    goalsScored: { home: 20, away: 9 },
    goalsConceded: { home: 11, away: 11 }
  },
  {
    team: 'Arsenal',
    goalsScored: { home: 14, away: 16 },
    goalsConceded: { home: 2, away: 5 }
  },
  {
    team: 'PSG',
    goalsScored: { home: 17, away: 13 },
    goalsConceded: { home: 7, away: 7 }
  },
  {
    team: 'Bayern',
    goalsScored: { home: 19, away: 12 },
    goalsConceded: { home: 6, away: 12 }
  },
  {
    team: 'Aston Villa',
    goalsScored: { home: 13, away: 10 },
    goalsConceded: { home: 4, away: 8 }
  },
  {
    team: 'Inter Milan',
    goalsScored: { home: 13, away: 6 },
    goalsConceded: { home: 3, away: 2 }
  },
  {
    team: 'Dortmund',
    goalsScored: { home: 17, away: 14 },
    goalsConceded: { home: 7, away: 12 }
  },
];

export const championsLeagueXG = [
  { team: 'Barcelona', xgFor: 1.21, goalsScored: 3.29, xgAgainst: 1.26, goalsConceded: 1.26 },
  { team: 'Real Madrid', xgFor: 1.79, goalsScored: 2.14, xgAgainst: 1.69, goalsConceded: 1.53 },
  { team: 'Arsenal', xgFor: 1.12, goalsScored: 2.54, xgAgainst: 1.12, goalsConceded: 0.55 },
  { team: 'PSG', xgFor: 1.16, goalsScored: 2.14, xgAgainst: 1.16, goalsConceded: 0.85 },
  { team: 'Bayern', xgFor: 2.41, goalsScored: 2.22, xgAgainst: 0.98, goalsConceded: 1.22 },
  { team: 'Aston Villa', xgFor: 1.49, goalsScored: 1.83, xgAgainst: 1.49, goalsConceded: 0.91 },
  { team: 'Inter Milan', xgFor: 1.41, goalsScored: 1.55, xgAgainst: 1.51, goalsConceded: 0.27 },
  { team: 'Dortmund', xgFor: 1.26, goalsScored: 1.86, xgAgainst: 1.25, goalsConceded: 1.53 },
];
