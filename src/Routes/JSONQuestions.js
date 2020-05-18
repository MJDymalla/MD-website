var json ={
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
            "title": "Are you the founder of the business?",
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
          "name": "third-page",
          "elements": [
           {
            "type": "text",
            "name": "Business Established",
            "title": "In what year was the business established?",
            "isRequired": true,
            "inputType": "number",
            "min": "1950",
            "max": "2020",
            "placeHolder": "e.g. 2010"
           }
          ]
         },
         {
          "name": "fourth-page",
          "elements": [
           {
            "type": "radiogroup",
            "name": "Business Employees",
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
          ]
         },
         {
          "name": "sixth-page",
          "elements": [
           {
            "type": "radiogroup",
            "name": "Business Net Profit",
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
            "name": "Businesses started",
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
            "name": "motivation A",
            "hideNumber": true,
            "isRequired": true,
            "titleLocation": "hidden",
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
            "name": "motivation B",
            "title": "Motivation Group B",
            "isRequired": true,
            "titleLocation": "hidden",
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
            "name": "motivation C",
            "title": "Motivation Group C",
            "hideNumber": true,
            "isRequired": true,
            "titleLocation": "hidden",
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
          "title": "Motivation",
          "description": "Answer the following questions based on your current level of motivation with your work"
         },
         {
          "name": "passion-page",
          "elements": [
           {
            "type": "matrix",
            "name": "passion A",
            "title": "Passion Group A",
            "hideNumber": true,
            "isRequired": true,
            "titleLocation": "hidden",
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
            "name": "passion B",
            "title": "Passion Group B",
            "hideNumber": true,
            "isRequired": true,
            "titleLocation": "hidden",
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
            "name": "passion C",
            "title": "Passion Group C",
            "hideNumber": true,
            "isRequired": true,
            "titleLocation": "hidden",
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
            "name": "passion D",
            "title": "Passion Group D",
            "hideNumber": true,
            "isRequired": true,
            "titleLocation": "hidden",
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
          "title": "Passion"
         },
         {
          "name": "effort-page",
          "elements": [
           {
            "type": "matrix",
            "name": "effort",
            "title": "Please indicate how much effort you apply in your work?",
            "hideNumber": true,
            "isRequired": true,
            "columns": [
             {
              "value": "1",
              "text": "No effort"
             },
             {
              "value": "2",
              "text": "Small amount"
             },
             {
              "value": "3",
              "text": "Moderate"
             },
             {
              "value": "4",
              "text": "Higher than average"
             },
             {
              "value": "5",
              "text": "As much as possible"
             }
            ],
            "rows": [
             {
              "value": "immediate",
              "text": "How much effort do you typically put into tasks that are required immediately? "
             },
             {
              "value": "beyond",
              "text": "How much effort do you typically put into tasks beyond what is immediately required? "
             },
             {
              "value": "developing",
              "text": "How much effort do you typically put into developing a business? "
             }
            ]
           }
          ],
          "title": "Effort"
         },
         {
          "name": "growth-page",
          "elements": [
           {
            "type": "radiogroup",
            "name": "growth A",
            "title": "Which best describes your preference for the future size of a business?",
            "hideNumber": true,
            "isRequired": true,
            "choices": [
             {
              "value": "2",
              "text": "I want a business to be as large as possible"
             },
             {
              "value": "1",
              "text": "I want a size I can manage myself or with a few key employees"
             }
            ]
           },
           {
            "type": "radiogroup",
            "name": "growth B",
            "title": "Which situation would you prefer?",
            "hideNumber": true,
            "isRequired": true,
            "choices": [
             {
              "value": "1",
              "text": "A business that would provide a good living, but with little risk of failure, and little likelihood of making you a millionaire"
             },
             {
              "value": "2",
              "text": "A business that was much more likely to make me a millionaire but had a higher chance of going bankrupt"
             }
            ]
           }
          ],
          "title": "Growth"
         },
         {
          "name": "entrepreneurial-orientation",
          "elements": [
           {
            "type": "matrix",
            "name": "orientation A",
            "hideNumber": true,
            "isRequired": true,
            "titleLocation": "hidden",
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
              "value": "risk-taking",
              "text": "I like to take bold action by venturing into the unknown"
             },
             {
              "value": "innovativeness",
              "text": "I often like to try new and unusual activities that are not typical but not necessarily risky"
             },
             {
              "value": "proactivity",
              "text": "I usually act in anticipation of future problems, needs or changes"
             }
            ]
           },
           {
            "type": "matrix",
            "name": "orientation B",
            "hideNumber": true,
            "isRequired": true,
            "titleLocation": "hidden",
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
              "value": "risk-taking",
              "text": "I am willing to invest a lot of time and/or money on something that might yield a high return"
             },
             {
              "value": "innovativeness",
              "text": "I prefer a strong emphasis in projects on unique, one-of-a-kind approaches rather than revisiting tried and true approaches used before"
             },
             {
              "value": "proactivity",
              "text": "I tend to plan ahead on projects"
             }
            ]
           },
           {
            "type": "matrix",
            "name": "orientation C",
            "hideNumber": true,
            "isRequired": true,
            "titleLocation": "hidden",
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
              "value": "risk-taking",
              "text": "I tend to act “boldly” in situations where risk is involved"
             },
             {
              "value": "innovativeness",
              "text": "I prefer to try my own unique way when learning new things rather than doing it like everyone else does"
             },
             {
              "value": "proactivity",
              "text": "I prefer to “step-up” and get things going on projects rather than sit and wait for someone else to do it"
             }
            ]
           }
          ],
          "title": "Individual Entrepreneurial Orientation"
         },
         {
          "name": "self-efficacy",
          "elements": [
           {
            "type": "matrix",
            "name": "efficacy A",
            "title": "How much confidence do you have in your ability to...",
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
              "value": "Row 1",
              "text": "Brainstorm (come up with) a new idea for a product or service"
             },
             {
              "value": "Row 2",
              "text": "Identify the need for a new product"
             },
             {
              "value": "Row 3",
              "text": "Design a product or service that will satisfy customer needs and wants"
             },
             {
              "value": "Row 4",
              "text": "Estimate customer demand for a new product or service"
             },
             {
              "value": "Row 5",
              "text": "Determine a competitive price for a new product or service"
             },
             {
              "value": "Row 6",
              "text": "Estimate the amount of start-up funds and working capital necessary to start my business"
             },
             {
              "value": "Row 7",
              "text": "Design an effective marketing/advertising campaign for a new product or service"
             },
             {
              "value": "Row 8",
              "text": "Get others to identify with and believe in my vision and plans for a new business"
             },
             {
              "value": "Row 9",
              "text": "Network — i.e., make contact with and exchange information with others"
             },
             {
              "value": "Row 10",
              "text": "Clearly and concisely explain verbally/in writing my business idea in everyday terms"
             },
             {
              "value": "Row 11",
              "text": "Supervise employees"
             },
             {
              "value": "Row 12",
              "text": "Recruit and hire employees"
             },
             {
              "value": "Row 13",
              "text": "Delegate tasks and responsibilities to employees in my business"
             },
             {
              "value": "Row 14",
              "text": "Deal effectively with day-to-day problems and crises"
             },
             {
              "value": "Row 15",
              "text": "Inspire, encourage, and motivate my employees"
             },
             {
              "value": "Row 16",
              "text": "Train employees"
             },
             {
              "value": "Row 17",
              "text": "Organize and maintain the financial records of my business"
             },
             {
              "value": "Row 18",
              "text": "Manage the financial assets of my business"
             },
             {
              "value": "Row 19",
              "text": "Read and interpret financial statements"
             }
            ]
           },
           {
            "type": "radiogroup",
            "name": "efficacy B",
            "title": "In general, starting a business is . . .?",
            "hideNumber": true,
            "isRequired": true,
            "choices": [
             {
              "value": "item1",
              "text": "Worthless"
             },
             {
              "value": "item2",
              "text": "Worthwhile"
             }
            ]
           },
           {
            "type": "checkbox",
            "name": "efficacy C",
            "title": "Have you participated in any of the following behaviors currently or in the past",
            "hideNumber": true,
            "isRequired": true,
            "choices": [
             {
              "value": "item1",
              "text": "Attending a “start your own business planning” seminar or conference"
             },
             {
              "value": "item2",
              "text": "Writing a business plan or participating in seminars that focus on writing a business plan"
             },
             {
              "value": "item3",
              "text": "Putting together a start-up team"
             },
             {
              "value": "item4",
              "text": "Looking for a building or equipment for the business"
             },
             {
              "value": "item5",
              "text": "Saving money to invest in the business"
             },
             {
              "value": "item6",
              "text": "Developing a product or service"
             }
            ]
           }
          ],
          "title": "Entrepreneurial Self Efficacy"
         },
         {
          "name": "need-to-achieve",
          "elements": [
           {
            "type": "matrix",
            "name": "need to achieve A",
            "title": "Please indicate how you feel about the following statements",
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
              "value": "Row 1",
              "text": "I try to excel at whatever I do"
             },
             {
              "value": "Row 2",
              "text": "It is important to me that I achieve at a high level"
             },
             {
              "value": "Row 3",
              "text": "It is not important to me to be the best"
             },
             {
              "value": "Row 4",
              "text": "I want to be the best at what I do"
             },
             {
              "value": "Row 5",
              "text": "I'm driven by a desire to achieve significant goals."
             }
            ]
           }
          ],
          "title": "Need to achieve"
         },
         {
          "name": "grit",
          "elements": [
           {
            "type": "matrix",
            "name": "grit A",
            "title": "Please indicate how you feel about the following statements",
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
              "value": "Row 1",
              "text": "New ideas and projects sometimes distract me from previous ones"
             },
             {
              "value": "Row 2",
              "text": "Setbacks don’t discourage me. I don’t give up easily"
             },
             {
              "value": "Row 3",
              "text": "I often set a goal but later choose to pursue a different one"
             },
             {
              "value": "Row 4",
              "text": "I am a hard worker"
             },
             {
              "value": "Row 5",
              "text": "I have difficulty maintaining my focus on projects that take more than a few months to complete"
             },
             {
              "value": "Row 6",
              "text": "I finish whatever I begin"
             },
             {
              "value": "Row 7",
              "text": "My interests change from year to year"
             },
             {
              "value": "Row 8",
              "text": "I am diligent. I never give up"
             },
             {
              "value": "Row 9",
              "text": "I have been obsessed with a certain idea or project for a short time but later lost interest"
             },
             {
              "value": "Row 10",
              "text": "I have overcome setbacks to conquer an important challenge"
             }
            ]
           }
          ],
          "title": "Grit"
         },
         {
          "name": "tolerance",
          "elements": [
           {
            "type": "matrix",
            "name": "tolerance A",
            "title": "Please indicate how you feel about the following",
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
              "value": "Row 1",
              "text": "I don’t tolerate ambiguous situations very well"
             },
             {
              "value": "Row 2",
              "text": "I would rather avoid solving a problem that must be viewed from several different perspectives"
             },
             {
              "value": "Row 3",
              "text": "I try to avoid situations that are ambiguous "
             },
             {
              "value": "Row 4",
              "text": "I prefer familiar situations to new ones"
             },
             {
              "value": "Row 5",
              "text": "Problems that cannot be considered from just one point of view are a little threatening"
             },
             {
              "value": "Row 6",
              "text": "I avoid situations that are too complicated for me to easily understand"
             },
             {
              "value": "Row 7",
              "text": "I am tolerant of ambiguous situations"
             },
             {
              "value": "Row 8",
              "text": "I enjoy tackling problems that are complex enough to be ambiguous"
             },
             {
              "value": "Row 9",
              "text": "I try to avoid problems that don’t seem to have only one “best” solution"
             },
             {
              "value": "Row 10",
              "text": "I generally prefer novelty over familiarity"
             },
             {
              "value": "Row 11",
              "text": "I dislike ambiguous situations"
             },
             {
              "value": "Row 12",
              "text": "I find it hard to make a choice when the outcome is uncertain"
             },
             {
              "value": "Row 13",
              "text": "I prefer a situation in which there is some ambiguity"
             }
            ]
           }
          ],
          "title": "Tolerance for Ambiguity"
         },
         {
          "name": "resilience",
          "elements": [
           {
            "type": "matrix",
            "name": "resilience A",
            "title": "Please indicate how you feel about the following statements",
            "hideNumber": true,
            "isRequired": true,
            "columns": [
             {
              "value": "1",
              "text": "Strong Disagree"
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
              "value": "Row 1",
              "text": "I am able to adapt when changes occur"
             },
             {
              "value": "Row 2",
              "text": "I can deal with whatever comes my way"
             },
             {
              "value": "Row 3",
              "text": "I try to see the humorous side of things when I am faced with problems"
             },
             {
              "value": "Row 4",
              "text": "Having to cope with stress can make me stronger"
             },
             {
              "value": "Row 5",
              "text": "I tend to bounce back after illness, injury or other hardships"
             },
             {
              "value": "Row 6",
              "text": "I believe I can achieve my goals, even if there are obstacles"
             },
             {
              "value": "Row 7",
              "text": "Under pressure, I stay focused and think clearly"
             },
             {
              "value": "Row 8",
              "text": "I am not easily discouraged by failure"
             },
             {
              "value": "Row 9",
              "text": "I think of myself as a strong person when dealing with life’s challenges and difficulties"
             },
             {
              "value": "Row 10",
              "text": "I am able to handle unpleasant or painful feelings like sadness, fear, and anger"
             }
            ]
           }
          ],
          "title": "Resilience"
         },
         {
          "name": "satisfaction",
          "elements": [
           {
            "type": "matrix",
            "name": "satisfaction A",
            "title": "Please indicate how you feel about the following statements",
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
              "value": "Row 1",
              "text": "I am satisfied with the success I have achieved in my career"
             },
             {
              "value": "Row 2",
              "text": "I am satisfied with the progress I have made toward meeting my overall career goals"
             },
             {
              "value": "Row 3",
              "text": "I am satisfied with the progress I have made toward meeting my goals for income"
             },
             {
              "value": "Row 4",
              "text": "I am satisfied with the progress I have made toward meeting my goals for advancement"
             },
             {
              "value": "Row 5",
              "text": "I am satisfied with the progress I have made toward meeting my goals for the development of new skills"
             }
            ]
           }
          ],
          "title": "Satisfaction"
         }
        ]
       }
export default json;
