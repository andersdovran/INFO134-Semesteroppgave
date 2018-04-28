
/* Infoknapp */

function clickprog(id){
  console.log(id);
  var t = document.getElementById(id)
  if(t.style.visibility) {
    if(t.style.visibility === "hidden"){
      t.style.visibility = "visible";
    }
    else{
      t.style.visibility = "hidden";
    }
  }
  else{
    t.style.visibility = "hidden";
  }
  }


/*Oppdater infomormasjon */


  console.log("tekst");

  function visinfo() {
    console.log("hallo");
      document.getElementById("test").innerHTML = 'Contact us at: info@visitnorway.no';
  }

  /*Til map - attraksjoner */

  function initMap1() {

  var turistInformasjonen = {lat: 60.394495, lng: 5.324248};
  var floyen = {lat: 60.398627, lng: 5.343168};
  var akvariet = {lat: 60.399882, lng: 5.303371};
  var festningen = {lat: 60.400166, lng: 5.318611};
  var togStasjon = {lat: 60.390509, lng: 5.333191};

  var map = new google.maps.Map(document.getElementById('map'),
  { zoom: 15, center: turistInformasjonen });/*Zoom og sentrer turistInformasjonen*/

  /*Marker punkter på kartet*/
  var marker1 = new google.maps.Marker({
    position: turistInformasjonen, map: map });

  var marker2 = new google.maps.Marker({
    position: floyen, map: map });

  var marker3 = new google.maps.Marker({
    position: akvariet, map: map });

  var marker4 = new google.maps.Marker({
    position: festningen, map: map });

  var marker5 = new google.maps.Marker({
    position: togStasjon, map: map });

  }


  /*hentToaletter - JSON (Anders Dovran)*/
  function hentJSON(url)
  {
	  //kobler til URL
  	var fil = new XMLHttpRequest();
  	fil.open("GET", url, true);
  	fil.onreadystatechange = function ()
  	{
  		if(fil.readyState === 4)
  		{
  			if(fil.status === 200 || rawFile.status == 0)
  			{
				//henter innholder på siden
  				var tekst = fil.responseText;
				
				//lager et JSON-objekt
  				var objekt = JSON.parse(tekst);

  				var innhold = "<table><tr><th>Toalett</th><tr>";
				
				//itererer objektet
  				for (var i=0; i < objekt.entries.length; i++)
  				{
  					innhold += "<td>" + objekt.entries[i].plassering + "</td></tr>";
  				}

  				innhold += "</table>";
				
				//viser innholdet i vinduet
  				document.getElementById("jsontToaletter").innerHTML = innhold;
  			}
  		}
  	}
  	fil.send(null);
  }


