var ccapp = angular.module('ccapp', []);

var numinQ = 0;
$.get("http://api.williamdunkerley.com/coin-complex/queue/count")
.success(function(data) {
	const NumInQueueContainer = document.getElementById("How_Many_People");
	NumInQueueContainer.textContent = data.numinqueue + " People in Line";
	numinQ = data.numinqueue;
}).error(function(data) {
	console.log(data)
});


ccapp.controller("EmailSignupController", ['$scope', '$http', '$sce', 
function($scope, $http, $sce)
{
	$scope.emailsignupobj= {data:""};

	$scope.submitEmail = function()
	{
		$http.get("http://api.williamdunkerley.com/coin-complex/" + $scope.emailsignupobj.data)
		.success(function(data)
		{
			const resultContainer = document.getElementById("result-container");
			const ccbtn = document.getElementById("ccbtn");
    		const resultTextElement = resultContainer.getElementsByClassName(
      			"text-goes-here"
    		)[0];
			console.log("success");
			resultTextElement.textContent = "Thanks! We'll get back to you!";
        	resultContainer.classList.remove("hidden");
        	ccbtn.className += " hidden";
		})
		.error(function(data)
		{
			console.log(data)
		});
	}
}]);

ccapp.controller("QueueSignupController", ['$scope', '$http', '$sce', 
function($scope, $http, $sce)
{
	$scope.queuesignupobj= {data:"",referralcode:""};

	$scope.submitEmailQueue = function()
	{
		$http.post("http://api.williamdunkerley.com/coin-complex/" + $scope.queuesignupobj.data)
		.success(function(data)
		{
			const resultContainerQueue = document.getElementById("result-container_Queue");
			const ReferralCodeContainer = document.getElementById("Referral_Code_ID");
			const ccbtnQueue = document.getElementById("ccbtn_Queue");
    		const resultTextElementQueue = resultContainerQueue.getElementsByClassName(
      			"Youre_Place_In_Queue"
    		)[0];
			console.log(data);
			resultContainerQueue.textContent = "You are " + (numinQ+1) +" in line!";
			ReferralCodeContainer.textContent = data.newcode;
        	//ccbtn.className += " hidden";
		})
		.error(function(data)
		{
			console.log(data)
		});
	}
}]);



var $animation_elements = $('.Middle_Content_Padding');
var $window= $(window);

$window.on('scroll', check_if_in_view);
$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}



var scrollTop = 0;
$(window).scroll(function(){
    scrollTop = $(window).scrollTop();
    
    if (scrollTop >= 25) {
      $('#myNav').addClass('topnavbar');
      $('#bar_Content_ID').addClass('topbarcontent');
      $('#TopLogo').addClass('CCxLogo');

    } else if (scrollTop < 25) {
      $('#myNav').removeClass('topnavbar');
      $('#bar_Content_ID').removeClass('topbarcontent');
      $('#TopLogo').removeClass('CCxLogo');
    }  
  }); 
