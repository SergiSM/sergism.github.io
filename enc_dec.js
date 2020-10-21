function Encrypt(value) 
{
  var result="";
  for(i=0;i<value.length;i++)
  {
    if(i<value.length-1)
    {
        result+=value.charCodeAt(i)+10;
        result+="-";
    }
    else
    {
        result+=value.charCodeAt(i)+10;
    }
  }
  return result;
}

function Decrypt(value)
{
  var result="";
  var array = value.split("-");

  for(i=0;i<array.length;i++)
  {
    result+=String.fromCharCode(array[i]-10);
  }
  return result;
} 

function hide_all_show_one(div_) {
  var x = document.querySelectorAll(".dd"); //oculto tots els div amb class="dd"
  var i;
  for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
  } 
  var x = document.getElementById(div_);
  if (x.style.display === "none") 
      x.style.display = "block";
}

function show_hide(div_) {
  var x = document.getElementById(div_);
  if (x.style.display === "none") { 
      x.style.display = "block";
      x.style.background = "silver";
  }
  else 
      x.style.display = "none"; 
}

function opcions(n)
{
    for (i=0; i < n; i++)
         document.write("<button onclick=\"hide_all_show_one('d"+i+"')\">Click Me</button>");
}