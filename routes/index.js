// routes/index.js
// Defines all main routes for Affan Shaikh's portfolio site.

var express = require('express');
var router = express.Router();

// Home page - main landing page of the portfolio
router.get('/', function(req, res) {
  // Render views/pages/home.ejs and pass a title variable used by the templates
  res.render('pages/home', { title: 'Home' });
});

// About page - background, program, skills
router.get('/about', function(req, res) {
  res.render('pages/about', { title: 'About Me' });
});

// Projects page - placeholder for future/academic work
router.get('/projects', function(req, res) {
  res.render('pages/projects', { title: 'Projects' });
});

// Contact page - how to reach Affan
router.get('/contact', function(req, res) {
  res.render('pages/contact', { title: 'Contact' });
});

// Export router so app.js can mount it at '/'
module.exports = router;
