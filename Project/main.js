var gameData = {
    // Inventory variables
    ore: 0,
    steel: 0,
    drones: 0,
    // Cost variables
    orePerClick: 1,
    oreRefine: 10,
    steelPerRefine: 1,
    droneCost: 10
  }
var gameFlags = {
    droneAI: 0
}

// Menu tabs function copied from w3schools
function openMenu(evt, menuName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.className += " active";
}

  function mineOre() {
    gameData.ore += gameData.orePerClick
    document.getElementById("oreMined").innerHTML = gameData.ore + " Ore"
  }

  function refineSteel() {
    if (gameData.ore >= gameData.oreRefine) {
        gameData.steel += gameData.steelPerRefine
        gameData.ore -= gameData.oreRefine
        document.getElementById("logMessage").innerHTML = " "
    } else {
        document.getElementById("logMessage").style.color = "red"
        document.getElementById("logMessage").innerHTML = "Refinery: Not enough ore"
    }
        document.getElementById("oreRefined").innerHTML = gameData.steel + " Steel"
        document.getElementById("oreMined").innerHTML = gameData.ore + " Ore"
  }

  function buildDrone() {
    if (gameData.steel >= gameData.droneCost) {
        gameData.drones += 1
        gameData.orePerClick += 1
        gameData.steel -= gameData.droneCost
        document.getElementById("logMessage").innerHTML = " "
    } else {
        document.getElementById("logMessage").style.color = "red"
        document.getElementById("logMessage").innerHTML = "Fabricator: Not enough steel"
    }
        document.getElementById("miningDrones").innerHTML = gameData.drones + " mining drones"
        document.getElementById("oreRefined").innerHTML = gameData.steel + " Steel"
  }

  // Enables automining and updates status.
  function enableTrafficCon() {
    // TODO: Add IF statement to unlock.
    document.getElementById("trafficConStatus").innerHTML = "ONLINE"
    document.getElementById("trafficConStatus").style.color = "green"
    document.getElementById("trafficConBtn").style.display = "none"
    gameFlags.droneAI = 1
  }

  // Loop
  var mainGameLoop = window.setInterval(function() {
    if (gameFlags.droneAI == 1)
    mineOre()
  }, 1000)