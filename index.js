const Discord = require("discord.js");
const bot = new Discord.Client();
const { prefix, token} = require('./botconfig.json');

bot.once("ready", () => {
  console.log("Ready!");
  bot.user.setActivity("netflix with obama", {type: "WATCHING"});
});

bot.on("message", message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice[1];

  switch(cmd) {
  case "!help":
    help();
    break;
  case "!citatmaskinen":
    citatmaskinen();
    break;
  default:
    // code block
}

  function help() {
    message.channel.send("help!");
  }

  function citatmaskinen() {
    let quote = " - Citatmaskinen";
    var citat = [
      "Armen var inget utan Hitler",
      "Jag ska moppa golvet med påden. Sen ska jag moppa golvet med grahn för påden är så jävla äcklig",
      "Maten i bamba var nog eb idag. Ätbart",
      "Hade det funnits killar som jag hade jag också varit bög",
      "Du inser att jag typ är din morfar eftersom jag har pippat din mormor",
      "A juste bois. Jag och loke ska klippa ahlström",
      "All I know is that if you are born a nigga, you die a nigga",
      "Känslan när man kallar apor för människor nu för tiden",
      "Jag skalar en morot med en osthyvel, vill du något eller?",
      "Hade jag kunnat gråta lika bra som dig hade jag vunnit en grammis",
      "Roses are red, nigga is dead",
      "Jag vet att du inte hetsa, jag ville bara vara taskig",
      "Den där killen är så svart att han blir inte ens vit av en flash",
      "Går det att få igen hans käft? Den är ju mer töjd än din morsa",
      "Jämföra Hedman med doda, det är raka motsatsen. Ena väger 200 pannor och den andra väger negativt"
    ];

    var citater = citat[Math.floor(Math.random()*citat.length)];
    message.channel.send(citater);
  }

  function memes() {
    
  }

});

bot.login(token);
