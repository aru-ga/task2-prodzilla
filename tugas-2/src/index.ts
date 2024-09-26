const Arion = {
  name: "Arion",
  age: 21,
  exp: 5000,
  isReadyToFight: true,
  weapon: "ancientKatana",
  money: 0,
};

const KingdomOfFantasia = {
  currency: "Gold",
  currentGold: 5000,
  ration: 120,
  soldier: {
    hp: 100,
    totalPersonel: 200,
  },
};

console.log(
  `Current condition in Kingdom of Fantasia: ${KingdomOfFantasia.currency} ${KingdomOfFantasia.currentGold}, ration ${KingdomOfFantasia.ration}, ${KingdomOfFantasia.soldier.totalPersonel} soldiers`
);

const goingOutForAdventure = () => {
  let goldGained = 1500;
  const expGained = 75;
  console.log("Arion is going out for adventure!");
  console.log("...");
  console.log("..");
  console.log(".");
  console.log(
    `He is back and won! he got ${goldGained} Gold for the Kingdom and ${expGained}exp with no Gold for himself!`
  );
  console.log("====================================");
  console.log(`+${goldGained} Gold for the Kingdom`);
  console.log(`+${expGained} exp for Arion`);
  console.log("====================================");
  KingdomOfFantasia.currentGold += goldGained;
  Arion.exp += expGained;
};

const kurangiKesehatan = (soldiers: number, lostHP: number) => {
  console.log(`The soldiers are going out to fight the enemy!`);
  console.log(`With a total of ${soldiers} soldiers, they are ready to fight!`);
  console.log("...");
  console.log("..");
  console.log(".");
  console.log(`The soldiers lost ${lostHP} HP in the battle!`);
  KingdomOfFantasia.soldier.hp -= lostHP;
  if (KingdomOfFantasia.soldier.hp <= 0) {
    console.log(`The soldiers have been defeated!`);
    console.log(`The Kingdom of Fantasia is in danger!`);
    console.log("...");
    console.log("..");
    console.log(".");
    return;
  } else {
    console.log(`The soldiers have ${KingdomOfFantasia.soldier.hp} HP left!`);
    console.log(`The soldiers are back to the Kingdom!`);
  }
};

goingOutForAdventure();

kurangiKesehatan(KingdomOfFantasia.soldier.totalPersonel, 50); // change lostHP to 100 to defeat the soldiers

console.log("====================================");
console.log("Summary in Kingdom of Fantasia and our so called hero, Arion:");
console.log(`${KingdomOfFantasia.currency}: ${KingdomOfFantasia.currentGold}`);
console.log(`Total soldiers: ${KingdomOfFantasia.soldier.totalPersonel}`);
console.log(`Arion's exp: ${Arion.exp}`);
console.log("====================================");