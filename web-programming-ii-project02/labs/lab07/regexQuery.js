// Find a town in a case-insenstive regular expression containing the word new
db.towns.find({name : /new/i})
