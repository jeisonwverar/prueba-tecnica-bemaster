import axios from 'axios';
import express from 'express';
//version node  v20.9.0
// DEV dependencia nodemon  script "dev": "nodemon index.js"
const app=express();

app.get('/',async (_,res)=>{

    try {
        const response=await axios.get('https://api.github.com/users/google/repos?sort=stars');
        
         
      const popularRepository= response.data.slice(0,10);

      const basicInformationRepository=popularRepository.map(repo=>{
        const repository={
            id:repo.id,
            name:repo.name,
            url:repo.owner.url,
            language:repo.language
       
    }
        
        return repository
      })

      
      res.status(200).json(basicInformationRepository)
        
    } catch (error) {
        
       
        res.status(500).json({message:error.message,status:error.status})
    }

})







export default app;