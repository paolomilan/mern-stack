const express = require('express')
const router = express.Router()
const { getGoals, setGoals, updateGoals, deleteGoals} = require('../controllers/goalController')

//                    CRUD: Create, Read, Update, Delete
//           C: HTTP POST   /api/devices + payload   | 201 + Location
// REST <--- R: HTTP GET    /api/devices             | 200 + payload   ---> REST 
// CLIENT    U: HTTP PUT    /api/devices/1 + payload | 200                  SERVER
//           D: HTTP DELETE /api/devices/1           | 200

// cleaned up from below
router.route('/').get(getGoals).post(setGoals)
router.route('/:id').put(updateGoals).delete(deleteGoals)

// get goal
//router.get('/', getGoals)

// create goal
//router.post('/', setGoals)

// update goal
//router.put('/:id', updateGoals)

// delete goal
//router.delete('/:id', deleteGoals)

module.exports = router 