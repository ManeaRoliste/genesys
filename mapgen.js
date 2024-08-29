function generateContinents(hexmap, aleaK, sizeQ, sizeR){
  let countHex = 0;
  let i = 0;
  let n = 0;
    for(j = 0 ; j < sizeR ; j++){
      for(k = 0 ; k < aleaK ; k++){
        if(j <= 3){
          if(Math.floor(Math.random()*4) > 1){
            hexmap.hexes[i] = {i:i,n:n,q:k,r:j,type:''};
            countHex++;
            i++;
          }
        }
        else if(j >= (sizeR-3)){
          if(Math.floor(Math.random()*4) > 1){
            hexmap.hexes[i] = {i:i,n:n,q:k,r:j,type:''};
            countHex++;
            i++;
          }
        }
        else{
          if(k <= 2){
            if(Math.floor(Math.random()*4) > 1){
              hexmap.hexes[i] = {i:i,n:n,q:k,r:j,type:''};
              countHex++;
              i++;
            }
          }
          else if(k >= 3 && k < aleaK-3){
            hexmap.hexes[i] = {i:i,n:n,q:k,r:j,type:''};
            countHex++;
            i++
          }
          else if(k >= aleaK-3 && k < aleaK-1){
            if(Math.floor(Math.random()*4) > 1){
              if(countHex > 10){
                let testSeparation = Math.floor(Math.random()*10)+1;
                if(testSeparation === 10){
                  countHex = 0;
                }
                else{
                  hexmap.hexes[i] = {i:i,n:n,q:k,r:j,type:''};
                  countHex++;
                  i++;
                }
              }
            }
          }
          else if(k == aleaK || k == aleaK-1){
            if(Math.floor(Math.random()*3) > 1){
              if(countHex > 5){
                let testSeparation = Math.floor(Math.random()*10)+1;
                if(testSeparation === 10){
                  countHex = 0;
                }
                else{
                  hexmap.hexes[i] = {i:i,n:n,q:k,r:j,type:''};
                  countHex++;
                  i++;
                }
              }
              else{
                hexmap.hexes[i] = {i:i,n:n,q:k,r:j,type:''};
                countHex++;
                i++;
              }
            }
          }
        }
        n++;
      }
    }

    for(j = 0 ; j < sizeR ; j++){
      for(k = aleaK+1 ; k < sizeQ ; k++){
        if(j <= 3){
          if(Math.floor(Math.random()*4) > 1){
            hexmap.hexes[i] = {i:i,n:n,q:k,r:j,type:''};
            countHex++;
            i++;
          }
        }
        else if(j >= (sizeR-3)){
          if(Math.floor(Math.random()*4) > 1){
            hexmap.hexes[i] = {i:i,n:n,q:k,r:j,type:''};
            countHex++;
            i++;
          }
        }
        else{
          if(k == aleaK+1){
            if(Math.floor(Math.random()*3) > 1){
              if(countHex > 5){
                let testSeparation = Math.floor(Math.random()*10)+1;
                if(testSeparation === 10){
                  countHex = 0;
                }
                else{
                  hexmap.hexes[i] = {i:i,n:n,q:k,r:j,type:""};
                  countHex++;
                  i++;
                }
              }
              else{
                hexmap.hexes[i] = {i:i,n:n,q:k,r:j,type:""};
                countHex++;
                i++;
              }
            }
          }
          else if(k > aleaK+1 && k <= aleaK+3){
            if(Math.floor(Math.random()*4) > 1){
              if(countHex > 10){
                let testSeparation = Math.floor(Math.random()*10)+1;
                if(testSeparation === 10){
                  countHex = 0;
                }
                else{
                  hexmap.hexes[i] = {i:i,n:n,q:k,r:j,type:""};
                  countHex++;
                  i++;
                }
              }
            }
          }
          else if(k > aleaK+3 && k < (sizeQ-2)){
            hexmap.hexes[i] = {i:i,n:n,q:k,r:j,type:""};
            countHex++;
            i++;
          }
          else if(k >= (sizeQ-2)){
            if(Math.floor(Math.random()*4) > 1){
              hexmap.hexes[i] = {i:i,n:n,q:k,r:j,type:""};
              countHex++;
              i++;
            }
          }
        }
        n++;
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

function generateHexMap(aleaK, sizeQ, sizeR) {
  let hexmap = {layout:"odd-r",hexes:{}};
  hexmap = generateContinents(hexmap, aleaK, sizeQ, sizeR);

  return JSON.stringify(hexmap);
}

function setElevation(hexmap, hex, aleaK, sizeQ, sizeR, minAleaK, maxAleaK){

  //Analyser par ligne et colonne pour vérifier la présence de mer

  let elevation = 0;
  let hexL = hex.n-1;
  let checkHexL = 0;
  let hexR = hex.n+1;
  let checkHexR = 0;
  let hexU = hex.n+11;
  let checkHexU = 0;
  let hexD = hex.n-11;
  let checkHexD = 0;

  for(i = 0 ; i < hexmap.hexes.length ; i++){
    if(hexmap.hexes[i].n == hexL){
      checkHexL=1;
    }
    if(hexmap.hexes[i].n == hexR){
      checkHexR=1;
    }
    if(hexmap.hexes[i].n == hexU){
      checkHexU=1;
    }
    if(hexmap.hexes[i].n == hexD){
      checkHexD=1;
    }
  }

  if(hex.q == 0){
    elevation = Math.floor(Math.random()*50);
  }
  else if(hex.q == sizeQ){
    elevation=Math.floor(Math.random()*50);
  }
  else if(hex.r == 0){
    elevation = Math.floor(Math.random()*50);
  }
  else if(hex.r == sizeR){
    elevation=Math.floor(Math.random()*50);
  }
  else if(checkHexL == 0){
    elevation=Math.floor(Math.random()*50);
  }
  else if(checkHexR == 0){
    elevation=Math.floor(Math.random()*50);
  }
  else if(checkHexU == 0){
    elevation=Math.floor(Math.random()*50);
  }
  else if(checkHexD == 0){
    elevation=Math.floor(Math.random()*50);
  }
  else{
    let bonus = 50;
    if(hex.r < (sizeR/2)){
      bonus+= (hex.r)*10;
    }
    else{
      bonus+=(14-hex.r)*10;
    }
    if(hex.q < (aleaK-1)){
      bonus+=(hex.q)*10;
    }
    else if(hex.q > (aleaK+1)){
      bonus+=(19-hex.q)*10;
    }
    if(hex.r > 5 && hex.r < (sizeR-5)){
      bonus+=100;
    }
    if(hex.q > (aleaK-(minAleaK-1)) && hex.q < (aleaK-3)){
      bonus+=100;
    }
    if(hex.q > (aleaK+3) && hex.q < (aleaK+(sizeQ-maxAleaK))){
      bonus+=100;
    }
    elevation = bonus+(Math.floor(Math.random()*bonus)*4);
  }

  hex.elevation = elevation;

  return hex;
}

function setZones(hex, sizeR){
  let zone = '';
  if(hex.r > (sizeR-5)){
    zone = 'north';
  }
  else if(hex.r < 5){
    zone = 'south';
  }
  else if(hex.r >= (sizeR/2-2) && hex.r <= (sizeR/2+2)){
    zone = 'equador';
  }
  else if(hex.r > (sizeR/2+5) && hex.r <= (sizeR-5)){
    zone = 'midnorth';
  }
  else if(hex.r >= 5 && hex.r < (sizeR/2-5)){
    zone = 'midsouth';
  }

  hex.zone = zone;

  return hex;
}

function setZonesRain(sizeQ, sizeR){
  let numZoneRainUp = Math.floor(Math.random()*4);
  let numZoneRainDown = Math.floor(Math.random()*4);
  let bornLeftStrong = [];
  let bornRightStrong = [];
  let bornUpStrong = [];
  let bornDownStrong = [];
  let bornLeftBreak = [];
  let bornRightBreak = [];
  let bornUpBreak = [];
  let bornDownBreak = [];
  let up = [];
  let down = [];
  for(i = 0; i < numZoneRainUp ; i++){
    bornLeftStrong.push(Math.floor(Math.random()*sizeQ));
    bornRightStrong.push(Math.floor(Math.random()*sizeQ)+bornLeftStrong[i]);
    bornDownStrong.push(Math.floor(Math.random()*sizeR));
    bornUpStrong.push(Math.floor(Math.random()*sizeR)+bornDownStrong[i]);
    up.push(bornLeftStrong, bornRightStrong, bornDownStrong, bornUpStrong);
  }
  for(j = 0; j < numZoneRainDown ; j++){
    bornLeftBreak.push(Math.floor(Math.random()*sizeQ));
    bornRightBreak.push(Math.floor(Math.random()*sizeR)+bornLeftBreak[j]);
    bornDownBreak.push(Math.floor(Math.random()*sizeQ));
    bornUpBreak.push(Math.floor(Math.random()*sizeR)+bornDownBreak[j]);
    down.push(bornLeftBreak, bornRightBreak, bornDownBreak, bornUpBreak);
  }

  let r = [up, down];
  return r;
}

function setRain(hex, rainZones){
  let up = rainZones[0];
  let bornLeftStrong = up[0];
  let bornRightStrong = up[1];
  let bornDownStrong = up[2];
  let bornUpStrong = up[3];
  if(bornLeftStrong){
    for(i = 0 ; i < bornLeftStrong.length ; i++){
      if(hex.q > bornLeftStrong[i] && hex.q < bornRightStrong[i] && hex.r < bornUpStrong[i] && hex.r > bornDownStrong[i]){
        hex.rain += Math.floor(Math.random()*30)+70;
      }
    }
  }
  let down = rainZones[1];
  let bornLeftBreak = down[0];
  let bornRightBreak = down[1];
  let bornDownBreak = down[2];
  let bornUpBreak = down[3];
  if(bornLeftBreak){
    for(k = 0 ; k < bornLeftBreak.length ; k++){
      if(hex.q > bornLeftBreak[k] && hex.q < bornRightBreak[k] && hex.r < bornUpBreak[k] && hex.r > bornDownBreak[k]){
        hex.rain += Math.floor(Math.random()*30);
      }
    }
  }
  if(hex.rain == 0){
    hex.rain = Math.floor(Math.random()*30)+30;
  }

  return hex;
}

function setZonesWind(sizeQ, sizeR){
  let numZoneWindUp = Math.floor(Math.random()*4);
  let numZoneWindDown = Math.floor(Math.random()*4);
  let bornLeftStrong = [];
  let bornRightStrong = [];
  let bornUpStrong = [];
  let bornDownStrong = [];
  let bornLeftBreak = [];
  let bornRightBreak = [];
  let bornUpBreak = [];
  let bornDownBreak = [];
  let up = [];
  let down = [];
  for(i = 0; i < numZoneWindUp ; i++){
    bornLeftStrong.push(Math.floor(Math.random()*sizeQ));
    bornRightStrong.push(Math.floor(Math.random()*sizeQ)+bornLeftStrong[i]);
    bornDownStrong.push(Math.floor(Math.random()*sizeR));
    bornUpStrong.push(Math.floor(Math.random()*sizeR)+bornDownStrong[i]);
    up.push(bornLeftStrong, bornRightStrong, bornDownStrong, bornUpStrong);
  }
  for(j = 0; j < numZoneWindDown ; j++){
    bornLeftBreak.push(Math.floor(Math.random()*sizeQ));
    bornRightBreak.push(Math.floor(Math.random()*sizeR)+bornLeftBreak[j]);
    bornDownBreak.push(Math.floor(Math.random()*sizeQ));
    bornUpBreak.push(Math.floor(Math.random()*sizeR)+bornDownBreak[j]);
    down.push(bornLeftBreak, bornRightBreak, bornDownBreak, bornUpBreak);
  }
  let r = [up, down];
  return r;
}

function setWind(hex, windZones){
  let up = windZones[0];
  let bornLeftStrong = up[0];
  let bornRightStrong = up[1];
  let bornDownStrong = up[2];
  let bornUpStrong = up[3];
  if(bornLeftStrong){
    for(i = 0 ; i < bornLeftStrong.length ; i++){
      if(hex.q > bornLeftStrong[i] && hex.q < bornRightStrong[i] && hex.r < bornUpStrong[i] && hex.r > bornDownStrong[i]){
        hex.wind += Math.floor(Math.random()*30)+70;
      }
    }
  }
  let down = windZones[1];
  let bornLeftBreak = down[0];
  let bornRightBreak = down[1];
  let bornDownBreak = down[2];
  let bornUpBreak = down[3];
  if(bornLeftBreak){
    for(k = 0 ; k < bornLeftBreak.length ; k++){
      if(hex.q > bornLeftBreak[k] && hex.q < bornRightBreak[k] && hex.r < bornUpBreak[k] && hex.r > bornDownBreak[k]){
        hex.wind += Math.floor(Math.random()*30);
      }
    }
  }
  if(hex.wind == 0){
    hex.wind = Math.floor(Math.random()*30)+30;
  }

  return hex;
}

function setZonesSun(sizeQ, sizeR){
  let numZoneSunUp = Math.floor(Math.random()*4);
  let numZoneSunDown = Math.floor(Math.random()*4);
  let bornLeftStrong = [];
  let bornRightStrong = [];
  let bornUpStrong = [];
  let bornDownStrong = [];
  let bornLeftBreak = [];
  let bornRightBreak = [];
  let bornUpBreak = [];
  let bornDownBreak = [];
  let up = [];
  let down = [];
  for(i = 0; i < numZoneSunUp ; i++){
    bornLeftStrong.push(Math.floor(Math.random()*sizeQ));
    bornRightStrong.push(Math.floor(Math.random()*sizeQ)+bornLeftStrong[i]);
    bornDownStrong.push(Math.floor(Math.random()*sizeR));
    bornUpStrong.push(Math.floor(Math.random()*sizeR)+bornDownStrong[i]);
    up.push(bornLeftStrong, bornRightStrong, bornDownStrong, bornUpStrong);
  }
  for(j = 0; j < numZoneSunDown ; j++){
    bornLeftBreak.push(Math.floor(Math.random()*sizeQ));
    bornRightBreak.push(Math.floor(Math.random()*sizeR)+bornLeftBreak[j]);
    bornDownBreak.push(Math.floor(Math.random()*sizeQ));
    bornUpBreak.push(Math.floor(Math.random()*sizeR)+bornDownBreak[j]);
    down.push(bornLeftBreak, bornRightBreak, bornDownBreak, bornUpBreak);
  }
  let r = [up, down];
  return r;
}

function setSun(hex, sunZones){
  let up = sunZones[0];
  let bornLeftStrong = up[0];
  let bornRightStrong = up[1];
  let bornDownStrong = up[2];
  let bornUpStrong = up[3];
  if(bornLeftStrong){
    for(i = 0 ; i < bornLeftStrong.length ; i++){
      if(hex.q > bornLeftStrong[i] && hex.q < bornRightStrong[i] && hex.r < bornUpStrong[i] && hex.r > bornDownStrong[i]){
        hex.sun += Math.floor(Math.random()*30)+70;
      }
    }
  }
  let down = sunZones[1];
  let bornLeftBreak = down[0];
  let bornRightBreak = down[1];
  let bornDownBreak = down[2];
  let bornUpBreak = down[3];
  if(bornLeftBreak){
    for(k = 0 ; k < bornLeftBreak.length ; k++){
      if(hex.q > bornLeftBreak[k] && hex.q < bornRightBreak[k] && hex.r < bornUpBreak[k] && hex.r > bornDownBreak[k]){
        hex.sun += Math.floor(Math.random()*30);
      }
    }
  }
  if(hex.sun == 0){
    hex.sun = Math.floor(Math.random()*30)+30;
  }

  return hex;
}

function setHumidity(wind, rain, sun, zone, elevation) {
  let h = (wind/2)+(sun)-rain+(elevation/100);
  switch(zone){
    case 'south':
      h += 10;
      break;
    case 'midsouth':
      h -= 5;
      break;
    case 'equador':
      h -= 10;
      break;
    case 'midnorth':
      h += 5;
      break;
    case 'north':
      h += 10;
      break;
    default:
      h += 5;
  }

  return Math.floor(h);
}

function setTemperature(elevation, humidity, zone){
  let t = 10+(elevation/100*(-1));
  switch(zone){
    case 'equador':
      t += 15;
      break;
    case 'midsouth':
      t += 5;
      break;
    case 'south':
      t -= 5;
      break;
    case 'midnorth':
      t -= 0;
      break;
    case 'north':
      t -= 20;
      break;
    default:
      t += 5;
  }

  return Math.floor(t);
}

function setTerrain(elevation, humidity, temperature, zone){
  let t;
  if(elevation > 1200){
    t = 'mountains';
  }
  else if(elevation < 1201 && elevation > 800){
    if(humidity > 0){
      t = 'hills';
    }
    else{
      t = 'forest';
    }
  }
  else if(elevation < 801 && elevation > 100){
    if(humidity < 5){
      t = 'forest';
    }
    else if(humidity > 20 && zone == 'north'){
      t = 'taigas';
    }
    else if(humidity > 20 && temperature > 16){
      t = 'savana';
    }
    else if(humidity > 20 && temperature < 4){
      t = 'taigas';
    }
    else{
      t = 'fields';
    }
  }
  else{
    if(humidity < -15){
      t = 'wetland';
    }
    else if(humidity > -21 && humidity < 5){
      t = 'forest';
    }
    else if(humidity > 20 && zone == 'north'){
      t = 'taigas';
    }
    else if(humidity > 20 && temperature > 22){
      t = 'savana';
    }
    else if(humidity > 20 && temperature < 0){
      t = 'taigas';
    }
    else{
      t = 'fields';
    }
  }

  return t;
}

function setHexMap(hexmap, aleaK, sizeQ, sizeR, minAleaK, maxAleaK) {
  let rainZones = setZonesRain(sizeQ, sizeR);
  let windZones = setZonesWind(sizeQ, sizeR);
  let sunZones = setZonesSun(sizeQ, sizeR);
  hexmap.setContent(function(id,hex){
    hex.explore = 'secret';
    setElevation(hexmap, hex, aleaK, sizeQ, sizeR, minAleaK, maxAleaK);
    setZones(hex, sizeR);
    hex.rain = 0;
    hex.wind = 0;
    hex.sun = 0;
    setRain(hex, rainZones);
    setWind(hex, windZones);
    setSun(hex, sunZones);
    let h = setHumidity(hex.wind, hex.rain, hex.sun, hex.zone, hex.elevation);
    hex.humidity = h;
    let temp = setTemperature(hex.elevation, hex.humidity, hex.zone);
    hex.temp = temp;
    let t = setTerrain(hex.elevation, hex.humidity, hex.temp);
    hex.terrain = t;
    hex.setClass(hex.explore);

    // Build the circular token that sits on a hex
    str = '<div class="token">';
    //str += '<div class="explorer">'+'Explorer'+'</div>';
    str += '<div class="explorer">'+hex.n+'</div>';
    //str += '<div class="id">'+' '+hex.q+','+hex.r+'</div>';
    //str += '<div class="terrain">'+hex.type+'</div>';
    //str += '<div class="hauteur">'+hex.elevation+'</div>';
    //str += '<div class="hauteur">'+hex.humidity+'</div>';
    //str += '<div class="hauteur">'+hex.temp+'</div>';
    str += '</div>';

    return str;
  });
}
