/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "t9exzyp91ythlus",
    "created": "2024-08-03 11:40:43.903Z",
    "updated": "2024-08-03 11:40:43.903Z",
    "name": "Chara_Design",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "cq2ghde7",
        "name": "Intensite",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "50",
            "100",
            "200",
            "300",
            "400",
            "500",
            "600",
            "700",
            "800",
            "900",
            "950"
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
  const collection = dao.findCollectionByNameOrId("t9exzyp91ythlus");

  return dao.deleteCollection(collection);
})
