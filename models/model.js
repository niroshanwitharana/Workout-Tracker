const mongoose = require('mongoose');
//const dotenv = require('../.env');

const Schema = mongoose.Schema;
const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
        },
        exercises: [
            {
              type: {
                type: String,
                trim: true,
                required: "Please enter an exercise type",
              },
              name: {
                type: String,
                trim: true,
                required: "What is the name of the exercise?",
              },
              duration: {
                type: Number,
                required: "Enter duration in minutes",
              },
              weight: {
                type: Number,
              },
              reps: {
                type: Number,
              },
              sets: {
                type: Number,
              },
              distance: {
                type: Number,
              },
            },
          ],
        },
        //this will allow any virtual properties to be included when data is requested
        {
          toJSON: {
            virtuals: true,
          },
        }
      );
      // dynamically created property to schema
      workoutSchema.virtual("totalDuration").get(function () {
        // reduce exercises array to return total duration 
        return this.exercises.reduce((total, exercise) => { return total + exercise.duration }, 0);
      });
      // workout model defined and retrieved 
      const Workout = mongoose.model("workout", workoutSchema);
      // workout model exported within an object
      module.exports = Workout;