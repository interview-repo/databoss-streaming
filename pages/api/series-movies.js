import sample from './sample.json'

export default (_, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(sample));
};
