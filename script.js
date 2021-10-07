$(function () {
    const termekek = [];

    function adatbeolvasas() {
        function adatbeolvasas(faljnev, termekek, myCallback) {
            $.ajax(
                {
                    url: faljnev,
                    success: function (result) {   
                        result.forEach((elem) => {
                            termekek.push(elem);
                        });                    
                        console.log(termekek);                     
                        myCallback();
                        
                        
                    }
                    
                }
            );
        }
    }
    tablazat();
    /*termek();
    function termek() {
        adatbeolvasas("jsontermekek.json", termekek,tablazat);
    }*/
    


    function tablazat() {  
        
        $("#tablazat").append("<table>");
            $("#tablazat").append("<tr>");
            $("#tablazat").append("<th>Termék neve</th><th>Leirás</th><th>Készlet</th><th>Ár</th>");    
            /*termekek.forEach(elem => {                                                                                                             
                $("#tablazat").append("<tr><td>" + termekek[elem].Terméknév + "</td><td>" + termekek[elem].Leírás + "</td><td>" +  termekek[elem].Készlet + "</td><td>" +  termekek[elem].Ár+ "</td></tr>");
                $("#tablazat tr td").append("<button>");
                $("#tablazat tr td").eq().append('<input type="button" id="torol" value="Töröl">');
                
    });
   */
    
    }



});