function sendWebhook(content=document.getElementById('content').value) {
const req = new XMLHttpRequest();
req.open('POST', 'https://canary.discord.com/api/webhooks/996404889980780575/TxZeQPX6ML7FttGa9ZGOnGoD0XMZ-FOzQ_lDNr3P-732aEHhDNmjDkemW2m8pSXGRNAb');

    req.setRequestHeader('Content-type', 'application/json');

    const data = {
        'content': content,
        'username': 'Loli',
        'avatar_url': 'https://cdn.discordapp.com/icons/775806711923605505/0e430b524cfeb15d2db5f617cedf404e.webp?size=96'
    }
    
    req.send(JSON.stringify(data));
    alert('Mesaj gönderildi:\n' + content);

}

//fetch("https://ipapi.co/json/")
//.then(response=>response.json())
//.then((responseJson=>{
//    console.log(responseJson)
//}))

var i = 0;
var txt = 'asd';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}