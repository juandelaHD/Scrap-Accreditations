# Scraping Accreditations

## Overview

Scrap-Accreditation is a usefull WhatsApp bot designed to scrape data from a specified website. By default, it is configured to scrape the accreditation website of River Plate. It waits for a user's request via WhatsApp to provide the latest updates from the site, ensuring you get the lastest information only when you need it.

It is built for easy deployment on container services like `Railway`, leveraging the included Dockerfile for seamless integration and operation. This bot automates the process of data extraction through WhatsApp, making it a robust solution for various scraping needs.

## Features

- **WhatsApp Bot:** Automates interaction and data scraping tasks through WhatsApp.
- **Web Scraping:** Efficiently extracts data from a targeted website.
- **Docker Integration:** Ready-to-use Dockerfile for hassle-free deployment on services like Railway.
- **User-Friendly:** Simple setup and installation process.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your local machine.
- Docker installed if you plan to deploy using Docker.
- WhatsApp account for bot interaction.

## Installation

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/juandelaHD/Scrap-Accreditations.git
    cd Scrap-Accreditations
    ```

2. **Install Dependencies:**
    ```bash
    npm install
    ```

## Usage

1. **Start the Bot:**
    ```bash
    npm start
    ```

2. **Scan QR:**
    - After starting the bot, a QR code image will be generated in the directory.
    - Open WhatsApp on your phone where the bot is going to be deployed and go to `Settings > Linked Devices`
    - Scan the QR code with your phone to link this bot with the WhatsApp account.

## Configuration

To configure the bot, update the necessary settings in the `app.js` file. This includes specifying the target website for scraping and any WhatsApp-specific configurations.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
