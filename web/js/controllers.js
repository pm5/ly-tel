
var ivodControllers = angular.module('ivodControllers',[]);

ivodControllers.controller('indexCtrl', ['$scope', '$http',
  function ($scope, $http) {
    
    $scope.legislators=[];
    $http.get('data/final.json').success(function(data) {
      //console.log(data);
      $scope.legislators = data;
      for(var i=0;i<data.length;i++){
         $scope.legislators[i]['id'] = i;
      }
      $scope.data = $scope.legislators[37];//default, can modify to random
      
    });

    $scope.categories = ['for','against'];
    $scope.parties = ['全部','中國國民黨','民主進步黨','親民黨','台灣團結聯盟','無黨團結聯盟','無黨籍'];
   
    $scope.mode = "state";//figure/list/blue/state/party
    $scope.toggleMode = function(mode){
      $scope.mode = mode;

    };
    $scope.showContact = true;
    $scope.toggleContact = function(){
        $scope.showContact = !$scope.showContact;
    };
    $scope.party = "";
    $scope.party_text = "全部";
    $scope.chooseParty = function(party){
        
        $scope.party = party;
        $scope.party_text = party;
        if(party=="全部")
           $scope.party="";
    };
    $scope.legClick = function(id){
      $scope.data = {};
      $scope.data = $scope.legislators[id];
       //$("#alert_box").show();
    };
    $scope.hide = function(){
      $("#alert_box").hide();

    };
    $scope.goback = function(){
      var body = $("html, body");
      body.animate({scrollTop:0}, '500', 'swing');

    };



    //keep top info segment fixed on top
    $scope.nav = $("#nav_segment");
    $(window).scroll(function () {
     
        if ($(this).scrollTop() > 68) {
          $scope.nav.addClass("f-nav");
          $scope.nav.removeClass("f-fix");
        } else {
          $scope.nav.removeClass("f-nav");
          $scope.nav.addClass("f-fix");
        }
    });
  



  }
]);
