const sampleItem_Props_ForSelect = {
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

export { sampleItem_Props_ForSelect };