const mongoose = require("mongoose");
const Tvshow = require("./tvshowModels");

exports.addTvshow = async (tvshowObj) => {
    try{
        await Tvshow.create(tvshowObj)
    } catch (error) {
        console.log(error);
    }
};

exports.listTvshows = async () => {
try{
    return await Tvshow.find({});
} catch (error) {
    console.log(error);
}
};

// create a delete one or delete many function
exports.deleteOne = async (Tvshow, titleToDelete) => {
    try {
        return Tvshow.deleteOne(titleToDelete);
} catch (error) {
    console.log(error);
}
};


// create an update one or update many function

exports.updateTvshow = async (updateTitle, newUpdate) => {
    try {
        return Tvshow.updateOne(updateTitle, newUpdate);
    } catch (error) {
        console.log(error);
    }
};