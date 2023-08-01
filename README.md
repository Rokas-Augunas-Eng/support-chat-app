# Chat-app

## Table of Contents

- General info
- Setup
- Results
- Improvements

## General info

A chat-app, which fecthes data from a local db. User can type into the chat-app, which will update the local db and refetch the information, to be displayed. The app uses Next.js and TypeScript.

## Setup

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First install dependencies, run the following in the terminal:

```bash
yarn install
```

Second, run the development server:

```bash
yarn dev
```

To start the server (backend) on http://localhost:8000/messages. Run the following:

```bash
yarn json-server --watch data/db.json --port 8000
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Results

Chat message icon will be displayed in the bottomn right corner.

Closed state

<img width="575" alt="Screenshot 2023-07-30 at 17 41 20" src="https://github.com/Rokas-Augunas-Eng/support-chat-app/assets/78915609/3fb990a5-3d09-4a50-ac13-6b3ef96bd97a">

Open state

<img width="575" alt="Screenshot 2023-07-30 at 17 41 11" src="https://github.com/Rokas-Augunas-Eng/support-chat-app/assets/78915609/1fcc823f-10e0-4bc3-bed7-770dcc26e5a5">

## Improvements

- More robust test to be written
- Investigate an issue with Tailwind css rendering
- Improve scrollToBottom function
- Timestamps could be added when a message is sent or received
- Implement message status (sent, delivered, read)
- Display user presence indicators (e.g., online, offline, typing) to show the status of the other user in the chat.
- Implement a notification system to alert user of new messages 
