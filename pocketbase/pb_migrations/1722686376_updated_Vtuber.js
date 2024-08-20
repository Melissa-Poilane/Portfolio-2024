/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5dd11lkaqamptqx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4ejugoof",
    "name": "Contexte",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5dd11lkaqamptqx")

  // remove
  collection.schema.removeField("4ejugoof")

  return dao.saveCollection(collection)
})
