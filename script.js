// CREATE a Reqeust INSTANCE
var req = new XMLHttpRequest();
//initates a connection or create a connection
req.open('GET','https://restcountries.eu/rest/v2/all',true);
//sending the request
req.send();
//load the function
//this function will be triggered only when the data has been received successfully;
req.onload=function(){
var data=JSON.parse(this.response);
for(var i in data){
    try{
        var cname = data[i].name;
        var latlong=data[i].latlng;
        if(latlong==0){
            ("Lattitude and longitude not found");
         }
         weatherdata(cname,...latlong);
        }
         catch(e){
         console.log("invalid coordinates"+cname);
        }
    }   
}
var weatherdata=function(name,lat,lng){
    var URL=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=6f80276d8bb942de2a6acdf93e5249c0`;
    var request=new XMLHttpRequest();
    request.open('GET',URL,true);
    request.send();
    request.onload=function(){
    var obj=JSON.parse(this.response);
    console.log(`${name}:${obj.main.temp}`);
 }
}

     