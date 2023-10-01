var url="https://script.google.com/macros/s/AKfycbzDM9pPkooDiRx9LTniY_ynuZJPRpnpw_XOhj6yJEGI9g0azcCOk7NqES8U5FYNM9zaHg/exec";

let input = document.querySelector(".input");
let inputpass = document.querySelector(".passinput");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");


let arrayOfTasks = [];
var userid = "nh@";
var num = 200;

function addTaskToArray() 
{
  for(let i=1;i<=num;i++)
  {
  userid = "nh@"+i;
  arrayOfTasks.push(userid);
  }
}

addTaskToArray() 



fetch(url)
.then(res => res.json())
.then(data => 
{
    if(data)
    {

for (var i = 50; i < data.content.length && i<251; i++) 
	{
    let div = document.createElement("div");
    div.className = "task";
    //div.appendChild(document.createTextNode(data.content[i][1]));
    div.innerHTML=`${data.content[i][1]}
    <br/>المهمة الأولى :${data.content[i][4]}
    <br/>المهمة الثانية :${data.content[i][6]}
    <br/>المهمة الثالثة :${data.content[i][8]}
    <br/>المهمة الرابعة :${data.content[i][10]}
    <br/>المهمة الخامسة :${data.content[i][12]}
    <br/>المهمة السادسة :${data.content[i][14]}
    <br/>المهمة السابعة :${data.content[i][16]}
    <br/>المهمة الثامنة :${data.content[i][18]}
    <br/>المهمة التاسعة :${data.content[i][20]}

    `;
    tasksDiv.appendChild(div);
	}
}
})




submit.onclick = function () 
{
  let txt=input.value;
  let userp=inputpass.value;
  for(let i =0;i<arrayOfTasks.length;i++)
  {  
  if (userp == arrayOfTasks[i]) 
  {
    fetch(url,
    {
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache',
      headers: {'Content-Type': 'application/json'},
      redirect: 'follow',
      body: JSON.stringify({
        vr0:userp,
        vr1:txt,
        vr2:0,
        vr3:0,
        vr4:0,
        vr5:0,
        vr6:0,
        vr7:0,
        vr8:0,
        vr9:0,
        vr10:0,
        vr11:0,
        vr12:0,
        vr13:0,
        vr14:0,
        vr15:0,
        vr16:0,
        vr17:0,
        vr18:0,
        vr19:0,
        vr20:0
      })
    });
    input.value = "";
    inputpass.value="";
  }
}
};



