var ccapp = angular.module('ccapp', []);

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

	// $scope.convertArtistArray = function(_artistarr)
	// {
	// 	artistarrtemp = [];
	// 	for (var i = 0; i < _artistarr.length; i++)
	// 	{
	// 		artist = 
	// 		{
	// 			name: _artistarr[i].name,
	// 			uri: _artistarr[i].resource_url.replace("api", "www").replace("artists", "artist")
	// 		};
	// 		artistarrtemp.push(artist);
	// 	}
	// 	return artistarrtemp;
	// }

	// $scope.convertAlbum = function(_albumid)
	// {
	// 	var album = 
	// 	{
	// 		artists:[],
	// 		title:"",
	// 		year:"",
	// 		styles:[],
	// 		uri:"",
	// 		image:""
	// 	};

	// 	// Get image data from api.williamdunkerley.com because discogs api is dumb
	// 	$http.get("http://api.williamdunkerley.com/flipside/album/"+_albumid)
	// 	.success(function(data)
	// 	{
	// 		album.image = data.image;
	// 		// Get rest of data from api.discogs.com
	// 		$http.get("https://api.discogs.com/masters/" +_albumid)
	// 		.success(function(discogsdata)
	// 		{
	// 			album.artists = $scope.convertArtistArray(discogsdata.artists);
	// 			album.title = discogsdata.title;
	// 			album.year = discogsdata.year;
	// 			album.styles = discogsdata.styles;
	// 			album.uri = discogsdata.uri;
	// 		})
	// 		.error(function(err)
	// 		{
	// 			console.log(err);
	// 		})
	// 	})
	// 	.error(function(err)
	// 	{
	// 		console.log(err);
	// 	});

	// 	return album;
	// }

	// $scope.convertAlbumArray = function(_albumidarr)
	// {
	// 	for (var i = 0; i < _albumidarr.length; i++)
	// 	{
	// 		_albumidarr[i] = $scope.convertAlbum(_albumidarr[i]);
	// 	}
	// 	return _albumidarr;
	// }

	// $scope.addAlbumInfo = function(_weekID)
	// {
	// 	data = $scope.episodelist.data

	// 	if (data[_weekID-1].albums !== null && (typeof data[_weekID-1].albums[0] === "string"))
	// 	{
	// 		data[_weekID-1].albums = data[_weekID-1].albums[0].split("/");
	// 		data[_weekID-1].albums = $scope.convertAlbumArray(data[_weekID-1].albums);
	// 	}

	// 	$scope.episodelist.data = data;
	// }

	// $scope.buildList = function()
	// {
	// 	$http.get("http://api.williamdunkerley.com/flipside")
	// 	.success(function(data)
	// 	{
	// 		// Albums default to array
	// 		for (var i = 0; i < data.length; i++)
	// 		{
	// 			// if (data[i].albums !== null)
	// 			// {
	// 				data[i].albums = [data[i].albums];
	// 			//}
	// 		}

	// 		$scope.episodelist.data = data;
	// 	})
	// 	.error(function(err)
	// 	{
	// 		console.log(err);
	// 	});
	// }

	// $scope.selectedpane = {index:0,albumindex:0,albumwidth:0,albumheight:0,audioplaying:false};

	// $scope.changePreviewAlbum = function(_currepisodedata,_next,_reset)
	// {
	// 	if(_reset)
	// 	{
	// 		$scope.selectedpane.index = _currepisodedata.weekID-1;
	// 		$scope.selectedpane.albumindex = 0;
	// 		$scope.selectedpane.albumwidth = 0;
	// 		$scope.selectedpane.albumheight = 0;
	// 	}
	// 	// if the next action is next and it can increment normally
	// 	else if(_next)
	// 	{
	// 		$scope.selectedpane.index = _currepisodedata.weekID-1;
	// 		$scope.selectedpane.albumindex = (($scope.selectedpane.albumindex+1)%(_currepisodedata.albums.length)); 
	// 		$scope.playAnimationRecord(_currepisodedata.weekID, true);
	// 	}
	// 	else
	// 	{
	// 		// javascript does not have proper mod support for negative numbers
	// 		var a = ($scope.selectedpane.albumindex-1) % (_currepisodedata.albums.length);
	// 		if (a < 0)
	// 		{
 //    			a += (_currepisodedata.albums.length);
	// 		}
	// 		$scope.selectedpane.index = _currepisodedata.weekID-1;
	// 		$scope.selectedpane.albumindex = a;
	// 		$scope.playAnimationRecord(_currepisodedata.weekID, true);
	// 	}
	// 	//$scope.playAnimationRecord();
	// }

	// $scope.playAnimationRecord = function(_weekID, _onclickofnext)
	// {
	// 	function openAnimation()
	// 	{
	// 		//set playing state to true first
	// 		$scope.selectedpane.audioplaying = true;

	// 		var albumart = $(".albumpreview > div:first-child > a > img");
	// 		albumart = $(albumart[$scope.selectedpane.index]);

	// 		setRecordDiv(parseInt($(albumart).css("width"),10),parseInt($(albumart).css("width"),10),true);
	// 	}

	// 	function closeAnimation()
	// 	{
	// 		$scope.selectedpane.audioplaying = false;
	// 		setRecordDiv(200,200,false);
	// 	}

	// 	document.getElementById('audio'+_weekID).addEventListener('play', openAnimation, false);
	// 	document.getElementById('audio'+_weekID).addEventListener('pause', closeAnimation, false);

	// 	// playAnimationRecord was triggered by slideshow arrows and the audio is playing
	// 	if(_onclickofnext && $scope.selectedpane.audioplaying)
	// 	{
	// 		openAnimation();
	// 	}

	// 	// playAnimationRecord was triggered by the accordian title click and the audio is playing
	// 	if (!_onclickofnext && $scope.selectedpane.audioplaying)
	// 	{
	// 		// audio was playing the first place, probably a close of this window or a straight opening of another
	// 		// either way, set all audio to pause

	// 		for (var i=0; i < $("audio").length; i++)
	// 		{
	// 			$("audio").get(i).pause();
	// 		}
	// 		closeAnimation();
	// 	}
	// 	else if(!_onclickofnext && !$scope.selectedpane.audioplaying)
	// 	{
	// 		setRecordDiv(-1,-1,false)
	// 	}
	// 	// jQuery.createEventCapturing(['play']);  
	// 	// jQuery("audio").on('play', 'audio', function(e)
	// 	// 	{
	// 	// 		e.preventDefault();
	// 	// 		console.log("I wanna die");
	// 	// 	});
	// 	// console.log(_weekID);
	// 	// console.log($("#audio"+_weekID));
	// 	// $("#audio"+_weekID).on("playing",function()
	// 	// {
	// 	// 	console.log("FUCK");
	// 	// 	var albumart = $(".albumpreview > div:first-child > a > img");
	// 	// 	albumart = $(albumart[$scope.selectedpane.index]);

 //  //       	console.log(albumart);
 //  //       	console.log(albumart.context);
 //  //       	console.log(albumart.context.complete);
 //  //       	console.log(albumart.context.currentSrc);
	// 	// 	console.log("Already Loaded");
 //  //       	setRecordDiv(parseInt($(albumart).css("width"),10),parseInt($(albumart).css("height"),10),true);
	// 	// 	albumart.on("load" , function(e)
 //  //       	{
 //  //         		console.log("Wasn't loaded");
 //  //           	setRecordDiv(parseInt($(albumart).css("width"),10),parseInt($(albumart).css("height"),10),true);
 //  //       		albumart.not(":hidden")
        
 //  //       	});
	// 	// });
		
	// }

	// $scope.trustUrl = function(_url)
	// {
	// 	return $sce.trustAsResourceUrl(_url);
	// }
}]);

$(document).ready(function()
{

});