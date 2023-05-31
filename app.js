const express =require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');

const app = express();

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wikiDB');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  
  const articleSchema = new mongoose.Schema({
    title:String,
    content:String
  });

  const Article = mongoose.model('article',articleSchema);

  ////////////////////////////////Request Targetting All Articles/////////////////////////

  app.route("/articles")
  
  .get(async(req,res)=>{
    try {
      const allArticles = await Article.find({});
      console.log(allArticles);
      res.send  (allArticles);
    } catch (err) {
      console.log(err);
    }
  })

  .post(async(req,res)=>{
    const newArticle = new Article({
      title:req.body.title,
      content:req.body.content
    });
    try {
      await newArticle.save();
      res.send("Successfully added an article");
    } catch (error) {
      console.log(err);
    }
  })
  
  .delete(async(req,res)=>{
    try {
      await Article.deleteMany({});
      res.send("Successfully deleted all files...");
    } catch (err) {
      console.log(err);
    }
  });

  ////////////////////////////////Request Targeting Specific Article///////////////////////////////////////////////

  app.route("/articles/:articleTitle")
  .get(async(req,res)=>{
    const articleTitle = req.params.articleTitle;
    try {
      const foundArticle = await Article.findOne({title:articleTitle});
      if(foundArticle){
        res.send(foundArticle);
      }else{
        res.send("No Articles matching that title was found...")
      }
    } catch (err) {
      console.log(err);
    }
  
  })
  
  //////////////////////////////Updating entire document///////////////////////

  .put(async(req,res)=>{
    try {
      const articleTitle = req.params.articleTitle;
      const result =await Article.replaceOne(
      {title:articleTitle},
      {title:req.body.title,content:req.body.content}
    );
      if(result.modifiedCount==1){
        res.send("Successfully Updated Entire Document...");
      }else{
        res.send("Not Updated");
      }
    
    } catch (err) {
      console.log(err);
    }

  })

  .patch(async (req, res) => {
    try {
      const articleTitle = req.params.articleTitle;
      const updateFields = req.body; // Assuming the client sends the updated fields and values in the request body
      const result = await Article.findOneAndUpdate(
        { title: articleTitle },
        { $set: updateFields }
      );
      if(result){
        res.status(200).json({ message: 'Article updated successfully' });
      }else{
        res.status("Not Found");
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  })
  
  .delete(async(req,res)=>{
    try {
      const result = await Article.deleteOne({title:req.params.articleTitle});
      if(result){
        res.send("Successfully Deleted Collection");
      }else{
        console.log("Document Not Found to be deleted");
      } 
    } catch (error) {
      console.log(error);
    }
  });

  app.listen(3000,()=>{
    console.log("Server is runing on port 3000....");
  });
  
}


