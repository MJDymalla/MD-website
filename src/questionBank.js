const qBank = [
    // FIRST TREE
    {
        question:
            "Do you own a business?",
        answers: ['Yes', 'No'],
        questionId: 1,
    },
    {
        question:
            "Are you the founder of the business?",
        answers: ['Yes', 'No'],
        questionId: 2,
        condition:  (answers)=>answers[1] === 'No'    
    },
    {
        question:
            "What were your individual earnings over the last 12 months (AUD)?",
        answers: ['<0', '0 - 10,000', '10,001 - 50,000', '50,001 - 100,000', '100,001 - 250,000', '250,001 - 500,000', '500,001+'],
        questionId: 3,
        condition: (answers)=>answers[2] === 'Yes' || answers[2] === 'No'   
    },
    {
        question:
            "How many businesses have you previously started?",
        answers: ['0', '1', '2', '3+'],
        questionId: 4,
        condition: (answers)=>answers[3] === '<0' || answers[3] === '0 - 10,000' || answers[3] === '10,001 - 50,000' || answers[3] === '50,001 - 100,000' || answers[3] === '100,001 - 250,000' || answers[3] === '250,001 - 500,000' || answers[3] === '500,001+'
    },
    {
        question:
            "Do you belong to an entrepreneurship club, meetings group, network, business incubator, accelerator or club?",
        answers: ['Entrepreneurship Meeting Group', 'Online Entrepreneurship Group', 'Business Incubator', 'Business Accelerator', 'Other Business Club', 'Co-working Space', 'None of the above'],
        questionId: 5,
        condition: (answers)=>answers[4] === '0' || answers[4] === '1' || answers[4] === '2' || answers[4] === '3+'
    }, 
    {
        question:
            "Do you work as an employee of a business?",
        answers: ['Yes', 'No'],
        questionId: 6,
        condition: (answers)=>answers[5] === 'Entrepreneurship Meeting Group' || answers[5] === 'Online Entrepreneurship Group' || answers[5] === 'Business Incubator' || answers[5] === 'Business Accelerator' || answers[5] === 'Other Business Club' || answers[5] === 'Co-working Space' || answers[5] === 'None of the above'
    },
    {
        question:
            "Are you currently a student?",
        answers: ['Yes', 'No'],
        questionId: 7,
        condition: (answers)=>answers[6] === 'No' 
    },
    {
        question:
            "Where do you (principally) live in Australia?",
        answers: ['QLD', 'NSW', 'VIC', 'ACT', 'NT', 'TAS', 'WA'],
        questionId: 8,
        condition: (answers)=>answers[7] === 'Yes' || answers[7] === 'No'
    },
    {
        question:
            "Are you in the early stages of starting a business but haven't yet registered the business?",
        answers: ['Yes', 'No'],
        questionId: 9,
        condition: (answers)=>answers[8] === 'QLD' || answers[8] === 'NSW' || answers[8] === 'VIC' || answers[8] === 'ACT' || answers[8] === 'NT' || answers[8] === 'TAS' || answers[8] === 'WA'
    },
    {
        question:
            "Are you thinking of starting a business within the next 12 months?",
        answers: ['Yes', 'No'],
        questionId: 10,
        condition: (answers)=>answers[9] === 'No' 
    },
    {
        question:
            "Please indicate how much effort you applied in the context of each statement",
        answers: ['Yes', 'No'],
        questionId: 12,
        condition: (answers)=>answers[9] === 'Yes'
    },
    {
        question:
            "Which situation would you prefer",
        answers: ['Yes', 'No'],
        questionId: 11,
        condition: (answers)=>answers[10] === 'Yes' || answers[12] === 'Yes' || answers[12] === 'No'
    },
    {
        question:
            "Are you additionally in the early stages of starting a business?",
        answers: ['Yes', 'No'],
        questionId: 20,
        condition: (answers)=>answers[6] === 'Yes' 
    },
    {
        question:
            "Are you thinking of starting a business within the next 12 months?",
        answers: ['Yes', 'No'],
        questionId: 21,
        condition: (answers)=>answers[20] === 'No' 
    },
    {
        question:
            "For how many years have you worked in the business where you presently work",
        answers: ['Less than 1', '1', '2', 'More than 2'],
        questionId: 22,
        condition: (answers)=>answers[20] === 'Yes' || answers[21] === 'Yes' || answers[21] === 'No' 
    },
    {
        question:
            "Does the business sell",
        answers: ['Yes', 'No'],
        questionId: 23,
        condition: (answers)=>answers[22] === 'Less than 1' || answers[22] === '1' || answers[22] === '2' || answers[22] === 'More than 2'
    },
    {
        question:
            "How many employees does the business have, not including yourself?",
        answers: ['0', '1-4', '5-19', '20-199', '200+'],
        questionId: 24,
        condition: (answers)=>answers[23] === 'Yes' || answers[23] === 'No'
    },
    {
        question:
            "Where is the business principally located?",
        answers: ['QLD', 'NSW', 'VIC', 'ACT', 'NT', 'TAS', 'WA'],
        questionId: 25,
        condition: (answers)=>answers[24] === '0' || answers[24] === '1-4' || answers[24] === '5-19' || answers[24] === '20-199' || answers[24] === '200+'
    },
    {
        question:
            "What was the firm's total net profit generated over the last 12 months?",
        answers: ['not much', 'heaps'],
        questionId: 26,
        condition: (answers)=>answers[25] === 'QLD' || answers[25] === 'NSW' || answers[25] === 'VIC' || answers[25] === 'ACT' || answers[25] === 'NT' || answers[25] === 'TAS' || answers[25] === 'WA'
    },
    {
        question:
            "What is the main industry in which the business in which you work generates revenue?",
        answers: ['Yes', 'No'],
        questionId: 27,
        condition: (answers)=>answers[26] === 'not much' || answers[26] === 'heaps'
    },
    {
        question:
            "END OF SURVEY",
        answers: ['click here to confirm answers'],
        questionId: 28,
        condition: (answers)=>answers[27] === 'Yes' || answers[27] === 'No' || answers[11] === 'Yes' || answers[11] === 'No'
    },
    // SECOND TREE
    {
        question:
            "Are you the founder of the business?",
        answers: ['Yes', 'No'],
        questionId: 40,
        condition: (answers)=>answers[1] === 'Yes'
    },
    {
        question:
            "In what year was your business established?",
        answers: ['before 2000', 'Between 2000 & 2010', 'After 2010'],
        questionId: 41,
        condition: (answers)=>answers[40] === 'Yes' || answers[40] === 'No'
    },
    {
        question:
            "How many employees does the business have, not including yourself?",
        answers: ['Less than 10', 'Between 10-20', 'Between 20-40', 'Greater than 40'],
        questionId: 42,
        condition: (answers)=>answers[41] === 'before 2000' || answers[41] === 'Between 2000 & 2010' || answers[41] === 'After 2010'
    },
    {
        question:
            "Where is your business principally located?",
        answers: ['QLD', 'NSW', 'VIC', 'ACT', 'NT', 'TAS', 'WA'],
        questionId: 43,
        condition: (answers)=>answers[42] === 'Less than 10' || answers[42] === 'Between 10-20' || answers[42] === 'Between 20-40' || answers[42] === 'Greater than 40'
    },
    {
        question:
            "What was the new profit generated over the last 12 months (AUD)",
        answers: ['less than $100,000', 'Between $100,000 and $250,000', 'Over $250,000'],
        questionId: 44,
        condition: (answers)=>answers[43] === 'QLD' || answers[43] === 'NSW' || answers[43] === 'VIC' || answers[43] === 'ACT' || answers[43] === 'NT' || answers[43] === 'TAS' || answers[43] === 'WA'
    },
    {
        question:
            "What were your individual earnings over the last 12 months (AUD)?",
        answers: ['Less than $20,000', 'Between $20,000 & $50,000', 'Over $50,000'],
        questionId: 45,
        condition: (answers)=>answers[44] === 'less than $100,000' || answers[44] === 'Between $100,000 and $250,000' || answers[44] === 'Over $250,000'  
    },
    {
        question:
            "What is the main industry in which the business generates revenue?",
        answers: ['Finance', 'Retail', 'Real Estate', 'Education & Training'],
        questionId: 46,
        condition: (answers)=>answers[45] === 'Less than $20,000' || answers[45] === 'Between $20,000 & $50,000' || answers[45] === 'Over $50,000'
    },
    {
        question:
            "Do you belong to an entrepreneurship club, meetings group, network, business incubator, accelerator or club?",
        answers: ['Yes', 'No'],
        questionId: 47,
        condition: (answers)=>answers[46] === 'Finance' || answers[46] === 'Retail' || answers[46] === 'Real Estate' || answers[46] === 'Education & Training' 
    },
    {
        question:
            "How many previous businesses have you started?",
        answers: ['1', '2', '3', '4'],
        questionId: 48,
        condition: (answers)=>answers[47] === 'Yes' || answers[47] === 'No'
    },
    {
        question:
            "END OF SURVEY",
        answers: ['click here to confirm answers'],
        questionId: 49,
        condition: (answers)=>answers[48] === '1' || answers[48] === '2' || answers[48] === '3' || answers[48] === '4'
    },
];


export default qBank;