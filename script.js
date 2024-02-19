
//table link to table result box

var a = document.getElementById("btn");
a.onclick= function(){

    var b = document.getElementById("head");
    var c = document.getElementById("second");

    //show and hide code
    b.style.display="none";
    c.style.display="block";


}


//result box link to table code

var crs = document.getElementById("crs");
crs.onclick= function(){

    var sz = document.getElementById("head");
    var zs = document.getElementById("second");


    window.alert("Redriect In Main Menu!");



    //show and hide code
    sz.style.display="block";
    zs.style.display="none";

    


}



//loop function code with table app

var fem = document.getElementById("fem");
fem.onsubmit= function(){

    var cde = document.getElementById("one");
    var one = document.getElementById("one").value;
    var two = document.getElementById("result");
    var three = document.getElementById("txt");
    three.innerHTML="The Table Of " +one+ " Is 😄";
    var i;


    //if and else code function
    if(cde.value == ""){

        window.alert("Enter Value Frist");
        return false;
    }



    //loop function
    for(i=1; i<=10; i++){

        two.innerHTML +=one*i + "<br>";
    }
    return false;
}




//github link set code
var git = document.getElementById("git");
git.onclick= function(){

    window.location="https://github.com/zishanrayeen";
}


//developer 

console.log("Developed By : SANA AND ZISHAN");