// /schemas/index.js
import dotenv from "dotenv"
dotenv.config();
let mongodb_ID = process.env.mongodb_ID
let mongodb_PW = process.env.mongodb_PW

import mongoose from "mongoose";
console.log(mongodb_ID, mongodb_PW);
const connect = () => {
  mongoose
    .connect(
      `mongodb+srv://${mongodb_ID}:${mongodb_PW}@express-mongo.vgyogtg.mongodb.net/?retryWrites=true&w=majority`,
      {
        dbName: 'node_lv1', // node_lv1 데이터베이스명을 사용합니다.
      },
    )
    .then(() => console.log("몽고디비 연결 성공"))
    .catch((err) => console.log(`MongoDB 연결에 실패하였습니다. ${err}`));
};

mongoose.connection.on("error", (err) => {
  console.error("몽고디비 연결 에러", err);
});

export default connect;
