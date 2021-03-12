const data = [
    {
      date: "7",
      subject: "Subject 01",
      page_number: "33",
      time: "60",
      feedback: "1",
      state : "first"
    },
    {
      date: "8",
      subject: "Subject 02",
      page_number: "33",
      time: "60",
      feedback: "2",
      state : ""
    },
    {
      date: "9",
      subject: "Subject 03",
      page_number: "33",
      time: "60",
      feedback: "3",
      state : ""
    },
    {
      date: "7",
      subject: "Subject 04",
      page_number: "33",
      time: "60",
      feedback: "1",
      state : "first"
    },
    {
      date: "12",
      subject: "Subject 05",
      page_number: "33",
      time: "60",
      feedback: "1",
      state : ""
    },
    {
      date: "11",
      subject: "Subject 06",
      page_number: "33",
      time: "60",
      feedback: "1",
      state : ""
    }
  ]
  const d1 = [];
  const d2 = [];
  const d3 = [];
  const d4 = [];
  const d5 = [];
  const d6 = [];
  const d7 = [];

  var myCurrentDate = new Date();
  var date =
    myCurrentDate.getFullYear() +
    "/" +
    (myCurrentDate.getMonth() + 1) +
    "/" +
    myCurrentDate.getDate();
  var curr = new Date(); // get current date
  var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week

  var day1 = first + 1;
  var day2 = first + 2;
  var day3 = first + 3;
  var day4 = first + 4;
  var day5 = first + 5;
  var last = first + 6; // last day is the first day + 6

  data.map((d) => {
    {
      if (d.date == "" + first) {
        d1.push({
          date: d.date,
          subject: d.subject,
          page_number: d.page_number,
          time: d.time,
          feedback: d.feedback,
          state: d.state,
        });
      } else if (d.date == "" + day1) {
        d2.push({
          date: d.date,
          subject: d.subject,
          page_number: d.page_number,
          time: d.time,
          feedback: d.feedback,
          state: d.state,
        });
      } else if (d.date == "" + day2) {
        d3.push({
          date: d.date,
          subject: d.subject,
          page_number: d.page_number,
          time: d.time,
          feedback: d.feedback,
          state: d.state,
        });
      } else if (d.date == "" + day3) {
        d4.push({
          date: d.date,
          subject: d.subject,
          page_number: d.page_number,
          time: d.time,
          feedback: d.feedback,
          state: d.state,
        });
      } else if (d.date == "" + day4) {
        d5.push({
          date: d.date,
          subject: d.subject,
          page_number: d.page_number,
          time: d.time,
          feedback: d.feedback,
          state: d.state,
        });
      } else if (d.date == "" + day5) {
        d6.push({
          date: d.date,
          subject: d.subject,
          page_number: d.page_number,
          time: d.time,
          feedback: d.feedback,
          state: d.state,
        });
      } else if (d.date == "" + last) {
        d7.push({
          date: d.date,
          subject: d.subject,
          page_number: d.page_number,
          time: d.time,
          feedback: d.feedback,
          state: d.state,
        });
      }
    }
  });
    //return (single_log(d.date,d.subject,d.page_number,d.time,d.feedback))

  module.exports = data;
  module.exports = d1;
  module.exports = d2;
  module.exports = d3;
  module.exports = d4;
  module.exports = d5;
  module.exports = d6;
  module.exports = d7;
  module.exports = first;
  module.exports = day1;
  module.exports = day2;
  module.exports = day3;
  module.exports = day4;
  module.exports = day5;
  module.exports = last;
  module.exports = curr;


