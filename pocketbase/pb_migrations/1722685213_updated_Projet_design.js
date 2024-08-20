/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v7e389cjm8bheg0")

  collection.name = "Design"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v7e389cjm8bheg0")

  collection.name = "Projet_design"

  return dao.saveCollection(collection)
})
