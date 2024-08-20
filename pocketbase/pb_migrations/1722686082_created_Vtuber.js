/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "5dd11lkaqamptqx",
    "created": "2024-08-03 11:54:42.274Z",
    "updated": "2024-08-03 11:54:42.274Z",
    "name": "Vtuber",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "o7qmndoy",
        "name": "Model_3D",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Meltin",
            "Nitneuk"
          ]
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
  const collection = dao.findCollectionByNameOrId("5dd11lkaqamptqx");

  return dao.deleteCollection(collection);
})
