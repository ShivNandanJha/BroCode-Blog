# Bro_CODE Blog
![Web capture_26-9-2023_20175_brocodeblog vercel app](https://github.com/ShivNandanJha/BroCode-Blog/assets/115362063/22667902-6a9c-4a89-b1b6-2eb7f54888eb)


Bro_CODE Blog is a dynamic blog website built using Next.js, NextAuth.js for authentication, Tailwind CSS for styling, and integrated with MongoDB and Firebase for data storage. It also utilizes Prisma as a headless CMS to manage content efficiently. With Bro_CODE Blog, users can easily log in using their Google accounts and start sharing their thoughts, ideas, and solutions with the world.

## Features

- **User Authentication**: Bro_CODE Blog provides a seamless authentication experience with NextAuth.js, allowing users to sign in securely using their Google accounts.

- **Create and Edit Posts**: Registered users can create new blog posts and edit existing ones. Share your insights and knowledge with the community.

- **Responsive Design**: The website is designed to look great on all devices, ensuring a consistent user experience whether you're on a desktop or a mobile device.

- **Efficient Content Management**: Prisma is used as a headless CMS, making it easy to manage and organize your blog content efficiently.

## Tech Stack

- **Next.js**: A React framework for building fast and scalable web applications.

- **NextAuth.js**: Simplify authentication with this authentication provider for Next.js.

- **Tailwind CSS**: A utility-first CSS framework that makes styling your application a breeze.

- **MongoDB**: A NoSQL database for storing user data and content.

- **Firebase**: Cloud-based storage for media files and other assets.

- **Prisma**: A modern database toolkit that simplifies database access and management.

## Getting Started

Follow these steps to get the Bro_CODE Blog project up and running on your local machine:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/bro-code-blog.git
   cd bro-code-blog
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Configure Environment Variables**:

   - Create a `.env.local` file in the project root and configure the following environment variables:

     ```env
  GOOGLE_CLIENT_ID     = google auth client id 
GOOGLE_CLIENT_SECRET = 

GITHUB_ID     = github auth token
GITHUB_SECRET = 


NEXTAUTH_URL    = http://localhost:3000
NEXTAUTH_SECRET = mysecretauth

FIREBASE= firebase token

DATABASE_URL = mongodb token

     ```

4. **Run the Development Server**:

   ```bash
   npm run dev
   ```

5. **Open Your Browser**:

   Your Bro_CODE Blog should now be running at `http://localhost:3000`. Open this URL in your web browser to access the application.

## Contributing

We welcome contributions to the Bro_CODE Blog project! If you'd like to contribute

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or need assistance, feel free to reach out to us at [contact@Bro_Code](mailto:shivjha1226@gmail.com).

Happy blogging! 😄📝
