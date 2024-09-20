function numIsPair(n) {
  return (n & 1) ? false : true;
}

function checkWater(a) {
  let bool = false;
  a.forEach(function(hexType){
    if(hexType == 'water'){
      bool = true;
    }
  });
  return bool;
}

function generateContinents(hexmap, aleaK, sizeQ, sizeR){
  let n = 0;
    for(j = 0 ; j < sizeR ; j++){
      for(k = 0 ; k < sizeQ ; k++){
        if(j <= 3){
          if(Math.floor(Math.random()*100)+1 > 75){
            hexmap.hexes[n] = {n:n,q:k,r:j,type:'land'};
            n++;
          }
          else{
            hexmap.hexes[n] = {n:n,q:k,r:j,type:'water'};
            n++;
          }
        }
        else if(j >= (sizeR-3)){
          if(Math.floor(Math.random()*100)+1 > 75){
            hexmap.hexes[n] = {n:n,q:k,r:j,type:'land'};
            n++;
          }
          else{
            hexmap.hexes[n] = {n:n,q:k,r:j,type:'water'};
            n++;
          }
        }
        else{
          if(k <= 2 || k >= (sizeQ-2)){
            if(Math.floor(Math.random()*100)+1 > 75){
              hexmap.hexes[n] = {n:n,q:k,r:j,type:'land'};
              n++;
            }
            else{
              hexmap.hexes[n] = {n:n,q:k,r:j,type:'water'};
              n++;
            }
          }
          else if(k >= 3 && k < aleaK-3){
            hexmap.hexes[n] = {n:n,q:k,r:j,type:'land'};
            n++;
          }
          else if(k >= aleaK-3 && k <= aleaK+3){
            if(Math.floor(Math.random()*100)+1 > 75){
              hexmap.hexes[n] = {n:n,q:k,r:j,type:'land'};
              n++;
            }
            else{
              hexmap.hexes[n] = {n:n,q:k,r:j,type:'water'};
              n++;
            }
          }
          else if(k > aleaK+3 && k < (sizeQ-2)){
            hexmap.hexes[n] = {n:n,q:k,r:j,type:"land"};
            n++;
          }
        }
      }
    }

  return hexmap;
}

function generateWorld(hexmap, aleaK, sizeQ, sizeR, aleaJ){
  let n = 0;
    for(j = 0 ; j < sizeR ; j++){
      for(k = 0 ; k < sizeQ ; k++){
        if(j < aleaJ && k >= aleaK-5 && k <= aleaK+5){
          if(Math.floor(Math.random()*100)+1 > 70){
            hexmap.hexes[n] = {n:n,q:k,r:j,type:'land'};
            n++;
          }
          else{
            hexmap.hexes[n] = {n:n,q:k,r:j,type:'water'};
            n++;
          }
        }
        else if(j > (sizeR-4)){
          if(Math.floor(Math.random()*100)+1 > 75){
            hexmap.hexes[n] = {n:n,q:k,r:j,type:'land'};
            n++;
          }
          else{
            hexmap.hexes[n] = {n:n,q:k,r:j,type:'water'};
            n++;
          }
        }
        else if(j < aleaJ){
          if(Math.floor(Math.random()*100)+1 > 90){
            hexmap.hexes[n] = {n:n,q:k,r:j,type:'land'};
            n++;
          }
          else{
            hexmap.hexes[n] = {n:n,q:k,r:j,type:'water'};
            n++;
          }
        }
        else{
          if(k <= 3 || k >= (sizeQ-3)){
            if(Math.floor(Math.random()*100)+1 > 75){
              hexmap.hexes[n] = {n:n,q:k,r:j,type:'land'};
              n++;
            }
            else{
              hexmap.hexes[n] = {n:n,q:k,r:j,type:'water'};
              n++;
            }
          }
          else if(k >= 4 && k < aleaK-2){
            if(Math.floor(Math.random()*100)+1 > 8){
              hexmap.hexes[n] = {n:n,q:k,r:j,type:'land'};
              n++;
            }
            else{
              hexmap.hexes[n] = {n:n,q:k,r:j,type:'water'};
              n++;
            }
          }
          else if(k >= aleaK-4 && k <= aleaK+4 && j > aleaJ+4 && j < (sizeR-8)){
            if(Math.floor(Math.random()*100)+1 > 90){
              hexmap.hexes[n] = {n:n,q:k,r:j,type:'land'};
              n++;
            }
            else{
              hexmap.hexes[n] = {n:n,q:k,r:j,type:'water'};
              n++;
            }
          }
          else if(k >= aleaK-2 && k <= aleaK+2){
            if(Math.floor(Math.random()*100)+1 > 45){
              hexmap.hexes[n] = {n:n,q:k,r:j,type:'land'};
              n++;
            }
            else{
              hexmap.hexes[n] = {n:n,q:k,r:j,type:'water'};
              n++;
            }
          }
          else if(k > aleaK+2 && k < (sizeQ-3)){
            if(Math.floor(Math.random()*100)+1 > 5){
              hexmap.hexes[n] = {n:n,q:k,r:j,type:'land'};
              n++;
            }
            else{
              hexmap.hexes[n] = {n:n,q:k,r:j,type:'water'};
              n++;
            }
          }
        }
      }
    }

  return hexmap;
}

