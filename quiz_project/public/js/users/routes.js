app.config(function($routeProvider,$locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider.when("/login",{
        templateUrl:"views/user/login.html",
        controller:"loginctrl"
    }).when("/register",{
        templateUrl:"views/user/register.html",
        controller:"registerctrl"
    }).when("/",{
        templateUrl:"views/user/home.html"
        
    }).when("/insertQuestion",{
        templateUrl:"views/examiner/insertQuestion.html",
        controller:"questionctrl"
    })
    .otherwise({template:"Error Page , No Match Found"});
});