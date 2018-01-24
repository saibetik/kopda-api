const router = require('./app').router;

require('./routes/user');
require('./routes/member');
require('./routes/loan');

module.exports = router;
