//help()
db.towns.help();

//findOne()
db.towns.findOne([query], [fields], [options], [readConcern])

//scale
db.towns.stats({scale: N, indexDetails: true/false, indexDetailsKey: <index key>, indexDetailsName: <index name>})
