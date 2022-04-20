# Pragmateam code challenge server (NodeJS)

Please refer to the provided document for the code challenge requirements. 

## Available scripts

- `npm start` - Start the application (Port 8081)
- `npm test` - Runs available tests



## changelog

- Two separate endpoints. One for fetching temperature by productId and other to fetch it for all products.
- Added jest dependencies for test cases
- Moved product catalog constant from Frontend to backend
- Validate productId from the input payload
- Error throw in case of service URL reachability issues
- Added test cases for basic success, failure and validation scenarios.

# todo

- Custom response code based on failure can be added like 400, 401 and 500
- Authentication can be added
- More detailed testcases at method level can be added for functions like: getServiceUrl, deriveStatus, isValidProductId
- Dependency injection can be added with framework like 'inversify'