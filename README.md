Rock, Paper, Scissors - An Interactive online Game
==================================

* * *

ABOUT THE WEBSITE:
------------------

* * * 

[Link to deployed site](https://stephaniecrocker91.github.io/rock-paper-scissors/)



_Rock, Paper, Scissors_ is an online game of the classic Rock, Paper, Scissors. The computer will generate it's random choices and your job is to simply beat that big mean machine in a series of 5 rounds! Let's rock!

<img src="" width="700px">

* * * 


## TARGET AUDIENCE:

* * *

This online interactive game targets all ages 5+, and that is it's beauty! Almost anyone can appreciate a good game of rock, paper, scissors.

*   Children 5+
*   Adults

  

USER STORIES:
-------------

* * *

1. The site is designed in a way that makes the game fun and easy to play.
2. The rules of the game are clearly described and displayed at the start of the game.
3. The games feels personal as the user can input their name and see it displayed throughout.
4. The game round's and scores are displayed throughout. 
5. The user will want to come back for more!


* * * 


STRAGETY:
---------

* * *

Create a fun and easy to navigate intercative game of Rock, paper Scissors that allows the player to play against the computer who will generate it's random choices. 
The game will go for 5 rounds, displaying the tally throghout. After Round 5 the game will dislay the Game Winner, and allow for the option to play Again.


The site aesthetic is minimalistic: displaying big buttons, images displaying player and computer choice, with bright and contrasting colors .
Consistent styling for easy navigation using a mobile-first approach and then ensuring it displays flawlessly across all devices. Create a code that is clear and allows to update with ease.

* * * 

STRUCTURE:
----------

* * *

### Header & Footer

* * *

#### _Header - Game Title_

*   The header displaying th game title is clearly displayed at the top of the HTML page.
*   It is styled in CSS with fun font-family and in bright and contrasting colors which set the mood to the game.

<img src="assets/images/navbar.png" width="500px">


* * * 

### Initial Home page - _launch game modal_

* * *

The initial homepage consists of:

* The header, containing the name of the game: Rock, Paper, Scissors. It is clearly displayed at the top of the page in bright, large, fun contrasting styling.
* An image of three hand symbols representing rock, paper and scissors. They are minimalistic and complemtory to the page's fun, bold, simplistic styling.
* A small form where the Player will be required to submit their name. The form will not submit without this information. The submit button is styled in the same colors as the header and it reads "Let's rock!".


<img src="assets/images/homepage.png" width="500px">

* * * 
  
### Playing first round- _play-round-1 modal_

* * *

When clicking "let's rock!" in the initial form, you are taken to the initial play round modal. This displays:

* A short subtitle displaying Round number 1. This allows the user to immediatey recognise there will be a set amount of rounds and will make the game progress easy to track. 
* Rock, Paper and Scissors interactive buttons. These are styled in the same bright bold colors, fun font, and are displayed clearly in the center of the page.


<img src="assets/images/ourservices-1.png" width="500px">

 

### After initial Rock, paper, scissors selection - _play-round-2 modal_

* * *

After the user selecting their first choice of Rock, Paper or Scissors, they are lead to the next modal(play-round-2 modal). There are only a couple of additions to this display:

*   The same subtitle displaying Round Number: x. The round has been updated using Javascript. It will increment +1 each time, untill reaching Round 5.
*   The selection buttons for the next round remain displayed below for game continuity.
*   A div clearly displaying the Game tally of win, lose, and draw. The score is underlined.
*   A visual representation of the User and Computer's selection. This is divided into:
    * User and computer image of their selection (rock, paper, or scissors). They are centered and facing each other as they would in real life.
    * A label underneath each image. The User's player label displays the Name that has been input into the form. The computers label simply displays _Computer:_
*   A div containing the previous rounds result: An short alert message displaying previous round result: You win!, You lose!, or You draw!


<img src="assets/images/contact-us-page.png" width="500px">
  
* * * 

### Game Over Modal: displayed after Round 5 - _game-over-modal_

* * *

After the user has selected their final choice in Round 5, they are redirected to the Game Over Modal. This displays:

* A div clearly displaying the Game tally of win, lose, and draw. The score is underlined.
* Final Alert message dsplaying the game result: You win! You lose! You draw! 
* A Refresh button to restart the game. It is styled in the same way as the previous buttons. Clickng this button will trigger a function reseting the game back to _launch-game-modal_



## SKELETON:

-----------

### WIREFRAMES:
* I began designing from a mobile display. I wanted the site to look very minimalistic, with big bright buttons and visual representations of rock, paper, scissors. 

<img src="./assets/images/wireframe-mobile-display.png" width="800px">


* For the wide screen display, I wanted a very similar layout, but a bit more widespread. 

<img src="./assets/images/wireframe-large-display.png" width="1000px">



* * * 

## SURFACE:

* * *

Before starting, I created the wireframes displayed above. I knew I wanted the game to be minimalistic, fun, and bright. 


### Colors

* * *

For the purpose of this game, I wanted to choose very block, bright, almost cartoon-like colors that would work well together.
I came up with the following pallette:
<img src="assets/images/green.png" width="300px">
<img src="assets/images/black.png" width="300px">
<img src="assets/images/whitesmoke.png" width="300px">


* * * 

### Typography

* * *

Shadows into Light: I wanted to use a playful font that would go nicely with the game. It is fun, relaxed, cartoon-like, and it has some personality! My fall-back font is Sans, which I think also goes nicely with the site's feel and purpose.

### Images and Icons

* * *
<img src="assets/images/rock_paper_scissors.jpg" width="600px">

*   Sticking to my cartoon-like inspiration for this game, I chose incredibly minimalistic icons for the Rock, paper, and scissors. These images almost feel like emojis, they are modern and fun. 
*   I also chose to keep the palette simple with black and white. It is bold and the user is instantly drawn to them.

* * * 

FEATURES:
---------

* * *

### Current features

*   Launch Game Page: This is the page that initially loads when you first arrive to the site. 
    * Header: "Rock, Paper, Scissors"
    * Image of rock, paper and scissors
    * Player name input form (required)
    * Submit button labelled "Let's Rock!"
*   Play Round Modal: which loads once the user has submited the form. The form takes the player name and uses it below.
    * Same header
    * Round number
    * 3 clickable buttons labelled: Rock, Paper and Scissors.
    * 2 ROCK images facing each other
*   As from Round 2... the same as above, plus...
    * The round number will update itself each round!
    * A tally of the current score (which will update round after round): For example _Win: 0 Draw: 1 Lose: 2_
    * A black box with the outcome of the previous play: For example: _You Draw!_
* After the final Round 5...
    * The final score tally
    * The final game result. For example: _Congratulations, you win!_
    * A Refresh button, to play again! (This takes the user back to the start)

* * * 

### Future features

*   A Page containing a complimentary pre-recorded taster sessions: Yoga, Pilates, Meditation, Hiit, and some recipes.

* * * 

## LANGUAGES:

* * *

*   HTML5
*   CSS

* * * 

## OTHER TECHNOLOGIES, FRAMEWORKS & LIBRARIES:


* * *

*   [Google Fonts](https://fonts.google.com/)
*   [Font Awesome](https://fontawesome.com/)
*   [GitHub](https://github.com/)
*   [GitPod](https://www.gitpod.io/)
*   [Coolors](https://coolors.co/)
*   [Pexels](https://www.pexels.com/)
*   [Stack Overflow](https://stackoverflow.com/)
*   [Code beautify](https://codebeautify.org/html-to-markdown)
*   [Compress Jpeg](https://compressjpeg.com/)

* * * 

## TESTING, BUGS & FIXES: