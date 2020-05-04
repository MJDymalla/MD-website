var json = {
        "pages": [
         {
          "name": "page1",
          "elements": [
           {
            "type": "radiogroup",
            "name": "1",
            "title": "Do you own a business?",
            "isRequired": true,
            "choices": [
             {
              "value": "1",
              "text": "Yes"
             },
             {
              "value": "0",
              "text": "No"
             }
            ]
           }
          ],
          "title": "Question 1"
         },
         {
          "name": "page2",
          "elements": [
           {
            "type": "radiogroup",
            "name": "2",
            "title": "Are you the founder of the business?",
            "isRequired": true,
            "choices": [
             {
              "value": "1",
              "text": "Yes"
             },
             {
              "value": "0",
              "text": "No"
             }
            ]
           }
          ],
          "visibleIf": "{1} = 'motivated'",
          "title": "Question 2"
         },
         {
          "name": "page3",
          "elements": [
           {
            "type": "text",
            "name": "3",
            "visibleIf": "{2} notempty",
            "title": "In what year was the business established?",
            "isRequired": true,
            "inputType": "number",
            "placeHolder": "e.g. 2010"
           }
          ],
          "visibleIf": "{2} notempty",
          "title": "Question 3"
         },
         {
          "name": "page4",
          "elements": [
           {
            "type": "radiogroup",
            "name": "4",
            "visibleIf": "{3} notempty",
            "title": "How many employees does the business have, not including yourself?",
            "isRequired": true,
            "choices": [
             {
              "value": "0",
              "text": "0"
             },
             {
              "value": "1",
              "text": "1-4"
             },
             {
              "value": "2",
              "text": "5-19"
             },
             {
              "value": "3",
              "text": "20-199"
             },
             {
              "value": "4",
              "text": "200+"
             }
            ]
           }
          ],
          "visibleIf": "{3} notempty",
          "title": "Question 4"
         },
         {
          "name": "page5",
          "elements": [
           {
            "type": "dropdown",
            "name": "5",
            "visibleIf": "{4} notempty",
            "title": "Where is your business (principally) located? ",
            "isRequired": true,
            "choices": [
             {
              "value": "item1",
              "text": "Queensland"
             },
             {
              "value": "item2",
              "text": "New South Wales"
             },
             {
              "value": "item3",
              "text": "Victoria"
             },
             {
              "value": "item4",
              "text": "Western Australia"
             },
             {
              "value": "item5",
              "text": "South Australia"
             },
             {
              "value": "item6",
              "text": "Australian Capital Territory"
             },
             {
              "value": "item7",
              "text": "NorthernTerritory"
             },
             {
              "value": "item8",
              "text": "Tasmania"
             }
            ]
           }
          ],
          "title": "Question 5"
         },
         {
          "name": "page6",
          "elements": [
           {
            "type": "radiogroup",
            "name": "question6",
            "visibleIf": "{5} notempty",
            "title": "What was the firm’s total net profit generated over the last 12 months?",
            "isRequired": true,
            "choices": [
             {
              "value": "0",
              "text": "0 - 10,000"
             },
             {
              "value": "1",
              "text": "10,001 - 50,000"
             },
             {
              "value": "2",
              "text": "50,001 - 100,000"
             },
             {
              "value": "3",
              "text": "100,001 - 150,000"
             },
             {
              "value": "4",
              "text": "150,001 - 250,000"
             },
             {
              "value": "5",
              "text": "250,001 - 350,000"
             },
             {
              "value": "6",
              "text": "350,001 - 500,000"
             },
             {
              "value": "7",
              "text": "500,000+"
             }
            ]
           }
          ],
          "title": "Question 6"
         },
         {
          "name": "page7",
          "elements": [
           {
            "type": "dropdown",
            "name": "question7",
            "visibleIf": "{question6} notempty",
            "title": "What is the main industry in which the business generates revenue?",
            "isRequired": true,
            "choices": [
             {
              "value": "item1",
              "text": "Accommodation"
             },
             {
              "value": "item2",
              "text": "Administrative"
             },
             {
              "value": "item3",
              "text": "Agriculture, forestry and fishing"
             },
             {
              "value": "item4",
              "text": "Construction"
             },
             {
              "value": "item5",
              "text": "Education and training"
             },
             {
              "value": "item6",
              "text": "Electricity, gas, water and waste services"
             },
             {
              "value": "item7",
              "text": "Finance"
             },
             {
              "value": "item8",
              "text": "Financial and insurance services"
             },
             {
              "value": "item9",
              "text": "Food services"
             },
             {
              "value": "item10",
              "text": "Health care and social assistance"
             },
             {
              "value": "item11",
              "text": "Hospitality"
             },
             {
              "value": "item12",
              "text": "Information media and telecommunications"
             },
             {
              "value": "item13",
              "text": "Manufacturing"
             },
             {
              "value": "item14",
              "text": "Mining"
             },
             {
              "value": "item15",
              "text": "Professional business services"
             },
             {
              "value": "item16",
              "text": "Professional, scientific and technical services"
             },
             {
              "value": "item17",
              "text": "Real-estate services"
             },
             {
              "value": "item18",
              "text": "Rental and hiring"
             },
             {
              "value": "item19",
              "text": "Retail trade"
             },
             {
              "value": "item20",
              "text": "Tourism"
             },
             {
              "value": "item21",
              "text": "Transport, postal and warehousing"
             },
             {
              "value": "item22",
              "text": "Wholesale trade"
             }
            ]
           }
          ],
          "title": "Question 7"
         },
         {
          "name": "page8",
          "elements": [
           {
            "type": "radiogroup",
            "name": "question8",
            "title": "Do you belong to any of the following? ",
            "isRequired": true,
            "choices": [
             {
              "value": "1",
              "text": "Co-working Space"
             },
             {
              "value": "1",
              "text": "Business Incubator"
             },
             {
              "value": "1",
              "text": "Business Accelerator"
             },
             {
              "value": "1",
              "text": "Entrepreneurship Meeting Group"
             },
             {
              "value": "1",
              "text": "Online Entrepreneurship Group"
             },
             {
              "value": "1",
              "text": "Other Business Club"
             },
             {
              "value": "0",
              "text": "None of the above"
             }
            ]
           },
           {
            "type": "radiogroup",
            "name": "question9",
            "title": "What is the highest level of education you have attained?",
            "isRequired": true,
            "choices": [
             {
              "value": "0",
              "text": "No formal education"
             },
             {
              "value": "1",
              "text": "Primary School"
             },
             {
              "value": "1",
              "text": "High School"
             },
             {
              "value": "1",
              "text": "Certificate or undergraduate diploma level"
             },
             {
              "value": "1",
              "text": "Bachelor degree (Undergraduate)"
             },
             {
              "value": "1",
              "text": "Postgraduate degree (including Masters)"
             },
             {
              "value": "1",
              "text": "Doctoral Degree"
             }
            ]
           },
           {
            "type": "radiogroup",
            "name": "question10",
            "title": "How many previous businesses have you started?",
            "isRequired": true,
            "choices": [
             {
              "value": "0",
              "text": "0"
             },
             {
              "value": "1",
              "text": "1"
             },
             {
              "value": "2",
              "text": "2"
             },
             {
              "value": "3",
              "text": "3+"
             }
            ]
           },
           {
            "type": "radiogroup",
            "name": "question11",
            "title": "Are you male or female?",
            "isRequired": true,
            "choices": [
             {
              "value": "item1",
              "text": "Male"
             },
             {
              "value": "item2",
              "text": "Female"
             }
            ]
           }
          ],
          "visibleIf": "{question7} notempty",
          "title": "Information & experience",
          "description": "The following questions ask about you."
         },
         {
          "name": "page9",
          "elements": [
           {
            "type": "radiogroup",
            "name": "question12",
            "visibleIf": "{question8} notempty",
            "title": "How do you feel about doing work related to your job? (Select one which you believe best describes you)",
            "isRequired": true,
            "choices": [
             {
              "value": "1",
              "text": "I feel good because I enjoy my work very much"
             },
             {
              "value": "1",
              "text": "I feel motivated because I have fun doing my job"
             },
             {
              "value": "1",
              "text": "I feel good because of the moments of pleasure that this job brings me"
             },
             {
              "value": "1",
              "text": "I feel indifferent, I chose this job because it allows me to reach my life goals"
             },
             {
              "value": "1",
              "text": "I feel good because this job fulfills my career plans"
             },
             {
              "value": "1",
              "text": "I feel okay doing work as this job fits my personal values"
             },
             {
              "value": "1",
              "text": "I feel motivated, because my work is my life and I don't want to fail"
             },
             {
              "value": "1",
              "text": "Because I have to be the best in my job, I have to be a 'winner'"
             },
             {
              "value": "1",
              "text": "Because my reputation depends on it"
             },
             {
              "value": "0",
              "text": "Because this job affords me a certain standard of living"
             },
             {
              "value": "0",
              "text": "Because it allows me to make a lot of money "
             },
             {
              "value": "0",
              "text": "I do this job for the pay check"
             }
            ],
            "otherText": "Because I have to be the best in my job, I have to be a 'winner'"
           }
          ],
          "title": "Motivation",
          "description": "This question is aimed at looking at your level of motivation for what you do"
         },
         {
          "name": "page10",
          "elements": [
           {
            "type": "checkbox",
            "name": "question13",
            "visibleIf": "{question9} notempty",
            "title": "What is your passion for your work? (Select one which best describes you)",
            "isRequired": true,
            "choices": [
             {
              "value": "item1",
              "text": "It is exciting to figure out new ways to solve unmet market needs that can be commercialized"
             },
             {
              "value": "item2",
              "text": "Searching for new ideas for products/services to offer is enjoyable to me"
             },
             {
              "value": "item3",
              "text": "I am motivated to figure out how to make existing products/services better"
             },
             {
              "value": "item4",
              "text": "Scanning the environment for new opportunities really excites me"
             },
             {
              "value": "item5",
              "text": "Inventing new solutions to problems is an important part of who I am"
             },
             {
              "value": "item6",
              "text": "Establishing a new company excites me"
             },
             {
              "value": "item7",
              "text": "Owning my own company energizes me"
             },
             {
              "value": "item8",
              "text": "Nurturing a new business through its emerging success is enjoyable"
             },
             {
              "value": "item9",
              "text": "Being the founder of a business is an important part of who I am"
             },
             {
              "value": "item10",
              "text": "I really like finding the right people to market my product/service to"
             },
             {
              "value": "item11",
              "text": "Assembling the right people to work for my business is exciting"
             },
             {
              "value": "item12",
              "text": "Pushing my employees and myself to make our company better motivates me"
             },
             {
              "value": "item13",
              "text": "Nurturing and growing companies is an important part of who I am"
             }
            ]
           }
          ],
          "title": "Passion"
         },
         {
          "name": "page11",
          "elements": [
           {
            "type": "radiogroup",
            "name": "question14",
            "title": "How much effort do you typically put into tasks that are required immediately?",
            "isRequired": true,
            "choices": [
             {
              "value": "item1",
              "text": "1"
             },
             {
              "value": "item2",
              "text": "2"
             },
             {
              "value": "item3",
              "text": "3"
             },
             {
              "value": "item4",
              "text": "4"
             },
             {
              "value": "item5",
              "text": "5"
             }
            ]
           },
           {
            "type": "radiogroup",
            "name": "question15",
            "title": "How much effort do you typically put into tasks beyond what is immediately required?",
            "isRequired": true,
            "choices": [
             {
              "value": "item1",
              "text": "1"
             },
             {
              "value": "item2",
              "text": "2"
             },
             {
              "value": "item3",
              "text": "3"
             },
             {
              "value": "item4",
              "text": "4"
             },
             {
              "value": "item5",
              "text": "5"
             }
            ]
           },
           {
            "type": "radiogroup",
            "name": "question16",
            "title": "How much effort do you typically put into running your business?",
            "isRequired": true,
            "choices": [
             {
              "value": "item1",
              "text": "1"
             },
             {
              "value": "item2",
              "text": "2"
             },
             {
              "value": "item3",
              "text": "3"
             },
             {
              "value": "item4",
              "text": "4"
             },
             {
              "value": "item5",
              "text": "5"
             }
            ]
           }
          ],
          "title": "Effort",
          "description": "These questions aim to gauge the level of effort that you put into tasks. Please answer each question on a scale between 1  - 5, with 1 being the least amount of effort and 5 being the most. "
         },
         {
          "name": "page12",
          "elements": [
           {
            "type": "radiogroup",
            "name": "question17",
            "title": "Which best describes your preference for the future size of a business",
            "isRequired": true,
            "choices": [
             {
              "value": "item1",
              "text": "I want a business to be as large as possible"
             },
             {
              "value": "item2",
              "text": "I want a size I can manage myself or with a few key employees"
             }
            ]
           },
           {
            "type": "radiogroup",
            "name": "question18",
            "title": "Which situation would you prefer?",
            "isRequired": true,
            "choices": [
             {
              "value": "item1",
              "text": "A business that would provide a good living, but with little risk of failure, and little likelihood of making you a millionaire"
             },
             {
              "value": "item2",
              "text": "A business that was much more likely to make me a millionaire but had a higher chance of going bankrupt"
             }
            ]
           }
          ],
          "title": "Growth"
         },
         {
          "name": "page13",
          "elements": [
           {
            "type": "radiogroup",
            "name": "question19",
            "title": "question",
            "isRequired": true,
            "choices": [
             {
              "value": "item1",
              "text": "I like to take bold action by venturing into the unknown"
             },
             {
              "value": "item2",
              "text": "I am willing to invest a lot of time and/or money on something that might yield a high return"
             },
             {
              "value": "item3",
              "text": "I tend to act “boldly” in situations where risk is involved"
             },
             {
              "value": "item4",
              "text": "I often like to try new and unusual activities that are not typical but not necessarily risky"
             },
             {
              "value": "item5",
              "text": "In general, I prefer a strong emphasis in projects on unique, one-of-a-kind approaches rather than revisiting tried and true approaches used before"
             }
            ]
           },
           {
            "type": "radiogroup",
            "name": "question32",
            "title": "question",
            "isRequired": true,
            "choices": [
             {
              "value": "item1",
              "text": "I prefer to “step-up” and get things going on projects rather than sit and wait for someone else to do it"
             },
             {
              "value": "item2",
              "text": "I tend to plan ahead on projects"
             },
             {
              "value": "item3",
              "text": "I usually act in anticipation of future problems, needs or changes"
             },
             {
              "value": "item4",
              "text": "I favor experimentation and original approaches to problem solving rather than using methods others generally use for solving their problems"
             },
             {
              "value": "item5",
              "text": "I prefer to try my own unique way when learning new things rather than doing it like everyone else does"
             }
            ]
           }
          ],
          "title": "Orientation",
          "description": "For the following questions please select an answer which you believe best describes you."
         },
         {
          "name": "page14",
          "elements": [
           {
            "type": "matrix",
            "name": "question1",
            "title": "How much confidence do you have in your ability to..",
            "columns": [
             "Strongly Disagree",
             "Disagree",
             "Neutral",
             "Agree",
             "Strongly Agree"
            ],
            "rows": [
             {
              "value": "Row 1",
              "text": "Brainstorm (come up with) a new idea for a product of service?"
             },
             {
              "value": "Row 2",
              "text": "Identify the need for a new product?"
             },
             {
              "value": "Row 3",
              "text": "Identify the need for a new product?"
             }
            ]
           },
           {
            "type": "rating",
            "name": "question35",
            "title": "Brainstorm (come up with) a new idea for a product of service?",
            "valueName": "motivated",
            "isRequired": true,
            "rateMin": -5,
            "minRateDescription": "Least confident",
            "maxRateDescription": "Most confident"
           },
           {
            "type": "rating",
            "name": "question20",
            "title": "Identify the need for a new product?",
            "valueName": "motivated",
            "isRequired": true,
            "rateMin": -5,
            "minRateDescription": "Least confident",
            "maxRateDescription": "Most confident"
           },
           {
            "type": "rating",
            "name": "question33",
            "title": "Design a product or service that will satisfy customer needs and wants?",
            "valueName": "motivated",
            "isRequired": true,
            "rateMin": -5,
            "minRateDescription": "Least confident",
            "maxRateDescription": "Most confident"
           },
           {
            "type": "rating",
            "name": "question34",
            "title": "Estimate customer demand for a new product or service?",
            "isRequired": true,
            "rateMin": -5,
            "minRateDescription": "Least confident",
            "maxRateDescription": "Most confident"
           },
           {
            "type": "rating",
            "name": "question36",
            "title": "Determine a competitibe price for a new product or service?"
           },
           {
            "type": "rating",
            "name": "question37",
            "title": "Estimate the amount of start-up funds and working capital necessary to start my business?"
           },
           {
            "type": "rating",
            "name": "question38",
            "title": "Design an effective marketing/advertising campaign for a new product or service?"
           },
           {
            "type": "rating",
            "name": "question21",
            "title": "Get other to identify with and believe in my vision and plans for a new business"
           },
           {
            "type": "checkbox",
            "name": "question22",
            "title": "Marshaling - how much confidence do you have in your ability to...",
            "isRequired": true,
            "choices": [
             {
              "value": "item1",
              "text": "Get others to identify with and believe in my vision and plans for a new business"
             },
             {
              "value": "item2",
              "text": "Network — i.e., make contact with and exchange information with others"
             },
             {
              "value": "item3",
              "text": "Clearly and concisely explain verbally/in writing my business idea in everyday terms"
             }
            ]
           },
           {
            "type": "checkbox",
            "name": "question23",
            "title": "Implementing people - how much confidence do you have in your ability to...",
            "isRequired": true,
            "choices": [
             {
              "value": "item1",
              "text": "Supervise employees"
             },
             {
              "value": "item2",
              "text": "Recruit and hire employees"
             },
             {
              "value": "item3",
              "text": "Delegate tasks and responsibilities to employees in my business"
             },
             {
              "value": "item4",
              "text": "Deal effectively with day-to-day problems and crises "
             },
             {
              "value": "item5",
              "text": "Inspire, encourage, and motivate my employees"
             },
             {
              "value": "item6",
              "text": "Train employees"
             }
            ]
           },
           {
            "type": "checkbox",
            "name": "question24",
            "title": "Implementing financial - how much confidence do you have in your ability to...",
            "isRequired": true,
            "choices": [
             {
              "value": "item1",
              "text": "Organize and maintain the financial records of my business"
             },
             {
              "value": "item2",
              "text": "Manage the financial assets of my business"
             },
             {
              "value": "item3",
              "text": "Read and interpret financial statements"
             }
            ]
           },
           {
            "type": "checkbox",
            "name": "question25",
            "title": "Attitude towards starting a business",
            "isRequired": true,
            "choices": [
             {
              "value": "item1",
              "text": "Worthless"
             },
             {
              "value": "item2",
              "text": "Worthwhile"
             },
             {
              "value": "item3",
              "text": "Disapointing"
             }
            ]
           },
           {
            "type": "checkbox",
            "name": "question26",
            "title": "Have you participated in any of the following in your life",
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
          "title": "Self-Efficacy",
          "description": "For the following questions please answer how much confidence you have in your ability on a scale from 1 to 5 . "
         },
         {
          "name": "page15",
          "elements": [
           {
            "type": "checkbox",
            "name": "question27",
            "title": "Please select one that best describes yourself",
            "isRequired": true,
            "choices": [
             {
              "value": "item1",
              "text": "I try to excel at whatever I do"
             },
             {
              "value": "item2",
              "text": "It is important to me that I achieve at a high level"
             },
             {
              "value": "item3",
              "text": "It is not important to me to be the best"
             },
             {
              "value": "item4",
              "text": "I want to be the best at what I do"
             },
             {
              "value": "item5",
              "text": "I'm driven by a desire to achieve significant goals"
             }
            ]
           }
          ],
          "title": "Need to achieve"
         },
         {
          "name": "page16",
          "elements": [
           {
            "type": "checkbox",
            "name": "question28",
            "title": "Please select those which best describe you",
            "isRequired": true,
            "choices": [
             {
              "value": "item1",
              "text": "New ideas and projects sometimes distract me from previous ones"
             },
             {
              "value": "item2",
              "text": "Setbacks don’t discourage me. I don’t give up easily"
             },
             {
              "value": "item3",
              "text": "I often set a goal but later choose to pursue a different one"
             },
             {
              "value": "item4",
              "text": "I am a hard worker"
             },
             {
              "value": "item5",
              "text": "I have difficulty maintaining my focus on projects that take more than a few months to complete"
             },
             {
              "value": "item6",
              "text": "I finish whatever I begin"
             },
             {
              "value": "item7",
              "text": "My interests change from year to year"
             },
             {
              "value": "item8",
              "text": "I am diligent. I never give up"
             },
             {
              "value": "item9",
              "text": "I have been obsessed with a certain idea or project for a short time but later lost interest"
             }
            ]
           }
          ],
          "title": "Grit"
         },
         {
          "name": "page17",
          "elements": [
           {
            "type": "checkbox",
            "name": "question29",
            "title": "Please select those that best describe you",
            "isRequired": true,
            "choices": [
             {
              "value": "item1",
              "text": "I don’t tolerate ambiguous situations very well"
             },
             {
              "value": "item2",
              "text": "I would rather avoid solving a problem that must be viewed from several different perspectives"
             },
             {
              "value": "item3",
              "text": " I try to avoid situations that are ambiguous"
             },
             {
              "value": "item4",
              "text": "I prefer familiar situations to new ones"
             },
             {
              "value": "item5",
              "text": "Problems that cannot be considered from just one point of view are a little threatening"
             },
             {
              "value": "item6",
              "text": "I avoid situations that are too complicated for me to easily understand"
             },
             {
              "value": "item7",
              "text": "I am tolerant of ambiguous situations"
             },
             {
              "value": "item8",
              "text": " I enjoy tackling problems that are complex enough to be ambiguous"
             },
             {
              "value": "item9",
              "text": "I try to avoid problems that don’t seem to have only one “best” solution"
             },
             {
              "value": "item10",
              "text": "I generally prefer novelty over familiarity"
             },
             {
              "value": "item11",
              "text": "I dislike ambiguous situations"
             },
             {
              "value": "item12",
              "text": "I find it hard to make a choice when the outcome is uncertain"
             },
             {
              "value": "item13",
              "text": "I prefer a situation in which there is some ambiguity"
             }
            ]
           }
          ],
          "title": "Tolerance for ambiguity"
         },
         {
          "name": "page18",
          "elements": [
           {
            "type": "checkbox",
            "name": "question30",
            "title": "Please select answers that best describe you",
            "isRequired": true,
            "choices": [
             {
              "value": "item1",
              "text": "I am able to adapt when changes occur"
             },
             {
              "value": "item2",
              "text": "I can deal with whatever comes my way"
             },
             {
              "value": "item3",
              "text": "I try to see the humorous side of things when I am faced with problems"
             },
             {
              "value": "item4",
              "text": "Having to cope with stress can make me stronger"
             },
             {
              "value": "item5",
              "text": "I tend to bounce back after illness, injury or other hardships"
             },
             {
              "value": "item6",
              "text": "I believe I can achieve my goals, even if there are obstacles"
             },
             {
              "value": "item7",
              "text": "Under pressure, I stay focused and think clearly"
             },
             {
              "value": "item8",
              "text": "I am not easily discouraged by failure"
             },
             {
              "value": "item9",
              "text": "I think of myself as a strong person when dealing with life’s challenges and difficulties"
             }
            ]
           }
          ],
          "title": "Resiliance"
         },
         {
          "name": "page19",
          "elements": [
           {
            "type": "checkbox",
            "name": "question31",
            "title": "Please select answers which best describe you",
            "isRequired": true,
            "choices": [
             {
              "value": "item1",
              "text": "I am satisfied with the success I have achieved in my career"
             },
             {
              "value": "item2",
              "text": "I am satisfied with the progress I have made toward meeting my overall career goals"
             },
             {
              "value": "item3",
              "text": "I am satisfied with the progress I have made toward meeting my goals for income"
             },
             {
              "value": "item4",
              "text": "I am satisfied with the progress I have made toward meeting my goals for advancement"
             },
             {
              "value": "item5",
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
