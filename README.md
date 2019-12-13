# Problem Set 6

It's time to put your skills to the test. This problem set focuses on programming in JavaScript. More specifically, it focuses on creating a fully functional to-do list application from scratch.

## Getting Started

To get started, create a [GitHub](https://github.com/) repository to store your code. When you're finished, clone my skeleton to get all of the starter code and instructions. Setup a remote to push your code to your repository instead of mine.

### Setup

1. Login to your GitHub account and create a new repository named `pset-6`.
2. In the terminal, navigate to your `APCSP` directory on the `Desktop`.
```
$ cd ~/Desktop/APCSP
```
3. Clone my skeleton repository into a directory named `pset-6`.
```
$ git clone git@github.com:ap-principles-ucvts/pset-6-skeleton.git pset-6
````
4. Change into your newly created `pset-6` directory.
```
$ cd pset-6
```
5. Overwrite the remote, which originally points at my skeleton repository.
```
$ git remote rename origin upstream
```
6. Add a new remote that points at your `pset-6` repository. Replace `YOUR-USERNAME` with your actual username.
```
$ git remote add origin git@github.com:YOUR-USERNAME/pset-6.git
```

## Overview

There aren't any individual exercises this time. Instead, you'll be building an application (that means HTML, CSS, and JavaScript). Below, you'll read through the requirements of the application.

### Use Cases

Most of us are familiar with the concept of a to-do list, so the use cases here shouldn't be too difficult to grasp.

* Adding an item to the list
* Setting the priortiy of an item on the list
* Marking an item as complete
* Removing an item from the list

Most of these are pretty straightforward, but let's walk through them anyway.

* *Adding an item to the list*

You should use an array to store your list of items that need doing. Every time a user adds an item, you'll need to add that item to the underlying array. I recommend storing these items as objects, so you can group content, priorty, and status together. The content of each item should be viertically displayed on the page.

There should be a form-like section that allows you to enter the contents of a new item (along with a predefined priority), and a button to add it. This should be separate from the list itself, of course.

* *Setting the priority of an item on the list*

You should be able to modify the priorty of a given item (making it one of two possible values: high or low). By default, items have a low priority. When a user makes an item a higher priority, it should be moved to the top of the list (i.e., the front of the array). Likewise, when a user makes an item a lower priority, it should be moved to the bottom of the list (i.e., the end of the array).

You'll need a way for users to set this priority, so an icon or button of some sort should exist in the display of your list items. Think about the most aesthetic way to include this icon or button in your list.

* *Marking an item as complete*

You should be able to mark an item as complete, which displays the text of that item with a strikethrough (without actually removing it from the list). If you're able to mark an item as complete, you should also be able to unmark it (which, in turn, undoes the strikethrough change).

Again, there needs to be an icon or button to do this. Think about how you want to display this in an aesthetically pleasing manner.

* *Removing an item from the list*

As you can add items to the list, you should be able to remove them, too. Removing an item deletes it from the underlying array. The list should re-render, rather than leaving an empty spot on the page. You'll need an appropriate icon or button to trigger item removals.

### Sample

Coming soon!

## Deadline

Please read very carefully. Historically, most students lose points on problem sets for simply failing to read the instructions and requirements.

* January 5, 2020, at 11:59pm.

If you submit your problem set at midnight (i.e., January 6, 2020, at 12:00am), it is considered **late**!

### Submission Requirements

* Your code **must** compile. Code that fails to meet this minimum requirement will not be accepted.
* There must be **at least** 20 unique commits to your repository.
* Your code must meet each requirement outlined in the Exercises and Deliverables sections.
* Your code must adhere to the course style guidelines.

Happy coding!

