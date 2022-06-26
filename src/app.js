require ("./db/connection");

//importing mongoose
const mongoose = require("mongoose");

//importing yargs
const yargs = require("yargs");

//importing methods
const { addTvshow, listTvshows, deleteOne, updateTvshow } = require("./tvshows/tvshowMethods");

//importing schema (keys and values)
const Tvshow = require ("./tvshows/tvshowModels");


const app = async (yargsObj) => {
    try{
        if (yargsObj.add) {
            await addTvshow({title: yargsObj.title, seasons: yargsObj.seasons, rating: yargsObj.rating});
            console.log(await listTvshows());

        } else if (yargsObj.list) {
            console.log(await listTvshows());

        } else if (yargsObj.delete){ 
        let titleToDelete = {
            title: yargsObj.delete
        }
            await deleteOne(Tvshow, titleToDelete);
            console.log("TV show deleted");

        } else if (yargsObj.update){
            await updateTvshow({title:yargsObj.update}, {title: yargsObj.title, seasons: yargsObj.seasons, rating: yargsObj.rating});
            console.log(await listTvshows());

        } else {
            console.log("Incorrect command");
        } 
        await mongoose.disconnect();
    } catch (error) {
        console.log(error);
    }
};


app(yargs.argv);