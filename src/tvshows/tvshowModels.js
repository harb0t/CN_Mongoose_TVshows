const mongoose = require("mongoose");

const tvshowSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
    },
    seasons:{
        type: Number,
        required: false,


    },
    rating: {
        type: Number,
        required: false,


    },

    

});

const Tvshow = mongoose.model("Tvshow", tvshowSchema);

module.exports = Tvshow;