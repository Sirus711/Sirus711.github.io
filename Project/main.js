var gameData = {
    
    minerals: 0,
    MineralsPerClick: 1,
    alloys: 0,
    AlloysPerClick: 1,
    
    Drones: 1,
    SolarPanels: 0,
    PowerPerPanel: 1
  }

  // Resource Collection
  function MineMinerals() {
    gameData.minerals += gameData.MineralsPerClick
    document.getElementById("MineralsMined").innerHTML = gameData.minerals + " minerals collected"
  }

  // Refinery
  function RefineAlloy() {
    if (gameData.minerals >= 2) {
      gameData.alloys += gameData.AlloysPerClick
      gameData.minerals -= 2
      document.getElementById("AlloysRefined").innerHTML = gameData.alloys + " alloys refined"
      document.getElementById("MineralsMined").innerHTML = gameData.minerals + " minerals collected"
    }

  }

  // Fabricator
  function FabDrone() {
    if (gameData.alloys >= 10) {
      gameData.Drones += 1
      gameData.alloys -= 10
      document.getElementById("DronesTotal").innerHTML = gameData.Drones + " mining drones"
      document.getElementById("AlloysRefined").innerHTML = gameData.alloys + " alloys refined"
      gameData.MineralsPerClick += 1
    }
  }

  function FabSolarPanel() {
    if (gameData.alloys >= 10) {
      gameData.SolarPanels += 1
      gameData.alloys -= 10
      document.getElementById("SolarPanelsTotal").innerHTML = gameData.SolarPanels + " solar panels"
      document.getElementById("AlloysRefined").innerHTML = gameData.alloys + " alloys refined"
    }
  }