function generateArchipelago(hexmap){
  let countHex = 0;
  let i = 0;

  for(j = 0 ; j < 15 ; j++){
    for(k = 0 ; k < 20 ; k++){
      if(Math.floor(Math.random()*3) > 1){
        if(countHex >= 3){
          let testSeparation = Math.floor(Math.random() * 3)+1;
          if(testSeparation != 1){
            countHex = 0;
          }
          else if(testSeparation == 1){
            hexmap.hexes[i] = {n:i,q:k,r:j,type:""};
            countHex++;
          }
        }
        else{
          hexmap.hexes[i] = {n:i,q:k,r:j,type:""};
          countHex++;
        }
      }
      i++;
    }
  }

  return hexmap;
}

function generateHexMap(aleaK, sizeQ, sizeR, aleaJ) {
  let hexmap = {layout:"odd-r",hexes:{}};
  hexmap = generateWorld(hexmap, aleaK, sizeQ, sizeR, aleaJ);

  return JSON.stringify(hexmap);
}

function setElevation(hexmap, hex, sizeQ, sizeR){

  let elevation = 0;
  let arrayHex = [];

  if(numIsPair(hex.r)){
    let hexL = hex.q > 0 ? hexmap.hexes[hex.n-1].type : 'water';
    let hexR = hex.q < (sizeQ-1) ? hexmap.hexes[hex.n+1].type : 'water';
    let hexUL = hex.r < (sizeR-1) ? hexmap.hexes[hex.n+(sizeQ-1)].type : 'water';
    let hexDL = hex.r > 0 ? hexmap.hexes[hex.n-(sizeQ+1)].type : 'water';
    let hexUR = hex.r < (sizeR-1) ? hexmap.hexes[hex.n+(sizeQ)].type : 'water';
    let hexDR = hex.r > 0 ? hexmap.hexes[hex.n-(sizeQ)].type : 'water';
    arrayHex.push(hexL, hexR, hexUL, hexDL, hexUR, hexDR);
  }
  else{
    let hexL = hex.q > 0 ? hexmap.hexes[hex.n-1].type : 'water';
    let hexR = hex.q < (sizeQ-1) ? hexmap.hexes[hex.n+1].type : 'water';
    let hexUL = hex.r < (sizeR-1) ? hexmap.hexes[hex.n+(sizeQ)].type : 'water';
    let hexDL = hex.r > 0 ? hexmap.hexes[hex.n-(sizeQ)].type : 'water';
    let hexUR = hex.r < (sizeR-1) ? hexmap.hexes[hex.n+(sizeQ+1)].type : 'water';
    let hexDR = hex.r > 0 ? hexmap.hexes[hex.n-(sizeQ-1)].type : 'water';
    arrayHex.push(hexL, hexR, hexUL, hexDL, hexUR, hexDR);
  }

  if(checkWater(arrayHex)){
    elevation=Math.floor(Math.random()*120)+30;
  }
  else{
    let dist = 0;
    let distR = 0;
    let distL = 0;
    let distU = 0;
    let distD = 0;
    for(i = 0 ; i < (sizeQ - hex.q) ; i++){
      if(hexmap.hexes[hex.n+i] && hexmap.hexes[hex.n+i].type != 'water'){
        distR++;
      }
      else{
        i = sizeQ-hex.q;
      }
    }
    for(i = 0 ; i < hex.q ; i++){
      if(hexmap.hexes[hex.n-i] && hexmap.hexes[hex.n-i].type != 'water'){
        distL++;
      }
      else{
        i = hex.q;
      }
    }
    for(i = 0 ; i < (sizeR - hex.r) ; i++){
      if(hexmap.hexes[hex.n+(i*sizeQ)] && hexmap.hexes[hex.n+(i*sizeQ)].type != 'water'){
        distU++;
      }
      else{
        i = sizeR-hex.r;
      }
    }
    for(i = 0 ; i < hex.r ; i++){
      if(hexmap.hexes[hex.n-(i*sizeQ)] && hexmap.hexes[hex.n-(i*sizeQ)].type != 'water'){
        distD++;
      }
      else{
        i = hex.r;
      }
    }
    let bonus = Math.min(distR, distL, distU, distD);
    bonus = bonus*150;
    elevationBorn = bonus;
    elevation = Math.floor(Math.random()*bonus)+elevationBorn;
  }

  hex.elevation = elevation;

  return hex;
}

