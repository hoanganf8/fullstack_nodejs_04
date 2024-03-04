const { Job } = require("../models/index");
module.exports = {
  add: async (name, data) => {
    const content = JSON.stringify({ name, data });
    const job = await Job.create({ content });
    return job;
  },
  execute: async () => {
    const [job] = await Job.findAll({
      order: [["id", "asc"]],
      limit: 1,
    });
    if (job) {
      //Nếu tìm được job
      const { name, data } = JSON.parse(job.content);
      const jobPath = process.cwd() + "/jobs";
      const handleJob = require(jobPath + "/" + name + ".js");
      const result = await handleJob(data);
      if (result) {
        await job.destroy(); //Xóa job ra khỏi queue
        console.log("Queue đã thực hiện thành công");
      } else {
        console.log("Queue đã thất bại");
      }
    }
  },
};

//job.add(name, data);
