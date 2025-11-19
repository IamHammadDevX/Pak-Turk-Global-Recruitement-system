# PAK TURK GLOBAL - Website Project

This is the official website source code for **PAK TURK GLOBAL**, a manpower recruitment agency. This guide will help you set up and run the project on your local Windows machine.

## Prerequisites

Before you begin, you must have **Node.js** installed on your computer.

1.  **Download Node.js**: Go to [https://nodejs.org/](https://nodejs.org/) and download the **LTS version** (Recommended for most users).
2.  **Install**: Run the downloaded installer (`.msi` file) and follow the on-screen instructions (keep clicking "Next" and "Install").
3.  **Verify**: Open your Command Prompt (search "cmd" in Windows start menu) and type:
    ```bash
    node -v
    npm -v
    ```
    If you see version numbers, you are ready to go.

---

## Step-by-Step Installation Guide

### 1. Project Setup
1.  Create a new folder on your desktop (or anywhere you prefer) named `PakTurkGlobal`.
2.  Inside this folder, ensure all the project files provided (like `index.html`, `index.tsx`, `package.json`, etc.) are saved.
    *   *Note: Ensure the folder structure matches the imports. e.g., `App.tsx` should be in the root, and components inside a `components` folder.*

### 2. Install Dependencies
1.  Open the **Command Prompt** or **PowerShell**.
2.  Navigate to your project folder. You can do this by typing `cd` followed by the folder path.
    *   *Tip: You can open the folder in File Explorer, copy the path from the address bar, and type:*
        ```bash
        cd "C:\Users\YourName\Desktop\PakTurkGlobal"
        ```
3.  Run the installation command to download the required libraries (React, etc.):
    ```bash
    npm install
    ```
    *This may take a minute. It will create a `node_modules` folder.*

### 3. Run the Project
1.  Once the installation finishes, start the local development server:
    ```bash
    npm run dev
    ```
2.  You will see output like:
    ```
      VITE v5.0.0  ready in 250 ms

      ➜  Local:   http://localhost:5173/
      ➜  Network: use --host to expose
    ```
3.  Open your web browser (Chrome, Edge, etc.) and go to: **http://localhost:5173/**

🎉 **Success!** You should now see the PAK TURK GLOBAL website running locally.

---

## Project Structure

*   **src/**: (Root) Contains the main logic.
*   **components/**: Reusable UI parts (Header, Footer, Forms).
*   **pages/**: Individual page layouts (Home, About, Contact).
*   **index.html**: The entry HTML file.
*   **package.json**: Lists all libraries used.
*   **vite.config.ts**: Settings for the build tool.

## Troubleshooting

*   **"npm is not recognized..."**: You likely didn't install Node.js or didn't restart your command prompt after installing it.
*   **Port already in use**: If 5173 is taken, check the command prompt output; it will usually switch to 5174 automatically.
