var sinon =require("sinon")


describe('incrementStoredData', function() {
  it('should increment stored value by one', function() {
    var store =sinon.spy();
    var storeMock = sinon.mock(store);
    storeMock.expects('get').withArgs('data').returns(0);
    storeMock.expects('set').once().withArgs('data', 1);

    incrementStoredData();

    storeMock.restore();
    storeMock.verify();
  });
});