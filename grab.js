// Getpoints

API.on(API.CHAT_COMMAND, callback);

        function callback(value) {
                if (value=='/getpoints') {
                        var Uname=prompt("Enter username");
                        users=API.getUsers();
                        var len=users.length
                        for(var i=0;i<len;++i){
                        if (users[i].username==Uname) {
                                 API.sendChat(Uname+" : WOOT POINTS : "+users[i].listenerPoints+" | DJ POINTS : "+ users[i].djPoints+" | GRAB POINTS : "+ users[i].curatorPoints)
                                                      }
                                                   
                                                }
                                 }
                         }
