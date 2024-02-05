const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { Provider, User } = require("../models/index");
module.exports = new GoogleStrategy(
  {
    clientID:
      "782475507716-2ha821ef4qpk6es3hg2bt079onrr3lpf.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:3000/auth/google/callback",
    scope: ["email", "profile"],
  },
  async (accessToken, refreshToken, profile, done) => {
    console.log(profile);
    const {
      displayName: fullname,
      emails: [{ value: email }],
    } = profile;

    const [provider] = await Provider.findOrCreate({
      where: { name: "google" },
      defaults: {
        name: "google",
      },
    });
    const [user] = await User.findOrCreate({
      where: { email, provider_id: provider.id },
      defaults: {
        fullname,
        email,
        status: true,
        provider_id: provider.id,
      },
    });
    done(null, user);
  },
);
