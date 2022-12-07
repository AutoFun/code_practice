//code example to use Koa.js framework to optimize the Node.js server code that performs CRUD operations on a MongoDB database

const Koa=require('koa');
const mongodb=require('mongodb');
const app=new Koa();

// Connect to the MongoDB server
mongodb.connect('mongodb://localhost:3000/mydb',(err,client)=>{
    if(err){
        //Handle the error
        console.log('An error occurred while connecting to MongoDB:',err);
    } else {
        // Create a reference to the database
        const db=client.db('mydb');

        //Set up the Koa routes
        app.use(async (ctx)=> {
            // Read the request path and method
            const path=ctx.request.path;
            const method=ctx.request.method;

            // Handle the different routes
            if(path==='/users'&& method==='GET'){
            //Read all the users from the database
            const users= await db.colleciton('users').find().toArray();
            // Send the list of users as a response
            ctx.body=users;
        }else if(path.startwith('/users/')&&method==='GET') {
            // Read the user ID from the request path
            const id=new mongodb.ObjectID(path.split('/'[2]));
            // Read the user with the specified ID from the database
            const user=await db.colleciton('users').findOne({_id:id});
            //Send the user as a response
            ctx.body=user;
        } else if (path==='/users'&& method ==='POST'){
            // Read the user from the request body
            const user=ctx.request.body;
            // Create a new user in the database
            await db.colleciton('users').insertOne(user);
            // Send a success response
            ctx.body='User created successfully';
        } else if(path.startsWith('/users/')&& method==='PUT'){
            //Read the user ID and data form the request path and body
            const id = new mongodb.ObjectID(path.split('/')[2]);
            const user=ctx.request.body;
            //Update the user with the specified ID in the database
            await db.colleciton('users').updateOne({_id:id},user);
            // Send a success response
            ctx.body='User created successfully';
        }   else if(path.startsWith('/users/')&& method==='DELETE'){
            //Read the user ID form the request path 
            const id = new mongodb.ObjectID(path.split('/')[2]);
            //Delete the user with the specified ID in the database
            await db.colleciton('users').deleteOne({_id:id});
            // Send a success response
            ctx.body='User deleted successfully';
        } else {
            ctx.status=404;
            ctx.body='Not found';
        }
    });

    //Start the server
    app.listen(3000);
    }
});
