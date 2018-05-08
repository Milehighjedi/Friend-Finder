const path = require('path');
const friends = require ('../data/friends');

module.exports = function(app){
    app.get('/api/friends', function(req, res) {
        console.log("/api/friends hit");
      res.json(friends);
    });
    app.post('/api/friends', function(req, res){
        const user = req.body;
        console.log("survey.html", user['scores[]']);
            console.log("saving user info...");
        const bestMatch = pairingAlg(user);
        console.log(pairingAlg(user));
        res.json(bestMatch);
    
    });
    }


    function pairingAlg(u) {
        let you = u['scores[]'];
        let friendlyScores = [];
        let difference = [];
        let totalDifference = [];


        friends.forEach(function(friend){
            friendlyScores.push(friend.scores);
        })


        friendlyScores.forEach(function(score){
            getDifference(you, score);
        })
    

        for (let j = 0; j < difference.length; j++){
        x = difference[j].reduce((total, amount) => parseInt(total) + parseInt(amount));
        totalDifference.push(x);
        }
    console.log(totalDifference);


    let minIndex = indexOfMin(totalDifference);
    return friends[minIndex];




function indexOfMin(arr) {
    if (arr.length === 0) {
        return -1;
    }
    let min = arr[0];
    let minIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            minIndex = i;
            min = arr[i];
        }
    }
    return minIndex;
};
    
function getDifference(a, b) {
    var x = a.map(function(item, index) {
        return Math.abs(parseInt(item) - parseInt(b[index]));   
})
difference.push(x);
}

};