/* Script WC */
var toaletter = {
"entries": [
  {
    "herre": "1",
    "tid_sondag": "07.00 - 23.15",
    "pissoir_only": "NULL",
    "stellerom": "NULL",
    "latitude": "60.3879681",
    "tid_hverdag": "07.00 - 23.15",
    "plassering": "NONNESETER TERMINAL, SØR",
    "tid_lordag": "07.00 - 23.15",
    "rullestol": "1",
    "adresse": "Lungegårdskaien",
    "pris": "12",
    "id": "1",
    "place": "NONNESETER TERMINAL, SOUTH",
    "dame": "1",
    "longitude": "5.334608"
  },
  {
    "herre": "1",
    "tid_sondag": "NULL",
    "pissoir_only": "NULL",
    "stellerom": "NULL",
    "latitude": "60.3884988",
    "tid_hverdag": "05.30 - 23.50",
    "plassering": "NONNESETER TERMINAL , NORD",
    "tid_lordag": "07.00 - 23.15",
    "rullestol": "1",
    "adresse": "Østre Strømkai",
    "pris": "12",
    "id": "2",
    "place": "NONNESETER TERMINAL , NORTH",
    "dame": "1",
    "longitude": "5.3345382"
  },
  {
    "herre": "1",
    "tid_sondag": "NULL",
    "pissoir_only": "NULL",
    "stellerom": "NULL",
    "latitude": "60.388868",
    "tid_hverdag": "09.00 - 17.00",
    "plassering": "SKYSS KUNDESENTER",
    "tid_lordag": "09.00 - 15.00",
    "rullestol": "1",
    "adresse": "Østre Strømkai",
    "pris": "12",
    "id": "3",
    "place": "SKYSS CUSTOMER CENTRE",
    "dame": "1",
    "longitude": "5.3337597"
  },
  {
    "herre": "1",
    "tid_sondag": "07.00 - 23.00",
    "pissoir_only": "NULL",
    "stellerom": "NULL",
    "latitude": "60.39041",
    "tid_hverdag": "07.00 - 23.00",
    "plassering": "JERNBANESTASJONEN",
    "tid_lordag": "07.00 - 23.00",
    "rullestol": "NULL",
    "adresse": "Strømgaten 4",
    "pris": "10",
    "id": "4",
    "place": "RAILWAY STATION",
    "dame": "1",
    "longitude": "5.332995"
  },
  {
    "herre": "1",
    "tid_sondag": "08.30 - 22.00",
    "pissoir_only": "NULL",
    "stellerom": "1",
    "latitude": "60.394554",
    "tid_hverdag": "09.00 - 23.00",
    "plassering": "MATHALLEN",
    "tid_lordag": "08.30 - 22.00",
    "rullestol": "1",
    "adresse": "Strandkaien 3",
    "pris": "10",
    "id": "5",
    "place": "FISH MARKET",
    "dame": "1",
    "longitude": "5.324099"
  },
  {
    "herre": "1",
    "tid_sondag": "08.00 - 18.00",
    "pissoir_only": "NULL",
    "stellerom": "",
    "latitude": "60.3951003",
    "tid_hverdag": "08.00 - 18.00",
    "plassering": "STRANDKAITERMINALEN",
    "tid_lordag": "08.00 - 18.00",
    "rullestol": "",
    "adresse": "Strandkaien",
    "pris": "10",
    "id": "6",
    "place": "STRANDKAI BOAT TERMINAL",
    "dame": "1",
    "longitude": "5.3220606"
  },
  {
    "herre": "1",
    "tid_sondag": "NULL",
    "pissoir_only": "NULL",
    "stellerom": "NULL",
    "latitude": "60.3913793",
    "tid_hverdag": "08.00 - 15.00",
    "plassering": "BERGEN KOMMUNE, INNBYGGERSERVICE",
    "tid_lordag": "NULL",
    "rullestol": "1",
    "adresse": "Kaigaten 4",
    "pris": "0",
    "id": "7",
    "place": "CITIZEN SERVICE CENTRE",
    "dame": "1",
    "longitude": "5.3290558"
  },
  {
    "herre": "1",
    "tid_sondag": "NULL",
    "pissoir_only": "NULL",
    "stellerom": "1",
    "latitude": "60.3891105",
    "tid_hverdag": "09.00 - 21.00",
    "plassering": "BERGEN STORSENTER",
    "tid_lordag": "09.00 - 18.00",
    "rullestol": "1",
    "adresse": "Strømgaten 8",
    "pris": "10",
    "id": "8",
    "place": "BERGEN STORSENTER",
    "dame": "1",
    "longitude": "5.3322315"
  },
  {
    "herre": "1",
    "tid_sondag": "NULL",
    "pissoir_only": "NULL",
    "stellerom": "1",
    "latitude": "60.392209",
    "tid_hverdag": "09.00 - 21.00",
    "plassering": "SUNDT MOTEHUS",
    "tid_lordag": "09.00 - 18.00",
    "rullestol": "1",
    "adresse": "Torgallmenningen 14",
    "pris": "10",
    "id": "9",
    "place": "SUNDT FASHION HOUSE",
    "dame": "1",
    "longitude": "5.324011"
  },
  {
    "herre": "1",
    "tid_sondag": "NULL",
    "pissoir_only": "NULL",
    "stellerom": "1",
    "latitude": "60.3927098",
    "tid_hverdag": "09.00 - 20.00",
    "plassering": "XHIBITION",
    "tid_lordag": "09.00 - 18.00",
    "rullestol": "1",
    "adresse": "Småstrandgaten 3",
    "pris": "10",
    "id": "10",
    "place": "XHIBITION",
    "dame": "1",
    "longitude": "5.3262019"
  },
  {
    "herre": "1",
    "tid_sondag": "NULL",
    "pissoir_only": "NULL",
    "stellerom": "1",
    "latitude": "60.3932345",
    "tid_hverdag": "09.00 - 21.00",
    "plassering": "GALLERIET",
    "tid_lordag": "09.00 - 18.00",
    "rullestol": "1",
    "adresse": "Torgallmenningen 8",
    "pris": "10",
    "id": "11",
    "place": "GALLERIET",
    "dame": "1",
    "longitude": "5.3252363"
  },
  {
    "herre": "1",
    "tid_sondag": "NULL",
    "pissoir_only": "NULL",
    "stellerom": "1",
    "latitude": "60.3944194",
    "tid_hverdag": "10.00 - 20.00",
    "plassering": "KLØVERHUSET",
    "tid_lordag": "10.00 - 18.00",
    "rullestol": "1",
    "adresse": "Strandgaten 13 -15",
    "pris": "10",
    "id": "12",
    "place": "KLØVERHUSET",
    "dame": "1",
    "longitude": "5.3205649"
  },
  {
    "herre": "1",
    "tid_sondag": "09.00 - 18.00",
    "pissoir_only": "NULL",
    "stellerom": "NULL",
    "latitude": "60.3975913",
    "tid_hverdag": "09.00 - 18.00",
    "plassering": "BRYGGEN BESØKSSENTER",
    "tid_lordag": "09.00 - 18.00",
    "rullestol": "1",
    "adresse": "Jacobsfjorden, Bryggen",
    "pris": "10",
    "id": "13",
    "place": "BRYGGEN VISITOR CENTRE",
    "dame": "1",
    "longitude": "5.3244317"
  },
  {
    "herre": "NULL",
    "tid_sondag": "ALL",
    "pissoir_only": "1",
    "stellerom": "NULL",
    "latitude": "60.3973581",
    "tid_hverdag": "ALL",
    "plassering": "C. SUNDTSGT",
    "tid_lordag": "ALL",
    "rullestol": "NULL",
    "adresse": "C. Sundts gt",
    "pris": "NULL",
    "id": "14",
    "place": "C. SUNDTSGT",
    "dame": "NULL",
    "longitude": "5.3132629"
  }
],
"page": 1,
"pages": 1,
"posts": 14
}


  var minarray = [];
  var innholdArray = [];
  var markers = [];


