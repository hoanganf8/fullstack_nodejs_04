//Thêm vào server đã thực thi chạy ngầm
const cron = require("node-cron");
const job = require("./core/job");

cron.schedule("* * * * *", () => {
  job.execute();
});
