# 🚗 CarConnect: A Marketplace for Cars 🚀

Welcome to **CarConnect**, the ultimate marketplace for buying and selling cars! This full-stack application is designed with performance, scalability, and user engagement in mind. It leverages a modern tech stack to deliver an intuitive, responsive, and secure user experience.

<center><img src="public/image.png" alt="IMAGE"/></center>

## 📈 Key Features

- 🎨 **Responsive UI with React & Tailwind CSS:** Built a clean and modern user interface using **React** and **Tailwind CSS**, ensuring an optimized user experience across all devices.
  
- 🔐 **Secure Authentication with Clerk:** Integrated **Clerk** for robust user authentication, providing seamless access control and keeping user data safe.

- 💬 **Real-time Messaging with Sendbird:** Enabled real-time communication between buyers and sellers using **Sendbird**, fostering user interaction within the marketplace.

- 🗄️ **Efficient Data Management with Drizzle ORM:** Simplified database interactions using **Drizzle ORM**, improving performance and data handling capabilities.

- 🛠️ **Component Library with ShadCN:** Utilized **ShadCN** to craft reusable and scalable components for a seamless user interface experience.

- 🔧 **API Integration with Acernity:** Integrated **Acernity** APIs for advanced data processing and enhancing marketplace functionality.

- 📊 **Mock Data with Faker.dev:** Used **Faker.dev** for generating realistic mock data, making the development and testing process smoother.

- 🚀 **Deployment on Vercel:** Deployed the application to production with **Netlify** for fast, reliable, and scalable hosting.

## 🛠️ Tech Stack

- **Frontend:** React, Tailwind CSS ⚛️
- **Authentication:** Clerk 🔑
- **Real-time Messaging:** Sendbird 💬
- **Database ORM:** Drizzle ORM 🗄️
- **Component Library:** ShadCN 🛠️
- **Mock Data:** Faker.dev 📊
- **APIs:** Acernity 🌐
- **Deployment:** Netlify 🚀

## 🚀 Live Demo

Check out the live version of CarConnect here: [CarConnect on Netlify](https://car-connect-marketplace.netlify.app/)

## 📥 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/utsavpatel562/CarConnect.git

### Install dependencies:
```bash
cd CarConnect
```

### Create a .env.local file in the root directory of the project.
```bash
VITE_CLERK_PUBLISHABLE_KEY= Your_API_key
VITE_DRIZZLE_DATABASE_URL= Your_API_key
VITE_FIREBASE_API_KEY= Your_API_key
VITE_FIREBASE_AUTH_DOMAIN= Your_API_key
VITE_FIREBASE_PROJECT_ID= Your_API_key
VITE_FIREBASE_STORAGE_BUCKET= Your_API_key
VITE_FIREBASE_MESSAGING_SENDER_ID= Your_API_key
VITE_FIREBASE_APP_ID= Your_API_key
VITE_FIREBASE_MEASUREMENT_ID= Your_API_key
VITE_SENDBIRD_APP_ID= Your_API_key
VITE_SENDBIRD_API_TOKEN= Your_API_key
```

### Configure Drizzle ORM in drizzle.config.js
```bash
export default {
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: "YOUR_DRIZZLE_ORM_KEY_HERE",
    }
  };
```

### Run the app:
```
npm run dev
```

### 🧑‍💻 Contributing
Contributions are welcome! If you find a bug or want to add new features, feel free to submit an issue or a pull request. 🎉

### 🛡️ License
This project is licensed under the MIT License. See the LICENSE file for more details.

Made with ❤️ by Utsav Patel
