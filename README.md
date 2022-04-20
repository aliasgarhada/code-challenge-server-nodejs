# Pragmateam code challenge server (NodeJS)

Please refer to the provided document for the code challenge requirements. 

## Available scripts

- `npm start` - Start the application (Port 8081)
- `npm test` - Runs available tests



## changelog

- two separate endpoints. One for fetching temperature by productId and other to fetch it for all products.
- added jest dependencies for test cases
- Moved product catalog constant from Frontend to backend
- validate productId from the input payload
- Error throw in case of service URL reachability issues
- Added test cases for basic success, failure and validation scenarios.