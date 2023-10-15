const getUser = (userId) => {
  const users = [
    {
      id: 1,
      name: "User 1",
      salary: 5000000,
    },
    {
      id: 2,
      name: "User 2",
      salary: 6000000,
    },
    {
      id: 3,
      name: "User 3",
      salary: 7000000,
    },
    {
      id: 4,
      name: "User 4",
      salary: 8000000,
    },
  ];
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = users.find(({ id }) => id === userId);
      resolve(data);
    }, 1000);
  });
};

// const lists = [1, 3, 4];
// let salary = 0;
// const getSalary = async () => {
//   for (let id of lists) {
//     const user = await getUser(+id);
//     salary += user.salary;
//   }
//   console.log(salary);
// };
//Dùng tất cả mọi cách trừ Promise.all(), setTimeout
// getSalary();

//Promise.all() -> Xử lý nhiều Promise cùng 1 lúc
const lists = [1, 3, 4];

// Promise.all(promises).then((users) => {
//   const salary = users.reduce((total, { salary }) => total + salary, 0);
//   console.log(salary);
// });

const getSalary = async () => {
  const promises = lists.map((id) => getUser(id));
  const users = await Promise.all(promises);
  const salary = users.reduce((total, { salary }) => total + salary, 0);
  console.log(salary);
};

getSalary();
