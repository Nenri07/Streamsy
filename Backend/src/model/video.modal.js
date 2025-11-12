import mongoose ,{Schema} from 'mongoose'
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2'

const videoSchema= Schema({
    videoFile:{
        type:String,
        required:true
    },
    Owner:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
   thumbnail:{
    type:String,
    required:true
   },
   Title:{
    type:String,
    required:true
   },
   Description:{
    type:String,
    required:true
   },
   duration:{
        type:Number,
        default:"0"
   },
   views:{
        type:Number,
        deafult:0
   },
   isPublished:{
    type:Boolean,
    deafult:false
   },
    rawS3Key: {
    type: String
    },
    hlsMasterUrl: {
    type: String
    },
    status: { 
        type: String, 
        enum: ['uploading', 'processing', 'ready', 'failed'], 
        default: 'uploading' 
    }

},{timestamps:true})





 videoSchema.plugin(mongooseAggregatePaginate)
export const Video= mongoose.model('Video',videoSchema)