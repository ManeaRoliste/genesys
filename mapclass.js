class Hex{
  constructor(hex){
    let food = 100;
    if(hex.humidity > 20){
      food -= 10;
    }
    if(hex.temp > 20 || hex.temp < -11){
      food -= 10;
    }
    switch(hex.terrain){
      case 'fields':
        food += 10;
        break;
      case 'mountains':
        food -= 20;
        break;
      case 'hills':
        food -= 10;
        break;
      case 'savana':
        food -= 10;
        break;
      case 'taigas':
        food -= 10;
        break;
    }
    this.food = food;

    let regeneration = 100;
    if(hex.humidity > 20 || hex.humidity < -15){
      regeneration -= 10;
    }
    if(hex.rain < 40){
      regeneration -= 10;
    }
    if(hex.sun < 40){
      regeneration -= 10;
    }
    if(hex.wind > 40){
      regeneration -= 10;
    }
    if(hex.elevation > 800){
      regeneration -= 10;
    }
    switch(hex.terrain){
      case 'fields':
        regeneration += 10;
        break;
      case 'wetland':
        regeneration += 10;
        break;
      case 'forest':
        regeneration += 10;
        break;
      case 'savana':
        regeneration -= 10;
        break;
      case 'taigas':
        regeneration -= 10;
        break;
    }
    this.regeneration = regeneration;

    let habitabilty;
    if(hex.terrain == 'savana' || hex.terrain == 'taigas' || hex.terrain == 'wetland'){
      habitabilty = 30;
    }
    else{
      habitabilty = 100+(hex.elevation/100*-1);
      habitabilty -= Math.floor(Math.random()*(hex.sun/2));
      habitabilty += Math.floor(Math.random()*(hex.rain/2));
      if(hex.temp > 20 || hex.temp < -15){
        habitabilty -= 10;
      }
    }
    switch(hex.terrain){
      case 'mountains':
        habitabilty -= 10;
        break;
      case 'forest':
        habitabilty -= 5;
        break;
      case 'hills':
        habitabilty -= 5;
        break;
    }
    if(hex.temp > 20){
      habitabilty -= hex.temp;
    }
    if(hex.temp < 0){
      habitabilty += hex.temp;
    }
    if(hex.humidity > 20){
      habitabilty -= hex.humidity;
    }
    if(hex.humidity < -5){
      habitabilty += hex.humidity;
    }
    this.habitabilty = habitabilty;
    this.n = hex.n;
  }
}
