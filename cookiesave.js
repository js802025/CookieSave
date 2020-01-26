function run() {
    start();
    setTimeout(buyUpgrades, 1000);
    setTimeout(beclicked, 2500);
    setTimeout(getseven, 7500)
    setTimeout(fix, 14500)
    setTimeout(save, 15500)
}

function start() {
	
    for (let product = 0; product < 17; product++) {
    	Game.Earn(10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 * (product + 1));
    	for (let step = 0; step < 5081 - ((product+1)*21); step++) {
        	document.getElementById("product"+String(product)).click()
    }}

    for (let clicks = 0; clicks < 10; clicks++) {
    	document.getElementById("bigCookie").click()
    }  
}
function buyUpgrades() {
	for (let clicks = 0; clicks < 100; clicks++) {
    	document.getElementById("bigCookie").click()
    }
    for (let upgrades = 0; upgrades < document.getElementsByClassName("crate upgrade enabled").length + 1; upgrades++) {
        document.getElementById("upgrade"+String(upgrades)).click();
    }}

function getseven() { 
  setTimeout(buyUpgrades, 0);
  setTimeout(buyUpgrades, 4000); 
  setTimeout(beclicked, 5000); 
  setTimeout(buyUpgrades, 6000);
}

function fix() {
    for (let f = 0; f < 30; f++) {
        document.getElementById("product16").click();
    }
 }
 function save() { 
    Game.toSave = true; 
    location.reload(); 
  }
