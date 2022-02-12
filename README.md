# BookShelf APP - a community library

## Fullstack, RESTful App Built by : MERN stack - ReactJS, Node.JS, Express, MongoDB, and Material UI (MUI)

#### Google Maps API, GOOGLE PLACES API, and GOOGLE BOOKS API.

#### A group project, contributors can be found in this Git's right panel

#### Main features:

- Users signup/login/log out
- Users can lookup books in Google Books api and then Donate to our library.
- Users can search in the local library, filtring the books shown in the sidebar.
- Clicking on each book card (detail) will open a new modal with books details with the options of Borrow or Return depending on books availability.
- Google Maps show the location of street libraries, and book locations where users can borrow the books.

### Application ScreenShot

![Screenshot](bookshelf_ss.png)

## Database Schema

in our mongoDB, we have 4 tables(collections) of:

- Books
- users
- userBooks
- locations

## Unsolved Problems and hurdles we had to overcome

For the major hurdles we had to overcome we can mention below points:

- connecting our backend routes to the interface was one of the initial challenges.
- to compartmentalise the front end components was another challenge especially when using mui for css framework.
- implementing the borrow and return functionalities were challenging in terms of integration with database.
- resolving git conflicts where we were working on the same features was also a hurdle we had to overcome.
