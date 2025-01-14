const treeData = [
  {
    "name": "assign",
    "class": "woman",
    "children": [
      {
        "name": "id",
        "class": "man",
        "children": [{ "name": "Q", "class": "man" }],
      },
      { "name": "=", "class": "man" },
      {
        "name": "expr",
        "class": "man",
        "children": [
          {
            "name": "expr",
            "class": "man",
            "children": [
              {
                "name": "expr",
                "class": "man",
                "children": [
                  {
                    "name": "id",
                    "class": "man",
                    "children": [{ "name": "A", "class": "man" }],
                  },
                ],
              },
              { "name": "+", "class": "man" },
              {
                "name": "expr",
                "class": "man",
                "children": [
                  {
                    "name": "id",
                    "class": "man",
                    "children": [{ "name": "B", "class": "man" }],
                  },
                ],
              },
            ],
          },
          { "name": "*", "class": "man" },
          {
            "name": "expr",
            "class": "man",
            "children": [
              {
                "name": "id",
                "class": "man",
                "children": [{ "name": "C", "class": "man" }],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    "name": "assign",
    "class": "woman",
    "children": [
      {
        "name": "id",
        "class": "man",
        "children": [{ "name": "Q", "class": "man" }],
      },
      { "name": "=", "class": "man" },
      {
        "name": "expr",
        "class": "man",
        "children": [
          {
            "name": "expr",
            "class": "man",
            "children": [
              {
                "name": "id",
                "class": "man",
                "children": [{ "name": "A", "class": "man" }],
              },
            ],
          },
          { "name": "+", "class": "man" },
          {
            "name": "expr",
            "class": "man",
            "children": [
              {
                "name": "expr",
                "class": "man",
                "children": [
                  {
                    "name": "id",
                    "class": "man",
                    "children": [{ "name": "B", "class": "man" }],
                  },
                ],
              },
              { "name": "*", "class": "man" },
              {
                "name": "expr",
                "class": "man",
                "children": [
                  {
                    "name": "id",
                    "class": "man",
                    "children": [{ "name": "C", "class": "man" }],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

dTree.init(treeData, {
  target: "#graph",
  debug: true,
  hideMarriageNodes: true,
  marriageNodeSize: 5,
  height: 800,
  width: 1200,
  callbacks: {
    nodeRightClick: function (name, extra) {
      alert("Right-click: " + name);
    },
    textRenderer: function (name, extra, textClass) {
      if (extra && extra.nickname) name = name + " (" + extra.nickname + ")";
      return "<p align='center' class='" + textClass + "'>" + name + "</p>";
    },
    marriageClick: function (extra, id) {
      alert("Clicked marriage node" + id);
    },
    marriageRightClick: function (extra, id) {
      alert("Right-clicked marriage node" + id);
    },
  },
});
