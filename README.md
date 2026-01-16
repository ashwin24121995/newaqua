# AQUASTRUCT Casino - Deployment Guide

This document provides instructions on how to deploy the AQUASTRUCT social casino website.

## Requirements

- A web server with **PHP 7.4+ support**.
- A domain name.

## Deployment Steps

1.  **Upload Files**: Unzip the `aquastruct_casino.zip` file. Upload the entire contents of the `aquastruct_casino` directory to the root directory of your web server (e.g., `public_html`, `www`, or `htdocs`).

2.  **Configure Domain**: Point your domain name to the root directory where you uploaded the files.

3.  **Test**: Open your domain in a web browser. The homepage should load, and all links and games should be functional.

## Key Features

- **No Database Required**: The website is built with a file-based architecture and does not require a database.
- **Easy Customization**: You can easily change the logo, colors, and company details by editing the `header.php`, `footer.php`, and `styles.css` files.
- **Responsive Design**: The website is fully responsive and works on desktop, tablet, and mobile devices.

## File Structure

- `index.php`: The main homepage.
- `header.php`: The global header, including navigation and branding.
- `footer.php`: The global footer, including company information and legal links.
- `styles.css`: The main stylesheet for the website.
- `script.js`: The main JavaScript file for virtual currency management.
- `assets/`: Contains all static assets, including the logo and favicon.
- `games/`: Contains the individual PHP files for each of the 11 casino games.

## Important Notes

- **Virtual Currency**: The virtual currency system is managed using the browser's `localStorage`. The balance is not stored on the server.
- **No User Accounts**: The platform does not have a user registration or login system.
- **Entertainment Only**: This is a social casino for entertainment purposes only. No real money is involved.
