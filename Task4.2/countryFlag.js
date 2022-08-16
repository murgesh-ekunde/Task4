let xhr=new XMLHttpRequest();

// Request to get data
xhr.open("GET","https://restcountries.com/v3.1/all");

// Request to load data
xhr.onload=function(){

let data=JSON.parse(xhr.responseText);
for(let i=0;i<data.length;i++){
   console.log(`
   Name:${data[i].name.common}
   Flag:${data[i].flag}
   `)
}
};

//Request to send data
xhr.send();