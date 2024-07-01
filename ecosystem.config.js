module.exports = {
  apps: [{
    name: "lawyernetwork.com.vn",
    script: "./index.js",
    env: {
      "NODE_ENV": "development"
    },
    env_staging: {
      "NODE_ENV": "staging"
    },
    env_production: {
      "NODE_ENV": "production"
    }
  }]
}