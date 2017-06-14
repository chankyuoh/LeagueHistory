console.log('starting function')
exports.handle = function(e, ctx, callback) {
  console.log('processing event: %j', e)
  callback(null, { hello: 'world' })
}
