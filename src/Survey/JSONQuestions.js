var json = {
        "pages": [
         {
          "name": "first-page",
          "elements": [
           {
            "type": "radiogroup",
            "name": "Business Owner",
            "title": "Do you own a business?",
            "description": "Do you own a business?",
            "hideNumber": true,
            "isRequired": true,
            "titleLocation": "hidden",
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
          ],
          "description": "Do you own a business?"
         },
         {
          "name": "second-page",
          "elements": [
           {
            "type": "radiogroup",
            "name": "Business Founder",
            "title": "Are you the founder of the business?",
            "hideNumber": true,
            "isRequired": true,
            "titleLocation": "hidden",
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
          ],
          "description": "Are you the founder of the business?"
         },
         {
          "name": "third-page",
          "elements": [
           {
            "type": "text",
            "name": "Business Established",
            "title": "In what year was the business established?",
            "hideNumber": true,
            "isRequired": true,
            "titleLocation": "hidden",
            "inputType": "number",
            "min": "1950",
            "max": "2020",
            "maxLength": 2020,
            "placeHolder": "e.g. 2010"
           }
          ],
          "description": "In what year was the business established?"
         },
         {
          "name": "fourth-page",
          "elements": [
           {
            "type": "radiogroup",
            "name": "Business Employees",
            "title": "How many employees does the business have, not including yourself?",
            "hideNumber": true,
            "isRequired": true,
            "titleLocation": "hidden",
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
          ],
          "description": "How many employees does the business have, not including yourself?"
         },
         {
          "name": "fifth-page",
          "elements": [
           {
            "type": "dropdown",
            "name": "Business Location",
            "title": "Where is your business (principally) located?",
            "hideNumber": true,
            "isRequired": true,
            "titleLocation": "hidden",
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
          "description": "Where is your business (principally) located?"
         },
         {
          "name": "sixth-page",
          "elements": [
           {
            "type": "radiogroup",
            "name": "Business Net Profit",
            "title": "What was the firm’s total net profit generated over the last 12 months?",
            "hideNumber": true,
            "isRequired": true,
            "titleLocation": "hidden",
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
          ],
          "description": "What was the firm’s total net profit generated over the last 12 months?"
         },
         {
          "name": "seventh-page",
          "elements": [
           {
            "type": "dropdown",
            "name": "Business Industry",
            "title": "What is the main industry in which the business generates revenue?",
            "hideNumber": true,
            "isRequired": true,
            "titleLocation": "hidden",
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
          ],
          "description": "What is the main industry in which the business generates revenue?"
         },
         {
          "name": "eigth-page",
          "elements": [
           {
            "type": "checkbox",
            "name": "Business Groups",
            "title": "Do you belong to any of the following?",
            "hideNumber": true,
            "isRequired": true,
            "titleLocation": "hidden",
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
          ],
          "description": "Do you belong to any of the following?"
         },
         {
          "name": "ninth-page",
          "elements": [
           {
            "type": "radiogroup",
            "name": "Educational Attainment",
            "title": "What is the highest level of education you have attained?",
            "hideNumber": true,
            "isRequired": true,
            "titleLocation": "hidden",
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
          ],
          "description": "What is the highest level of education you have attained?"
         },
         {
          "name": "tenth-page",
          "elements": [
           {
            "type": "radiogroup",
            "name": "Businesses started",
            "title": "How many previous businesses have you started?",
            "hideNumber": true,
            "isRequired": true,
            "titleLocation": "hidden",
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
          ],
          "description": "How many previous businesses have you started?"
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
              "value": "intrinsic A",
              "text": "I enjoy this work very much"
             },
             {
              "value": "identified A",
              "text": "I chose this work because it allows me to reach my life goals"
             },
             {
              "value": "introjected A",
              "text": "Because I have to be the best in my work, I have to be a “winner”"
             },
             {
              "value": "external A",
              "text": "Because this work affords me a certain standard of living"
             },
             {
              "value": "intrinsic B",
              "text": "Because I have fun doing my work"
             },
             {
              "value": "identified B",
              "text": "Because this work fulfills my career plans"
             },
             {
              "value": "introjected B",
              "text": "Because my work is my life and I don’t want to fail"
             },
             {
              "value": "external B",
              "text": "Because it allows me to make a lot of money"
             },
             {
              "value": "intrinsic C",
              "text": "For the moments of pleasure that this work brings me"
             },
             {
              "value": "identified C",
              "text": "Because this work fits my personal values"
             },
             {
              "value": "introjected C",
              "text": "Because my reputation depends on it"
             },
             {
              "value": "external C",
              "text": "I do this work for the paycheck"
             }
            ],
            "isAllRowRequired": true
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
              "value": "inventing A",
              "text": "It is exciting to figure out new ways to solve unmet market needs that can be commercialized"
             },
             {
              "value": "founding A",
              "text": "Establishing a new company excites me"
             },
             {
              "value": "developing A",
              "text": "I really like finding the right people to market my product/service to"
             },
             {
              "value": "inventing B",
              "text": "Searching for new ideas for products/services to offer is enjoyable to me"
             },
             {
              "value": "founding B",
              "text": "Owning my own company energizes me"
             },
             {
              "value": "developing B",
              "text": "Assembling the right people to work for my business is exciting"
             },
             {
              "value": "inventing C",
              "text": "Scanning the environment for new opportunities really excites me"
             },
             {
              "value": "founding C",
              "text": "Nurturing a new business through its emerging success is enjoyable"
             },
             {
              "value": "developing C",
              "text": "Pushing my employees and myself to make our company better motivates me"
             },
             {
              "value": "inventing D",
              "text": "Inventing new solutions to problems is an important part of who I am"
             },
             {
              "value": "founding D",
              "text": "Being the founder of a business is an important part of who I am"
             },
             {
              "value": "developing D",
              "text": "Nurturing and growing companies is an important part of who I am"
             }
            ],
            "isAllRowRequired": true
           }
          ],
          "title": "Passion",
          "description": "Answer the following questions based on how you believe they apply to you."
         },
         {
          "name": "effort-page",
          "elements": [
           {
            "type": "matrix",
            "name": "effort",
            "hideNumber": true,
            "isRequired": true,
            "titleLocation": "hidden",
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
            ],
            "isAllRowRequired": true
           }
          ],
          "title": "Effort",
          "description": "Please indicate how much effort you apply in your work."
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
            "validators": [
             {
              "type": "expression"
             }
            ],
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
              "value": "risk-taking A",
              "text": "I like to take bold action by venturing into the unknown"
             },
             {
              "value": "innovativeness A",
              "text": "I often like to try new and unusual activities that are not typical but not necessarily risky"
             },
             {
              "value": "proactivity A",
              "text": "I usually act in anticipation of future problems, needs or changes"
             },
             {
              "value": "risk-taking B",
              "text": "I am willing to invest a lot of time and/or money on something that might yield a high return"
             },
             {
              "value": "innovativeness B",
              "text": "In general, I prefer a strong emphasis in projects on unique, one-of-a-kind approaches rather than revisiting tried and true approaches used before"
             },
             {
              "value": "proactivity B",
              "text": "I tend to plan ahead on projects"
             },
             {
              "value": "risk-taking C",
              "text": "I tend to act “boldly” in situations where risk is involved"
             },
             {
              "value": "innovativeness C",
              "text": "I prefer to try my own unique way when learning new things rather than doing it like everyone else does"
             },
             {
              "value": "proactivity C",
              "text": "I prefer to “step-up” and get things going on projects rather than sit and wait for someone else to do it"
             }
            ],
            "isAllRowRequired": true
           }
          ],
          "title": "Individual Entrepreneurial Orientation",
          "description": "Answer the following questions based on how you believe they apply to you."
         },
         {
          "name": "self-efficacy",
          "elements": [
           {
            "type": "matrix",
            "name": "efficacy",
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
            ],
            "isAllRowRequired": true
           }
          ],
          "title": "Entrepreneurial Self Efficacy",
          "description": "How much confidence do you have in your ability to..."
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
            ],
            "isAllRowRequired": true
           }
          ],
          "title": "Need to achieve",
          "description": "Answer the following questions based on how you believe they apply to you."
         },
         {
          "name": "grit",
          "elements": [
           {
            "type": "matrix",
            "name": "grit A",
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
            ],
            "isAllRowRequired": true
           }
          ],
          "title": "Grit",
          "description": "Answer the following questions based on how you believe they apply to you."
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
            ],
            "isAllRowRequired": true
           }
          ],
          "title": "Tolerance for Ambiguity",
          "description": "Answer the following questions based on how you believe they apply to you."
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
            "titleLocation": "hidden",
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
            ],
            "isAllRowRequired": true
           }
          ],
          "title": "Resilience",
          "description": "Answer the following questions based on how you believe they apply to you."
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
            ],
            "isAllRowRequired": true
           }
          ],
          "title": "Satisfaction",
          "description": "Answer the following questions based on how you believe they apply to you."
         }
        ]
       }
export default json;
