/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t9exzyp91ythlus")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1d7gq1mp",
    "name": "Image_1",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t9exzyp91ythlus")

  // remove
  collection.schema.removeField("1d7gq1mp")

  return dao.saveCollection(collection)
})
