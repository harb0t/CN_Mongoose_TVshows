const mongoose = require("mongoose");

const tvshowSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
    },
    seasons:{
        required: false,


    },
    rating: {
        required: false,


    },

    

});

const Tvshow = mongoose.model("Tvshow", tvshowSchema);

module.exports = Tvshow;