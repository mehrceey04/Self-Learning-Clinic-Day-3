#Self Learning Clinic
##Programming tasks for day 3

###This exercise write tests and codes to pass the test. (Tests are written with Jasmine)

* Firstly, you are to create three functions, as prototypes to the Array class to return the following:
>`toTwenty()` returns `[1, 2, 3 . . . 20]`
>`toForty()` returns `[2, 4, 6 . . . 40]`
>`toOneThousand()` returns `[10, 20, 30 . . . 1000]`
Once you are done, create another prototype(d) function called `.search`, it will take just one argument which is the number you are to find. The search function should return an object, which contains
>`.count`, the number of times your function iterated to find the index of the number in question
>`.index`, the index of the number in question
>`.length`, the length of the original array
The `.search` function should implement the _binary search algorithm_. Each time you iterate, you should increase the count, to test how efficient your implementation is.

* You are presented with two arrays, all containing positive integers. Create a function *findMissing(arr1, arr2)*  that takes in two arguments, both of which are arrays. One of the arrays will have one extra number, see below:
>`[1,2,3]` and `[1,2,3,4]` should return `4`
>`[4,66,7]` and `[66,77,7,4]` should return `77`

* GitHub repo containing a clone of a simple user interface created using HTML and CSS. (No test is written for this)
>I designed a simple user interface with about 4 pages. You can find the html files in the root folder
### For the Front-end task, I designed a simple UI with HTML, CSS and I also used wowslider, to create slides. All files for this task are in Front-End directory.