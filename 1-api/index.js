import app from "./app.js";

const PORT= process.env.PORT || 3000;


app.listen(PORT,()=>{

    try {
        console.log(`Server on port http://localhost:${PORT}`)
    } catch (error) {
        console.error(error)
    }
})



















