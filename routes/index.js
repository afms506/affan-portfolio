// routes/index.js
// Main routes for Affan Shaikh's portfolio website.

var express = require('express');
var router = express.Router(); // Create a router to define page routes

// ================= HOME PAGE =================

// GET /
// Renders the Home page (landing page)
router.get('/', function(req, res) {
  // 'title' is passed to the view and used for active nav state
  res.render('pages/home', { title: 'Home' });
});

// ================= ABOUT PAGE =================

// GET /about
// Shows background, skills, and interests
router.get('/about', function(req, res) {
  res.render('pages/about', { title: 'About Me' });
});

// ================= PROJECTS PAGE =================

// GET /projects
// Shows current learning projects / labs
router.get('/projects', function(req, res) {
  res.render('pages/projects', { title: 'Projects' });
});

// ================= CONTACT PAGE =================

// GET /contact
// Shows contact details (email, GitHub, LinkedIn)
router.get('/contact', function(req, res) {
  res.render('pages/contact', { title: 'Contact' });
});

// Export router so app.js can mount it at '/'
module.exports = router;
