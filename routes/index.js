const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {
    res.render ('home');
});
router.get('/admin', (req, res)=> {
    res.render ('admin');
});
router.get('/teacher', (req, res)=> {
    res.render ('teacher');
});
router.get('/advancesettings', (req, res)=> {
    res.render ('advancesettings');
});
router.get('/listadmin', (req, res)=> {
    res.render ('listadmin');
});
router.get('/liststudent', (req, res)=> {
    res.render ('liststudent');
});
router.get('/listteacher', (req, res)=> {
    res.render ('listteacher');
});
router.get('/student', (req, res)=> {
    res.render ('student');
});
router.get('/teacher', (req, res)=> {
    res.render ('teacher');
});

module.exports = router; 