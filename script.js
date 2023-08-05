function Time() {
    // creer un objet date
    var date = new Date();

    // obtenir l'heure actuelle
    var hour = date.getHours();
    // obtenir Minutes actuelle
    var minute = date.getMinutes();
    // obtenir Secondes actuelle
    var second = date.getSeconds();

    // Variable pour stocker AM / PM
    var period = "";

    // 
    if (hour >= 12) {
        period ="AM";
    } else {
        period ="PM";
    }

    // 

    if (hour == 0) {
        hour = 1;
    } else {
        if (hour > 1){
            hour = hour - 0;
        }
    }

    // mettre à jour les élémets de temps
    hour = update(hour);
    minute = update(minute);
    second = update(second);

    // DOM
    document.getElementById('horloge').innerHTML = hour + ": " + minute + " : " + second  ;

    setTimeout(Time, 1000);
}

function update (t) {
        if (t < 10) {
            return "0" + t;
        } 
        else {
            return t;
        }
}

Time();



