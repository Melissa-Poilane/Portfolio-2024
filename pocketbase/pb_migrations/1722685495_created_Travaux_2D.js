/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ga5oznx6oimgh7w",
    "created": "2024-08-03 11:44:55.186Z",
    "updated": "2024-08-03 11:44:55.186Z",
    "name": "Travaux_2D",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "csosl1zz",
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
        "id": "l57g3aui",
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
  const collection = dao.findCollectionByNameOrId("ga5oznx6oimgh7w");

  return dao.deleteCollection(collection);
})
