"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.error = void 0;
var error = {
  "paymentType": {
    "type": "required",
    "message": "please select payment type.",
    "ref": {
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
    }
  },
  "amount": {
    "type": "required",
    "message": "amount is required.",
    "ref": {
      "type": "text",
      "name": "amount",
      "label": "Amount MYR",
      "value": "",
      "placeholder": "0.0 RM",
      "visible": true,
      "description": "Min is 1.0 MYR",
      "rule": {
        "required": "amount is required.",
        "min": {
          "value": 1,
          "message": "min payment amount is 1.00 MYR"
        }
      }
    }
  },
  "ref1": {
    "type": "required",
    "message": "Reference is required.",
    "ref": {
      "type": "text",
      "name": "ref1",
      "label": "Refrence 1",
      "value": "",
      "placeholder": "999",
      "visible": true,
      "rule": {
        "required": "Reference is required."
      }
    }
  },
  "ref2": {
    "type": "required",
    "message": "Reference is required.",
    "ref": {
      "type": "text",
      "name": "ref2",
      "label": "Refrence 2",
      "value": "",
      "placeholder": "phone number",
      "visible": true,
      "rule": {
        "required": "Reference is required."
      }
    }
  }
};
exports.error = error;