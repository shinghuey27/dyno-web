const error = {
    "select": {
        "type": "required",
        "message": "Please select recipent bank.",
        "ref": {
            "type": "select",
            "name": "select",
            "label": "Payment Type",
            "value": "",
            "visible": true,
            "placeholder": "Select Payment Type",
            "description": "IBFT sameday, GIRO tomorrow",
            "rule": {
                "required": "Please select Recipent Bank."
            },
            "options": [
                {
                    "label": "IBFT",
                    "value": "IBFT"
                },
                {
                    "label": "GIRO",
                    "value": "GIRO"
                }
            ]
        }
    },
    "amount": {
        "type": "required",
        "message": "Amount is required.",
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
    "account": {
        "type": "required",
        "message": "Account Number is required.",
        "ref": {
            "type": "text",
            "name": "account",
            "label": "Refrence 1",
            "value": "",
            "placeholder": "999",
            "visible": true,
            "rule": {
                "required": "Account Number is required"
            }
        }
    },
    "instant": {
        "type": "required",
        "message": "instant Transfer is required.",
        "ref": {
            "type": "instant",
            "name": "checkbox2",
            "label": "Refrence 2",
            "value": "",
            "placeholder": "phone number",
            "visible": true,
            "rule": {
                "required": "Reference is required."
            }
        }
    },
    "calendar": {
        "type": "date",
        "message": "Date is required.",
        "ref": {
            "type": "text",
            "name": "calendar",
            "label": "Refrence 2",
            "value": "",
            "placeholder": "phone number",
            "visible": true,
            "rule": {
                "required": "Reference is required."
            }
        }
    },


}

export { error }