function setZones(hex, sizeR){
  let zone = '';
  if(hex.r > (sizeR-7)){
    zone = 'north';
  }
  else if(hex.r < 7){
    zone = 'south';
  }
  else if(hex.r >= (sizeR/2-2) && hex.r <= (sizeR/2+2)){
    zone = 'equador';
  }
  else if(hex.r > (sizeR/2+2) && hex.r <= (sizeR-7)){
    zone = 'midnorth';
  }
  else if(hex.r >= 7 && hex.r < (sizeR/2-2)){
    zone = 'midsouth';
  }

  hex.zone = zone;

  return hex;
}

function setZonesRain(hexmap, sizeQ, sizeR){
  let numZones = Math.floor(Math.random()*4);
  let zones;
  for(i = 0 ; i < numZones ; i++){
    let firstHex = hexmap.hexes[Math.floor(Math.random()*hexmap.hexes.length)];
    let zone = [firstHex];
    for(j = 0 ; j < Math.floor(Math.random()*8) ; j++){
      let dir = Math.floor(Math.random()*j/2);
      let originalValue = [1, 1, sizeQ, sizeQ];
      let value = [1, 1, sizeQ, sizeQ];
      if(dir == 0 || dir == 2){
        zone.push(hexmap.hexes[firstHex.n+value[dir]]);
        value[0] += originalValue[0];
        value[2] += originalValue[2];
      }
      if(dir == 1 || dir == 3){
        zone.push(hexmap.hexes[firstHex.n-value[dir]]);
        value[1] += originalValue[1];
        value[3] += originalValue[3];
      }
    }
  }

  return zones;
}

