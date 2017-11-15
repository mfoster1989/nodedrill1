const express = require('express')
const cors = require('cors')
const app = express();

app.use(cors());
const cohorts =
[{
    id: 1,
    cohortName: 17-01-WD-DP,
    cohortCode: g100,
    numberOfStudents: 28
  },{
    id: 2,
    cohortName: 17-01-DS-GT,
    cohortCode: g105,
    numberOfStudents: 24
  },{
    id: 3,
    cohortName: 17-02-WD-PX,
    cohortCode: g109,
    numberOfStudents: 30
  },{
    id: 4,
    cohortName: 17-03-WD-BD,
    cohortCode: g110,
    numberOfStudents: 29
  }]

function idQuery (id, array) {
  for (var i = 0; i < array.id.length; i++) {
    if (array.id[i] === id) {
      return array[i]
    }
  }
}


app.get('/', function (req, res) {
  res.json(msg:'This is CORS-enabled for all origins!')
})


app.get('/:id' function (req, res) {
  let path = req.params.id
  idQuery (path, cohorts);
  res.json(msg:'This is CORS-enabled for all origins!')
})
