"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sampleItem_Props_ForSelect = void 0;
var sampleItem_Props_ForSelect = {
  "type": "select",
  "name": "paymentType",
  "label": "Payment Type",
  "value": "",
  "visible": true,
  "placeholder": "Select Payment Type",
  "description": "IBFT sameday, GIRO tomorrow",
  "rule": {
    "required": "please select payment type."
  },
  "options": [{
    "label": "IBFT",
    "value": "IBFT"
  }, {
    "label": "GIRO",
    "value": "GIRO"
  }]
};
exports.sampleItem_Props_ForSelect = sampleItem_Props_ForSelect;