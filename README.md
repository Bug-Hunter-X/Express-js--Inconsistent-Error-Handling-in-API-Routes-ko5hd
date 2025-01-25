# Express.js Inconsistent Error Handling

This repository demonstrates a common error in Express.js applications: inconsistent error handling across different API routes.  The `/users/:id` route correctly handles the case where a user is not found, returning a 404 status code.  However, the `/users` route, which fetches all users, uses a 500 status code even if there are simply no users.  A 200 status with an empty array would be more appropriate.

## Bug Description

The `/users` route lacks proper error handling. A missing user list should result in a 200 OK response with an empty array, not a 500 Internal Server Error. This inconsistency can lead to confusion for clients and make it harder to debug issues.

## Solution

The solution involves modifying the `/users` route to return a 200 OK status code with an empty array when no users are found. This maintains consistency with the error handling in other routes and provides a more informative response to clients.