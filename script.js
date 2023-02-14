$(function () {
	console.log("bring the wow");
});

src = "https://code.jquery.com/jquery-3.6.0.js";
src = "https://code.jquery.com/ui/1.13.2/jquery-ui.js";

$(function () {
	$("#draggable").draggable();
	$("#droppable, #droppable-inner").droppable({
		classes: {
			"ui-droppable-active": "ui-state-active",
			"ui-droppable-hover": "ui-state-hover"
		},
		drop: function (event, ui) {
			$(this).addClass("ui-state-highlight").find("> p").html("Dropped!");
			return false;
		}
	});
	$("#droppable2").droppable({
		greedy: true,
		classes: {
			"ui-droppable-active": "ui-state-active",
			"ui-droppable-hover": "ui-state-hover"
		},
		drop: function (event, ui) {
			$(this).addClass("ui-state-highlight").find("> p").html("Incorrect!");
		}
	});
	$("#droppable2-inner").droppable({
		greedy: true,
		classes: {
			"ui-droppable-active": "ui-state-active",
			"ui-droppable-hover": "ui-state-hover"
		},
		drop: function (event, ui) {
			$(this)
				.addClass("ui-state-highlight")
				.find("> p")
				.html(
					"Correct! En Passant is forced, However it would put you in check. Therefore, there are no legal moves and it is a draw."
				);
		}
	});
});