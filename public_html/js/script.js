window.onload = function()
{

    var tabliczkaMnozenia = "";

    ///budowa tabliczki mnozenia
    tabliczkaMnozenia = "<table id='M'>";
    var k=1;


    for(var i=1; i<=20; i++)
    {
        tabliczkaMnozenia += "<tr>";
        for(var j=1; j<=20; j++)
        {
            tabliczkaMnozenia += "<td id='numerID"+k+"' class='tdColor' style='width: 5%; height: 5%'>"+ i*j + "</td>";
            k++;
        }
        tabliczkaMnozenia += "</tr>";
    }

    tabliczkaMnozenia += "</table>";
    ////////////////////////////////

    var rezultat = document.getElementById("rezultat"); ///pobierania elementu z index.html 

    rezultat.innerHTML = tabliczkaMnozenia; //przekazanie tabliczki do index.html


    var zmienKolorTabliczki = [];

    var n = 1;
    while(document.getElementById("numerID"+n+""))
    {
        zmienKolorTabliczki.push(document.getElementById("numerID"+n+""));  ///pobranie kolejnych okienek tabliczki
        n++;
    }
    for(var i=0; i<zmienKolorTabliczki.length; i++)
    {
        //zmienKolorTabliczki[i].onmouseout = zmienKolor;  //przypisanie zdarzenia (event) do konkretnego okienka tabliczki
        zmienKolorTabliczki[i].addEventListener("mouseout", zmienKolor);
        zmienKolorTabliczki[i].addEventListener("mouseover", wrocKolor);  
        zmienKolorTabliczki[i].addEventListener("mousemove", toolTip);
        
    }
    /*
    for(var i=0; i<zmienKolorTabliczki.length; i++)
    {
        //zmienKolorTabliczki[i].onmouseover = wrocKolor; //przypisanie zdarzenia (event) do konkretnego okienka tabliczki
        zmienKolorTabliczki[i].addEventListener("mouseover", wrocKolor);
    }
     * 
     */
    
    ///funkcje podmieniające klase w <td>
    function zmienKolor()
    {
        this.className = "tdColor";     
    }
    function wrocKolor(event)
    {
        //var e = event || window.event;
        this.className = "tdNowyColor";
        /*
        var tooltip = document.getElementById("tooltip");
        
        tooltip.style.display = "block";
        tooltip.style.left = e.clientX + 15 + "px";
        tooltip.style.top = e.clientY + 15 + "px"; 
        tooltip.innerHTML = this.innerHTML;
         * 
         */
    }
    function toolTip(event)
    {
        var e = event || window.event;
        this.className = "tdNowyColor";
        var tooltip = document.getElementById("tooltip");
        
        tooltip.style.display = "block";
        tooltip.style.left = e.clientX + 15 + "px";
        tooltip.style.top = e.clientY + 15 + "px"; 
        tooltip.innerHTML = this.innerHTML;
        
        
        
    }
    
}



