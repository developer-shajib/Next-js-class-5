import mongoose from 'mongoose';

// create connection
const mongoDBConnect = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log('MongoDb Connected Successful');
  } catch (error) {
    console.log(error.message);
  }
};

// Export mongodb Connection
export default mongoDBConnect;
