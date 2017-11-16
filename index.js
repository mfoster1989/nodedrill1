const express = require('express')
const cors = require('cors')
const app = express();

app.use(cors());
const cohorts =
[{
    id: 1,
    cohortName: "17-01-WD-DP",
    cohortCode: "g100",
    numberOfStudents: 28
  },{
    id: 2,
    cohortName: "17-01-DS-GT",
    cohortCode: "g105",
    numberOfStudents: 24
  },{
    id: 3,
    cohortName: "17-02-WD-PX",
    cohortCode: "g109",
    numberOfStudents: 30
  },{
    id: 4,
    cohortName: "17-03-WD-BD",
    cohortCode: "g110",
    numberOfStudents: 29
  }]

app.use(cors());

function idQuery (id, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id == id) {
      return array[i];
    }
  }
  return null
}

app.get("/", function (req, res) {
  res.json(cohorts)
})

app.get("/:id", function (req, res) {
  var record = idQuery(cohorts, req.params.id);
  if (!record) {
    res.status = 404;
    res.json({
      error: {
        message: "No record found!"
      }
    });
  }
  res.json({array: record});
});

app.listen(3000);
