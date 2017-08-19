
var sinon =require("sinon")


function saveUser(user, callback) {
  $.post('/users', {
    first: user.firstname,
    last: user.lastname
  }, callback);
}

describe('saveUser', function() {
  it('should call callback after saving', function() {

    //We'll stub $.post so a request is not sent
    var post = sinon.stub($, 'post');
    post.yields();

    //We can use a spy as the callback so it's easy to verify
    var callback = sinon.spy();

    saveUser({ firstname: 'Han', lastname: 'Solo' }, callback);

    post.restore();
  });
});