function initMap() {

var sentrer = {lat: 60.3932345, lng: 5.3252363};
var map = new google.maps.Map(document.getElementById('map'),
{
  zoom: 15,
  center: sentrer
});


var mann='wc_male.png';
var dame='wc_female.png';



  for(var i = 0; i < toaletter.entries.length; i++){
    var toalettNr = parseInt(toaletter.entries[i].id);//hent toalett nummer
    var plass = toaletter.entries[i].plassering;//hent navn på plassering

    //posisjoner toaletter
    var pos = {lat: parseFloat(toaletter.entries[i].latitude), lng: parseFloat(toaletter.entries[i].longitude)}

    //Legg til markers på hvert sted
    var marker = new google.maps.Marker({
      position: pos,
      map:map,
      id: i
    });
    //Innhold som skal vises i info vinduet
    var vinduInnhold =  '<div id="content">' + toalettNr+'<br>' + plass +
                                '<p><img style="max-width:20%;"  src="'+mann+'">'+
                                '<img style="max-width:20%;"  src="'+dame+'"></p>';

    innholdArray.push(vinduInnhold);//Legg til vinduinnhold i array
    markers.push(marker);//Legg til markers i array
  }//end forEach


  for (var i = 0; i < innholdArray.length; i++) {
    var infowindow = new google.maps.InfoWindow({content: innholdArray[i]});//Legg til innhold i infovindu
        minarray.push(infowindow);//Legg til infovindu i array
  }//end forEach

  for(var i = 0; i < innholdArray.length; i++){
    markers[i].addListener('click', function(){ //funksjon for å klikke på markører med infovindu
        minarray[this.id].open(map, markers[this.id]);
});
}//end forEach
}//end initMap




