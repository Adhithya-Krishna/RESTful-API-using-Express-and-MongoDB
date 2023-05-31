# RESTful API using Express.js and MongoDB
## This repository contains code for a RESTful API built using Express.js and MongoDB. The API allows you to perform CRUD (Create, Read, Update, Delete) operations on articles.

## Features
- Retrieve all articles
- Retrieve a specific article by title
- Create a new article
- Update an entire article
- Partially update an article
- Delete an article
- Delete all articles
## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
## Getting Started
To run the API locally, follow these steps:

1. Clone the repository: git clone <repository-url>
Install the dependencies: npm install
Make sure MongoDB is running on your local machine.
Update the MongoDB connection URL in the code if needed.
Start the server: node app.js or npm start
The API will be accessible at http://localhost:3000
API Endpoints
Retrieve all articles
Endpoint: GET /articles
Description: Retrieves all articles stored in the database.
Retrieve a specific article
Endpoint: GET /articles/:articleTitle
Description: Retrieves a specific article based on the provided article title.
Create a new article
Endpoint: POST /articles
Description: Creates a new article in the database.
Request Body:
json
Copy code
{
  "title": "Article Title",
  "content": "Article Content"
}
Update an entire article
Endpoint: PUT /articles/:articleTitle
Description: Updates an entire article specified by the provided article title.
Request Body:
json
Copy code
{
  "title": "Updated Article Title",
  "content": "Updated Article Content"
}
Partially update an article
Endpoint: PATCH /articles/:articleTitle
Description: Partially updates an article specified by the provided article title.
Request Body (fields to be updated):
json
Copy code
{
  "title": "Updated Article Title"
}
Delete an article
Endpoint: DELETE /articles/:articleTitle
Description: Deletes the article specified by the provided article title.
Delete all articles
Endpoint: DELETE /articles
Description: Deletes all articles from the database.
Contribution
Contributions to this project are welcome. Feel free to open issues and submit pull requests to suggest improvements or report any bugs.

License
This project is licensed under the MIT License.

Acknowledgements
Express.js
MongoDB
Mongoose
Contact
If you have any questions or suggestions, please feel free to reach out to me at email@example.com.

Enjoy using the RESTful API!
