const e = require("express");
const { MongoClient } = require("mongodb");

async function main() {
    const uri = 'mongodb://localhost:27017'
    const client = new MongoClient(uri)
    try {
        await client.connect()
        
        //functions
        // await listDatabases(client)
        
        // await createListing(client, {
        //     _id : 4,
        //     name: "Books",
        //     stock : 100,
        //     reviews: [
        //         {
        //             authorName : "KaranPal",
        //             rating : 4, 
        //             review : "PaperBack is awesome"
        //         }, 
        //         {
        //             authorName: "Kajal",
        //             rating: 3, 
        //             review : "Not good product"
        //         }
            
        //     ]
        // })

        // await listCollections(client, "rubber")

        // await findByID(client, 1)

        // await updateListing(client, "Books",{
        //     stock : 0,
        //     name : "Book"
        // })
    } catch(e) {
        console.error(e)
    } finally {
        await client.close()
    }
}
main().catch(console.error)

async function createListing(client, newListing) {
    const result = await client.db("newDB").collection("products").insertOne(newListing)
    console.log(result)
}

async function listCollections(client, nameOfListing) {
    const result = await client.db("newDB").collection("products").findOne({name : nameOfListing})
    if(result) {
        console.log(result)
    } else {
        console.log("Error")
    }
}

async function findByID(client, newIdListing) {
    const result = await client.db("newDB").collection("products").findOne({_id : newIdListing})
    if(result) console.log(result)
    else console.log("Error")
}


//UPDATE the Collection
async function updateListing(client, nameOfListing, updatedLisitng ) {
    const result = await client.db("newDB").collection("products").updateOne({name : nameOfListing}, {$set : updatedLisitng})
    console.log(result)
}


async function listDatabases ( client ) {
 
    const databasesList = await client.db().admin().listDatabases()
    console.log("Databases: ")
 
    databasesList.databases.forEach(db => {
        console.log(` - ${db.name}`)
    });
}