function setRain(hexmap, sizeQ, hex, rainZones){
  if(!hex.rain){
    hex.rain = 0;
  }
  if(hex.rain == 0){
    if(hex.zone == 'midnorth' || hex.zone == 'north' || hex.zone == 'south'){
      hex.rain = Math.floor(Math.random()*2000)+1;
      for(i = 0 ; i < Math.floor(Math.random()*7)+8 ; i++){
        if(hexmap.hexes[hex.n+i]){
          if(!hexmap.hexes[hex.n+i].rain){
            hexmap.hexes[hex.n+i].rain = hex.rain;
          }
        }
        if(hexmap.hexes[hex.n+(sizeQ*i)]){
          if(!hexmap.hexes[hex.n+(sizeQ*i)].rain){
            hexmap.hexes[hex.n+(sizeQ*i)].rain = hex.rain;
          }
        }
      }
    }
    else if(hex.zone == 'equador' || hex.zone == 'midsouth'){
      hex.rain = Math.floor(Math.random()*7000)+2000;
      for(i = 0 ; i < Math.floor(Math.random()*7)+8 ; i++){
        if(hexmap.hexes[hex.n+i]){
          if(!hexmap.hexes[hex.n+i].rain){
            hexmap.hexes[hex.n+i].rain = hex.rain;
          }
        }
        if(hexmap.hexes[hex.n+(sizeQ*i)]){
          if(!hexmap.hexes[hex.n+(sizeQ*i)].rain){
            hexmap.hexes[hex.n+(sizeQ*i)].rain = hex.rain;
          }
        }
      }
    }
  }

  for(i = 0 ; i < rainZones ; i++){
    if(hex.n == rainZones[i].n){
      hex.rain += Math.floor(Math.random()*200)+900;
    }
  }
}

function setZonesWind(hexmap, sizeQ, sizeR){
  let numZones = Math.floor(Math.random()*4);
  let zones;
  for(i = 0 ; i < numZones ; i++){
    let firstHex = hexmap.hexes[Math.floor(Math.random()*hexmap.hexes.length)];
    let zone = [firstHex];
    for(j = 0 ; j < Math.floor(Math.random()*8) ; j++){
      let dir = Math.floor(Math.random()*j/2);
      let originalValue = [1, 1, sizeQ, sizeQ];
      let value = [1, 1, sizeQ, sizeQ];
      if(dir == 0 || dir == 2){
        zone.push(hexmap.hexes[firstHex.n+value[dir]]);
        value[0] += originalValue[0];
        value[2] += originalValue[2];
      }
      if(dir == 1 || dir == 3){
        zone.push(hexmap.hexes[firstHex.n-value[dir]]);
        value[1] += originalValue[1];
        value[3] += originalValue[3];
      }
    }
  }

  return zones;
}

function setWind(hexmap, sizeQ, hex, windZones){
  if(!hex.wind){
    hex.wind = 0;
  }
  if(hex.wind == 0){
      hex.wind = Math.floor(Math.random()*100)+20;
      for(i = 0 ; i < Math.floor(Math.random()*7)+8 ; i++){
        if(hexmap.hexes[hex.n+i]){
          if(!hexmap.hexes[hex.n+i].wind){
            hexmap.hexes[hex.n+i].wind = hex.wind;
          }
        }
        if(hexmap.hexes[hex.n+(sizeQ*i)]){
          if(!hexmap.hexes[hex.n+(sizeQ*i)].wind){
            hexmap.hexes[hex.n+(sizeQ*i)].wind = hex.wind;
          }
        }
      }
  }

  for(i = 0 ; i < windZones ; i++){
    if(hex.n == windZones[i].n){
      hex.wind += Math.floor(Math.random()*20)+10;
    }
  }
}

function setZonesSun(hexmap, sizeQ, sizeR){
  let numZones = Math.floor(Math.random()*4);
  let zones;
  for(i = 0 ; i < numZones ; i++){
    let firstHex = hexmap.hexes[Math.floor(Math.random()*hexmap.hexes.length)];
    let zone = [firstHex];
    for(j = 0 ; j < Math.floor(Math.random()*8) ; j++){
      let dir = Math.floor(Math.random()*j/2);
      let originalValue = [1, 1, sizeQ, sizeQ];
      let value = [1, 1, sizeQ, sizeQ];
      if(dir == 0 || dir == 2){
        zone.push(hexmap.hexes[firstHex.n+value[dir]]);
        value[0] += originalValue[0];
        value[2] += originalValue[2];
      }
      if(dir == 1 || dir == 3){
        zone.push(hexmap.hexes[firstHex.n-value[dir]]);
        value[1] += originalValue[1];
        value[3] += originalValue[3];
      }
    }
  }

  return zones;
}

