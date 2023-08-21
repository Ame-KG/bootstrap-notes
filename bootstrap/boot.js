//  BOOTSTRAP:
// ------------


// Is a way of quickly and easily creating styles for a website
// it increases dev speed, ensures cross browser  compatibility
// automatically handles responsiveness

// bootsrap has built in components, alerts, buttons, navbars, cards, carousel, collapse etc.

// ---------------------
// HOW & WHERE TO GET BOOTSTRAP 5:
// ---------------------

// Thereare two ways to use bootstrap:
// way 1:  include bootstrap CDN
// way 2:  download bootstrap and host it yourself

// -------------
// CDN:
// -------------

// Content Delivery Network
// to use the cdn and use bootstrap online you simply include the cdn link in your html and then use the bootstrap styles
// You use the following css stylesheet link:

// <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">

// And the following javascript link:

// <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>

// -----------------------------------------
//  Grid System:
// -----------------------------------------

// broken down into 3 sections
//  container wraps your grid system
//  rows which represent your rows
//  collumns inside the rows
// you gow 3 levels deep and reprrsent this with your classes

// break point
// when wee put a paragraph in a container you will see that there is automatic padding and resizing with the screen
// this is becuase bootstrap has various breakpoint (media queries)

// you can specify the size of your container using a dash then keyword in the class
//  .container-sm for small
//  .container-md for medium
//  .container-lg for large
//  .container-lg for exra-large etc
// normally just leav it as fluid

// when you specify the size of container for exampole medium or large, so long as the screen size is larger than medium or large it will be responsive
// once the screen size goes below thge defined bootstrap size for large or medium all responsiveness will be lost so its better to stick to fluid

// ----
// rows:
// -----

// using the row class you can define a row div
// with class="row"

// you could define howmany collumns youhave in your rows
// with row-cols-2 fortwo collumns etc
// you can specify the collumns at each breakpoint as well
// you can also specify the spacing/gap with gy
// gy-2 would be a gap of 2 etc
// this is for the gap on the y axis
//  gx will affect the x axis
//  just g will affectboth axis

// YOU CAN ALSO NEST ROWS INSIDEONE ANOTHER 
// everything inside a row should be inside a collumn evenif its another row

// -----------
// cols:
// -----------

// then you can define a collomn within that with the col tag then with in that you placea nother div and thats where your content goes
// collumns fill the available space  but with pading between each other regardless the amountyou have

// NOTE: just like with containers thers numerous verions of collumns you can pick
// rows use flexbox todo that, its grid is basedon 12 collumns
// you can specify how many of those 12 spaces a singl collumn takes with the hyphenated classes for col
//  E.G. col-4 to take 4 out of 12 spaces
// or you can not specify and evenly divide everything

// when you dont define a hard coded space for a column it just fills what ever space is there

// col-auto makes it as large or small as its content so thatbreaks the 12 systemaswell as the default col breaks the system


// --------------------
// coll breakpoints

// when you dont specify a break poingt that means the collomn will be the same size on every breakpoint
// if youreusing default colit will stillbe responsive and grow since youre not using a specified 
// you can specify multiple cols, one forallsizesand one for maybe large screens or small screens
//  this gives you further control

// and if thereare more than 12 cols or 12 col spaces used thesurplus will wrap onto the next line

//  you can pad out your collumns with trhe offset  class


// -----------------------
// BOOTSTRAP TABLES:
// -----------------------

// default tables are ugly so to make thembetter looking add the class of table to the table
// you can still further customise it as follows

// ------
// table colors:

// there are 8 themes which represent colors
// example if you wanted a blue primary color you can give it the table-primary class
// if youwanted a red color you can give it the table-danger class

// the 8 are, primary,secondary, success, danger, warning,info,light and dark


// ----------
// styling table rows

// you can add the same theme styles to specific rows
// you can also do this with indiviual cells/table data

// Note: you can alsomake it a striped table
// you can also add table hover

// you can give it the table-bordered or borderless to have more or no borders
//  you can alsouse taable-sm to remove the padding and makethe table smaller
// if you want your table to scrll sideways wrap the table in a div with a table- responsive class


// ----------------------------------------------------
// Forms:
// ---------------------------------------------------

// forms are extremely involved
// when styling forms you add classes to the label and input within the form

