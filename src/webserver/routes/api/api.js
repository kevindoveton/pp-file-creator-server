const router = require('express').Router();

const AuthMiddleware = require('./auth/AuthMiddleware');
router.use(AuthMiddleware);

const bodyParser = require('body-parser');
router.use(bodyParser.json());


const auth = require('./auth/auth');
router.use('/auth', auth);

router.get('/', (req, res) => {
  res.send('api v1')
});

router.post('/parse', (req, res) => {
  const { toRtfData } = require('../../../utils/draftjs')
  var data = toRtfData(req.body.state)
  res.status(201).send(data);
});

module.exports = router;
