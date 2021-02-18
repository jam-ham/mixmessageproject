const randomMessage = ["Oasis are greatest band","Somen Tchoyi is the GOAT", "I support West Brom :(","I like beer", 
"I am a goalkeeper", "happy coding", "Pasta is the best", 
"Mr blobby is the greatest entertainer", "I need to holiday", 
"I need to a cup a tea", "Box Sets are better than movies"];



function newMessage() {const randomNumber = Math.floor(Math.random() * (randomMessage.length)); 
document.getElementById("displayMessage").innerHTML = randomMessage[randomNumber]; }