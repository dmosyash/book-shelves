# Book-Shelves
This is a web application for managing your library.

[Click here to see the live App](https://book-shelves.netlify.com/)

This application is developed in Reactjs.

## Structure of the App

The App is developed in ReactJs. It is created with the help of **React cli**. **React bootstrap** is used for CSS and modeling purpose. Every page of this app is divided into 2 parts

- Header
- Main Part

### Header
It always stays on top of every page, this component is called in App component, so need to write only once in the whole app.

It has the Nav element to navigate from Home to Search or vice versa.


### Main Part
As the name suggests it is the main body of the App. This App has 2 pages.

- Home page
- Search Page

#### Home page
This is App's default page. It shows your library. The library will have 3 shelves i.e. Currently Reading, Want to Read and Read. User can change the shelf of the book my selecting any shelf from the dropdown under every book.

It is a container component. It gets data from a dataService which process data from a dummy JSON. It is consists of a few dumb components and has some methods to shift books.

#### Search Page
This page is for searching a book by title. As user type the respective result will be shown under the Search box. User can directly add the book to the library in any shelf. If book is already present in the library, it will show the shelf name in which book is currently present. User can change self from this page also.


### Services
For data process and for data alteration `dataService` is used.
