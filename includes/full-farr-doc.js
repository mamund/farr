{
  "farr": {
    "version": "1.0",
    "resources": [
      "todo": {
        "title": "ToDo",
        "actions": [
          {
            "name": "selfLink",
            "type": "safe",
            "kind": "self",
            "target": "item",
            "prompt": "Reload",
            "href": "//localhost:8181/",
            "rel": [
              "self"
            ]
          },
          ...
          {
            "name": "listActive",
            "type": "safe",
            "kind": "todo",
            "target": "list",
            "prompt": "Active ToDos",
            "inputs": [
              {
                "name": "completed",
                "prompt": "Complete",
                "value": "false"
              }
            ],
            "href": "//localhost:8181/",
            "rel": [
              "active",
              "collection"
            ]
          },
          {
            "name": "addForm",
            "type": "unsafe",
            "kind": "todo",
            "target": "list",
            "prompt": "Add ToDo",
            "inputs": [
              {
                "name": "title",
                "prompt": "Title"
              },
              {
                "name": "completed",
                "prompt": "Complete",
                "value": "false"
              }
            ],
            "href": "//localhost:8181/",
            "rel": [
              "create-form"
            ]
          }
        ],
        "data": [
          {
            "farr": {
              "rel": [
                "item"
              ],
              "href": "//localhost:8181/1b361exznny"
            },
            "id": "1b361exznny",
            "title": "one more test",
            "completed": "true"
          },
          {
            "farr": {
              "rel": [
                "item"
              ],
              "href": "//localhost:8181/1i8ucmc9nwb"
            },
            "id": "1i8ucmc9nwb",
            "completed": "false"
          },
        ]
      }
    ]
  }
}

