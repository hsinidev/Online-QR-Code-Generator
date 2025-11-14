# 🚀 Online QR Code Generator 🚀

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Technology: React](https://img.shields.io/badge/tech-React-61DAFB.svg?logo=react)
![Styling: TailwindCSS](https://img.shields.io/badge/style-TailwindCSS-38B2AC.svg?logo=tailwind-css)

A modern, responsive, and privacy-focused web application to instantly generate and download custom QR codes. Built with React and Tailwind CSS, this tool provides a seamless user experience with a live-preview editor and an immersive, animated galaxy-themed interface.

---

## ✨ Key Features

-   **⚡ Instant Generation:** QR codes are generated in real-time as you type.
-   **📄 Multiple Content Types:** Supports URLs, Plain Text, Phone Numbers, and Email Addresses.
-   **🎨 Full Customization:**
    -   Live color pickers for foreground (dots) and background.
    -   WYSIWYG preview panel that reflects your color choices.
    -   Adjust the output size from 100px to 1000px with a simple slider.
-   **📥 High-Quality Downloads:** Download your generated QR code as a high-resolution PNG file.
-   **🔒 100% Privacy-Focused:** All generation happens client-side in your browser. Your data is **never** sent to a server.
-   **📱 Fully Responsive:** A clean and friendly interface that works beautifully on desktops, tablets, and mobile devices.
-   **📚 SEO-Optimized Content:** Includes a comprehensive, 3500-word guide on QR code technology, best practices, and use cases to provide value and improve search rankings.

## 📸 Sneak Peek

*The application interface showing the customization controls and the live QR code preview.*

 

---

## 🛠️ Tech Stack

-   **Core Framework:** [React](https://reactjs.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **QR Code Generation:** [qrcode.js](https://github.com/soldair/node-qrcode) (via CDN)
-   **Deployment:** Static HTML/JS/CSS (deployable on any static hosting service like Vercel, Netlify, or GitHub Pages).

## 🚀 Getting Started

To run this project locally, follow these simple steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/hsinidev/online-qr-code-generator.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd online-qr-code-generator
    ```
3.  **Open `index.html` in your browser:**
    You can simply double-click the `index.html` file or use a live server extension in your code editor (like Live Server for VS Code) for a better development experience with hot-reloading.

## 📂 Project Structure

```
/
├── components/
│   ├── Layout.tsx         # Main layout with header, footer, modals
│   ├── QRCodeTool.tsx     # The core QR code generator UI and logic
│   └── SeoArticle.tsx     # The collapsible 3500-word SEO article
├── public/
│   └── favicon.svg        # Application favicon
├── App.tsx                # Root React component
├── index.html             # The main HTML entry point
├── index.tsx              # React DOM render entry point
├── README.md              # You are here!
└── types.ts               # TypeScript type definitions
```

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. This project is free and open-source.

---

## ✍️ Author & Contact

**HSINI MOHAMED**

-   **GitHub:** [@hsinidev](https://github.com/hsinidev)
-   **Portfolio:** [doodax.com](https://doodax.com)
-   **Email:** [hsini.web@gmail.com](mailto:hsini.web@gmail.com)