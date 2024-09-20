<!DOCTYPE html>
<html>
  <head>
    <base target="_top">
    <script type="text/javascript" src="https://slowe.github.io/stuquery/js/stuquery.js"></script>
    <script type="text/javascript" src="https://slowe.github.io/stuquery/js/stuquery.hexmap.js"></script>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script type="text/javascript" src="mapgen.js"></script>
    <script type="text/javascript" src="mapclass.js"></script>
    <link rel="stylesheet" href="stuquery.hexmap.css">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div id='tooltip'></div>
    <div id="hexmap-8" class="ex-8">
      <div class="terrains">Terrains</div>
      <div class="politique">Politique</div>
      <div class="exploration">Exploration</div>
      <a href="civilisations.php"><div class="civilisations">Civilisations</div></a>
    <code>
    </code>
    </div>
  </body>
</html>

<script>
$.getJSON("hexmap.json", function(json) {
  let placeHexmap = document.querySelector('code');
  placeHexmap.append(JSON.stringify(json));

  S(document).ready(function(){
    let hexmap = S.hexmap('hexmap-8');
    hexmap.positionHexes().resize();
    hexmap.setClass(function(id, hex){
      if(hex.type != 'water' && hex.explore == 'explored'){
        return hex.terrain;
      }
      else if(hex.explore == 'secret'){
        return hex.explore;
      }
      else{
        return 'water';
      }
    })
  });

  let mode = 'terrains';

  S('.politique').on('click', function(){
    mode = 'politique';
    for(i = 0 ; i < hexmap.hexes.length ; i++){
      if(hexmap.hexes[i].type != 'water' && hexmap.hexes[i].leader && hexmap.hexes[i].explore == 'explored'){
        //console.log(document.querySelector('[data-id="' + hexmap.hexes[i].n + '"]'));
        document.querySelector('[data-id="' + hexmap.hexes[i].n + '"]').children[0].classList = 'hexinner ' + hexmap.hexes[i].leader + ' ' + hexmap.hexes[i].terrain;
      }
    }
  });

  S('.terrains').on('click', function(){
    mode = 'terrains';
    hexmap.setClass(function(id,hex){
      if(hex.type != 'water' && hex.explore == 'explored'){
        return hex.terrain;
      }
      else if(hex.explore == 'secret'){
        return hex.explore;
      }
      else{
        return 'water';
      }
    });
  });

  S('.exploration').on('click', function(){
    mode = 'exploration';
    hexmap.setClass(function(id,hex){
      if(hex.type != 'water' && hex.explore == 'explored'){
        return hex.terrain;
      }
      else if(hex.explore == 'secret'){
        return hex.explore;
      }
      else{
        return 'water';
      }
    });
  });

  hexmap.on('click', function(e){
    if(mode == 'exploration' && hexmap.hexes[e.hex.id].explore == 'secret'){
      hexmap.hexes[e.hex.id].setClass(hexmap.hexes[e.hex.id].terrain);
      hexmap.hexes[e.hex.id].explore = 'explored';
    }
  });
});
</script>