function setSun(hexmap, sizeQ, hex, sunZones){
  if(!hex.sun){
    hex.sun = 0;
  }
  if(hex.sun == 0){
    if(hex.zone == 'north'){
      hex.sun = Math.floor(Math.random()*50)+50;
      for(i = 0 ; i < Math.floor(Math.random()*7)+8 ; i++){
        if(hexmap.hexes[hex.n+i]){
          if(!hexmap.hexes[hex.n+i].sun){
            hexmap.hexes[hex.n+i].sun = hex.sun;
          }
        }
        if(hexmap.hexes[hex.n+(sizeQ*i)]){
          if(!hexmap.hexes[hex.n+(sizeQ*i)]){
            hexmap.hexes[hex.n+(sizeQ*i)].sun = hex.sun;
          }
        }
      }
    }
    if(hex.zone == 'midnorth' || hex.zone == 'midsouth' || hex.zone == 'south'){
      hex.sun = Math.floor(Math.random()*100)+100;
      for(i = 0 ; i < Math.floor(Math.random()*7)+8 ; i++){
        if(hexmap.hexes[hex.n+i]){
          if(!hexmap.hexes[hex.n+i].sun){
            hexmap.hexes[hex.n+i].sun = hex.sun;
          }
        }
        if(hexmap.hexes[hex.n+(sizeQ*i)]){
          if(!hexmap.hexes[hex.n+(sizeQ*i)]){
            hexmap.hexes[hex.n+(sizeQ*i)].sun = hex.sun;
          }
        }
      }
    }
    if(hex.zone == 'equador'){
      hex.sun = Math.floor(Math.random()*100)+200;
      for(i = 0 ; i < Math.floor(Math.random()*7)+8 ; i++){
        if(hexmap.hexes[hex.n+i]){
          if(!hexmap.hexes[hex.n+i].sun){
            hexmap.hexes[hex.n+i].sun = hex.sun;
          }
        }
        if(hexmap.hexes[hex.n+(sizeQ*i)]){
          if(!hexmap.hexes[hex.n+(sizeQ*i)]){
            hexmap.hexes[hex.n+(sizeQ*i)].sun = hex.sun;
          }
        }
      }
    }
  }

  for(i = 0 ; i < sunZones ; i++){
    if(hex.n == sunZones[i].n){
      hex.sun += Math.floor(Math.random()*20)+10;
    }
  }
}

function setHumidity(wind, rain, sun, zone, elevation) {
  let h = 100-(sun/7)-(wind/30)+(rain/200)-(elevation/50);
  switch(zone){
    case 'south':
      h -= 10;
      break;
    case 'midsouth':
      h += 5;
      break;
    case 'equador':
      h += 20;
      break;
    case 'midnorth':
      h += 0;
      break;
    case 'north':
      h += 10;
      break;
    default:
      h += 5;
  }

  return Math.floor(h);
}

function setTemperature(elevation, humidity, zone, wind, sun, rain){
  let t = 12-(elevation/500)-(rain/500)+(sun/30)-(wind/30);
  switch(zone){
    case 'equador':
      t += 12;
      break;
    case 'midsouth':
      t += 5;
      break;
    case 'south':
      t -= 6;
      break;
    case 'midnorth':
      t += 2;
      break;
    case 'north':
      t -= 12;
      break;
    default:
      t += 5;
  }

  return Math.floor(t);
}

