# Codegate Sample Download App

This repository contains a simple Express server that provides a web page for entering a download code. When the code matches, the server sends the requested file.

## Setup

Install dependencies:

```bash
npm install
```

## Usage

Create a `.env` file and set your desired code:

```bash
echo "DOWNLOAD_CODE=your_secret" > .env
```

Install dependencies and start the server with:

```bash
node server.js
```

Then visit [http://localhost:3000](http://localhost:3000) in your browser and enter the download code you configured in `.env` to receive the sample file.
