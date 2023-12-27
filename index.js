var quote =[
    {
        'quote' : "'The best revenge is massive success.'",
        'Auther' : '--Frank Sinatra',
    },

    {
        'quote' : " 'It's not what happens to you, but how you react to it that matters.'",
        'Auther' : '--Epictetus',
    },

    {
        'quote' : "'You miss 100% of the shots you don't take.'",
        'Auther' : '--Wayne Gretzy',
    },


];

function getquots(){
    var num = Math.floor(Math.random() * quote.length)
    console.log(num)
    document.getElementById("quote").innerHTML=quote[num].quote;
    document.getElementById("Auther").innerHTML=quote[num].Auther;
}

getquots()
