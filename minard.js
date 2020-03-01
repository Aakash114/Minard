
function JSONData(){

	// Since Prof has given the single instance of data, we need to add pathdata for endpoints for opposite direction as well
  var PathData = [
  {
    "LONP": 24,
    "LATP": 54.9,
    "SURV": 340000,
    "SURVSIZE": 34,
    "DIR": "A",
    "DIV": 1
  },
  {
    "LONP": 24.5,
    "LATP": 55,
    "SURV": 340000,
    "SURVSIZE": 34,
    "DIR": "A",
    "DIV": 1
  },
  {
    "LONP": 25.5,
    "LATP": 54.5,
    "SURV": 340000,
    "SURVSIZE": 34,
    "DIR": "A",
    "DIV": 1
  },
  {
    "LONP": 26,
    "LATP": 54.7,
    "SURV": 320000,
    "SURVSIZE": 32,
    "DIR": "A",
    "DIV": 1
  },
  {
    "LONP": 27,
    "LATP": 54.8,
    "SURV": 300000,
    "SURVSIZE": 30,
    "DIR": "A",
    "DIV": 1
  },
  {
    "LONP": 28,
    "LATP": 54.9,
    "SURV": 280000,
    "SURVSIZE": 28,
    "DIR": "A",
    "DIV": 1
  },
  {
    "LONP": 28.5,
    "LATP": 55,
    "SURV": 240000,
    "SURVSIZE": 24,
    "DIR": "A",
    "DIV": 1
  },
  {
    "LONP": 29,
    "LATP": 55.1,
    "SURV": 210000,
    "SURVSIZE": 21,
    "DIR": "A",
    "DIV": 1
  },
  {
    "LONP": 30,
    "LATP": 55.2,
    "SURV": 180000,
    "SURVSIZE": 18,
    "DIR": "A",
    "DIV": 1
  },
  {
    "LONP": 30.3,
    "LATP": 55.3,
    "SURV": 175000,
    "SURVSIZE": 17.5,
    "DIR": "A",
    "DIV": 1
  },
  {
    "LONP": 32,
    "LATP": 54.8,
    "SURV": 145000,
    "SURVSIZE": 14.5,
    "DIR": "A",
    "DIV": 1
  },
  {
    "LONP": 33.2,
    "LATP": 54.9,
    "SURV": 140000,
    "SURVSIZE": 14,
    "DIR": "A",
    "DIV": 1
  },
  {
    "LONP": 34.4,
    "LATP": 55.5,
    "SURV": 127100,
    "SURVSIZE": 12.71,
    "DIR": "A",
    "DIV": 1
  },
  {
    "LONP": 35.5,
    "LATP": 55.4,
    "SURV": 100000,
    "SURVSIZE": 10,
    "DIR": "A",
    "DIV": 1
  },
  {
    "LONP": 36,
    "LATP": 55.5,
    "SURV": 100000,
    "SURVSIZE": 10,
    "DIR": "A",
    "DIV": 1
  },
  {
    "LONP": 37.6,
    "LATP": 55.8,
    "SURV": 100000,
    "SURVSIZE": 10,
    "DIR": "R",
    "DIV": 1
  },
  {
    "LONP": 37.5,
    "LATP": 55.7,
    "SURV": 98000,
    "SURVSIZE": 9.8,
    "DIR": "R",
    "DIV": 1
  },
	
	{
    "LONP": 37.6,
    "LATP": 55.8,
    "SURV": 97000,
    "SURVSIZE": 9.7,
    "DIR": "A",
    "DIV": 1
  },


  {
    "LONP": 37,
    "LATP": 55,
    "SURV": 97000,
    "SURVSIZE": 9.7,
    "DIR": "R",
    "DIV": 1
  },
  {
    "LONP": 36.8,
    "LATP": 55,
    "SURV": 96000,
    "SURVSIZE": 9.6,
    "DIR": "R",
    "DIV": 1
  },
  {
    "LONP": 35.4,
    "LATP": 55.3,
    "SURV": 87000,
    "SURVSIZE": 8.7,
    "DIR": "R",
    "DIV": 1
  },
  {
    "LONP": 34.3,
    "LATP": 55.2,
    "SURV": 55000,
    "SURVSIZE": 5.5,
    "DIR": "R",
    "DIV": 1
  },
  {
    "LONP": 33.3,
    "LATP": 54.8,
    "SURV": 37000,
    "SURVSIZE": 3.7,
    "DIR": "R",
    "DIV": 1
  },
  {
    "LONP": 32,
    "LATP": 54.6,
    "SURV": 24000,
    "SURVSIZE": 2.4,
    "DIR": "R",
    "DIV": 1
  },
  {
    "LONP": 30.4,
    "LATP": 54.4,
    "SURV": 20000,
    "SURVSIZE": 2,
    "DIR": "R",
    "DIV": 1
  },
  {
    "LONP": 29.2,
    "LATP": 54.4,
    "SURV": 20000,
    "SURVSIZE": 2,
    "DIR": "R",
    "DIV": 1
  },
  {
    "LONP": 28.5,
    "LATP": 54.3,
    "SURV": 20000,
    "SURVSIZE": 2,
    "DIR": "R",
    "DIV": 1
  },
  {
    "LONP": 28.3,
    "LATP": 54.4,
    "SURV": 20000,
    "SURVSIZE": 2,
    "DIR": "R",
    "DIV": 1
  },
  {
    "LONP": 24,
    "LATP": 55.1,
    "SURV": 60000,
    "SURVSIZE": 6,
    "DIR": "A",
    "DIV": 2
  },
  {
    "LONP": 24.5,
    "LATP": 55.2,
    "SURV": 60000,
    "SURVSIZE": 6,
    "DIR": "A",
    "DIV": 2
  },
  {
    "LONP": 25.5,
    "LATP": 54.7,
    "SURV": 60000,
    "SURVSIZE": 6,
    "DIR": "A",
    "DIV": 2
  },
  {
    "LONP": 26.6,
    "LATP": 55.7,
    "SURV": 40000,
    "SURVSIZE": 4,
    "DIR": "A",
    "DIV": 2
  },
  {
    "LONP": 27.4,
    "LATP": 55.6,
    "SURV": 33000,
    "SURVSIZE": 3.3,
    "DIR": "A",
    "DIV": 2
  },
  {
    "LONP": 27.4,
    "LATP": 55.6,
    "SURV": 33000,
    "SURVSIZE": 3.3,
    "DIR": "R",
    "DIV": 2
  },
  {
    "LONP": 28.7,
    "LATP": 55.5,
    "SURV": 30000,
    "SURVSIZE": 3,
    "DIR": "R",
    "DIV": 2
  },
  {
    "LONP": 29.2,
    "LATP": 54.3,
    "SURV": 30000,
    "SURVSIZE": 3,
    "DIR": "R",
    "DIV": 2
  },
  {
    "LONP": 28.5,
    "LATP": 54.2,
    "SURV": 30000,
    "SURVSIZE": 3,
    "DIR": "R",
    "DIV": 2
  },
  {
    "LONP": 28.3,
    "LATP": 54.3,
    "SURV": 28000,
    "SURVSIZE": 2.8,
    "DIR": "R",
    "DIV": 2
  },
  {
    "LONP": 27.5,
    "LATP": 54.5,
    "SURV": 20000,
    "SURVSIZE": 2,
    "DIR": "R",
    "DIV": 2
  },
  {
    "LONP": 26.8,
    "LATP": 54.3,
    "SURV": 12000,
    "SURVSIZE": 1.2,
    "DIR": "R",
    "DIV": 2
  },
  {
    "LONP": 26.4,
    "LATP": 54.4,
    "SURV": 14000,
    "SURVSIZE": 1.4,
    "DIR": "R",
    "DIV": 2
  },
  {
    "LONP": 24.6,
    "LATP": 54.5,
    "SURV": 8000,
    "SURVSIZE": 0.8,
    "DIR": "R",
    "DIV": 2
  },
  {
    "LONP": 24.4,
    "LATP": 54.4,
    "SURV": 4000,
    "SURVSIZE": 0.4,
    "DIR": "R",
    "DIV": 2
  },
  {
    "LONP": 24.2,
    "LATP": 54.4,
    "SURV": 4000,
    "SURVSIZE": 0.4,
    "DIR": "R",
    "DIV": 2
  },
  {
    "LONP": 24.1,
    "LATP": 54.3,
    "SURV": 4000,
    "SURVSIZE": 0.4,
    "DIR": "R",
    "DIV": 2
  },
  {
    "LONP": 24,
    "LATP": 55.2,
    "SURV": 22000,
    "SURVSIZE": 2.2,
    "DIR": "A",
    "DIV": 3
  },
  {
    "LONP": 24.5,
    "LATP": 55.3,
    "SURV": 22000,
    "SURVSIZE": 2.2,
    "DIR": "A",
    "DIV": 3
  },
  {
    "LONP": 24.5,
    "LATP": 55.3,
    "SURV": 22000,
    "SURVSIZE": 2.2,
    "DIR": "R",
    "DIV": 3
  },
  {
    "LONP": 24.6,
    "LATP": 55.8,
    "SURV": 6000,
    "SURVSIZE": 0.6,
    "DIR": "R",
    "DIV": 3
  },
  {
    "LONP": 24.2,
    "LATP": 54.4,
    "SURV": 6000,
    "SURVSIZE": 0.6,
    "DIR": "R",
    "DIV": 3
  },
  {
    "LONP": 24.1,
    "LATP": 54.3,
    "SURV": 6000,
    "SURVSIZE": 0.6,
    "DIR": "R",
    "DIV": 3
  }
];  


var CityData = [
  {
    "LONC": 24,
    "LATC": 55,
    "CITY": "Kowno",
    "LONT": 37.6,
    "TEMP": 0,
    "DAYS": 6,
    "MON": "Oct",
    "DAY": 18
  },
  {
    "LONC": 25.3,
    "LATC": 54.7,
    "CITY": "Wilna",
    "LONT": 36,
    "TEMP": 0,
    "DAYS": 6,
    "MON": "Oct",
    "DAY": 24
  },
  {
    "LONC": 26.4,
    "LATC": 54.4,
    "CITY": "Smorgoni",
    "LONT": 33.2,
    "TEMP": -9,
    "DAYS": 16,
    "MON": "Nov",
    "DAY": 9
  },
  {
    "LONC": 26.8,
    "LATC": 54.3,
    "CITY": "Molodexno",
    "LONT": 32,
    "TEMP": -21,
    "DAYS": 5,
    "MON": "Nov",
    "DAY": 14
  },
  {
    "LONC": 27.7,
    "LATC": 55.2,
    "CITY": "Gloubokoe",
    "LONT": 29.2,
    "TEMP": -11,
    "DAYS": 10,
    "MON": "",
    "DAY": ""
  },
  {
    "LONC": 27.6,
    "LATC": 53.9,
    "CITY": "Minsk",
    "LONT": 28.5,
    "TEMP": -20,
    "DAYS": 4,
    "MON": "Nov",
    "DAY": 28
  },
  {
    "LONC": 28.5,
    "LATC": 54.3,
    "CITY": "Studienska",
    "LONT": 27.2,
    "TEMP": -24,
    "DAYS": 3,
    "MON": "Dec",
    "DAY": 1
  },
  {
    "LONC": 28.7,
    "LATC": 55.5,
    "CITY": "Polotzk",
    "LONT": 26.7,
    "TEMP": -30,
    "DAYS": 5,
    "MON": "Dec",
    "DAY": 6
  },
  {
    "LONC": 29.2,
    "LATC": 54.4,
    "CITY": "Bobr",
    "LONT": 25.3,
    "TEMP": -26,
    "DAYS": 1,
    "MON": "Dec",
    "DAY": 7
  },
  {
    "LONC": 30.2,
    "LATC": 55.3,
    "CITY": "Witebsk",
    "LONT": "",
    "TEMP": "",
    "DAYS": "",
    "MON": "",
    "DAY": ""
  },
  {
    "LONC": 30.4,
    "LATC": 54.5,
    "CITY": "Orscha",
    "LONT": "",
    "TEMP": "",
    "DAYS": "",
    "MON": "",
    "DAY": ""
  },
  {
    "LONC": 30.4,
    "LATC": 53.9,
    "CITY": "Mohilow",
    "LONT": "",
    "TEMP": "",
    "DAYS": "",
    "MON": "",
    "DAY": ""
  },
  {
    "LONC": 32,
    "LATC": 54.8,
    "CITY": "Smolensk",
    "LONT": "",
    "TEMP": "",
    "DAYS": "",
    "MON": "",
    "DAY": ""
  },
  {
    "LONC": 33.2,
    "LATC": 54.9,
    "CITY": "Dorogobouge",
    "LONT": "",
    "TEMP": "",
    "DAYS": "",
    "MON": "",
    "DAY": ""
  },
  {
    "LONC": 34.3,
    "LATC": 55.2,
    "CITY": "Wixma",
    "LONT": "",
    "TEMP": "",
    "DAYS": "",
    "MON": "",
    "DAY": ""
  },
  {
    "LONC": 34.4,
    "LATC": 55.5,
    "CITY": "Chjat",
    "LONT": "",
    "TEMP": "",
    "DAYS": "",
    "MON": "",
    "DAY": ""
  },
  {
    "LONC": 36,
    "LATC": 55.5,
    "CITY": "Mojaisk",
    "LONT": "",
    "TEMP": "",
    "DAYS": "",
    "MON": "",
    "DAY": ""
  },
  {
    "LONC": 37.6,
    "LATC": 55.8,
    "CITY": "Moscou",
    "LONT": "",
    "TEMP": "",
    "DAYS": "",
    "MON": "",
    "DAY": ""
  },
  {
    "LONC": 36.6,
    "LATC": 55.3,
    "CITY": "Tarantino",
    "LONT": "",
    "TEMP": "",
    "DAYS": "",
    "MON": "",
    "DAY": ""
  },
  {
    "LONC": 36.5,
    "LATC": 55,
    "CITY": "Malo-jarosewli",
    "LONT": "",
    "TEMP": "",
    "DAYS": "",
    "MON": "",
    "DAY": ""
  }
];

	//attack
    let dataset1 = [];  
    //return
    let dataset2 = [];  

    PathData.forEach(function(data){
        if(data.DIR == "A"){
            dataset1.push(data);

        } else if(data.DIR == "R"){
            dataset2.push(data);
        }
    });
   
      console.log(dataset1);
      console.log(dataset2);

    Minardmap(dataset1, dataset2, CityData);
}





