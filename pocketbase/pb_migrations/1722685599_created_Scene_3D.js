/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "6mnco72ukze4fos",
    "created": "2024-08-03 11:46:39.193Z",
    "updated": "2024-08-03 11:46:39.193Z",
    "name": "Scene_3D",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gpgoywwi",
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
        "id": "xzxzgbia",
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
  const collection = dao.findCollectionByNameOrId("6mnco72ukze4fos");

  return dao.deleteCollection(collection);
})
