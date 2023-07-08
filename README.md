# Express-Mongoose

Instructions: 


First you need to have a MongoDB server running.
Then go to the index.js and check if the URI for MongoDB is correct for your MongoDB.
After doing npm install, do npm run start. Doing so, the server will start and will log out "listening on port 3000
-------last Line of index-----------
Connected to MongoDB"

which means the server is listening. Now you can do CRUD using POSTMAN desktop App.
In POSTMAN, prepare a "POST" request to      "http://localhost:3000/contact"  with the the following data as the x-www-form-urlencoded in the body:
firstName: John
lastName: Doe

and click send

now you will see the same data returned from the server to POSTMAN which means the data is successfully written to database.

for more details please read the code as it is self-explanatory.