/* Objekt Script */

//parseInt

//toalettene i json format hentet inn å satt inn i en variabel.
var toaletter = {
	"entries": [
		{
			"herre": "1",
			"tid_sondag": "07.00 - 23.15",
			"pissoir_only": "NULL",
			"stellerom": "NULL",
			"latitude": "60.3879681",
			"tid_hverdag": "07.00 - 23.15",
			"plassering": "NONNESETER TERMINAL, SØR",
			"tid_lordag": "07.00 - 23.15",
			"rullestol": "1",
			"adresse": "Lungegårdskaien",
			"pris": "12",
			"id": "1",
			"place": "NONNESETER TERMINAL, SOUTH",
			"dame": "1",
			"longitude": "5.334608"
		},
		{
			"herre": "1",
			"tid_sondag": "NULL",
			"pissoir_only": "NULL",
			"stellerom": "NULL",
			"latitude": "60.3884988",
			"tid_hverdag": "05.30 - 23.50",
			"plassering": "NONNESETER TERMINAL , NORD",
			"tid_lordag": "07.00 - 23.15",
			"rullestol": "1",
			"adresse": "Østre Strømkai",
			"pris": "12",
			"id": "2",
			"place": "NONNESETER TERMINAL , NORTH",
			"dame": "1",
			"longitude": "5.3345382"
		},
		{
			"herre": "1",
			"tid_sondag": "NULL",
			"pissoir_only": "NULL",
			"stellerom": "NULL",
			"latitude": "60.388868",
			"tid_hverdag": "09.00 - 17.00",
			"plassering": "SKYSS KUNDESENTER",
			"tid_lordag": "09.00 - 15.00",
			"rullestol": "1",
			"adresse": "Østre Strømkai",
			"pris": "12",
			"id": "3",
			"place": "SKYSS CUSTOMER CENTRE",
			"dame": "1",
			"longitude": "5.3337597"
		},
		{
			"herre": "1",
			"tid_sondag": "07.00 - 23.00",
			"pissoir_only": "NULL",
			"stellerom": "NULL",
			"latitude": "60.39041",
			"tid_hverdag": "07.00 - 23.00",
			"plassering": "JERNBANESTASJONEN",
			"tid_lordag": "07.00 - 23.00",
			"rullestol": "NULL",
			"adresse": "Strømgaten 4",
			"pris": "10",
			"id": "4",
			"place": "RAILWAY STATION",
			"dame": "1",
			"longitude": "5.332995"
		},
		{
			"herre": "1",
			"tid_sondag": "08.30 - 22.00",
			"pissoir_only": "NULL",
			"stellerom": "1",
			"latitude": "60.394554",
			"tid_hverdag": "09.00 - 23.00",
			"plassering": "MATHALLEN",
			"tid_lordag": "08.30 - 22.00",
			"rullestol": "1",
			"adresse": "Strandkaien 3",
			"pris": "10",
			"id": "5",
			"place": "FISH MARKET",
			"dame": "1",
			"longitude": "5.324099"
		},
		{
			"herre": "1",
			"tid_sondag": "08.00 - 18.00",
			"pissoir_only": "NULL",
			"stellerom": "",
			"latitude": "60.3951003",
			"tid_hverdag": "08.00 - 18.00",
			"plassering": "STRANDKAITERMINALEN",
			"tid_lordag": "08.00 - 18.00",
			"rullestol": "",
			"adresse": "Strandkaien",
			"pris": "10",
			"id": "6",
			"place": "STRANDKAI BOAT TERMINAL",
			"dame": "1",
			"longitude": "5.3220606"
		},
		{
			"herre": "1",
			"tid_sondag": "NULL",
			"pissoir_only": "NULL",
			"stellerom": "NULL",
			"latitude": "60.3913793",
			"tid_hverdag": "08.00 - 15.00",
			"plassering": "BERGEN KOMMUNE, INNBYGGERSERVICE",
			"tid_lordag": "NULL",
			"rullestol": "1",
			"adresse": "Kaigaten 4",
			"pris": "0",
			"id": "7",
			"place": "CITIZEN SERVICE CENTRE",
			"dame": "1",
			"longitude": "5.3290558"
		},
		{
			"herre": "1",
			"tid_sondag": "NULL",
			"pissoir_only": "NULL",
			"stellerom": "1",
			"latitude": "60.3891105",
			"tid_hverdag": "09.00 - 21.00",
			"plassering": "BERGEN STORSENTER",
			"tid_lordag": "09.00 - 18.00",
			"rullestol": "1",
			"adresse": "Strømgaten 8",
			"pris": "10",
			"id": "8",
			"place": "BERGEN STORSENTER",
			"dame": "1",
			"longitude": "5.3322315"
		},
		{
			"herre": "1",
			"tid_sondag": "NULL",
			"pissoir_only": "NULL",
			"stellerom": "1",
			"latitude": "60.392209",
			"tid_hverdag": "09.00 - 21.00",
			"plassering": "SUNDT MOTEHUS",
			"tid_lordag": "09.00 - 18.00",
			"rullestol": "1",
			"adresse": "Torgallmenningen 14",
			"pris": "10",
			"id": "9",
			"place": "SUNDT FASHION HOUSE",
			"dame": "1",
			"longitude": "5.324011"
		},
		{
			"herre": "1",
			"tid_sondag": "NULL",
			"pissoir_only": "NULL",
			"stellerom": "1",
			"latitude": "60.3927098",
			"tid_hverdag": "09.00 - 20.00",
			"plassering": "XHIBITION",
			"tid_lordag": "09.00 - 18.00",
			"rullestol": "1",
			"adresse": "Småstrandgaten 3",
			"pris": "10",
			"id": "10",
			"place": "XHIBITION",
			"dame": "1",
			"longitude": "5.3262019"
		},
		{
			"herre": "1",
			"tid_sondag": "NULL",
			"pissoir_only": "NULL",
			"stellerom": "1",
			"latitude": "60.3932345",
			"tid_hverdag": "09.00 - 21.00",
			"plassering": "GALLERIET",
			"tid_lordag": "09.00 - 18.00",
			"rullestol": "1",
			"adresse": "Torgallmenningen 8",
			"pris": "10",
			"id": "11",
			"place": "GALLERIET",
			"dame": "1",
			"longitude": "5.3252363"
		},
		{
			"herre": "1",
			"tid_sondag": "NULL",
			"pissoir_only": "NULL",
			"stellerom": "1",
			"latitude": "60.3944194",
			"tid_hverdag": "10.00 - 20.00",
			"plassering": "KLØVERHUSET",
			"tid_lordag": "10.00 - 18.00",
			"rullestol": "1",
			"adresse": "Strandgaten 13 -15",
			"pris": "10",
			"id": "12",
			"place": "KLØVERHUSET",
			"dame": "1",
			"longitude": "5.3205649"
		},
		{
			"herre": "1",
			"tid_sondag": "09.00 - 18.00",
			"pissoir_only": "NULL",
			"stellerom": "NULL",
			"latitude": "60.3975913",
			"tid_hverdag": "09.00 - 18.00",
			"plassering": "BRYGGEN BESØKSSENTER",
			"tid_lordag": "09.00 - 18.00",
			"rullestol": "1",
			"adresse": "Jacobsfjorden, Bryggen",
			"pris": "10",
			"id": "13",
			"place": "BRYGGEN VISITOR CENTRE",
			"dame": "1",
			"longitude": "5.3244317"
		},
		{
			"herre": "NULL",
			"tid_sondag": "ALL",
			"pissoir_only": "1",
			"stellerom": "NULL",
			"latitude": "60.3973581",
			"tid_hverdag": "ALL",
			"plassering": "C. SUNDTSGT",
			"tid_lordag": "ALL",
			"rullestol": "NULL",
			"adresse": "C. Sundts gt",
			"pris": "NULL",
			"id": "14",
			"place": "C. SUNDTSGT",
			"dame": "NULL",
			"longitude": "5.3132629"
		}
	],
	"page": 1,
	"pages": 1,
	"posts": 14
}







