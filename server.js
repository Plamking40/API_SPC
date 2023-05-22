const express = require("express");
const app = express();

/// json object >> js object
app.use(express.json());

app.listen(3000, () => console.log("Server listening on port 3000"));

/// Mysql Connection
const db = require("./DB/db");

db.connect((err) => {
  if (err) {
    console.log("Error connecting to Mysql server =", err);
    return;
  }
  console.log("MySQL Successfully Connected !!");
});

/// Mysql Connection

/// Router ///
const seacrhRouter = require("./routers/Seacrh/seacrh_router");
const informationRouter = require("./routers/1CaseInformation/information_router");
const noticeRouter = require("./routers/2CaseNotice/notice_router");
const sueRouter = require("./routers/3CaseSue/sue_router");
const judgmentRouter = require("./routers/4CaseJudgment/judgment_router");
const appealRouter = require("./routers/5CaseAppeal/appeal_router");
const petitionRouter = require("./routers/6CasePetition/petition_router");
const investigateRouter = require("./routers/7CaseInvestigate/investigate_router");
const expelRouter = require("./routers/8CaseExpel/expel_router");
const sequesterRouter = require("./routers/9CaseSequester/sequester_router");
const seizeRouter = require("./routers/10CaseSeize/seize_router");
const returnbankRouter = require("./routers/11CaseReturnBank/return_bank_router");
const sellingpropertyRouter = require("./routers/12CaseSellingProperty/selling_property_router");
const bankruptcyRouter = require("./routers/13CaseBankruptcy/bankruptcy_router");

app.use("/seacrh", seacrhRouter); // Seacrh
app.use("/information", informationRouter); //1
app.use("/notice", noticeRouter); //2
app.use("/sue", sueRouter); //3
app.use("/judgment", judgmentRouter); //4
app.use("/appeal", appealRouter); //5
app.use("/petition", petitionRouter); //6
app.use("/investigate", investigateRouter); //7
app.use("/expel", expelRouter); //8
app.use("/sequester", sequesterRouter); //9
app.use("/seize", seizeRouter); //10
app.use("/returnbank", returnbankRouter); //11
app.use("/sellingproperty", sellingpropertyRouter); //12
app.use("/bankruptcy", bankruptcyRouter); //13
/// Router ///
