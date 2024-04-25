const express = require('express');

const router = express.Router();



router.get(['/', '/home'], (req, res) => {
    res.render('index');
});

router.get(['/', '/home'], (req, res) => {
    res.render('index');
});

router.get(['/about-us'], (req, res) => {
    res.render('about');
});

router.get(['/contact'], (req, res) => {
    res.render('contact');
});

router.get(['/service'], (req, res) => {
    res.render('service');
});

router.get(['/testimonial'], (req, res) => {
    res.render('testimonial');
});

router.get('/team', (req, res) => {
    res.render('team');
});

router.get('/project', (req, res) => {
    res.render('project');
});

router.get('/faq', (req, res) => {
    res.render('faq');
});



router.get('/feature', (req, res) => {
    res.render('feature');
});

router.get('/404_error', (req, res) => {
    res.render('404');
});


module.exports = router;