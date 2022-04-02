# Image Processing API 

you have to initiate form 'http://localhost:3000/api/image?name=&width=&height=' to begin to resize your image

Images you can use 
encenadaport
fjord
palmtunnel

This Project resize any given image , and return to you the resized image from your width and height
input.
------------------------------------------------------------------
Script to run :
npm run test => for running jasmine to test code
npm run dev => to start up my server 
npm run clean => to restart the project
npm run build => to compile my Typescript file to javascript
npm run format => to use prettier to redesign the code format
npm run lint => for using eslint for fixing errors
------------------------------------------------------------------
dependencies and devdependencies
"dependencies": {
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "morgan": "^1.10.0",
    "sharp": "^0.30.3"
  },
  "devDependencies": {
    "@types/express": "^4.17.13",
    "@types/jasmine": "^3.10.2",
    "@types/morgan": "^1.9.3",
    "@types/node": "^16.11.12",
    "@types/sharp": "^0.30.0",
    "@types/supertest": "^2.0.12",
    "@typescript-eslint/eslint-plugin": "^5.16.0",
    "@typescript-eslint/parser": "^5.16.0",
    "eslint": "^8.12.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-prettier": "^4.0.0",
    "jasmine": "^4.0.2",
    "jasmine-spec-reporter": "^7.0.0",
    "nodemon": "^2.0.15",
    "prettier": "^2.5.1",
    "rimraf": "^3.0.2",
    "supertest": "^6.2.2",
    "ts-node": "^10.4.0",
    "typescript": "^4.5.2"
  }
}