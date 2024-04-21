
# Bus_ticket_booking_sample

Bus_ticket_booking_sample is a MERN stack project. In this project, People can buy a bus ticket through online by selecting the seats whatever we want. And also people can pay for Bus ticket booking with the use of PhonePe Gateway. This is a Test model, So people can only express the how it will work. And no real money is debited.


## Table of Contents

- [1. Title and Description](#1-title-and-description)
- [2. Table of Contents](#2-table-of-contents)
- [3. Installation](#3-installation)
- [4. Usage](#4-usage)
- [5. Features](#5-features)
- [6. Contributing](#6-contributing)
- [7. License](#7-license)
## Installation

Download code (or) Repository Clone to be used for getting the code in your local machine

Install my-project with npm
@Terminal 1
```
cd server
npm i express axios uniqid sha256 cors
```

@Terminal 2
```
cd client
npm install
```

- To start frontend
```
  npm start
```

- To start backend
```
 node index.js
```

    
## Usage/Examples

- To pay
- Selecting Bus Seats
```
http://localhost:3000/
```
 If you start the page, It will directly kept you to the Bus Seat Selecting Page. There we can select required seats in required position. Than we can buy by clicking the "make payment" button.

  Follow the payment process to complete the payment. It was test module, So it can't debit any original amount.

  Use card number 4242-4242-4242-4242
  other details you can put any related inputs.



## Features

- Payment (PhonePe)
- Selecting Bus Tickets


## Tech Stack

**Client:** React, Redux, Axios

**Server:** Node, Express