function Minardmap(dataset1, dataset2, CityData){  
    
    let data1 = [];
    let data2 = [];
    let data3 = [];
    let datasize = [];

    dataset1.forEach(function(data){



        if(data.DIV == 1){
        	//datasize1.push(data.size);

            data1.push(data);
        } else if(data.DIV == 2){
            data2.push(data);
        } else
            data3.push(data);
    });

    console.log(data1);
    console.log(data2);
    console.log(data3);
    let returnData1 = [];
    let returnData2 = [];
    let returnData3 = [];

    dataset2.forEach(function(data){
        if(data.DIV == 1){
            returnData1.push(data);
        } else if(data.DIV == 2){
            returnData2.push(data);
        } else
            returnData3.push(data);
    });

    console.log(returnData1);
    console.log(returnData2);
    console.log(returnData3);

    
    am4core.useTheme(am4themes_animated);
    am4core.useTheme(am4themes_dark);

    var chart = am4core.create("m1", am4charts.XYChart);

    chart.data = dataset1;
    var xAxis = chart.xAxes.push(new am4charts.ValueAxis());
    xAxis.renderer.minGridDistance = 50;


    var yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.renderer.minGridDistance = 100;

    var chart1 = am4core.create("m2", am4charts.XYChart);

    chart1.data = CityData;
    var xAxis1 = chart1.xAxes.push(new am4charts.ValueAxis());
    xAxis1.renderer.minGridDistance = 1;
   // xAxis1.renderer.inversed = true;

    var yAxis1 = chart1.yAxes.push(new am4charts.ValueAxis());
    yAxis1.renderer.minGridDistance = 10;
    yAxis1.renderer.opposite = true;

    //chart1.rotate = true;
    //chart1.categoryAxis.position = "right";
    //chart1.valueAxes.reversed = true;



    var attackSeries1 = chart.series.push(new am4charts.LineSeries());
    attackSeries1.data = data1;
    attackSeries1.dataFields.valueY = "LATP";
    attackSeries1.dataFields.valueX = "LONP";
    
    attackSeries1.stroke = am4core.color("#c11500");
   // console.log("Test" + JSON.stringify(attackSeries1));
   attackSeries1.propertyFields.strokeWidth = "SURVSIZE";
    //attackSeries1.strokeWidth = 16;

    
    attackSeries1.legendSettings.labelText = "[bold{color}]Group 1 (Attack)[/]";
    
    var attackSeries2 = chart.series.push(attackSeries1.clone());
    attackSeries2.data = data2;
    //attackSeries2.strokeWidth = 10;
    attackSeries2.stroke = am4core.color("#4caf50");
    attackSeries2.propertyFields.strokeWidth = "SURVSIZE";
    attackSeries2.legendSettings.labelText = "[bold{color}]Group 2 (Attack)[/]";

    var attackSeries3 = chart.series.push(attackSeries1.clone());
    attackSeries3.data = data3;
    //attackSeries3.strokeWidth = 8;
    attackSeries3.stroke = am4core.color("#fbc02d");
    attackSeries3.propertyFields.strokeWidth = "SURVSIZE";
    attackSeries3.legendSettings.labelText = "[bold{color}]Group 3 (Attack)[/]";
    
    var returnSeries1 = chart.series.push(attackSeries1.clone());
    returnSeries1.data = returnData1;
    returnSeries1.stroke = am4core.color("#00acc1");
    //returnSeries1.strokeWidth = 4;
    returnSeries1.propertyFields.strokeWidth = "SURVSIZE";
    returnSeries1.zIndex = -1;
    returnSeries1.legendSettings.labelText = "[bold{color}]Return[/]";

    var returnSeries2 = chart.series.push(returnSeries1.clone());
    returnSeries2.data = returnData2;
    returnSeries2.stroke = am4core.color("#af4cab");

    var returnSeries3 = chart.series.push(returnSeries2.clone());
    returnSeries3.data = returnData3;
    returnSeries3.stroke = am4core.color("#2d68fb");

    //Draw city points on the chart
    var citySeries = chart.series.push(attackSeries1.clone());
    citySeries.data = CityData;
    citySeries.dataFields.valueY = "LATC";
    citySeries.dataFields.valueX = "LONC";
    citySeries.strokeWidth = 0;
    citySeries.zIndex = -1;

    var cityBullet = citySeries.bullets.push(new am4charts.CircleBullet());
    cityBullet.circle.strokeWidth = 1;
    cityBullet.circle.radius = 4;

    //Adding shadow to bullet
    var shadow = new am4core.DropShadowFilter();
    shadow.dx = 2;
    shadow.dy = 2;
    cityBullet.circle.filters.push(shadow);
    cityBullet.circle.fill = "#616161";
    cityBullet.circle.stroke = "#fff";
    cityBullet.tooltipText = "[bold]{CITY}";
        
    var cityHover = cityBullet.states.create("hover");
    cityHover.properties.scale = 1.5;

    var tempSeries = chart1.series.push(new am4charts.LineSeries());
    console.log(CityData);
    var CityData2 = [];
    CityData.forEach(function(data){
    	if(data.LONT != "" || data.TEMP != ""){
    		CityData2.push(data)
    	}
    });
    tempSeries.data = CityData2;
    tempSeries.dataFields.valueY = "TEMP";
    tempSeries.dataFields.valueX = "LONT";
    tempSeries.strokeWidth = 1;
    tempSeries.zIndex = -1;
    
    var tempBullet = tempSeries.bullets.push(new am4charts.CircleBullet());
    tempBullet.circle.strokeWidth = 1;
    tempBullet.circle.radius = 4;

    tempBullet.circle.filters.push(shadow);
    tempBullet.circle.fill = "#616161";
    tempBullet.circle.stroke = "#fff";
    tempBullet.tooltipText = "[bold]{CITY}";
    tempBullet.alwaysShowTooltip =true;

    
    var tempHover = tempBullet.states.create("hover");
    tempHover.properties.scale = 1.7;
   
   
    
    chart.legend = new am4charts.Legend();
    chart.legend.markers.template.disabled = true;

    chart1.legend = new am4charts.Legend();
    chart1.legend.markers.template.disabled = true;

}