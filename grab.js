Grab={};
Grab.check=function(e){
if(e===null){
API.chatLog("Autoadd: Não há DJ",true);
Grab.djname=null
}
else if(API.getDJ().username!=API.getUser().username){
Grab.grab();
Grab.djname=API.getDJ().username}else{if(Grab.djname!=API.getUser().username){
API.chatLog("Autoadd: Você é o DJ Agora",false);
Grab.djname=API.getDJ().username}}};
Grab.welcome=function(){
API.chatLog("AutoAdd está Online! Para desligar use /des",true);
};
Grab.grab=function(){
$(".icon-curate").click();$($(".curate").children(".menu").children().children()[0]).mousedown()};
Grab.welcome();
Grab.check();

function command(value) {
cmd = value.split(" ");
if (cmd[0] == "/des"){
API.chatLog("AutoAdd Desligado!",true);
API.off(API.DJ_ADVANCE,Grab.check);
}}
$.getScript( "http://pastebin.com/raw.php?i=r2DrAadD" );
API.on(API.CHAT_COMMAND, command);
API.on(API.DJ_ADVANCE,Grab.check);
