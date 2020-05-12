var json = {
        "pages": [
         {
          "name": "first-page",
          "elements": [
           {
            "type": "radiogroup",
            "name": "Business Owner",
            "title": "Do you own a business?",
            "isRequired": true,
            "choices": [
             {
              "value": "Yes",
              "text": "Yes"
             },
             {
              "value": "No",
              "text": "No"
             }
            ]
           }
          ]
         },
         {
          "name": "second-page",
          "elements": [
           {
            "type": "radiogroup",
            "name": "Business Founder",
            "visibleIf": "{Business Owner} = 'Yes'",
            "title": "Are you the founder of the business?",
            "isRequired": true,
            "choices": [
             {
              "value": "item1",
              "text": "Yes"
             },
             {
              "value": "item2",
              "text": "No"
             }
            ]
           }
          ],
          "visibleIf": "{Business Owner} = 'Yes'"
         },
         {
          "name": "third-page",
          "elements": [
           {
            "type": "text",
            "name": "Business Established",
            "visibleIf": "{Business Founder} notempty",
            "title": "In what year was the business established?",
            "isRequired": true,
            "inputType": "number",
            "min": "1950",
            "max": "2020",
            "placeHolder": "e.g. 2010"
           }
          ],
          "visibleIf": "{Business Founder} notempty"
         },
         {
          "name": "fourth-page",
          "elements": [
           {
            "type": "radiogroup",
            "name": "Business Employees",
            "visibleIf": "{Business Established} notempty",
            "title": "How many employees does the business have, not including yourself?",
            "isRequired": true,
            "choices": [
             {
              "value": "1-4 employees",
              "text": "1-4"
             },
             {
              "value": "5-19 employees",
              "text": "5-19"
             },
             {
              "value": "20-199 employees",
              "text": "20-199"
             },
             {
              "value": "over 200 employees",
              "text": "200+"
             }
            ]
           }
          ]
         },
         {
          "name": "fifth-page",
          "elements": [
           {
            "type": "dropdown",
            "name": "Business Location",
            "visibleIf": "{Business Employees} notempty",
            "title": "Where is your business (principally) located?",
            "isRequired": true,
            "choices": [
             {
              "value": "QLD",
              "text": "Queensland"
             },
             {
              "value": "NSW",
              "text": "New South Wales"
             },
             {
              "value": "VIC",
              "text": "Victoria"
             },
             {
              "value": "WA",
              "text": "Western Australia"
             },
             {
              "value": "SA",
              "text": "South Australia"
             },
             {
              "value": "ACT",
              "text": "Australian Capital Territory"
             },
             {
              "value": "NT",
              "text": "Northern Territory"
             },
             {
              "value": "TAS",
              "text": "Tasmania"
             }
            ]
           }
          ],
          "visibleIf": "{Business Employees} notempty"
         },
         {
          "name": "sixth-page",
          "elements": [
           {
            "type": "radiogroup",
            "name": "Business Profit",
            "visibleIf": "{Business Established} notempty",
            "title": "What was the firm’s total net profit generated over the last 12 months?",
            "isRequired": true,
            "choices": [
             {
              "value": "0 - 10,000",
              "text": "0 - 10,000"
             },
             {
              "value": "50,001 - 100,000",
              "text": "50,001 - 100,000"
             },
             {
              "value": "100,001 - 150,000",
              "text": "100,001 - 150,000"
             },
             {
              "value": "150,001 - 250,000",
              "text": "150,001 - 250,000"
             },
             {
              "value": "250,001 - 350,000",
              "text": "250,001 - 350,000"
             },
             {
              "value": "350,001 - 500,000",
              "text": "350,001 - 500,000"
             },
             {
              "value": "500,000+",
              "text": "500,000+"
             },
             {
              "value": "Not provided",
              "text": "Prefer not to answer"
             }
            ]
           }
          ]
         },
         {
          "name": "seventh-page",
          "elements": [
           {
            "type": "dropdown",
            "name": "Business Industry",
            "visibleIf": "{Business Profit} notempty",
            "title": "What is the main industry in which the business generates revenue?",
            "isRequired": true,
            "choices": [
             {
              "value": "Accommodation",
              "text": "Accommodation"
             },
             {
              "value": "Administrative",
              "text": "Administrative"
             },
             {
              "value": "Agriculture, forestry and fishing",
              "text": "Agriculture, forestry and fishing"
             },
             {
              "value": "Construction",
              "text": "Construction"
             },
             {
              "value": "Education and training",
              "text": "Education and training"
             },
             {
              "value": "Electricity, gas, water and waste services",
              "text": "Electricity, gas, water and waste services"
             },
             {
              "value": "Financial and insurance services",
              "text": "Financial and insurance services"
             },
             {
              "value": "Food services",
              "text": "Food services"
             },
             {
              "value": "Health care and social assistance",
              "text": "Health care and social assistance"
             },
             {
              "value": "Hospitality",
              "text": "Hospitality"
             },
             {
              "value": "Information media and telecommunications",
              "text": "Information media and telecommunications"
             },
             {
              "value": "Manufacturing",
              "text": "Manufacturing"
             },
             {
              "value": "Mining",
              "text": "Mining"
             },
             {
              "value": "Professional business services",
              "text": "Professional business services"
             },
             {
              "value": "Professional, scientific and technical services",
              "text": "Professional, scientific and technical services"
             },
             {
              "value": "Real-estate services",
              "text": "Real-estate services"
             },
             {
              "value": "Rental and hiring",
              "text": "Rental and hiring"
             },
             {
              "value": "Retail trade",
              "text": "Retail trade"
             },
             {
              "value": "Tourism",
              "text": "Tourism"
             },
             {
              "value": "Transport, postal and warehousing",
              "text": "Transport, postal and warehousing"
             },
             {
              "value": "Wholesale trade",
              "text": "Wholesale trade"
             }
            ]
           }
          ]
         },
         {
          "name": "eigth-page",
          "elements": [
           {
            "type": "checkbox",
            "name": "Business Groups",
            "visibleIf": "{Business Industry} notempty",
            "title": "Do you belong to any of the following?",
            "isRequired": true,
            "choices": [
             {
              "value": "Co-working Space",
              "text": "Co-working Space"
             },
             {
              "value": "Business Incubator",
              "text": "Business Incubator"
             },
             {
              "value": "Business Accelerator",
              "text": "Business Accelerator"
             },
             {
              "value": "Entrepreneurship Meeting Group",
              "text": "Entrepreneurship Meeting Group"
             },
             {
              "value": "Online Entrepreneurship Group",
              "text": "Online Entrepreneurship Group"
             },
             {
              "value": "Other Business Club",
              "text": "Other Business Club"
             },
             {
              "value": "None",
              "text": "None of the above"
             }
            ]
           }
          ]
         },
         {
          "name": "ninth-page",
          "elements": [
           {
            "type": "radiogroup",
            "name": "Educational Attainment",
            "visibleIf": "{Business Groups} notempty",
            "title": "What is the highest level of education you have attained?",
            "isRequired": true,
            "choices": [
             {
              "value": "No formal education",
              "text": "No formal education"
             },
             {
              "value": "Primary School",
              "text": "Primary School"
             },
             {
              "value": "High School",
              "text": "High School"
             },
             {
              "value": "Certificate or undergraduate diploma level",
              "text": "Certificate or undergraduate diploma level"
             },
             {
              "value": "Bachelor degree (Undergraduate)",
              "text": "Bachelor degree (Undergraduate)"
             },
             {
              "value": "Postgraduate degree (including Masters)",
              "text": "Postgraduate degree (including Masters)"
             },
             {
              "value": "Doctoral Degree",
              "text": "Doctoral Degree"
             }
            ]
           }
          ]
         },
         {
          "name": "tenth-page",
          "elements": [
           {
            "type": "radiogroup",
            "name": "Number of businesses started",
            "visibleIf": "{Educational Attainment} notempty",
            "title": "How many previous businesses have you started?",
            "isRequired": true,
            "choices": [
             {
              "value": "1",
              "text": "1"
             },
             {
              "value": "2",
              "text": "2"
             },
             {
              "value": "3+",
              "text": "3+"
             }
            ]
           }
          ]
         },
         {
          "name": "motivation-page",
          "elements": [
           {
            "type": "matrix",
            "name": "motivation group A",
            "title": "Motivation Group A",
            "hideNumber": true,
            "isRequired": true,
            "columns": [
             {
              "value": "1",
              "text": "Strongly Disagree"
             },
             {
              "value": "2",
              "text": "Disagree"
             },
             {
              "value": "3",
              "text": "Neutral"
             },
             {
              "value": "4",
              "text": "Agree"
             },
             {
              "value": "5",
              "text": "Strongly Agree"
             }
            ],
            "rows": [
             {
              "value": "intrinsic",
              "text": "I enjoy this work very much"
             },
             {
              "value": "identified",
              "text": "I chose this work because it allows me to reach my life goals"
             },
             {
              "value": "introjected",
              "text": "Because I have to be the best in my work, I have to be a “winner”"
             },
             {
              "value": "external",
              "text": "Because this work affords me a certain standard of living"
             }
            ]
           },
           {
            "type": "matrix",
            "name": "motivation group B",
            "title": "Motivation Group B",
            "hideNumber": true,
            "isRequired": true,
            "columns": [
             {
              "value": "1",
              "text": "Strongly Disagree"
             },
             {
              "value": "2",
              "text": "Disagree"
             },
             {
              "value": "3",
              "text": "Neutral"
             },
             {
              "value": "4",
              "text": "Agree"
             },
             {
              "value": "5",
              "text": "Strong Agree"
             }
            ],
            "rows": [
             {
              "value": "intrinsic",
              "text": "Because I have fun doing my work"
             },
             {
              "value": "identified",
              "text": "Because this work fulfills my career plans"
             },
             {
              "value": "introjected",
              "text": "Because my work is my life and I don’t want to fail"
             },
             {
              "value": "external",
              "text": "Because it allows me to make a lot of money"
             }
            ]
           },
           {
            "type": "matrix",
            "name": "motivation group C",
            "title": "Motivation Group C",
            "hideNumber": true,
            "isRequired": true,
            "columns": [
             {
              "value": "1",
              "text": "Strongly Disagree"
             },
             {
              "value": "2",
              "text": "Disagree"
             },
             {
              "value": "3",
              "text": "Neutral"
             },
             {
              "value": "4",
              "text": "Agree"
             },
             {
              "value": "5",
              "text": "Strongly Agree"
             }
            ],
            "rows": [
             {
              "value": "intrinsic",
              "text": "For the moments of pleasure that this work brings me"
             },
             {
              "value": "identified",
              "text": "Because this work fits my personal values"
             },
             {
              "value": "introjected",
              "text": "Because my reputation depends on it"
             },
             {
              "value": "external",
              "text": "I do this work for the paycheck"
             }
            ]
           }
          ],
          "visibleIf": "{Number of businesses started} notempty",
          "title": "Motivation",
          "description": "Answer the following questions based on your current level of motivation with your work"
         },
         {
          "name": "passion-page",
          "elements": [
           {
            "type": "matrix",
            "name": "Passion group A",
            "title": "Passion Group A",
            "hideNumber": true,
            "isRequired": true,
            "columns": [
             {
              "value": "1",
              "text": "Strongly Disagree"
             },
             {
              "value": "2",
              "text": "Disagree"
             },
             {
              "value": "3",
              "text": "Neutral"
             },
             {
              "value": "4",
              "text": "Agree"
             },
             {
              "value": "5",
              "text": "Strongly Agree"
             }
            ],
            "rows": [
             {
              "value": "passion for inventing",
              "text": "It is exciting to figure out new ways to solve unmet market needs that can be commercialized"
             },
             {
              "value": "passion for founding",
              "text": "Establishing a new company excites me"
             },
             {
              "value": "passion for developing",
              "text": "I really like finding the right people to market my product/service to"
             }
            ]
           },
           {
            "type": "matrix",
            "name": "Passion group B",
            "title": "Passion Group B",
            "hideNumber": true,
            "isRequired": true,
            "columns": [
             {
              "value": "1",
              "text": "Strongly Disagree"
             },
             {
              "value": "2",
              "text": "Disagree"
             },
             {
              "value": "3",
              "text": "Neutral"
             },
             {
              "value": "4",
              "text": "Agree"
             },
             {
              "value": "5",
              "text": "Strongly Agree"
             }
            ],
            "rows": [
             {
              "value": "passion for inventing",
              "text": "Searching for new ideas for products/services to offer is enjoyable to me"
             },
             {
              "value": "passion for founding",
              "text": "Owning my own company energizes me"
             },
             {
              "value": "passion for developing",
              "text": "Assembling the right people to work for my business is exciting"
             }
            ]
           },
           {
            "type": "matrix",
            "name": "Passion group C",
            "title": "Passion Group C",
            "hideNumber": true,
            "isRequired": true,
            "columns": [
             {
              "value": "1",
              "text": "Strongly Disagree"
             },
             {
              "value": "2",
              "text": "Disagree"
             },
             {
              "value": "3",
              "text": "Neutral"
             },
             {
              "value": "4",
              "text": "Agree"
             },
             {
              "value": "5",
              "text": "Strongly Agree"
             }
            ],
            "rows": [
             {
              "value": "passion for inventing",
              "text": "Scanning the environment for new opportunities really excites me"
             },
             {
              "value": "passion for founding",
              "text": "Nurturing a new business through its emerging success is enjoyable"
             },
             {
              "value": "passion for developing",
              "text": "Pushing my employees and myself to make our company better motivates me"
             }
            ]
           },
           {
            "type": "matrix",
            "name": "Passion group D",
            "title": "Passion Group D",
            "hideNumber": true,
            "isRequired": true,
            "columns": [
             {
              "value": "1",
              "text": "Strongly Disagree"
             },
             {
              "value": "2",
              "text": "Disagree"
             },
             {
              "value": "3",
              "text": "Neutral"
             },
             {
              "value": "4",
              "text": "Agree"
             },
             {
              "value": "5",
              "text": "Strongly Agree"
             }
            ],
            "rows": [
             {
              "value": "passion for inventing",
              "text": "Inventing new solutions to problems is an important part of who I am"
             },
             {
              "value": "passion for founding",
              "text": "Being the founder of a business is an important part of who I am"
             },
             {
              "value": "passion for developing",
              "text": "Nurturing and growing companies is an important part of who I am"
             }
            ]
           }
          ],
          "visibleIf": "{motivation group C.external} notempty",
          "title": "Passion"
         }
        ]
       }
export default json;
