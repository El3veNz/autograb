API.on(API.ROOM_SCORE_UPDATE, callback);

function callback(obj) {

    alert(obj.positive + " woots, " + obj.negative + " mehs, " + obj.grabs + " grabs);

}
