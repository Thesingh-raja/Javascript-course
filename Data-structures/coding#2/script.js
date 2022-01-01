const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};


//1
const goals = Object.values(game.scored);
for(i=0;i<goals.length;i++){
console.log(`"Goal ${i+1}:${goals[i]}" `);}

//2
const go =Object.values(game.odds);
console.log(go);
let sum=0;
for(i=0;i<go.length;i++)
{
  sum+= go[i];
}
const avg = sum/(go.length)
console.log(avg);

//3
for(const [team,odd] of Object.entries(game.odds))
{
  const teamStr= team==='x'? 'draw': `victory ${game[team]}`;
  console.log(`odd of ${teamStr} ${odd}`);
}
//BONUS
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);