export default function(app) {
  app.route('/').get((req, res, err) => {
    res.json({msg: 'Hello, World!'});
  });
}
