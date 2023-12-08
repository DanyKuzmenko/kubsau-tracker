export const createWeek = (nextWeek: boolean) => {
  let today = new Date();
  const week = [];

  if (nextWeek) {
    today.setDate(today.getDate() + 7);
  }

  if (today.getDay() === 0) {
    today.setDate(today.getDate() - 6);
  } else {
    today.setDate(today.getDate() - today.getDay() + 1);
  }

  for (let i = 0; i < 6; i++) {
    week.push({
      date: new Date(today),
      classes: [
        {
          number: 1,
          timeStart: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 8, 0),
          timeEnd: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9, 30),
        },
        {
          number: 2,
          timeStart: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9, 45),
          timeEnd: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 11, 15),
        },
        {
          number: 3,
          timeStart: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 11, 30),
          timeEnd: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 13, 0),
        },
        {
          number: 4,
          timeStart: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 13, 50),
          timeEnd: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 15, 20),
        },
        {
          number: 5,
          timeStart: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 15, 35),
          timeEnd: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 17, 5),
        },
      ],
    });

    today.setDate(today.getDate() + 1);
  }

  console.log('week', week);
  return week;
};
