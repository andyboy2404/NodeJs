/*
Assignnments:

1. Server  -- http module

     4 Endpoints

     get,post,put,delete to /books

IN a seperate file : books.json: 10 books details

get -- return the books in books.json

post -- add a new book after validation to file books.json

put/delete -- respective task;

*/

const http = require("http");
const fs = require("fs");
const PORT = 3000;
const hostname = "localhost"

var app = http.createServer((request, response) => {
     if (request.method == "PUT") {
          if (request.url == "/book") {
               var fullData = "";
               request.on("data", (chunk) => {
                    fullData += chunk.toString();
               })
               request.on("end", () => {
                    var bookToBeUpdateded = JSON.parse(fullData);
                    console.log(bookToBeUpdateded);
                    
                    var obj;
                    fs.readFile('books.json', 'utf8', function (err, data) {
                         if (err) throw err;
                         obj = JSON.parse(data);
                         var pos = obj.findIndex(item => item.bookId == bookToBeUpdateded.bookId);
                         console.log(pos);
                         if (pos >= 0) {
                              obj[pos].bookName=bookToBeUpdateded.bookName;
                              obj[pos].bookAuthorName=bookToBeUpdateded.bookAuthorName;
                              obj[pos].bookPrize=bookToBeUpdateded.bookPrize;

                              //it is not necessary, I used for sorting only
                              obj.sort(function(a, b) { 
                                   return a.bookId - b.bookId ;
                                 }); 

                              fs.writeFile("books.json", JSON.stringify(obj), (err) => {
                                   if (err) {
                                       console.log(`Error during the write operation : ${err}`);
                                   }
                                   else {
                                       console.log("Write into the file is successful")
                                       response.end(JSON.stringify(obj));
                                   }
                               })

                              //response.end(JSON.stringify(obj));
                              
                         }
                         else {
                              response.end("Book id not exists.");
 
                         }
                    });

               })
               request.on("error", (err) => {
                    response.statusCode = 401;
                    response.end(`Error : ${err}`);
               })
          }
          else {
               response.end("PUT request not allowed for this url")
          }
     }
   else if (request.method == "POST") {
          if (request.url == "/book") {
               var fullData = "";
               request.on("data", (chunk) => {
                    fullData += chunk.toString();
               })
               request.on("end", () => {
                    var bookToBeInserted = JSON.parse(fullData);
                    console.log(bookToBeInserted);
                    
                    var obj;
                    fs.readFile('books.json', 'utf8', function (err, data) {
                         if (err) throw err;
                         obj = JSON.parse(data);
                         var pos = obj.findIndex(item => item.bookId == bookToBeInserted.bookId);
                         console.log(pos);
                         if (pos >= 0) {
                              response.end("Book Id already exists. Insertion could not be done");

                              
                         }
                         else {
                              obj.push(bookToBeInserted);
                              //it is not necessary, I used for sorting only
                              obj.sort(function(a, b) { 
                                   return a.bookId - b.bookId ;
                                 }); 

                              fs.writeFile("books.json", JSON.stringify(obj), (err) => {
                                   if (err) {
                                       console.log(`Error during the write operation : ${err}`);
                                   }
                                   else {
                                       console.log("Write into the file is successful")
                                                                             response.end(JSON.stringify(obj));
                                   }
                               })

                              //response.end(JSON.stringify(obj));
                         }
                    });

               })
               request.on("error", (err) => {
                    response.statusCode = 401;
                    response.end(`Error : ${err}`);
               })
          }
          else {
               response.end("POST request not allowed for this url")
          }
     }
    else if (request.method == "DELETE") {
          if (request.url == "/book") {
               var fullData = "";
               request.on("data", (chunk) => {
                    fullData += chunk.toString();
               })
               request.on("end", () => {
                    var empToBeDeleted = JSON.parse(fullData);
                    console.log(empToBeDeleted);
                    
                    var obj;
                    fs.readFile('books.json', 'utf8', function (err, data) {
                         if (err) throw err;
                         obj = JSON.parse(data);
                         var pos = obj.findIndex(item => item.bookId == empToBeDeleted.bookId);
                         console.log(pos);
                         if (pos >= 0) {
                              obj.splice(pos, 1);
                              obj.sort(function(a, b) { 
                                   return a.bookId - b.bookId ;
                                 }); 
                              fs.writeFile("books.json", JSON.stringify(obj), (err) => {
                                   if (err) {
                                       console.log(`Error during the write operation : ${err}`);
                                   }
                                   else {
                                       console.log("Write into the file is successful");
                                       response.end(JSON.stringify(obj));
                                   }
                               })
                             
                         }
                         else {
                              response.end("Book Id not exists.");
                         }
                    });

               })
               request.on("error", (err) => {
                    response.statusCode = 401;
                    response.end(`Error : ${err}`);
               })
          }
          else {
               response.end("DELETE request not allowed for this url")
          }
     }
     else if (request.method == "GET") {
          if (request.url == "/book") {
               //response.end(JSON.stringify(empArr));
               const rStream = fs.createReadStream("books.json");
               //console.log(rStream.toString());
               //console.log(JSON.stringify(rStream));
               rStream.pipe(response);
               //response.end(JSON.stringify(response));//end -- string or buffer

          }
          else if (request.url == "/") {
               console.log('HAHA')
               response.end("Hello!! This is home page");

          }
     }
     else {
          response.write("Hello");
          response.write("Request received . Thank u !!!!");
          response.end("Bye");
          //response.write("Bye");
     }
});

app.listen(PORT, () => {
     console.log(`Server is running at ${PORT}`);
})
