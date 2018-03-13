app.controller("loginctrl",function($scope,userfactory,LOGINURL){
    $scope.login=function(){
        var userid  = $scope.userid;
        var password = $scope.password;
        const userObject = {"userid":userid,"password":password};
        var promise = userfactory.doAjax(LOGINURL,userObject);
        promise.then(function(response){
            $scope.data = response;
        },function(error){
            $scope.err = error;
        });
    }
   
});

app.controller("registerctrl",function($scope,userfactory,REGISTERURL){
    $scope.register=function(){
        var userid  = $scope.userid;
        var password = $scope.password;
        var newpassword = $scope.newpassword;
        const userObject = {userid:userid,password:password,newpassword:newpassword};
        console.log(userObject);
        var promise = userfactory.doAjax(REGISTERURL,userObject);
        promise.then(function(response){
            $scope.data = response;
        },function(error){
            $scope.err = error;
        });
    }
});

app.controller("questionctrl",function($scope,userfactory,QUESTIONURL){
    $scope.insert=function(){
        var qstn = $scope.question;
        var opt1 = $scope.opt1;
        var opt2 = $scope.opt2;
        var opt3 = $scope.opt3;
        var opt4 = $scope.opt4;
        var ans = $scope.ans;
        const userObject = {"question":qstn,
                            "opt1":opt1,
                            "opt2":opt2,
                            "opt3":opt3,
                            "opt4":opt4,
                            "ans":ans
                           };
        var promise = userfactory.doAjax(QUESTIONURL,userObject);
        promise.then(function(response){
            $scope.data = response;
        },function(error){
            $scope.err = error;
        })            

    }
});