const shifts = [
   {
      id: "1",
      shiftName: "Сидоров",
      shift: [
         {
            id: "1",
            place: "УПМ",
            timeStart: "08.00",
            timeEnd: "20.00",
            driver: {
               name: "Сидоров Сидор Сидорович",
               uniqNumber: "123456",
               driverLicence: "7010 234512",
            },
            car: {
               name: "Senneboggen 825M",
               carUniqNumber: "2345566",
               stateNumber: "45-54",
            },
         },
         {
            id: "2",
            place: "КУ",
            timeStart: "20.00",
            timeEnd: "08.00",
            driver: {
               name: "Петров Петр Петрович",
               uniqNumber: "234567",
               driverLicence: "2018 288333",
            },
            car: {
               name: "КАМАЗ",
               stateNumber: "Т542КР 71",
               carUniqNumber: "3334442",
            },
         },
         {
            id: "3",
            place: "УПМ",
            timeStart: "08.00",
            timeEnd: "17.00",
            driver: {
               name: "Евгений Евгенин Евгеньевич",
               uniqNumber: "3344556",
               driverLicence: "1119 200333",
            },
            car: {
               name: "ГАЗЕЛЬ",
               stateNumber: "У144АА 71",
               carUniqNumber: "6655443",
            },
         },
      ],
   },
   {
      id: "2",
      shiftName: "Петров",
      shift: [
         {
            id: "1",
            place: "КУ",
            timeStart: "08.00",
            timeEnd: "17.00",
            driver: {
               name: "Иванов Иван Иванович",
               uniqNumber: "888776",
               driverLicence: "1829304",
            },
            car: {
               name: "FUCHS TERREX",
               carUniqNumber: "8855446",
               stateNumber: "76-34",
            },
         },
         {
            id: "2",
            place: "УПМ",
            timeStart: "20.00",
            timeEnd: "08.00",
            driver: {
               name: "Филатов Евгений Филатович",
               uniqNumber: "7744125",
               driverLicence: "2018 288333",
            },
            car: {
               name: "АСК 1к1",
               stateNumber: "Т670КУ 71",
               carUniqNumber: "88552222",
            },
         },
         {
            id: "3",
            place: "УПМ",
            timeStart: "08.00",
            timeEnd: "17.00",
            driver: {
               name: "Надежда Надежна Надеждовна",
               uniqNumber: "7777887",
               driverLicence: "1119 200333",
            },
            car: {
               name: "MERCEDES",
               stateNumber: "У286ВЕ 71",
               carUniqNumber: "2299334",
            },
         },
      ],
   }
]

export default shifts;