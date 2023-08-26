function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5x1ZBk8SjuR":
        Script1();
        break;
      case "5xteyHoRYOh":
        Script2();
        break;
      case "6773S3FNxY0":
        Script3();
        break;
      case "5ayqua0Oqcy":
        Script4();
        break;
  }
}

function Script1()
{
  const player = GetPlayer();
var users =[];
var usersdata =[];
var topTenVarName = 'topTen';
var topTenMsg = "\n";
var spase = "..";
var usertxt;
var line = "---------------------------------------------------------------------------------------------------------------------------------"; 
var url="https://script.google.com/macros/s/AKfycbxC2R_cSt-H-ejd6T6Bh2YQX3WHWNFVB78YtH585NdSC40yoWV-hHrDdk3dpx1AZur5tg/exec";
player.SetVar(topTenVarName, "انتظر");
fetch(url)

.then(res => res.json())
.then(data => 
{
for (var i = 49; i < data.content.length; i++) 
	{
		if(i<100 && data.content[i][0] != "")
		{
			users.push(data.content[i][4]);
			usersdata.push(data.content[i]);
		}
		if(users.length == 50)
		{
			users.sort(function(a, b) {
			return a - b;})
			console.log(i)
			users.reverse();
			userboard();
			//userwrite();
		}
	}

})


function userboard()
{
	for (var n = users.length+1 ; n >= users.length; n--) 
		{
			for (var u = 0; u < users.length; u++) 
			{
				if(usersdata[u][4] == users[0])
						{
						topTenMsg +=
						"الدرجة:"+usersdata[u][4].toString()+"\b"+
						" الجلسات:"+usersdata[u][2].toString()+"\b"+
						" الأعادة:"+usersdata[u][3].toString()+"\b"+
						" المهمات"+":"+usersdata[u][5].toString()+"\b"+
						+usersdata[u][6].toString()+"\b"+
						+usersdata[u][7].toString()+"\b"+
						+usersdata[u][8].toString()+"\b"+
						+usersdata[u][9].toString()+"\b"+
						+usersdata[u][10].toString()+"\b"+
	    				+usersdata[u][11].toString()+"\b"+
						+usersdata[u][12].toString()+"\b"+
						" الاسم:"+usersdata[u][1].toString()+
						"\n"+ line+ "\n";
						player.SetVar(topTenVarName,topTenMsg)
						users.shift();
						usersdata.splice(u, 1);
						}
			}
		}
}

}

function Script2()
{
  url = "https://script.google.com/macros/s/AKfycbxC2R_cSt-H-ejd6T6Bh2YQX3WHWNFVB78YtH585NdSC40yoWV-hHrDdk3dpx1AZur5tg/exec";
const player = GetPlayer();
let uid = player.GetVar("userpass"); 
let uname = player.GetVar("username");
fetch(url,{
  method: 'POST',
  mode: 'no-cors',
  cache: 'no-cache',
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({vr0:uid,vr1:uname})
});
}

function Script3()
{
  url = "https://script.google.com/macros/s/AKfycbxC2R_cSt-H-ejd6T6Bh2YQX3WHWNFVB78YtH585NdSC40yoWV-hHrDdk3dpx1AZur5tg/exec";
const player = GetPlayer();
let uid = player.GetVar("userpass"); 
let uname = player.GetVar("");
fetch(url,{
  method: 'POST',
  mode: 'no-cors',
  cache: 'no-cache',
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({vr0:uid,vr1:uname})
});
}

function Script4()
{
  // JavaScript Document// JavaScript Documentconst 
url = "https://script.google.com/macros/s/AKfycbxC2R_cSt-H-ejd6T6Bh2YQX3WHWNFVB78YtH585NdSC40yoWV-hHrDdk3dpx1AZur5tg/exec";
const player = GetPlayer();
let uid = player.GetVar("userpass"); 
let uname = player.GetVar("");
let dv = player.GetVar("");
fetch(url,{
  method: 'POST',
  mode: 'no-cors',
  cache: 'no-cache',
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({
    vr0:uid,
    vr1:uname,
    vr2:dv,
    vr3:dv,
    vr4:dv,
    vr5:dv,
    vr6:dv,
    vr7:dv,
    vr8:dv,
    vr9:dv,
    vr10:dv,
    vr11:dv,
    vr12:dv
  })
});
}

