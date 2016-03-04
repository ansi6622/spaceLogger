$(function(){
var spaceApiObject;

$.getJSON("http://www.spaceapi.net/directory.json").then(function(data){
  localStorage.data = JSON.stringify(data);
  localStorage.setItem("data", localStorage.data);
  spaceApiObject = JSON.parse(localStorage.data);
  console.log(spaceApiObject);
  var stringed = localStorage.getItem('data');
  console.log(stringed);
}).then(function(){

for(var key in spaceApiObject){
var counter = 0 + counter;
var temp = spaceApiObject[key].split('/');
var look = temp[2];
console.log(temp);
if(look.indexOf('.com') >= 0 || look.indexOf('.org') >= 0 || look.indexOf('.net') >= 0 ) {
console.log(key);
console.log(look);
// $.ajax({
//   url: "http://api.ipinfodb.com/v3/ip-city/?key=af67fc51cc655d4b4ea24fbc20d60f113c2d84be8aaf15ac76beb3e38a972892&ip=" + look ,
//   success: function(data){
//     var now = data.split(";");
//     var lat = now[8];
//     var long = now[9];
// var redSphere = viewer.entities.add({
//   name : 'lime sphere with black outline',
//   position : Cesium.Cartesian3.fromDegrees(long, lat),
//   ellipsoid : {
//     radii : new Cesium.Cartesian3(300000.0, 300000.0, 300000.0),
//     material : Cesium.Color.LIME.withAlpha(0.5),
//     outline : true,
//     outlineColor : Cesium.Color.BLACK
//   }
// });
//   }
// })

}
else{
console.log("the api pooped a JSON")
}

}

})


  var viewer = new Cesium.Viewer('cesiumContainer');


  viewer.zoomTo(viewer.entities);

  var redSphere = viewer.entities.add({
    name : 'red sphere with black outline',
    position : Cesium.Cartesian3.fromDegrees(6.12389, 49.6789),
    ellipsoid : {
      radii : new Cesium.Cartesian3(300000.0, 300000.0, 300000.0),
      material : Cesium.Color.BLACK.withAlpha(0.5),
      outline : true,
      outlineColor : Cesium.Color.BLACK
    }
  });
  var redSphere = viewer.entities.add({
    name : 'red sphere with black outline',
    position : Cesium.Cartesian3.fromDegrees(114.158, 22.2855),
    ellipsoid : {
      radii : new Cesium.Cartesian3(300000.0, 300000.0, 300000.0),
      material : Cesium.Color.YELLOW.withAlpha(0.5),
      outline : true,
      outlineColor : Cesium.Color.BLACK
    }
  });
  var redSphere = viewer.entities.add({
    name : 'red sphere with black outline',
    position : Cesium.Cartesian3.fromDegrees(-112.074, 33.4484),
    ellipsoid : {
      radii : new Cesium.Cartesian3(300000.0, 300000.0, 300000.0),
      material : Cesium.Color.DODGERBLUE.withAlpha(0.5),
      outline : true,
      outlineColor : Cesium.Color.BLACK
    }
  });
  var redSphere = viewer.entities.add({
    name : 'red sphere with black outline',
    position : Cesium.Cartesian3.fromDegrees(6.19314,51.6553),
    ellipsoid : {
      radii : new Cesium.Cartesian3(300000.0, 300000.0, 300000.0),
      material : Cesium.Color.LAVENDER.withAlpha(0.5),
      outline : true,
      outlineColor : Cesium.Color.BLACK
    }
  });
  var redSphere = viewer.entities.add({
    name : 'Galvanize Pearl',
    position : Cesium.Cartesian3.fromDegrees(-105.281948,40.017786),
    ellipsoid : {
      radii : new Cesium.Cartesian3(300000.0, 300000.0, 300000.0),
      material : Cesium.Color.ORANGE.withAlpha(0.5),
      outline : true,
      outlineColor : Cesium.Color.BLUE
    }
  });
  var redSphere = viewer.entities.add({
    name : 'red sphere with black outline',
    position : Cesium.Cartesian3.fromDegrees(-35,78),
    ellipsoid : {
      radii : new Cesium.Cartesian3(300000.0, 300000.0, 300000.0),
      material : Cesium.Color.SILVER.withAlpha(0.5),
      outline : true,
      outlineColor : Cesium.Color.BLACK
    }
  });
})
