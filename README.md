# Reddit Clone

## How to turn this in:

* Submit a pull request when Finished

## G20 Due date

* Friday April 29th 2016 5pm

## Requirements:  

* Each post has a title, author, image, date, comments, votes, and description.

* Each post's date/time is displayed nicely: "Yesterday at 3:09pm", "Last Thursday at 4:42am", etc. You will need an external library.

* A user can upvote/downvote posts. The vote count is green if greater than 0 and red if less than 0.

* Posts dynamically reorder according to number of votes by default when the page loads.

* A user can create new posts. A user cannot create a new post if any of the 4 inputs are blank. Research angular validations. Show error messages(use angular-messages) and disable the form submission if fields are improperly filled out.

* A user can click to view existing comments on a specific post

* The number of comments is correctly pluralized

* A user can add a new comment to a specific post. A user cannot leave either input field blank in the comment form when trying to submit a comment. Again, use angular-messages to display errors and disable the form submission if the fields are improperly filled out.

* The new post form and comment forms can be toggled on and off. The comments of each post can toggle on and off as well.

* A user can search through posts

* A user can sort posts by votes, date, and title.

* Animate posts as they are added and removed from the search results.

* Data does not need to persist, when you refresh it's ok if the data disappears. TIP: Handwrite some sample data so you don't have to repopulate data with the form for testing - abstract the sample data into a json file.

* STRETCH GOAL: Use local storage(angular has an external library for local storage) or a PostgreSQL database to persist data(you'll need an express backend to use PostgreSQL).

## Bonus Features

* A user can choose to sort ascending or descending
* A user can favorite posts and view all favorites in a separate tab
* A user can upload an image (no backend involved)

### Remove contents of readme.md and replace with setup instructions and description of repo

### Source readme.md

* Angular curriculum readme.md(watch video walkthrough): [https://github.com/gSchool/angular-curriculum/blob/master/Unit-1/11-reddit-clone.md]('https://github.com/gSchool/angular-curriculum/blob/master/Unit-1/11-reddit-clone.md')
