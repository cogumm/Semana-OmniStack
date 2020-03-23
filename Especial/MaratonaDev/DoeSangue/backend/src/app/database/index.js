import mongoose from 'mongoose';

class Database {
  constructor() {
    this.mongo();
  }

  mongo() {

    this.mongoConnection = mongoose.connect(
        'mongodb://localhost:27017/doadores',
      {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
      },
      err => {
        if (!err) {
          console.log('MongoDB Connection Succeeded.');
        } else {
          console.log(`Error in DB connection: ${err}`);
        }
      }
    );
  }
}

export default new Database();
