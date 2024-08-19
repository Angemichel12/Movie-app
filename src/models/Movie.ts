import mongoose from "mongoose";
import slugify from 'slugify';

const schema = mongoose.Schema;

const MovieSchema = new schema(
  {
    title: {
      type: String,
      required: [true, "Movie must have a title"],
    },
    slug:String,
    duration: {
      type: String,
      require: [true, "Movie must have a duration"],
    },
    posterImage: {
      type: String,
      require: [true, "Movie must have a poster"],
    },
    genre: [String],
    language: String,
    country: String,
    releaseDate: {
      type: Date,
      default: Date.now(),
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    director: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: [true, "Movie must have a summary"],
      trim: true,
    },
    trailer: String,
  },
  { timestamps: true }
);
MovieSchema.pre('save', function(next){
  this.slug = slugify(this.title, {lower:true});
  next();
})
const Movie = mongoose.model("Movie", MovieSchema);

export default Movie;
