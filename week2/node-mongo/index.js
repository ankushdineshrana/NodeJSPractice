const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require('./operations');

const url = 'mongodb://localhost:27017/';

MongoClient.connect(url, (err, dbb) => {

    assert.equal(err,null);
    db=dbb.db('conFusion');
    console.log('Connected correctly to server');
   // console.log("db: ",db);
   // const collection = db.collection("dishes");
   // console.log("collection: ",collection);
    
    dboper.insertDocument(db, { name: "Vadonut", description: "Test"},
    "dishes", (result) => {
        console.log("Insert Document:\n", result.ops);

        dboper.findDocuments(db, "dishes", (docs) => {
            console.log("Found Documents:\n", docs);

            dboper.updateDocument(db, { name: "Vadonut" },
                { description: "Updated Test" }, "dishes",
                (result) => {
                    console.log("Updated Document:\n", result.result);

                    dboper.findDocuments(db, "dishes", (docs) => {
                        console.log("Found Updated Documents:\n", docs);
                        
                        ////db.dropCollection("dishes", (result) => {
                      ////      console.log("Dropped Collection: ", result);

                         dbb.close();
                      //  });
                    });
                });
        });
});

});