# Instructions

- `npm run dev` to start in dev mode

- `npm run test` to test

- `npm run start` to start in cluster mode using pm2 (let's say productionish)

# Notes

- Please keep in mind that I tried to follow as many best practices(Structure, Patterns, Unit Tests, Integration tests, Reliability and Availability) as I can withing the very very limited time I can spend on this
- I know that some dependencies can be moved to dev deps, but i haven't done this due to time constraints
- I included functionality for search alone, didn't have time to implement sort functionality. But I included a comment in the Data Provider, trying to explain how I would implement that functionality in 1-2 lines.
- I have used dynamic `import` to load json file. I would never load json files into express and serve them in production. This is for pure convenience. But instead of using `fs.readFile`, I used import as it would cache the file after initial load(Good because it's small and fast.. Bad in production). But this means data changes in the file after initial load won't be reflected in the API responses.
- But if json is not encoded in `Unicode/UTF-8`, you'd have to use `fs.readFile` as it supports encodings such as `ascii or latin1 or even base64` (yes, yes, I hear you, no one saves JSON as base64)
- I wrote Integration Tests with `Supertest`
- I used `jest` for unit test
- Ideally I use `swagger-ui-express` & `swagger.json` to generate docs for express API's. I implemented a middleware at `./src/middleware/apiDocs.ts` to show how I would do it.
- Also this is my goto place for Node best practices https://twitter.com/nodepractices/. But it is not complete. yet!
