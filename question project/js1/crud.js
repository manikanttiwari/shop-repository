const crudOperation = {
    empList:[],
    stdList:[],
    qstnList:[],
     
	id:1,
    stu_id:1,
    addEmployee(name){
    var empObject = new Employee(this.id,name);
        this.empList.push(empObject);
        //console.log(empList);
        this.id++;
    },
    addStudent(name){
    var stdObject = new student(this.stu_id,name);
        this.stdList.push(stdObject);
        //console.log(empList);
        this.stu_id++;
    },
    addQstn(qstn,opt1,opt2,opt3,opt4,i,answer){
       // var IDs = new Array();
        localStorage.setItem("key",i);
        
        var j = "hello"+i;
        var qstnObject = new question(qstn,opt1,opt2,opt3,opt4,answer);
        // IDs.push(qstnObject);
        var q= JSON.stringify(qstnObject);
        //var p= JSON.stringify(i);
        
    localStorage.setItem(j,q);
        
        
       // return IDs;
    }
    
}