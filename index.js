var secHand=document.querySelector(".sec-hand")
var minHand=document.querySelector(".min-hand")
var hourHand=document.querySelector(".hour-hand")

var secHand1=document.querySelector(".sec-hand1")
var minHand1=document.querySelector(".min-hand1")
var hourHand1=document.querySelector(".hour-hand1")

var secHand2=document.querySelector(".sec-hand2")
var minHand2=document.querySelector(".min-hand2")
var hourHand2=document.querySelector(".hour-hand2")

var secHand3=document.querySelector(".sec-hand3")
var minHand3=document.querySelector(".min-hand3")
var hourHand3=document.querySelector(".hour-hand3")

var country1=document.querySelector(".country1")
var country2=document.querySelector(".country2")
var country3=document.querySelector(".country3")

var arr = [
    { 
        id: 1,
        name: 'Denmark',
        GMT: '+2',
    },
    {
        id: 2,
        name: 'New Zealand',
        GMT: '+12',
    },
    {
        id: 3,
        name: 'Canada',
        GMT: '-4',
    },
    {
        id: 4,
        name: 'Bangladesh',
        GMT: '+6',
    },
    {
        id: 5,
        name: 'Australia',
        GMT: '+10',
    },
    {
        id: 6,
        name: 'Singapore',
        GMT: '+8',
    },
];

var arr_1 = [
    {
        id: 7,
        name: 'UK',
        GMT: '+1',
    },
    {
        id: 8,
        name: 'US',
        GMT: '-4',
    },
    {
        id: 9,
        name: 'Russia',
        GMT: '+3',
    },
    {
        id: 10,
        name: 'Cape Verde',
        GMT: '-1',
    },
    {
        id: 11,
        name: 'Egypt',
        GMT: '+2',
    },{
        id: 12,
        name: 'South Korea',
        GMT: '+9',
    }
];

var arr_2 = [
    {
        id: 13,
        name: 'Germany',
        GMT: '+2',
    },
    {
        id: 14,
        name: 'Malaysia',
        GMT: '+8',
    },
    {
        id: 15,
        name: 'Panama',
        GMT: '-5',
    },
    {
        id: 16,
        name: 'UAE',
        GMT: '+4',
    },
    {
        id: 17,
        name: 'Turkey',
        GMT: '+3',
    },
    {
        id: 18,
        name: 'Palau',
        GMT: '+9',
    },
]

var setDate=()=>{
   

    var paktime=calcTime("Pakistan",'+5')
    
        var hour=paktime.getHours();
        var min=paktime.getMinutes();
        var sec=paktime.getSeconds();

        var secDegree=(((sec/60)*360)+90)
        var minDegree=(((min/60)*360)+90)
        var hourDegree=(((hour/12)*360)+90)

        secHand.style.transform=`rotate(${secDegree}deg)`
        minHand.style.transform=`rotate(${minDegree}deg)`
        hourHand.style.transform=`rotate(${hourDegree}deg)`

        // console.log(sec)

        
        // console.log(arr[num].name+""+arr[num].GMT);
        //watch 1
        var time1=calcTime(arr[num].name,arr[num].GMT)
        // console.log(arr[num].name,arr[num].GMT)
        var hour1=time1.getHours();
        var min1=time1.getMinutes();
        var sec1=time1.getSeconds();

        var secDegree1=(((sec1/60)*360)+90)
        var minDegree1=(((min1/60)*360)+90)
        var hourDegree1=(((hour1/12)*360)+90)

        secHand1.style.transform=`rotate(${secDegree1}deg)`
        minHand1.style.transform=`rotate(${minDegree1}deg)`
        hourHand1.style.transform=`rotate(${hourDegree1}deg)`

        country1.textContent=arr[num].name;

        //watch2
        var time2=calcTime(arr_1[num1].name,arr_1[num1].GMT)
        // console.log(arr[num].name,arr[num].GMT)
        var hour2=time2.getHours();
        var min2=time2.getMinutes();
        var sec2=time2.getSeconds();

        var secDegree2=(((sec2/60)*360)+90)
        var minDegree2=(((min2/60)*360)+90)
        var hourDegree2=(((hour2/12)*360)+90)

        secHand2.style.transform=`rotate(${secDegree2}deg)`
        minHand2.style.transform=`rotate(${minDegree2}deg)`
        hourHand2.style.transform=`rotate(${hourDegree2}deg)`

        country2.textContent=arr_1[num1].name;

        //watch3
        var time3=calcTime(arr_2[num2].name,arr_2[num2].GMT)
        // console.log(arr[num].name,arr[num].GMT)
        var hour3=time3.getHours();
        var min3=time3.getMinutes();
        var sec3=time3.getSeconds();

        var secDegree3=(((sec3/60)*360)+90)
        var minDegree3=(((min3/60)*360)+90)
        var hourDegree3=(((hour3/12)*360)+90)

        secHand3.style.transform=`rotate(${secDegree3}deg)`
        minHand3.style.transform=`rotate(${minDegree3}deg)`
        hourHand3.style.transform=`rotate(${hourDegree3}deg)`

        country3.textContent=arr_2[num2].name;

    


}
setInterval(setDate,1000);

// function to calculate local time
// in a different city
// given the city's UTC offset
function calcTime(city, offset) {

    // create Date object for current location
    d = new Date();
   
    // convert to msec
    // add local time zone offset
    // get UTC time in msec
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    
   
    // create new Date object for different city
    // using supplied offset
    nd = new Date(utc + (3600000*offset));
    
   
    // return time as a string
   return nd;



}

// get Bombay time
// console.log(calcTime('Pakistan', '+5'));

// get Singapore time

// console.log(calcTime('Singapore', '+8'));

// get London time

// console.log(calcTime('London', '+1'));
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


var num=getRandomInt(0,6);
var num1=getRandomInt(0,6);
var num2=getRandomInt(0,6);