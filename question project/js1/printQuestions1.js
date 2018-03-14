window.addEventListener("load", bindEvents);

function bindEvents() {
    document.getElementById("nextqstn").addEventListener("click", prinitQuestions);
    document.getElementById("submit").addEventListener("click", totalMarks);

}

function prinitQuestions() {
    //setTimeout(function(){totalMarks()}, 50000);
    document.getElementById("submit").disabled = false;
    document.getElementById("nextqstn").disabled = true;
    for (var i = 0; i < JSON.parse(localStorage.getItem("key")); i++) {

        var j = "hello" + i;

        var obj = JSON.parse(localStorage.getItem(j));
        //    var p=obj.qstn;
        //console.log(p);
        var p = obj.qstn;
        var q = obj.opt1;
        var r = obj.opt2;
        var s = obj.opt3;
        var t = obj.opt4;
        // console.log(s);
        var tbody = document.getElementById("printqstn");
        var tr = tbody.insertRow();
        var cell = tr.insertCell(0);
        var z = i + 1;
        cell.innerHTML = "<span> <b>Question:" + z + "- <b>" + p + "<br><b></span>"
        //(i): <b>"+q+"<br><b> (ii): <b>"+r+"<br><b> (iii): <b>"+s+"<br><b> (iv): <b>"+t+"<br></span>";
        //        var input = document.createElement("input");
        //        input.type = "text";
        //        input.id = j;
        //        cell.appendChild(input);
        var input1 = document.createElement("input");
        input1.type = "radio";
        input1.value = q;
        input1.name = j;
        input1.id = j + 1;
        var p = document.createElement("p");
        p.innerHTML = q;
        
       // input1 +=  "<p> <b>" + q+ "<b><br></p>";
        
        cell.appendChild(input1);
       // document.getElementById(j+1).nextSibling = p;
        cell.appendChild(p);
     
        
        
        

        var input2 = document.createElement("input");
        input2.type = "radio";
        input2.setAttribute("value", r);
        input2.name = j;
        input2.id = j + 2;
        var p1 = document.createElement("p");
        p1.innerHTML = r;
         
        cell.appendChild(input2);
        cell.appendChild(p1);
        
        var input3 = document.createElement("input");
        input3.type = "radio";
        input3.setAttribute("value", s);
        input3.name = j;
        input3.id = j + 3;
        var p2 = document.createElement("p");
        p2.innerHTML = s;
         
        cell.appendChild(input3);
        cell.appendChild(p2);
        
        var input4 = document.createElement("input");
        input4.type = "radio";
        input4.setAttribute("value", t);
        input4.name = j;
        input4.id = j + 4;
       var p3 = document.createElement("p");
        p3.innerHTML = t;
        
        cell.appendChild(input4);
         cell.appendChild(p3);


    }
}

function totalMarks() {
    // alert("time over!!!!");
    var total = 0;
    for (var i = 0; i < JSON.parse(localStorage.getItem("key")); i++) {

        var j = "hello" + i;
        var z = i + 1;
        var y = j + z;

        var obj = JSON.parse(localStorage.getItem(j));
        var p = obj.answer;
       
//        if (document.getElementsById(j+1).value == p) {
//            total = total + 5;
//        }
        for(var q=1;q<=4;q++){
        if(document.getElementById(j+q).checked){
            if (document.getElementById(j+q).value.toLowerCase() == p.toLowerCase()) {
                console.log(document.getElementById(j+q));
            total = total + 5;
        }
            
            }
    }
    }
    var marksCount = document.createElement("span");
    document.getElementById("submit").disabled = true;
    document.getElementById("nextqstn").disabled = true;
    document.getElementById("printTotal").innerHTML = "<span><b>total marks:<b> </span> " + total;

}

