const express = require("express");
const path = require("path");//To define the path
const { Client } = require("pg");//For the postgres database
const nodemailer = require('nodemailer');  // Add this line to import Nodemailer
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userinfo = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "123456",
    database: "SignUpDetails",
});//for the database

userinfo.connect((err) => {
    if (err) {
        console.error("An error occurred", err.stack);
    } else {
        console.log("Successful connection");
    }
});//connecting to the database

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Homepage.html'));
});//hosting the homepage file 

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});//login page

//When user enters details in login page
app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
        // Query to check if username and password exist
        const query = `SELECT * FROM "Details" WHERE "UserName" = $1 AND "Password" = $2`;
        const values = [username, password];
        const result = await userinfo.query(query, values);

        if (result.rows.length > 0) {
            // If login is successful, retrieve the emailid
            const emailid = result.rows[0].Email;  // Get email from result



            // Check if emailid is undefined or empty
            if (!emailid) {
                console.error('No emailid found for this user');
                return res.status(500).json({ success: false, message: 'No email found for the user.' });
            }

            // If emailid is available, trim spaces and proceed to send email
            let trimmedEmail = emailid.trim();

            // Set up Nodemailer
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'shikshanalearningplatform@gmail.com', // Your email
                    pass: 'yzgxddqvfkmcsayk' // Generated app password if 2FA is enabled
                }
            });

            let mailOptions = {
                from: 'shikshanalearningplatform@gmail.com',
                to: trimmedEmail,  // Use the email fetched from the database
                subject: 'Exciting Updates & Your Next Step on the Shikshana!',
                text: `Hello Learner,

🎯 What’s New?
We’re excited to inform you that you’ve logged into your Skill Generator Platform account at the perfect time! A lot has been updated — we’ve rolled out fresh content, customized learning paths, and new features that are designed to accelerate your progress and make your journey even more rewarding. Take a few minutes to explore these updates and get back on track to achieving your goals!

🔒 Was This You?
If it was, that’s awesome! We’re thrilled to see you back on your learning journey. Keep going strong and make the most of the new resources we’ve added. However, if this wasn’t you, please take immediate action to ensure your account’s security. Our support team is ready and available to help you secure your account — just reach out, and we’ll guide you through the next steps.

💡 Stay Ahead!
Now that you’re in, why not make the most of your time? We’ve designed a personalized roadmap just for you. Dive into it today to see exactly where you can improve and grow your skills. Don’t forget to check out the latest resources we’ve added to help you stay ahead of the curve. Whether it’s new learning modules, quizzes, or interactive tools, everything is tailored to help you achieve your potential.

🚀 Your Next Steps:
The path to mastering your skills is clearer than ever. The next step is yours to take: Click through to your personalized roadmap or discover the wealth of resources waiting for you. Each click brings you closer to your goal, and we’re here to help you along the way.

Remember, learning is a journey, not a destination. Keep pushing forward, and together we’ll make sure you achieve success!

We’re here to support you at every step of the way. Should you need any help or have any questions, don’t hesitate to contact us. Your success is our priority.

Best regards, 
The Skill Generator Platform Team`
            };

            // Send the email
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log('Error sending email:', error);
                    return res.status(500).json({ success: false, message: 'Error sending email.' });
                } else {
                    console.log('Email sent:', info.response);
                    // Send response after email has been successfully sent
                    return res.status(200).json({ success: true, emailid: trimmedEmail });
                }
            });
        } else {
            // If login fails, send JSON response indicating failure
            res.status(401).json({ success: false });
        }
    } catch (err) {
        console.error("Query error:", err);
        res.status(500).json({ success: false });
    }
});

app.get("/timer", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'timer.html'))
});//The timer page

// Serve main page after successful login
app.get("/mainpage", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Mainpage.html'));
});


// Start server
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});//hosting it on localhost 3000
