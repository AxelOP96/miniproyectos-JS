/**IDBFactory
Provides access to a database. An object of this type is the value of the global Window.indexedDB and WorkerGlobalScope.indexedDB properties. It is therefore the entry point for the API.

IDBOpenDBRequest
Represents a request to open a database.

IDBDatabase
Represents a connection to a database. It's the only way to get a transaction on the database. */
/**The basic pattern that IndexedDB encourages is the following:

Open a database.
Create an object store in the database.
Start a transaction and make a request to do some database operation, like adding or retrieving data.
Wait for the operation to complete by listening to the right kind of DOM event.
Do something with the results (which can be found on the request object). */
const d = document,
n = navigator;

const time = d.querySelector(".time");
setInterval(()=>{
  time.innerHTML = new Date();
},1000)

const request = window.indexedDB.open("MyTestDatabase", 3);
//console.log(n);
//console.log(request)
request.onerror = (event) => {
    // Do something with request.error!
    console.log("Error");
  };
  request.onsuccess = (event) => {
    // Do something with request.result!
    //console.log("Exito")
  };
  
  