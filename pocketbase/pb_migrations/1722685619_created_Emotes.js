/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "5xohg9o6b148uhe",
    "created": "2024-08-03 11:46:59.184Z",
    "updated": "2024-08-03 11:46:59.184Z",
    "name": "Emotes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "cjrxz195",
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
        "id": "eepu9ceh",
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
  const collection = dao.findCollectionByNameOrId("5xohg9o6b148uhe");

  return dao.deleteCollection(collection);
})
