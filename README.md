# Book Buddy

> It a book warehouse management website. Very exciting project using ReactJS, Tailwind and MongoDB. This project purpose is to implement User authentication, curd operation, work with both client and server, use JTW to make more secure to protect unauthentic access.

## [Live](https://book-buddy01.web.app/)

### Live website link : https://book-buddy01.web.app/

- Book Buddy is a warehouse management website
- Here has Home, Blogs, Login, Sign In, Password Reset, Add Book, My Books, Manage Books, Book Details and more Pages.
- In Home Page has Header, 6 books card, a "Manage Inventory" button and Footer Section
- Authentication System is implemented by Email-Password and Google Account
- In every Book card have a "Stock Update", it will navigate to /inventoryDetails . There have a "Restock this item" form so that can added new stock. There also have a "Delivered" button, when it is clicked the stock will be decrease by 1.
- In Manage Inventories page have "Add Item" ,"Delete" and "Update" button. "Update" button navigate to /inventoryDetails."Add Item" button navigate to "/addInventory" page. "Delete" button when clicked remove item by id and update ui.
- in "My Books" page displayed all books these are added by the user . And can delete the book by "Delete" button.
- unknown url are controlled by 404 Not Found Page.
- For this project used mongodb to manage the data.
- Client Side is deployed in firebase and Server Side is hosted in Heroku.

## Tools

- REACT
- FIREBASE
- React Firebase Hooks
- React Router
- Tailwind CSS
- Tailwindcss Forms
- react-icons
- react-toastify

#### Code

- [Client](https://github.com/SEC-MASUM/book-buddy-client)
- [Server](https://github.com/SEC-MASUM/book-buddy-server)
