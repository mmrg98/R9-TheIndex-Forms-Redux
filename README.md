## Setup

1. Fork the [repository](https://github.com/JoinCODED/RJS8-TheIndex-Forms-Redux)
2. Clone it.
3. `cd` into the project directory.
4. Install the required packages for the task.

```shell
$ yarn install
```

5. Run the project

```shell
$ yarn start
```



---

## Task


#### 1. Add a New Author
When you run the site now you should find an extra card with a giant plus sign at the beginning of the `AuthorList`. Clicking this card opens a form for adding an author.

1. Explore and discuss the code that makes up this card and the form it opens:
    * What fields does the form display?
    * What does the form do when it's submitted?
    * Which actions is the form calling `onSubmit`?
    * How does the `postAuthor` action work?
    * What happens if the submission fails?
    * How does the form display errors?

2. If you haven't already done so, try to create a new author.  
    It always fails! This is because the form is not **bound** to the state:
    * Add a `textChangeHandler` method to the form component.
    * This method should update the appropriate data in the state when it's triggered.
    * Connect this method to the `onChange` for each field in the form.
    * Make sure each field also has a `value` prop that's bound to the state.
    * You'll know you're done when you can successfully create a new author.


#### 2. Add New Books to Your Authors
We've created an `AddBookModal` component for you. Take a look at it. 

1. Render the `AddBookModal` component in `AuthorDetail` under the `BookTable`.
2. Complete the `BookForm` component, with the following fields:
    * `title`: a text input that takes the book's title. 
    * `color`: a dropdown that has all the color options.
    * Make sure to add an `onChange` method to every input element to update the state.
3. The form should submit the state to a `postBook` action.  
In the `author` actions file, complete the `postBook` method that takes a `newBook` object _and_ an `author` _and_ a `closeModal` function. This method should post the data to the following API endpoint: `https://the-index-api.herokuapp.com/api/books/`.  
This endpoint expects to receive a book with the following format:
    * `title`: the title of the book
    * `color`: the color of the book
    * `authors`: an array of the ids of this book's authors
4. The new book should be added to the author's list of books without refreshing the page.

---

#### Submission

1.  Push your code.