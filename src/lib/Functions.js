async function copySelection() {
  const result = await require("photoshop").action.batchPlay(
    [
      {
        _obj: "copyEvent",
      },
    ],
    {
      synchronousExecution: true,
      modalBehavior: "fail",
    }
  );

  return result[0];
}

async function getSelection() {
  const result = await require("photoshop").action.batchPlay(
    [
      {
        _obj: "get",
        _target: [
          {
            _property: "selection",
          },
          {
            _ref: "document",
            _enum: "ordinal", // _enum and _value signify that this is the active element. In document's case, this is the active document
            _value: "targetEnum",
          },
        ],
        _options: {
          dialogOptions: "dontDisplay",
        },
      },
    ],
    {
      synchronousExecution: true,
      modalBehavior: "fail",
    }
  );

  return result[0].selection;
}

async function makeSelection(selectionBounds) {
  const batchPlay = require("photoshop").action.batchPlay;
  const result = await batchPlay(
    [
      {
        _obj: "set",
        _target: [
          {
            _ref: "channel",
            _property: "selection",
          },
        ],
        to: {
          _obj: "rectangle",
          top: {
            _unit: "pixelsUnit",
            _value: selectionBounds.top,
          },
          left: {
            _unit: "pixelsUnit",
            _value: selectionBounds.left,
          },
          bottom: {
            _unit: "pixelsUnit",
            _value: selectionBounds.bottom,
          },
          right: {
            _unit: "pixelsUnit",
            _value: selectionBounds.right,
          },
        },
        _isCommand: true,
        _options: {
          dialogOptions: "dontDisplay",
        },
      },
    ],
    {
      synchronousExecution: true,
      modalBehavior: "fail",
    }
  );
  return result;
}

function getSelectionBounds(selection) {
  if (!selection) return undefined;
  return {
    left: selection.left._value,
    top: selection.top._value,
    right: selection.right._value,
    bottom: selection.bottom._value,
  };
}

async function selectAll() {
  const result = await require("photoshop").action.batchPlay(
    [
      {
        _obj: "set",
        _target: [
          {
            _ref: "channel",
            _property: "selection",
          },
        ],
        to: {
          _enum: "ordinal",
          _value: "allEnum",
        },
        _isCommand: true,
        _options: {
          dialogOptions: "dontDisplay",
        },
      },
    ],
    {
      synchronousExecution: true,
      modalBehavior: "fail",
    }
  );

  return getSelection();
}

async function duplicateDocument() {
  const result = await require("photoshop").action.batchPlay(
    [
      {
        _obj: "duplicate",
        _target: [
          {
            _ref: "document",
            _enum: "ordinal",
            _value: "first",
          },
        ],
        _isCommand: true,
        _options: {
          dialogOptions: "dontDisplay",
        },
      },
    ],
    {
      synchronousExecution: false,
      modalBehavior: "fail",
    }
  );

  return result;
}

async function mergeSelected() {
  const result = await require("photoshop").action.batchPlay(
    [
      {
        _obj: "mergeLayersNew",
        _options: {
          dialogOptions: "dontDisplay",
        },
      },
    ],
    {
      synchronousExecution: false,
      modalBehavior: "fail",
    }
  );

  return result;
}
async function mergeCopiedLayers() {
  const result = await require("photoshop").action.batchPlay(
    [
        {
           _obj: "mergeLayersNew",
           _options: {
              dialogOptions: "dontDisplay"
           }
        }
     ],{
        synchronousExecution: false,
        modalBehavior: "fail"
     });

  return result;
}
async function copySelectedLayers() {
  const result = await require("photoshop").action.batchPlay(
    [
      {
        _obj: "duplicate",
        _target: [
          {
            _ref: "layer",
            _enum: "ordinal",
            _value: "targetEnum",
          },
        ],
        version: 5,
        ID: [8, 9],
        _options: {
          dialogOptions: "dontDisplay",
        },
      },
    ],
    {
      synchronousExecution: false,
      modalBehavior: "fail",
    }
  );

  return result;
}

async function paste() {
  const result = await require("photoshop").action.batchPlay(
    [
      {
        _obj: "paste",
        inPlace: false,
        antiAlias: {
          _enum: "antiAliasType",
          _value: "antiAliasNone",
        },
        as: {
          _class: "pixel",
        },
        _isCommand: true,
        _options: {
          dialogOptions: "dontDisplay",
        },
      },
    ],
    {
      synchronousExecution: true,
      modalBehavior: "fail",
    }
  );
}

async function makeLayerMask() {
  const batchPlay = require("photoshop").action.batchPlay;

  const result = await batchPlay(
    [
      {
        _obj: "make",
        new: {
          _class: "channel",
        },
        at: {
          _ref: "channel",
          _enum: "channel",
          _value: "mask",
        },
        using: {
          _enum: "userMaskEnabled",
          _value: "revealSelection",
        },
        _isCommand: true,
        _options: {
          dialogOptions: "dontDisplay",
        },
      },
    ],
    {
      synchronousExecution: false,
      modalBehavior: "fail",
    }
  );
}

async function openLayerMask() {
  const batchPlay = require("photoshop").action.batchPlay;

  const result = await batchPlay(
    [
      {
        _obj: "select",
        _target: [
          {
            _ref: "channel",
            _enum: "ordinal",
            _value: "targetEnum",
          },
        ],
        makeVisible: true,
        _isCommand: true,
        _options: {
          dialogOptions: "dontDisplay",
        },
      },
    ],
    {
      synchronousExecution: false,
      modalBehavior: "fail",
    }
  );
}

async function selectLayer(name) {
  const batchPlay = require("photoshop").action.batchPlay;

  const result = await batchPlay(
    [
      {
        _obj: "select",
        _target: [
          {
            _ref: "layer",
            _name: name,
          },
        ],
        makeVisible: false,
        _isCommand: true,
        _options: {
          dialogOptions: "dontDisplay",
        },
      },
    ],
    {
      synchronousExecution: false,
      modalBehavior: "fail",
    }
  );
}

async function deselect() {
  const batchPlay = require("photoshop").action.batchPlay;

  const result = await batchPlay(
    [
      {
        _obj: "set",
        _target: [
          {
            _ref: "channel",
            _property: "selection",
          },
        ],
        to: {
          _enum: "ordinal",
          _value: "none",
        },
        _isCommand: true,
        _options: {
          dialogOptions: "dontDisplay",
        },
      },
    ],
    {
      synchronousExecution: false,
      modalBehavior: "fail",
    }
  );

  return result;
}

module.exports = {
  mergeSelected,
  copySelection,
  getSelection,
  getSelectionBounds,
  selectAll,
  duplicateDocument,
  paste,
  makeLayerMask,
  openLayerMask,
  selectLayer,
  deselect,
  makeSelection,
  copySelectedLayers,
  mergeCopiedLayers,
};
