const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Enable CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Function to calculate the departure time for each train in the next 12 hours
function calculateNext12HoursDepartureTimes() {
  const currentTime = new Date();
  const next12Hours = new Date(currentTime.getTime() + 12 * 60 * 60 * 1000);

  const trainScheduleData = [
    {
      trainname: 'Train A',
      trainnumber: 'TRN001',
      seatsavailable: 120,
      price: 25.00,
      delayedBy: '10 minutes',
    },
    {
      trainname: 'Train B',
      trainnumber: 'TRN002',
      seatsavailable: 80,
      price: 30,
      delayedBy: '5 minutes',
    },
    {
      trainname: 'Train C',
      trainnumber: 'TRN003',
      seatsavailable: 100,
      price: 2000,
      delayedBy: 'No delay',
    },
    {
      trainname: 'Train D',
      trainnumber: 'TRN004',
      seatsavailable: 50,
      price: 1000,
      delayedBy: 'No delay',
    },
    {
      trainname: 'Train E',
      trainnumber: 'TRN005',
      seatsavailable: 10,
      price: 1500,
      delayedBy: 'No delay',
    },
    {
      trainname: 'Train F',
      trainnumber: 'TRN006',
      seatsavailable: 105,
      price: 105,
      delayedBy: 'No delay',
    },
    {
      trainname: 'Train G',
      trainnumber: 'TRN007',
      seatsavailable: 105,
      price: 135,
      delayedBy: 'No delay',
    },
    {
      trainname: 'Train H',
      trainnumber: 'TRN008',
      seatsavailable: 70,
      price: 70,
      delayedBy: '5 minutes',
    },
    {
      trainname: 'Train I',
      trainnumber: 'TRN009',
      seatsavailable: 90,
      price: 320,
      delayedBy: '5 minutes',
    },
    {
      trainname: 'Train J',
      trainnumber: 'TRN010',
      seatsavailable: 50,
      price: 30,
      delayedBy: '5 minutes',
    },
    {
      trainname: 'Train K',
      trainnumber: 'TRN011',
      seatsavailable: 82,
      price: 85,
      delayedBy: '5 minutes',
    },
    {
      trainname: 'Train L',
      trainnumber: 'TRN012',
      seatsavailable: 10,
      price: 100,
      delayedBy: 'No delay',
    },
    {
      trainname: 'Train M',
      trainnumber: 'TRN013',
      seatsavailable: 60,
      price: 320,
      delayedBy: '10 minutes',
    },
    {
      trainname: 'Train N',
      trainnumber: 'TRN014',
      seatsavailable: 50,
      price: 40,
      delayedBy: '10 minutes',
    },
    {
      trainname: 'Train O',
      trainnumber: 'TRN015',
      seatsavailable: 640,
      price: 300,
      delayedBy: '10 minutes',
    },
    {
      trainname: 'Train P',
      trainnumber: 'TRN016',
      seatsavailable: 90,
      price: 320,
      delayedBy: '5 minutes',
    },
    {
      trainname: 'Train Q',
      trainnumber: 'TRN017',
      seatsavailable: 100,
      price: 30,
      delayedBy: '5 minutes',
    },
    {
      trainname: 'Train R',
      trainnumber: 'TRN018',
      seatsavailable: 90,
      price: 320,
      delayedBy: '5 minutes',
    },
    {
      trainname: 'Train S',
      trainnumber: 'TRN019',
      seatsavailable: 10,
      price: 100,
      delayedBy: 'No delay',
    },
    {
      trainname: 'Train T',
      trainnumber: 'TRN020',
      seatsavailable: 10,
      price: 100,
      delayedBy: 'No delay',
    },
    {
      trainname: 'Train U',
      trainnumber: 'TRN021',
      seatsavailable: 100,
      price: 100,
      delayedBy: 'No delay',
    },
    {
      trainname: 'Train V',
      trainnumber: 'TRN022',
      seatsavailable: 10,
      price: 100,
      delayedBy: 'No delay',
    },
    {
      trainname: 'Train W',
      trainnumber: 'TRN023',
      seatsavailable: 100,
      price: 100,
      delayedBy: 'No delay',
    },
    {
      trainname: 'Train X',
      trainnumber: 'TRN024',
      seatsavailable: 100,
      price: 100,
      delayedBy: 'No delay',
    },
    {
      trainname: 'Train Y',
      trainnumber: 'TRN025',
      seatsavailable: 10,
      price: 100,
      delayedBy: 'No delay',
    },
    {
      trainname: 'Train Z',
      trainnumber: 'TRN026',
      seatsavailable: 10,
      price: 100,
      delayedBy: 'No delay',
    },


  ];

// real-time departure time for each train
  for (const train of trainScheduleData) {
    train.departuretime = new Date(
      currentTime.getTime() +
      Math.random() * (next12Hours.getTime() - currentTime.getTime())
    ).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  }

  return trainScheduleData;
}

app.get('/api/train-schedule', (req, res) => {
  const next12HoursTrains = calculateNext12HoursDepartureTimes();
  res.json(next12HoursTrains);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
