/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "y3unigp8kkboecf",
    "created": "2024-08-03 11:45:59.273Z",
    "updated": "2024-08-03 11:45:59.273Z",
    "name": "Decors",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "6fkmjic7",
        "name": "imgPath",
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
      },
      {
        "system": false,
        "id": "jbxnd91q",
        "name": "imgAlt",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("y3unigp8kkboecf");

  return dao.deleteCollection(collection);
})