// first we have form-label forthe label
// for the input we use form control
// these willl add stylings

// FORM CONTROL on the input helps style and control the input
// for example form-control-lg will make it large

// INPUT GROUPS:
// Input groups contain multiple inputs
// inside a form create a div with the class input group
// when you create multiple inputs within a group input tag they will show up besides one another

// ---------
// floating labels

// where your label shows up inside the input then when you click on the input the label floats back up

// first create a div called form floating and wrap your label and input in that div
// your input MUST come befor your label and your label must have a placeholder value

// form validation:
// on the form use the novalidate attribute
// then add the javascript codde with the classes.

// --------------------------------------------------
// COMPONENTS:
// ---------------------------------------------------

// THE 6 MOST IMPORTANT, BUTTONS,ALERTS, CARDS, MODALS, COLLAPSE, NAVBARS

// =======
// Buttons:
// =======

//  give it the class of button then the color classes, eg primary or danger 
// by default they have hovers and active state styles and you can use them on an anchor tag

//  you can also make the buttons toggleble wihthe data-bs-toggle="button" attribute

// =========
// alert:
// =========

// create a div with the class alert then the color and give it a role alert
//  give it the dismissable tag to make it closeable
//  add a cloe button inside as well

// ==========
// card:
// =========

// create a div with the class card and put in your text
//  inside your card div add another dive called card body and this is where the text goes
//  you can add card-title divs and sub-title divs and then card-text to make it all look even better
// outside of the card body  you can adda card image div
// you can use card-image-overlay to overlay all your body over the images
//  you can add a card header if you didnt have an image or a footer too
// you can group multiple cards together using card groups


// ========
// modlas:
// ========

// modals are similar tp cards 

// modals need first a modal classed div, a modal dialogue and the modal content where the content will go
// you need a button to open up a modal
// give the button tag the data-bs-toggle="modal" attrivute and the data-bs-target="#modalID"
// to make it work

// modal styles:
// modal clases such as fade
// you can separate them into secitons such as header, body, footer
//  you should alsocreate a close button for the modal
//  create a button, give it the btn-close class, data-bs-dismiss="modal"attribute and
// data-bs-target="#modalID" attribute

// to center the modal in the sacreen
//  used odal-dialogue-center or-scrolla

// -------------------------------------------------------------------
// Utility component:
// -------------------------------------------------------------------

// COLLAPSE:
// it allows you to collapse differebt sections
// so on the button use the show and hide data-bs-toggle but instead of ="modal " we use collapse
//  give it a data-bs-target with the id of the row or section you want collapsed\
// give it a aria-expanded="true or false", true if it starts out expanded, false if not
//  give it an aria-controls="class of section it controls"

// -------------------------------------------------------------------
// navbar:
// -------------------------------------------------------------------

// navbars go outside the container
// use the nav tag, give it the navbar class as well as the navbar-expand class
// then place a container div inside your navbar

// sectioning
// you can create an anchor tag and give it the navbar-brand tag to shift it left where brand logos be

// then for the right sided you will generally have a bunch of links, for this you will use the ul tag with the navbar-nav class

// --------------------------------------------------------------------
// UTILITIES:
// --------------------------------------------------------------------

// ============
// COLOR UTILITIES:
// ============

// in the example we have a simple card and we want a background or text or border that are different colors
//  to do that you could use bg- or text- or border
// this would be annoying, you could also simpy ise the text-bg-dark class
//  you can also change the text opacity class
//  same can be done with links using link-classes



// ==============
//  stack
// ==============

// lets say you want to staack some boxes in a card or comtainer
// youcan wrap all the box div in either an Hstack dive or vstack dive forhorizontal or vertical
// this is basically easily creatinmg flex box stacks
//  you can still giv gap



// ============
//  border utilities
// ============

//  using the border- classes you can change the border color, its width etc
// it doesn't work on the card itself s make sure to use a regular container div



// ============
// Display  
// ============

//  there is only one option
//  d-then you display type
//  d-flex, d-block
//  the cool bit is that you can define what the display type is on different screen sizes easily



// ==============
// flexbox utilities
// ==============

// start out with a container div as usual, then a d-flex div
// then your other boxes or divs

//  you can justify your content with classes
//  you can space, alighn items, wrap or collumn or row just like regular flexbox just like flex-grow or shrink





