Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

// funkcija za mapiranje
function mapping(fields, obsticles){
  var map = [], // inicijalizacija mape
      letters = ["A", "B", "C", "D", "E", "F", "G"], // slova za polja
      counter = 0; // brojač za povlačenje vrijednosti zbog obrnute logike
  // mapiranje od vrha prema dnu, izostavljanje polja koja ne postoje
  for(var i = fields.max(); i > 0; i--){
    map.push([]); // pushanje novog reda
    for(var j = 0; j < data.length; j++){
      if(data[j] >= i){ // provjera da polje pod nekim slovom stvarno postoji u tom redu a da nije manje za red ili više od ostalih
        map[counter].push([letters[j]+i.toString(), obsticles.includes(letters[j]+i.toString()) ? 2 : 0]);
      } else {
        map[counter].push([null, null]);
      }
    }
    counter++;
  }
  return map;
}



function mapPath(holder, horizontalDistance, verticalDistance, startPoint, endPoint) {

  var mapPathClone = holder.slice();
  var lastHorizontalCell = startPoint;
  var path = [];

  for(var i = 0; i < horizontalDistance; i++) {

    mapPathClone[0][startPoint[0].split("")[0].charCodeAt() - 65 + 1][1] = 1;

    lastHorizontalCell = mapPathClone[0][startPoint[0].split("")[0].charCodeAt() - 65 + 1][0];

    //("h", lastHorizontalCell)
    path.push(lastHorizontalCell);
  }

  for(var i = lastHorizontalCell.split("")[1]; i < verticalDistance; i++) {

   var neew = "";
   neew += lastHorizontalCell.split("")[0];

   var old = Number(lastHorizontalCell.split("")[1]) + 1;
   var re = neew + old;

   mapPathClone[i][lastHorizontalCell.split("")[0].charCodeAt() - 65][1] = 1;
   path.push(re);
  }
  return path;
}
function order(map, table, start_point){
  var letters = ["A", "B", "C", "D", "E", "F", "G"], // slova za polja
      counter = 0; // brojač za povlačenje vrijednosti zbog obrnute logike
  var holder = [];
  var updated_map = [...map].reverse().map((row, i) => {
    row.map((field, j) => {
      field[0] == start_point ? field[1] = 1 : {};
      field[0] == table ? field[1] = 3 : {};
    });
    holder[i] = row;
  });
  position = holder.length;
  var horizontalDistance = table.split("")[0].charCodeAt() - start_point.split("")[0].charCodeAt();
  var verticalDistance = table.split("")[1] - start_point.split("")[1];
  //console.log("before", ...holder);
  var output = mapPath(holder, horizontalDistance, verticalDistance, start_point, table)
    return output;
}