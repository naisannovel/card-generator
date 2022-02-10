const userInfo = [{
        name: "Mr Rashed",
        birthYear: 1999,
        currentYear: 2022,
        district: 'Dhaka',
        postNo: 1200,
        priority: 2
    },
    {
        name: "Mr Raju",
        birthYear: 1995,
        currentYear: 2022,
        district: 'Rajshahi',
        postNo: 1211,
        priority: 1
    }
]


function cardDistribution(data) {

    const generatedCards = [];

    // generate card

    for (let i = 0; i < data.length; i++) {

        const district = data[i].district.trim().slice(0, 2).toUpperCase();
        const currentYear = data[i].currentYear.toString().trim();
        const currentYearLastTwoDigit = currentYear.slice(currentYear.length - 2, currentYear.length);
        const postal = data[i].postNo.toString().trim();
        const postalFirstTwoDigit = postal.slice(0, 2);
        const birthDate = data[i].birthYear.toString().trim();

        let cardNumberByUserInfo = district + currentYearLastTwoDigit + postalFirstTwoDigit + birthDate;

        while (cardNumberByUserInfo.length < 15) cardNumberByUserInfo = cardNumberByUserInfo + '0'

        const generateRandomNum = Math.ceil(Math.random() * 2).toString();
        const card = {
            cardNumber: cardNumberByUserInfo + generateRandomNum
        };
        if (generateRandomNum % 2 === 0) {
            card.gift = 'R'
        } else {
            card.gift = 'W'
        }
        card.priority = data[i].priority;
        generatedCards.push(card);
    }

    // sort by priority 

    for (i = 0; i <= generatedCards.length - 1; i++) {
        for (j = i + 1; j <= generatedCards.length - 1; j++) {

            if (generatedCards[i].priority > generatedCards[j].priority) {
                const temp = generatedCards[i];
                generatedCards[i] = generatedCards[j];
                generatedCards[j] = temp;
            }
        }
    }
    return generatedCards;

}

const result = cardDistribution(userInfo)
console.log(result);