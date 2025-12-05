const fs = require("fs");

fs.writeFileSync("./output/temp.txt", "this is a temp file");
console.log("file created");

if (fs.existsSync("./output/temp.txt")){
    console.log("file exists!!!");

    fs.unlinkSync("./output/temp.txt");
    console.log("file deleted");
}


try {
   fs.unlinkSync("./output/temp.txt"); 
} catch (error) {
    console.log("ERROR :", error.message);
}


fs.writeFile("./output/temp2.txt", "Another Temp File", (err) =>{
    console.log("Another Temp File Created");

    fs.unlink("./output/temp2.txt", (err) =>{
        if(err){
            console.error("ERROR :", err.message);
        } else {
            console.log("Temp2 deleted")
        }
    });
});