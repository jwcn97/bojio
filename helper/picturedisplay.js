/*
* Private Functions
*/

//vertical translation
function down(container, index, numberOfBoxes) {
	container.children[index].setCenter({
		y : container.children[index].center.y + (Measurement.convert(310) * numberOfBoxes / 3)
	});
}

function up(container, index, numberOfBoxes) {
	container.children[index].setCenter({
		y : container.children[index].center.y - (Measurement.convert(310) * numberOfBoxes / 3)
	});
}

//horizontal translation
function sideways(container, index, position) {
	container.children[index].setCenter({
		x : Measurement.convert(310) * position / 3
	});
}

/*
 * Public Functions
 */

/*
 * double picture's width and height
 */
doublePictureSize = function(container, index, totalPicture) {
	container.children[index].height *= 2;
	container.children[index].width *= 2;
	down(container, index, 0.5);
	for (var i = index + 3 - (index % 3); i < totalPicture; i++) {
		down(container, i, 1);
	}

	switch(index%3) {
	//enlarged photo is on the left
	case 0:
		sideways(container, index, 1);
		if (index + 1 < totalPicture) {
			if (index + 2 === totalPicture) {
				sideways(container, index + 1, 2.5);
			} else {
				sideways(container, index + 1, 2.5);
				down(container, index + 1, 1);
			}
		}
		break;

	//enlarged photo is in the center
	case 1:
		sideways(container, index, 1);
		if (index + 1 === totalPicture) {
			sideways(container, index - 1, 2.5);
		} else {
			sideways(container, index - 1, 2.5);
			down(container, index - 1, 1);
		}
		break;

	//enlarged photo is on the right
	case 2:
		sideways(container, index, 2);
		sideways(container, index - 1, 0.5);
		down(container, index - 1, 1);
		break;
	}
};

/*
 * row 1: expanded horizontal picture
 * row 2: three small pictures
 * row 3: one small picture and one horizontal picture
 */
expandHorizontal = function(container, index, totalPicture) {
	container.children[index].height *= 2;
	container.children[index].width *= 3;
	down(container, index, 0.5);
	container.children[index].setCenter({
		x : Measurement.convert(155)
	});
	for (var i = index + 6 - (index % 3); i < totalPicture; i++) {
		down(container, i, 2);
	}
	if (index + 4 - (index % 3) === totalPicture) {
		for (var j = index + 3 - (index % 3); j < index + 4 - (index % 3); j++) {
			down(container, j, 1);
		}
	} else if (index + 5 - (index % 3) === totalPicture) {
		for (var k = index + 3 - (index % 3); k < index + 5 - (index % 3); k++) {
			down(container, k, 1);
		}
	} else if (index + 5 - (index % 3) < totalPicture) {
		for (var l = index + 3 - (index % 3); l < index + 6 - (index % 3); l++) {
			down(container, l, 1);
		}
	}

	switch(index%3) {
	//enlarged photo is on the left
	case 0:
		if (index + 1 < totalPicture) {
			sideways(container, index + 1, 0.5);
			down(container, index + 1, 3);
			if (index + 2 < totalPicture) {
				container.children[index + 2].width *= 2;
				sideways(container, index + 2, 2);

				switch(totalPicture - index) {
				case 2:
					up(container, index + 1, 1);
					break;
				case 3:
					up(container, index + 1, 1);
					down(container, index + 2, 2);
					break;
				case 4:
					down(container, index + 2, 2);
					break;
				case 5:
					sideways(container, index + 1, 2.5);
					up(container, index + 1, 1);
					sideways(container, index + 2, 1);
					down(container, index + 2, 3);
					break;
				default:
					down(container, index + 2, 3);
					break;
				}
			}
		}
		break;

	//enlarged photo is in the center
	case 1:
		down(container, index - 1, 3);
		if (index + 1 < totalPicture) {
			container.children[index + 1].width *= 2;
			sideways(container, index + 1, 2);

			switch(totalPicture - index) {
			case 1:
				up(container, index - 1, 1);
				break;
			case 2:
				sideways(container, index - 1, 0.5);
				up(container, index - 1, 1);
				down(container, index + 1, 2);
				break;
			case 3:
				down(container, index + 1, 2);
				break;
			case 4:
				sideways(container, index - 1, 2.5);
				up(container, index - 1, 1);
				sideways(container, index + 1, 1);
				down(container, index + 1, 3);
				break;
			default:
				down(container, index + 1, 3);
				break;
			}
		}
		break;

	//enlarged photo is on the right
	case 2:
		down(container, index - 2, 3);
		container.children[index - 1].width *= 2;
		sideways(container, index - 1, 2);
		switch(totalPicture - index) {
		case 2:
			down(container, index - 1, 2);
			break;
		case 3:
			sideways(container, index - 2, 2.5);
			up(container, index - 2, 1);
			sideways(container, index - 1, 0.5);
			down(container, index - 1, 1);
			break;
		default:
			down(container, index - 1, 3);
			break;
		}
	}
};

/*
 * row 1-3: expanded vertical picture + three small pictures
 * row 4: three small pictures
 * row 5: one small picture and one horizontal picture
 */
expandVertical = function(container, index, totalPicture) {
	container.children[index].height *= 3;
	container.children[index].width *= 2;
	down(container, index, 1);
	for (var i = index + 9 - (index % 3); i < totalPicture; i++) {
		down(container, i, 2);
	}

	switch(index%3) {
	//enlarged photo is on the left
	case 0:
		sideways(container, index, 1);
		if (index + 1 < totalPicture) {
			container.children[index + 1].width *= 2;
			sideways(container, index + 1, 2);
			down(container, index + 1, 4);
			if (index + 3 < totalPicture) {
				down(container, index + 3, 2);
				if (index + 4 < totalPicture) {
					sideways(container, index + 4, 2.5);
					down(container, index + 4, 2);
					if (index + 6 < totalPicture) {
						down(container, index + 6, 2);
						if (index + 7 < totalPicture) {
							down(container, index + 7, 1);
						}
					}
				}
			}
		}
		break;

	//enlarged photo is in the center
	case 1:
		sideways(container, index, 1);
		sideways(container, index - 1, 2.5);
		down(container, index - 1, 3);
		if (index + 2 < totalPicture) {
			down(container, index + 2, 2);
			if (index + 3 < totalPicture) {
				down(container, index + 3, 2);
				if (index + 5 < totalPicture) {
					down(container, index + 5, 2);
					if (index + 6 < totalPicture) {
						container.children[index + 6].width *= 2;
						sideways(container, index + 6, 2);
						down(container, index + 6, 2);
					}
				}
			}
		}
		break;

	//enlarged photo is on the right
	case 2:
		sideways(container, index, 2);
		down(container, index - 1, 3);
		sideways(container, index - 1, 0.5);
		if (index + 2 < totalPicture) {
			down(container, index + 2, 2);
			if (index + 3 < totalPicture) {
				down(container, index + 3, 2);
				if (index + 5 < totalPicture) {
					container.children[index + 5].width *= 2;
					sideways(container, index + 5, 1);
					down(container, index + 5, 2);
					if (index + 6 < totalPicture) {
						down(container, index + 6, 2);
					}
				}
			}
		}
		break;
	}
};
