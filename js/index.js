var clockSeconds = 0;
var team1Score = 0;
var team2Score = 0;

function startTheGame()
{
  setInterval(
          function oneSecondOfTheGame()
          {
           
           var teamChoice = Math.round(Math.random());            
          
           if(teamChoice == 0)
           {
              team1Score++;   
           }
           else
           {
              team2Score++;    
           }
            
           
           document.getElementById("team1").innerHTML = "TEAM 1 :"+team1Score;
           document.getElementById("team2").innerHTML = "TEAM 2 :"+team2Score;
            
           colourTheTeams(); 
            
           //Tick the clock 
           clockSeconds++;
           document.getElementById("clock").innerHTML = "CLOCK : "+clockSeconds;
          }
    ,1000); 
}

function colourTheTeams()
{
  //Draw
  if(team1Score == team2Score)
  {
    document.getElementById("team1").style.color = "blue";
    document.getElementById("team2").style.color = "blue";
  }
  //Team 1 winning
  else if(team1Score > team2Score)
  {
    document.getElementById("team1").style.color = "red";
    document.getElementById("team2").style.color = "black";    
  }
  //Team 2 winning
  else
  {
    document.getElementById("team1").style.color = "black";
    document.getElementById("team2").style.color = "red";        
  }
  
  
}