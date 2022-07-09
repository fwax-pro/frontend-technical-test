const path = require('path')
const fs = require('fs')

// Need this middleware to catch some requests
// and return both conversations where userId is sender or recipient
module.exports = (req, res, next) => {
  fs.readFile(`${path.dirname(__filename)}/../db.json`, 'utf8', (error, db) => {
    if (err) throw err;

    if (/conversations/.test(req.url) && req.method === 'GET') {
      const id = req.query?.id
      const userId = req.query?.senderId
  
      const result = JSON.parse(db)?.conversations?.filter(
        conv => conv.senderId == userId ||
        conv.recipientId == userId ||
        conv.id == id
      )
  
      res.status(200).json(result)
      return
    }

    next()
  }) 
}
