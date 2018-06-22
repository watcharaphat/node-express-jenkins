export default function(app) {
  app.route('/').get((req, res, err) => {
    res.json({msg: 'Hello, World!'});
  });

  app.route('/api').get((req, res, err) => {
    res.json({version: '1.0.1'});
  });
}
