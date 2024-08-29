# Project Name

This project is a backend service that provides API endpoints for managing cards with titles, descriptions, and links. The service is built using Node.js and can be run in development mode.

## Available Scripts

In the project directory, you can run the following commands:

### `cd backend`
### `npm run dev`

Runs the app in development mode.  
Open [http://localhost:4000](http://localhost:4000) to view it in your browser.

The server will reload when you make changes to the code, and you may also see any lint errors in the console.

## API Routes

### 1. GET `/api/v1/cards`
- **Description:** Fetches all cards.
- **Request Body:** None.
- **Response:**
  ```json
  [
    {
      "id": "1",
      "title": "Card Title 1",
      "description": "Description of the first card",
      "link": "https://example.com/link1"
    },
    {
      "id": "2",
      "title": "Card Title 2",
      "description": "Description of the second card",
      "link": "https://example.com/link2"
    }
  ]


### 2. GET `/api/v1/cards/:title`
- **Description:** fetch card by title.
- **Request Body:** None.
- **Response:**
  ```json
  [
    {
  "id": "1",
  "title": "Card Title 1",
  "description": "Description of the first card",
  "link": "https://example.com/link1"
}

  ]

### 3. POST `/api/v1/cards`
- **Description:** create a card.
- **Request Body:** {
  "title": "New Card Title",
  "description": "Description of the new card",
  "link": "https://example.com/newlink"
}
.
- **Response:**
  ```json
  {
  "id": "3",
  "title": "New Card Title",
  "description": "Description of the new card",
  "link": "https://example.com/newlink",
  "message": "Card created successfully"
}




###