//henter relevante elementer fra checkBoxene og gjør de om til et format som kan brukes videre i oppgaven

function hentForm(){


var mann;
var kvinne;
var rullestoltilgang;
var stellerom;
var gratis;

if(document.getElementById("checkboxmann").checked == true)
{
      mann = 1;
}
if (document.getElementById("checkboxmann").checked == false)
{
      mann = "NULL";
}
if(document.getElementById("checkboxkvinne").checked == true)
{
      kvinne = 1;
}
if (document.getElementById("checkboxkvinne").checked == false)
{
      kvinne = "NULL";
}
if(document.getElementById("checkboxrullestoltilgang").checked == true)
{
      rullestoltilgang = 1;
}
if (document.getElementById("checkboxrullestoltilgang").checked == false)
{
      rullestoltilgang = "NULL";
}
if(document.getElementById("checkboxstellerom").checked == true)
{
      stellerom = 1;
}
if (document.getElementById("checkboxstellerom").checked == false)
{
      stellerom = "NULL";
}
if(document.getElementById("checkboxgratis").checked == true)
{
      maksPris = "NULL";
}


var maksPris = document.getElementById("makspris").value;
var åpenklokkeslett = document.getElementById("åpenklokkeslett").value;
var åpent = document.getElementById("åpent").checked;
//var maksPris = document.getElementById("maksPris");
//var åpenklokkeslett = document.getElementById("åpenklokkeslett");



var resultat = {mann, kvinne, rullestoltilgang, stellerom, gratis, maksPris, åpenklokkeslett, åpent}

return resultat;

}


