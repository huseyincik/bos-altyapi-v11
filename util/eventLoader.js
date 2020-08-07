const olay = (event) => require(`../util/${event}`);
module.exports = client => {
  client.on('ready', () => olay('ready')(client));
  client.on('message', olay('message'));
};
