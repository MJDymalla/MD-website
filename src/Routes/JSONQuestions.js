var json = {
    pages: [
        {
            name: "Q1",
            elements: [
                {
                    type: "radiogroup",
                    name: "1",
                    title: "Do you own a business?",
                    isRequired: true,
                    choices: [
                        {
                            value: "item1",
                            text: "Yes"
                        },
                        {
                            value: "item2",
                            text: "No"
                        }
                    ]
                }
            ],
        },
        {
            name: "Q2",
            elements: [
                {
                    type: "radiogroup",
                    name: "2",
                    title: "Are you the founder of the business?",
                    enableIf: "{1} = 'item2'",
                    isRequired: true,
                    choices: [
                        {
                            value: "item1",
                            text: "Yes"
                        },
                        {
                            value: "item2",
                            text: "No"
                        }
                    ]
                }
            ],
            visibleIf: "{1} = 'item2'"
        },
        {
            name: "Q3",
            elements: [
                {
                    type: "text",
                    name: "3",
                    title: "What were your individual earnings over the last 12 months (AUD)?",
                    enableIf: "{2} = 'item1' or {2} = 'item2'",
                    isRequired: true,
                    inputType: "number",
                    placeHolder: "$"
                }
            ],
            visibleIf: "{2} = 'item1' or {2} = 'item2'"
        },
        {
            name: "Q4",
            elements: [
                {
                    type: "radiogroup",
                    name: "4",
                    title: "How many businesses have you previously started?",
                    isRequired: true,
                    choices: [
                        {
                            value: "item1",
                            text: "0"
                        },
                        {
                            value: "item2",
                            text: "1"
                        },
                        {
                            value: "item3",
                            text: "2"
                        },
                        {
                            value: "item4",
                            text: "3"
                        },
                        {
                            value: "item5",
                            text: "4 or more"
                        }
                    ]
                }
            ],
            visibleIf: "{3} notempty"
        },
        {
            name: "Q5",
            elements: [
                {
                    type: "checkbox",
                    name: "5",
                    visibleIf: "{4} notempty",
                    title: "Do you belong to any of the following?",
                    isRequired: true,
                    choices: [
                        {
                            value: "item1",
                            text: "Entrepreneurship Meeting Group"
                        },
                        {
                            value: "item2",
                            text: "Online Entrepreneurship Group"
                        },
                        {
                            value: "item3",
                            text: "Business Incubator"
                        },
                        {
                            value: "item4",
                            text: "Business Accelerator"
                        },
                        {
                            value: "item5",
                            text: "Other Business Club"
                        },
                        {
                            value: "item6",
                            text: "Co-working Space"
                        },
                        {
                            value: "item7",
                            text: "None of the above"
                        }
                    ]
                }
            ]
        },
        {
            name: "Q6",
            elements: [
                {
                    type: "radiogroup",
                    name: "6",
                    visibleIf: "{5} notempty",
                    title: "Do you work as an employee of a business?",
                    isRequired: true,
                    choices: [
                        {
                            value: "item1",
                            text: "Yes"
                        },
                        {
                            value: "item2",
                            text: "No"
                        }
                    ]
                }
            ]
        },
        {
            name: "Q7",
            elements: [
                {
                    type: "radiogroup",
                    name: "7",
                    visibleIf: "{6} notempty",
                    title: "Are you currently a student?",
                    isRequired: true,
                    choices: [
                        {
                            value: "item1",
                            text: "Yes"
                        },
                        {
                            value: "item2",
                            text: "No"
                        }
                    ]
                }
            ],
            visibleIf: "{7} = 'item2'"
        },
        {
            name: "Q8",
            elements: [
                {
                    type: "dropdown",
                    name: "8",
                    visibleIf: "{7} notempty",
                    title: "Where do you (principally) live in Australia?",
                    isRequired: true,
                    choices: [
                        {
                            value: "item1",
                            text: "Queensland"
                        },
                        {
                            value: "item2",
                            text: "New South Wales"
                        },
                        {
                            value: "item3",
                            text: "Victoria"
                        },
                        {
                            value: "item4",
                            text: "Australian Capital Territory"
                        },
                        {
                            value: "item5",
                            text: "Northern Territory"
                        },
                        {
                            value: "item6",
                            text: "Tasmania"
                        },
                        {
                            value: "item7",
                            text: "Western Australia"
                        }
                    ]
                }
            ]
        },
        {
            name: "Q9",
            elements: [
                {
                    type: "radiogroup",
                    name: "9",
                    title: "Are you in the early stages of starting a business but haven't yet registered the business?",
                    isRequired: true,
                    choices: [
                        {
                            value: "item1",
                            text: "Yes"
                        },
                        {
                            value: "item2",
                            text: "No"
                        }
                    ]
                }
            ],
            visibleIf: "{8} notempty"
        },
        {
            name: "Q10",
            elements: [
                {
                    type: "radiogroup",
                    name: "10",
                    visibleIf: "{9} = 'item2'",
                    title: "Are you thinking of starting a business within the next 12 months?",
                    isRequired: true,
                    choices: [
                        {
                            value: "item1",
                            text: "Yes"
                        },
                        {
                            value: "item2",
                            text: "No"
                        }
                    ]
                }
            ],
            visibleIf: "{9} = 'item2'"
        },
        {
            name: "Q11",
            elements: [
                {
                    type: "rating",
                    name: "11",
                    visibleIf: "{9} = 'item1'",
                    title: "Please indicate how much effort you applied in the context of each statement?",
                    isRequired: true
                }
            ],
            visibleIf: "{9} = 'item1'"
        },
        {
            name: "Q12",
            elements: [
                {
                    type: "radiogroup",
                    name: "12",
                    visibleIf: "{6} = 'item1'",
                    title: "Are you additionally in the early stages of starting a business?",
                    isRequired: true,
                    choices: [
                        {
                            value: "item1",
                            text: "Yes"
                        },
                        {
                            value: "item2",
                            text: "No"
                        }
                    ]
                }
            ]
        },
        {
            name: "Q13",
            elements: [
                {
                    type: "radiogroup",
                    name: "13",
                    visibleIf: "{12} = 'item2'",
                    title: "Are you thinking of starting a business within the next 12 months?",
                    isRequired: true,
                    choices: [
                        {
                            value: "item1",
                            text: "Yes"
                        },
                        {
                            value: "item2",
                            text: "No"
                        }
                    ]
                }
            ]
        },
        {
            name: "Q14",
            elements: [
                {
                    type: "radiogroup",
                    name: "14",
                    visibleIf: "{13} = 'item1'",
                    title: "For how many years have you worked in the business where you presently work?",
                    isRequired: true,
                    hasOther: true,
                    choices: [
                        {
                            value: "item1",
                            text: "Less than one year"
                        },
                        {
                            value: "item2",
                            text: "Between 1 and 2 years"
                        },
                        {
                            value: "item3",
                            text: "Between 2 and 3 years"
                        },
                        {
                            value: "item4",
                            text: "Over 4 years"
                        }
                    ],
                    otherText: "Between 3 and 4 years"
                }
            ],
            visibleIf: "{13} notempty or {12} = 'item1'"
        },
        {
            name: "Q15",
            elements: [
                {
                    type: "radiogroup",
                    name: "15",
                    visibleIf: "{1} = 'item1'",
                    title: "Are you the founder of the business?",
                    isRequired: true,
                    choices: [
                        {
                            value: "item1",
                            text: "Yes"
                        },
                        {
                            value: "item2",
                            text: "No"
                        }
                    ]
                }
            ]
        },
        {
            name: "Q16",
            elements: [
                {
                    type: "text",
                    name: "16",
                    visibleIf: "{15} notempty",
                    title: "In what year was your business established?"
                }
            ]
        },
        {
            name: "Q17",
            elements: [
                {
                    type: "text",
                    name: "17",
                    visibleIf: "{16} notempty",
                    title: "How many employees does the business have, not including yourself?",
                    isRequired: true
                }
            ]
        },
        {
            name: "Q18",
            elements: [
                {
                    type: "dropdown",
                    name: "18",
                    visibleIf: "{17} notempty",
                    title: "Where is your business principally located?",
                    isRequired: true,
                    choices: [
                        {
                            value: "item1",
                            text: "Queensland"
                        },
                        {
                            value: "item2",
                            text: "New South Wales"
                        },
                        {
                            value: "item3",
                            text: "Victoria"
                        },
                        {
                            value: "item4",
                            text: "Australian Capital Territory"
                        },
                        {
                            value: "item5",
                            text: "Northern Territory"
                        },
                        {
                            value: "item6",
                            text: "Tasmania"
                        },
                        {
                            value: "item7",
                            text: "Western Australia"
                        },
                        {
                            value: "item8",
                            text: "South Australia"
                        }
                    ]
                }
            ]
        },
        {
            name: "Q19",
            elements: [
                {
                    type: "text",
                    name: "19",
                    title: "What was the net profit generated over the last 12 months (AUD)?",
                    isRequired: true,
                    inputType: "number",
                    placeHolder: "$"
                }
            ],
            visibleIf: "{18} notempty"
        },
        {
            name: "Q20",
            elements: [
                {
                    type: "text",
                    name: "20",
                    visibleIf: "{19} notempty",
                    title: "What were your individual earnings over the last 12 months (AUD)?",
                    isRequired: true,
                    inputType: "number",
                    placeHolder: "$"
                }
            ]
        },
        {
            name: "Q21",
            elements: [
                {
                    type: "checkbox",
                    name: "21",
                    visibleIf: "{20} notempty",
                    title: "What is the main industry in which the business generates revenue?",
                    isRequired: true,
                    choices: [
                        {
                            value: "item1",
                            text: "Finance"
                        },
                        {
                            value: "item2",
                            text: "Retail"
                        },
                        {
                            value: "item3",
                            text: "Real Estate"
                        },
                        {
                            value: "item4",
                            text: "Education & Training"
                        }
                    ]
                }
            ]
        },
        {
            name: "Q22",
            elements: [
                {
                    type: "radiogroup",
                    name: "22",
                    visibleIf: "{21} notempty",
                    title: "Do you belong to an entrepreneurship club, meetings group, network, business incubator, accelerator or club?",
                    choices: [
                        {
                            value: "item1",
                            text: "Yes"
                        },
                        {
                            value: "item2",
                            text: "No"
                        }
                    ]
                }
            ]
        },
        {
            name: "Q23",
            elements: [
                {
                    type: "text",
                    name: "23",
                    visibleIf: "{22} notempty",
                    title: "How many previous businesses have you started?",
                    isRequired: true,
                    inputType: "number"
                }
            ]
        }
    ]
}
export default json;