//metode som henter ut det vi har slått inn i checkboksene og søkeboksene. Sjekker for hver entry i toaletter at alt som er slått
// inn i checkboksene og serachboksene stemmer overrens med hver entry. dvs for hver entry lager vi en liste med "true" eller "false",
//sjekker dette så imot en bestemt liste som bare innheolder true. Om begge listene stemmer pusher vi entrien det er snakk om videre i en variabel.
// returnerer innholdet i en liste og endrer innholdet direkte med en id= statement

  function avansertSøk(){

    var returnInnhold = [];

  var innholdPlassering = "<table><tr><th>Plassering</th><tr>";

  var filter = hentForm();

  var list =[];

  var truthchecker =["true","true","true","true","true","true","true", "true"];

  var truthchecker2 =["true","true","true","true","true","true","true", "true"];


  //console.log(filter);

  var array = Object.keys(filter);

  var arrayTruthchecker = Object.keys(truthchecker);

  var arrayTruthchecker2 = Object.keys(truthchecker2);

  //console.log
  if (filter[array[0]]==true){

    list.entries[0]="1"
  }

  if (filter[array[1]]==true){

    list.entries[1]="1"
  }

  if (filter[array[2]]==true){

    list.entries[2]="1"
  }

  if (filter[array[3]]==true){

    list.entries[3]="1"
  }


for (var i=0; i < toaletter.entries.length; i++){


if(document.getElementById("åpent").checked == true){
//date = new date();
//var hours = date.getHours();
//var minutes = date.getMinutes();
//alert("minutter og timer");
//alert(hours);
//alert(minutes);
truthchecker.unshift("false");

}



if(document.getElementById("åpent").checked == false){
  truthchecker.unshift("true");
}


var prisVariabel = document.getElementById("makspris").value;

var prisVariabel2 = Number(prisVariabel);

var prisvariabelToaletter = Number(toaletter.entries[i].pris);

//alert("skriver ut prisvariabelToaletter")
//alert(prisvariabelToaletter);

//alert("skriver ut prisvariabel2(vår makspris)")
//alert(prisVariabel2);

if(document.getElementById("åpenklokkeslett").value==""){
truthchecker.unshift("true");
}

if(document.getElementById("åpenklokkeslett").value!=""){

var klokkeslettDo = toaletter.entries[i].tid_hverdag;
var splitArrayDo = klokkeslettDo.split("-", 2);

var timerogminutterToaletter1 =  (splitArrayDo[0]);
var timerogminutterToaletter2 = (splitArrayDo[1]);



var timerogminutterToaletter1split  = timerogminutterToaletter1.split(".",2);
var timerogminutterToaletter2split = timerogminutterToaletter2.split(".",2);

var timerToaletter1 =        Number(timerogminutterToaletter1split[0]);
var minutterToaletter1 =     Number(timerogminutterToaletter1split[1]);
var timerToaletter2 =        Number(timerogminutterToaletter2split[0]);
var minutterToaletter2 =     Number(timerogminutterToaletter2split[1]);

//alert("timer Fra toaletter1");
//alert("minutter Fra toaletter1");
//alert(timerToaletter1);
//alert(minutterToaletter1);

//alert("til timer fra toaletter2");
//alert("og minutter fra toaletter2");
//alert(timerToaletter2);
//alert(minutterToaletter1);


var klokkeslett = document.getElementById("åpenklokkeslett").value;

var splitArray = klokkeslett.split(".", 2);
var timer = Number(splitArray[0]);
var minutter = Number(splitArray[1]);



if(timer<timerToaletter1) {

truthchecker.unshift("false");
}

if(timer==timerToaletter1){

if (minutterToaletter1<=minutter){
  truthchecker.unshift("false");

}

if(minutterToaletter1>minutter)
{
  truthchecker.unshift("true");

}
}

if(timer>timerToaletter2) {
truthchecker.unshift("false");

}

if(timer==timerToaletter2){

if (minutterToaletter2<=minutter){
  truthchecker.unshift("false");

}

if(minutterToaletter2>minutter)
{
  truthchecker.unshift("true");

}
}

if(timer>timerToaletter1&&timer<timerToaletter2){

truthchecker.unshift("true");


}

//if(timer<timerToaletter &&minutter<minutterToaletter ){

//truthchecker.unshift("true");

//}


}




if(document.getElementById("makspris").value==""){
truthchecker.unshift("true");
}

if(document.getElementById("makspris").value!=""){


if(prisVariabel2<prisvariabelToaletter){

  truthchecker.unshift("true");
}

if(prisvariabelToaletter>prisVariabel2){

truthchecker.unshift("false");

}

}

//var prisvariabelToaletter = Number(toaletter.entries[i].pris)



//if(prisVariabel2<prisvariabelToaletter){

  // truthchecker.unshift("true");
//}

//if(prisvariabelToaletter>prisVariabel2){

//truthchecker.unshift("false");

//}
//}



//if()


  if(document.getElementById("checkboxgratis").checked == true) {
    if(toaletter.entries[i].pris=="NULL"){

        truthchecker.unshift("true");
        alert("nå setter vi truthchecker til true for gratis");

    }

    if(toaletter.entries[i].pris=="0"){

        truthchecker.unshift("true");
        alert("nå setter vi truthchecker til true for gratis");

    }

    if(toaletter.entries[i].pris!="NULL" && toaletter.entries[i].pris!="0"){

        truthchecker.unshift("false");
        alert("nå setter vi truthchecker til false for gratis");
    }
  }
  if(document.getElementById("checkboxgratis").checked == false){
    truthchecker.unshift("true");
  }


if(document.getElementById("checkboxstellerom").checked == true) {
  if(list.entries[3]==toaletter.entries[i].stellerom){

      truthchecker.unshift("true");
      alert("nå setter vi truthchecker til true for stellerom");

  }

  if(list.entries[3]!=toaletter.entries[i].stellerom){

      truthchecker.unshift("false");
      alert("nå setter vi truthchecker til false for stellerom");
  }
}
if(document.getElementById("checkboxstellerom").checked == false){
  truthchecker.unshift("true");
}


if(document.getElementById("checkboxrullestoltilgang").checked == true) {

if(list.entries[2]==toaletter.entries[i].rullestol){

  truthchecker.unshift("true");
}

if(list.entries[2]!=toaletter.entries[i].rullestol){

truthchecker.unshift("false");
}
}

if(document.getElementById("checkboxrullestoltilgang").checked == false){
truthchecker.unshift("true");
}





  if(document.getElementById("checkboxkvinne").checked == true) {

  if(list.entries[1]==toaletter.entries[i].dame){

    truthchecker.unshift("true");
  }

  if(list.entries[1]!=toaletter.entries[i].dame){

  truthchecker.unshift("false");
  }
}

if(document.getElementById("checkboxkvinne").checked == false){
  truthchecker.unshift("true");
}

  //truthchecker.unshift("true");

  //if(list.entries[2]==toaletter.entries[i].rullestoltilgang){

    //  truthchecker.unshift("true");

  //}

  //if(list.entries[2]!=toaletter.entries[i].rullestoltilgang){

    //  truthchecker.unshift("false");

  //}

  //if(list.entries[1]==toaletter.entries[i].kvinne){

    //  truthchecker.unshift("true");

  //}

  //if(list.entries[1]!=toaletter.entries[i].kvinne){

    //  truthchecker.unshift("false");

  //}


  if(document.getElementById("checkboxmann").checked == true) {

  if(list.entries[0]==toaletter.entries[i].herre){

    truthchecker.unshift("true");
  }

  if(list.entries[0]!=toaletter.entries[i].herre){

  truthchecker.unshift("false");
  }
}

if(document.getElementById("checkboxmann").checked == false){
  truthchecker.unshift("true");
}


var indextruth0 = truthchecker[0];
var indextruth1 = truthchecker[1];
var indextruth2 = truthchecker[2];
var indextruth3 = truthchecker[3];
var indextruth4 = truthchecker[4];
var indextruth5 = truthchecker[5];
var indextruth6 = truthchecker[6];

var index2truth0 = truthchecker2[0];
var index2truth1 = truthchecker2[1];
var index2truth2 = truthchecker2[2];
var index2truth3 = truthchecker2[3];
var index2truth4 = truthchecker2[4];
var index2truth5 = truthchecker2[5];
var index2truth6 = truthchecker2[6];



if(indextruth0==index2truth0&&indextruth1==index2truth1&&indextruth2==index2truth2&&indextruth3==index2truth3&&indextruth4==index2truth4&&indextruth5==index2truth5&&indextruth6==index2truth6)
{
  innholdPlassering += "<td>" + toaletter.entries[i].plassering + "</td></tr>";
returnInnhold += toaletter.entries[i];

}

}

  document.getElementById("plassering").innerHTML = innholdPlassering;
return returnInnhold;
  }