function setTerrain(elevation, humidity, temperature, zone){
  let t;
  if(elevation > 1100){
    t = 'mountains';
  }
  else if(elevation < 1101 && elevation > 800){
    if(humidity < 100){
      t = 'hills';
    }
    else{
      t = 'forest';
    }
  }
  else{
    if(zone == 'north'){
      if(temperature < 0){
        t = 'taigas';
      }
      else if(humidity > 90){
        t = 'forest';
      }
      else{
        t = 'fields';
      }
    }
    else if(zone == 'midnorth'){
      if(humidity > 80 && temperature > 18){
        t = 'wetland';
      }
      else if(humidity < 60 && temperature > 15){
        t = 'savana';
      }
      else if(humidity < 80 && temperature < 0){
        t = 'taigas';
      }
      else if(humidity > 70 && temperature > 10){
        t = 'forest';
      }
      else{
        t = 'fields';
      }
    }
    else if(zone == 'equador'){
      if(humidity > 120){
        t = 'wetland';
      }
      else if(humidity < 100 || temperature > 16){
        t = 'savana';
      }
      else if(humidity > 70 && temperature > 14){
        t = 'forest';
      }
      else{
        t = 'fields';
      }
    }
    else if(zone == 'midsouth'){
      if(humidity < 60 || temperature > 20){
        t = 'savana';
      }
      else if(humidity > 80 && temperature > 18){
        t = 'wetland';
      }
      else if(humidity > 70 && temperature > 12){
        t = 'forest';
      }
      else{
        t = 'fields';
      }
    }
    else if(zone == 'south'){
      if(temperature > 20){
        t = 'savana';
      }
      else if(temperature < 3){
        t = 'taigas';
      }
      else if(humidity > 70 && temperature > 8){
        t = 'forest';
      }
      else{
        t = 'fields';
      }
    }
  }

  return t;
}

function setRiver(hex, hexmap, terrain, humidity){
  let river = 'no';
  if(terrain == 'mountains' || terrain == 'hills'){
    let random = Math.floor(Math.random()*100);
    if(random < 33){
      river = 'river';
      let arrayHex = [];

      if(numIsPair(hex.r)){
        let hexL = hex.q > 0 ? hexmap.hexes[hex.n-1].type : 'water';
        let hexR = hex.q < (sizeQ-1) ? hexmap.hexes[hex.n+1].type : 'water';
        let hexUL = hex.r < (sizeR-1) ? hexmap.hexes[hex.n+(sizeQ-1)].type : 'water';
        let hexDL = hex.r > 0 ? hexmap.hexes[hex.n-(sizeQ+1)].type : 'water';
        let hexUR = hex.r < (sizeR-1) ? hexmap.hexes[hex.n+(sizeQ)].type : 'water';
        let hexDR = hex.r > 0 ? hexmap.hexes[hex.n-(sizeQ)].type : 'water';
        arrayHex.push(hexL, hexR, hexUL, hexDL, hexUR, hexDR);
      }
      else{
        let hexL = hex.q > 0 ? hexmap.hexes[hex.n-1].type : 'water';
        let hexR = hex.q < (sizeQ-1) ? hexmap.hexes[hex.n+1].type : 'water';
        let hexUL = hex.r < (sizeR-1) ? hexmap.hexes[hex.n+(sizeQ)].type : 'water';
        let hexDL = hex.r > 0 ? hexmap.hexes[hex.n-(sizeQ)].type : 'water';
        let hexUR = hex.r < (sizeR-1) ? hexmap.hexes[hex.n+(sizeQ+1)].type : 'water';
        let hexDR = hex.r > 0 ? hexmap.hexes[hex.n-(sizeQ-1)].type : 'water';
        arrayHex.push(hexL, hexR, hexUL, hexDL, hexUR, hexDR);
      }

      if(checkWater(arrayHex)){
        return river;
      }
      else{
        let distR = 0;
        let distL = 0;
        let distUL = 0;
        let distDL = 0;
        let distUR = 0;
        let distDR = 0;
        for(i = 0 ; i < (sizeQ - hex.q) ; i++){
          if(hexmap.hexes[hex.n+i] && hexmap.hexes[hex.n+i].type != 'water'){
            distR++;
          }
          else{
            i = sizeQ-hex.q;
          }
        }
        for(i = 0 ; i < hex.q ; i++){
          if(hexmap.hexes[hex.n-i] && hexmap.hexes[hex.n-i].type != 'water'){
            distL++;
          }
          else{
            i = hex.q;
          }
        }
        for(i = 0 ; i < (sizeR - hex.r) ; i++){
          if(hexmap.hexes[hex.n+(i*sizeQ)] && hexmap.hexes[hex.n+(i*sizeQ)].type != 'water'){
            distUL++;
          }
          else{
            i = sizeR-hex.r;
          }
        }
        for(i = 0 ; i < hex.r ; i++){
          if(hexmap.hexes[hex.n-(i*sizeQ)] && hexmap.hexes[hex.n-(i*sizeQ)].type != 'water'){
            distDL++;
          }
          else{
            i = hex.r;
          }
        }
        for(i = 0 ; i < (sizeR - hex.r) ; i++){
          if(hexmap.hexes[hex.n+(i*sizeQ+1)] && hexmap.hexes[hex.n+(i*sizeQ+1)].type != 'water'){
            distUR++;
          }
          else{
            i = sizeR-hex.r;
          }
        }
        for(i = 0 ; i < hex.r ; i++){
          if(hexmap.hexes[hex.n-(i*sizeQ-1)] && hexmap.hexes[hex.n-(i*sizeQ-1)].type != 'water'){
            distDR++;
          }
          else{
            i = hex.r;
          }
        }
        let listDist = {right: distR, left: distL, upLeft: distUL, downLeft: distDL, upRight: distUR, downRight: distDR};
        let min = 1000;
        let key;
        for(let i in listDist){
          if(listDist[i] < min){
            min = listDist[i];
            key = i;
          }
        }
        switch(key){
          case 'right':
            for(i = 0 ; i < min ; i++){
              hexmap.hexes[hex.n+i].river = 'river';
            }
            break;
          case 'left':
            for(i = 0 ; i < min ; i++){
              hexmap.hexes[hex.n-i].river = 'river';
            }
            break;
          case 'upLeft':
            for(i = 0 ; i < min ; i++){
              hexmap.hexes[hex.n+(i*sizeQ)].river = 'river';
            }
            break;
          case 'downLeft':
            for(i = 0 ; i < min ; i++){
              hexmap.hexes[hex.n-(i*sizeQ)].river = 'river';
            }
            break;
          case 'upRight':
            for(i = 0 ; i < min ; i++){
              hexmap.hexes[hex.n+(i*sizeQ+1)].river = 'river';
            }
            break;
          case 'downRight':
            for(i = 0 ; i < min ; i++){
              hexmap.hexes[hex.n-(i*sizeQ+1)].river = 'river';
            }
            break;
        }
        return river;
      }
      return river;
    }
    return river;
  }
  return river;
}

