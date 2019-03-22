// Create a new database named blogger with a collection named articles
mongo --host mongodb:27017 blogger

db.articles.insert({
  author_name: "Peyton Steiner",
  email: "peyton.steiner@du.edu",
  creation_date: ISODate("2019-31-01"),
  text: "Lorem ipsum"
})

db.articles.find()