//sjekker hva vi har skrevet inn i en søkeboks. Sjekker alle bokstavene i søkeboksen
// opp imot hva som er av bokstaver i tilsvarende index som indexen til bokstavene i søkeboksen.
// sjekker at alt stemmer overrens, er det tilfellet så sender vi videre entrien fra toaletter.
function enkeltSøk(){

var innholdPlassering = "<table><tr><th>Plassering</th><tr>";
var returnInnhold = [];


      var input;
      var filter;
      var ul;
      var li;
      var  a;
      var i;
      var match;

      input = document.getElementById('enkeltSøk');
      filter = input.value.toUpperCase();
//var innholdPlassering = "";
     //alert("filteret er");
     //alert(filter);


for (var i=0; i < toaletter.entries.length; i++) {

  li = toaletter.entries[i].plassering;
  console.log(li);


  var match = 1;

    for(j=0 ; j< filter.length; j++){
        a = li.charAt(j);
        b = filter.charAt(j);



  if(a!=b){

  match = 2;
}

  }



     if(match == 1){


innholdPlassering += "<td>" + toaletter.entries[i].plassering + "</td></tr>";
returnInnhold += toaletter.entries[i];
     }

}



document.getElementById("plassering").innerHTML = innholdPlassering;
return returnInnhold;


}

//lag et søkeobjekt searchresult.push(persons[i])
//var searchParams = Object.keys(searchObject)


/* Hurtigsøk IKKE FULLFØRT (Anders Dovran)*/
function hurtigSok()
{
	var sokeTekst = document.getElementById("sokeTekst").value;
	
	// RegEx
	var toalettSok = /(\w+)[\s]((\w+)[\:](\w+))+/;
	
	
    // Finner delene av soketeksten (hvis beskrivelsen følger mønsteret over)
    var deler = sokeTekst.match(toalettSok);

    // rapporterer eventuelle funn
    if (deler != null)
	{
		var query = deler[1];
		var sok = deler[2];
    }
	else
	{
		alert("Feil i søketekst");
	}
}

/* Hurtigsøk SLUTT*/