function setHexMap(hexmap, aleaK, sizeQ, sizeR, minAleaK, maxAleaK) {
  let rainZones = setZonesRain(hexmap, sizeQ, sizeR);
  let windZones = setZonesWind(hexmap, sizeQ, sizeR);
  let sunZones = setZonesSun(hexmap, sizeQ, sizeR);
  let hexes = {};
  hexmap.setContent(function(id,hex){
    if(hex.type == 'land'){
      hex.explore = 'secret';
      hex.leader = 'none';
      setElevation(hexmap, hex, sizeQ, sizeR);
      setZones(hex, sizeR);
      setRain(hexmap, sizeQ, hex, rainZones);
      setWind(hexmap, sizeQ, hex, windZones);
      setSun(hexmap, sizeQ, hex, windZones);
      let h = setHumidity(hex.wind, hex.rain, hex.sun, hex.zone, hex.elevation);
      hex.humidity = h;
      let temp = setTemperature(hex.elevation, hex.humidity, hex.zone, hex.wind, hex.sun, hex.rain);
      hex.temp = temp;
      let t = setTerrain(hex.elevation, hex.humidity, hex.temp, hex.zone);
      hex.terrain = t;
      //let river = setRiver(hex, hexmap, hex.terrain, hex.humidity);
      //hex.river = river;
      hex.setClass(hex.terrain);

      // Build the circular token that sits on a hex
      str = '<div class="token">';
      //str += '<div class="id">'+' '+hex.q+','+hex.r+'</div>';
      //str += '<div class="id">'+hex.river+'</div>';
      str += '</div>';

      return str;
    }
    else{
      hex.setClass('water');

      return '';
    }
  });
}
