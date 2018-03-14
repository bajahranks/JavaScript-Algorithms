/*****************************************************************************
* Function for counting cards in a Blackjack game. If the every card between 2
* and 6, add 1. For every card between 10 and A, minus 1. For cards 7,8,9 do 
* nothing.
* - Developed by Ravi Lamontagne
******************************************************************************/

var count = 0;

function cc(card) {
 
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
    default: 
      break;
  }
  if (count > 0) {
	return count + " Bet";
  } else {
	return count + " Hold";
  }
  
  
}
