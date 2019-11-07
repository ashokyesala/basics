			function callMe() {
				var oInput = document.getElementById("iduser");
				var user = oInput.value;
				if (user !== "ashok") {
					// document.write("oops wrong username");
					oInput.style.backgroundColor = "red";
				} else {
					alert('welcome back ' + user);
				}
			}

			function magicHappens() {
				// var boxs = document.getElementsByClassName("box");
				// for (var i = 0; i < boxs.length; i++) {
				// 	var box = boxs[i];
				// 	box.style.backgroundColor = "black";
				// }
				// with jquey
				$(".box").css("background-color", "aqua").css("color", "black");

			}

			function showAsync() {
				console.log("my main funciton called");
				setTimeout(function () {
					console.log("my inner function called");
				}, 5000);
				console.log("leaving the main function");
			}

			function addElement() {
				// create new element
				var newElement = document.createElement("h3");
				// add properties
				var text = document.createTextNode("new element");
				newElement.appendChild(text);
				// get the parent element
				var parentelement = document.getElementById("newelement");
				// add new element to the parent
				parentelement.appendChild(newElement);
			}

			function addTable() {
				var user = document.getElementById("iduser").value;
				var song = document.getElementById("idsong").value;
				var record = document.createElement("tr");
				var recordUser = document.createElement("td");
				recordUser.innerText = user;
				var recordSong = document.createElement("td");
				recordSong.innerText = song;
				record.appendChild(recordUser);
				record.appendChild(recordSong);
				var tbody = document.getElementById("idtbody");
				tbody.appendChild(record);
			}

			function hide() {
				// $(".box").hide();
				$(".box").fadeOut(6000);

			}

			function show() {
				// $(".box").show();
				$(".box").fadeIn(6000);
			}

			function toggle() {
				// $(".box").fadeOut(3000).fadeIn(3000);
				$(".box").fadeOut(3000).fadeIn(3000, function () {
					alert("hey effect over");

				});
			}

			function dance() {
				$(".box-desc").css("background-color", "red").fadeOut(2000, function () {
					$(".box-desc").css("background-color", "green");
					$(".box-desc").fadeIn(3000, dance());
				});
			}