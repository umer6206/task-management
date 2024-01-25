const express = require('express')
const DBCon = require('./config/dbcon')
const cors = require('cors')
const passport = require("passport")
const session = require("express-session")
const OAuth2Strategy = require("passport-google-oauth20").Strategy;
const userRoutes = require("./routes/userRoutes")
const boardRoute = require("./routes/boardRoutes")
const UserModel = require('./models/userModel')
//additional variables
const app = express()
const PORT = 8080

//database connection
DBCon()

//middleware
app.use(express.json())
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000",
    methods: "PUT,POST,GET,DELETE"
}))

//session setup
app.use(session({
    secret: "sdfsdf345sdf345df345rw3434f345f43",
    resave: false,
    saveUninitialized: true
}))

// setup passport
app.use(passport.initialize())
app.use(passport.session());

passport.use(
    new OAuth2Strategy({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
        scope: ["profile", 'email']
    },
        async (accessToken, refreshToken, profile, done) => {
            try {
                let user = await UserModel.findOne({ googleId: profile.id })
                if (!user) {
                    user = new UserModel({
                        googleId: profile.id,
                        displayName: profile.displayName,
                        email: profile.emails[0].value,
                        image: profile.photos[0].value
                    })
                    await user.save()
                }
                return done(null, user)
            } catch (error) {
                return done(error, null)
            }
        }
    )
)

//setup session id
passport.serializeUser((user, done) => {
    done(null, user)
})
passport.deserializeUser((user, done) => {
    done(null, user)
})

// initialize google auth
app.get('/auth/google', passport.authenticate("google", { scope: ["profile", "email"] }))
app.get("/auth/google/callback", passport.authenticate("google", {
    successRedirect: "http://localhost:3000/dashboad",
    failureRedirect: "http://localhost:3000/login"
}))

app.get("/login/success", (req, res) => {
    if (req.user) {
        res.status(200).json({ message: "Login successfully", user: req.user })
    } else {
        res.status(400).json({ message: "Authentication failed" })
    }
})

app.get("/logout", (req, res, next) => {
    req.logOut((err) => {
        if (err) {
            return next(err)
        } else {
            res.redirect("http://localhost:3000")
        }
    })
})

////////////////////  User Auth Routes ///////////////////
app.use('/api/v1/auth', userRoutes)
////////////////////  Board Routes ///////////////////
app.use("/api/v1/board", boardRoute)
app.listen(PORT, () => {
    console.log(`app is running on port ${PORT}`);
})