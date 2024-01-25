const express = require('express')
const passport = require("passport")
const session = require("express-session");
const UserModel = require("../models/userModel");
const OAuth2Strategy = require("passport-google-oauth20").Strategy;
const app = express()
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
                        name: profile.displayName,
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
