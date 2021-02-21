# CRUD App

## What we are building?

- We will be building a simple app that will store details about persons.

- Each Person will have the following attributes associated with them:

  | Attribute  | Type            |
  | ---------- | --------------- |
  | ID         | int             |
  | Name       | str             |
  | DOB        | int             |
  | Address    | str             |
  | Profession | str             |
  | Marital    | Status bool     |
  | Known      | Languages array |
  | Profile    | Picture str     |
  | About      | str             |

- The app will provide an interface to

  - Add a new person to DB
  - Remove an existing person from DB
  - Update details about an existing person in the DB
  - TODO: Delete all persons

- API Structure

  | API          | TYPE   | About                               |
  | ------------ | ------ | ----------------------------------- |
  | /persons     | GET    | get all persons                     |
  | /persons/:id | GET    | get person by id                    |
  | /persons     | POST   | add new person (name, dob required) |
  | /person/:id  | PATCH  | update person matching id           |
  | /person/:id  | DELETE | delete person matching id           |

> #### [POSTMAN Collection](https://www.getpostman.com/collections/7c672290b8573ea16f4b) | [Web View](https://documenter.getpostman.com/view/10311635/TWDXnw9a)

### Tech Stack

#### MongoDB - Database

- MongoDB is a NoSQL database and uses JSON-like documents to store information
- [Install MongoDB](https://www.mongodb.com/try/download/community) and add to environment variables
- Create a db directory `mkdir C:\data\db`

#### Node.js - Backend

- Node.js is an asynchronous JS runtime built on Chrome's V8 engine that can execute JS outside a browser.
- We wil be using the Express framework on top of the Node JS Run Time
- Express.js has an `app` object corresponding to HTTP. We define the routes by using the methods of this `app` object. It specifies a callback function, which is called when a request is received.
- Using [Mongoose](https://mongoosejs.com/docs/) for interacting with MongoDB. It provides an easy way to create schema.
- [Backend deployed to Heroku](https://devcenter.heroku.com/articles/preparing-a-codebase-for-heroku-deployment)

#### React.js - Frontend

- React.js is a UI/UX Library that uses the concept of Virtual DOM to rerender elements without requiring the need to reload the whole page whenever any update happens.

#### Note:

- Backend and Frontend will be hosted on separate servers

- Nodemon helps in restarting the server whenever there is a change in the server file.
  It is therefore added as a dev dependency.
  In `package.json` we've added a script with key name `start` to run `nodemon`.

- On running the server we are getting a Deprecation warning, but according to this [answer on StackOverFlow](https://stackoverflow.com/questions/66190532/deprecationwarning-listening-to-events-on-the-db-class-has-been-deprecated-and/66197527), it is safe to ignore the warning for now.

#### Further Reading

- [Routing in Node.js](https://www.geeksforgeeks.org/routing-in-node-js/)
- Model View Controller

  | MVC        | About    |
  | ---------- | -------- |
  | View       | UI/UX    |
  | Model      | Database |
  | Controller | Routing  |

- RDBMS vs MONGODB

  | RDBMS    | MONGODB     |
  | -------- | ----------- |
  | Database | Database    |
  | Tables   | Collections |
  | Rows     | Documents   |
  | Columns  | Fields      |

- [HTTP Status Codes](https://httpstatuses.com/204)
- [Status Codes for CRUD](https://www.moesif.com/blog/technical/api-design/Which-HTTP-Status-Code-To-Use-For-Every-CRUD-App/)
- [HTTP Status 204](https://benramsey.com/blog/2008/05/http-status-204-no-content-and-205-reset-content/)

  | Status Code | Meaning                         |
  | ----------- | ------------------------------- |
  | 200         | Status Ok                       |
  | 201         | Created/Updated                 |
  | 204         | No Response, Do not reload view |
  | 400         | Incorrect Request               |
  | 404         | Not Found (Incorrect URL)       |
  | 500         | Unknown Server Error            |

- [Understanding the Next Param in express](https://stackoverflow.com/questions/10695629/what-is-the-parameter-next-used-for-in-express)

- Articles related to deploying Node.js App on Heroku:
  - https://dev.to/urakymzhan/how-to-deploy-mongodb-nodejs-app-to-heroku-1c5b
  - https://help.heroku.com/P1AVPANS/why-is-my-node-js-app-crashing-with-an-r10-error
  - https://stackoverflow.com/questions/66049860/cannot-connect-to-mongodb-because-of-wrong-uri
  - https://devcenter.heroku.com/articles/troubleshooting-node-deploys
  - https://stackoverflow.com/questions/9730567/node-js-mongoose-works-locally-but-not-on-heroku
  - https://www.youtube.com/watch?v=imR9LlbG3pU
