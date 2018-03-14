window.addEventListener("load", bindEvents);
function bindEvents(){
//    document.getElementById("regEmp").addEventListener("click", regEmployee);
//   document.getElementById("regSt").addEventListener("click", regStudent);
    document.getElementById("postBt").addEventListener("click", typeQstn);
}
//function regEmployee(){
//    var name = document.getElementById("input").value;
//    crudOperation.addEmployee(name);
//    alert("registration is completed");
//    location.href="empLogin.html";
//}
//function regStudent(){
//    var name = document.getElementById("input").value;
//    crudOperation.addStudent(name);
//    alert("registration is completed");
//    location.href="stdLogin.html";
//}
function typeQstn(){
    var qstn = document.getElementById("qstn").value;
    var opt1 = document.getElementById("optn1").value;
    var opt2 = document.getElementById("optn2").value;
    var opt3 = document.getElementById("optn3").value;
    var opt4 = document.getElementById("optn4").value;
    
    var answer = document.getElementById("ans").value;
    
    
//   var inputElements = document.getElementsByClassName('cb');
//    for(var i=0; i<4; ++i){
//      if(inputElements[i].checked){
//          var j = i+1;
//          document.getElementById("op"+j).value = document.getElementById("optn"+j).value;
//         var  answer = inputElements[i].value;
//           break;
//      }
//}
//    if(answer==null){
//        alert("please tick the answer");
//        return false;
//    }
//    
//    if(answer[1]!=null){
//        document.getElementById("op1").checked = false;
//        document.getElementById("op2").checked = false;
//        document.getElementById("op3").checked = false;
//        document.getElementById("op4").checked = false;
//        alert("Please select only one box");
//        return false;
//    }
    
    if(qstn.length==0){
        alert("enter the question")
        document.getElementById("qstn").focus();
        document.getElementById("qstn").style.borderColor = "red";
        
        return false;
        
    }
    if(opt1.length==0){
        alert("enter the option 1")
        document.getElementById("optn1").focus();
        document.getElementById("optn1").style.borderColor = "red";
       return false;
    }
    if(opt2.length==0){
        alert("enter the option 2")
        document.getElementById("optn2").focus();
        document.getElementById("optn2").style.borderColor = "red";
        return false;
    }
    if(opt3.length==0){
        alert("enter the option 3")
        document.getElementById("optn3").focus();
        document.getElementById("optn3").style.borderColor = "red";
        return false;
    }
    if(opt4.length==0){
        alert("enter the option 4")
        document.getElementById("optn4").focus();
        document.getElementById("optn4").style.borderColor = "red";
        return false;
        
    }
    if(answer.toLowerCase()!=opt1.toLowerCase() && answer.toLowerCase()!=opt2.toLowerCase() && answer.toLowerCase()!=opt3.toLowerCase() && answer.toLowerCase()!=opt4.toLowerCase())
        {
    alert("enter the valid answer");
        document.getElementById("ans").focus();
            document.getElementById("myDiv").style.borderColor = "red";
        return false;
    
    }
   

    var r = JSON.parse(localStorage.getItem("key"));
        if(r>=0){
            var i = r;
        }
        if(r==null){
        var i = 0;
        }
    
    var qstnList = crudOperation.addQstn(qstn,opt1,opt2,opt3,opt4,i,answer);
    localStorage.setItem("key",JSON.parse(localStorage.getItem("key"))+1);
    var z = JSON.parse(localStorage.getItem("key"));
    
//    alert("question is inserted");
    var q= JSON.stringify(qstnList);
   // localStorage.setItem("i",q);
    
//    var user = JSON.parse(localStorage["list"]);
//    var arr = JSON.parse(localStorage.getItem("list"));
//     arr.forEach(function(key){
//     console.log(key.qstn);
//   })

    //console.log(user[0]);
    
    var tbody = document.getElementById("qstion");
    var tr = tbody.insertRow();
    var cell = tr.insertCell(0);
    cell.innerHTML = "<span> <b>Question:"+z+"- <b>"+qstn+"<br><b> (i): <b>"+opt1+"<br><b> (ii): <b>"+opt2+"<br><b> (iii): <b>"+opt3+"<br><b> (iv): <b>"+opt4+"<br></span>";
    
    
    
    
    
}
//printQstn(){
//    
//}

