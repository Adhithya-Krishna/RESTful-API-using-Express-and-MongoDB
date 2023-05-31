# RESTful API using Express.js and MongoDB

This repository contains code for a RESTful API built using Express.js and MongoDB. The API allows you to perform CRUD (Create, Read, Update, Delete) operations on articles.

## Features

1. Retrieve all articles
2. Retrieve a specific article by title
3. Create a new article
4. Update an entire article
5. Partially update an article
6. Delete an article
7. Delete all articles

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## Getting Started

To run the API locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Install the dependencies: `npm install`
3. Make sure MongoDB is running on your local machine.
4. Update the MongoDB connection URL in the code if needed.
5. Start the server: `node app.js` or `npm start`
6. The API will be accessible at `http://localhost:3000`

## API Endpoints

1. Retrieve all articles
    - **Endpoint**: `GET /articles`
    - **Description**: Retrieves all articles stored in the database.

2. Retrieve a specific article
    - **Endpoint**: `GET /articles/:articleTitle`
    - **Description**: Retrieves a specific article based on the provided article title.

3. Create a new article
    - **Endpoint**: `POST /articles`
    - **Description**: Creates a new article in the database.

4. Update an entire article
    - **Endpoint**: `PUT /articles/:articleTitle`
    - **Description**: Updates an entire article specified by the provided article title.

5. Partially update an article
    - **Endpoint**: `PATCH /articles/:articleTitle`
    - **Description**: Partially updates an article specified by the provided article title.

6. Delete an article
    - **Endpoint**: `DELETE /articles/:articleTitle`
    - **Description**: Deletes the article specified by the provided article title.

7. Delete all articles
    - **Endpoint**: `DELETE /articles`
    - **Description**: Deletes all articles from the database.

## Contribution

Contributions to this project are welcome. Feel free to open issues and submit pull requests to suggest improvements or report any bugs.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

## Contact

If you have any questions or suggestions, please feel free to reach out to me at [Adhithya Krishna](https://www.linkedin.com/in/adhithya-krishna-s-014575254/).

Enjoy using the RESTful API!
