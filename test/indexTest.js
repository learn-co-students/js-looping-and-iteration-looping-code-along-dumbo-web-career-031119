const sinon = require( 'sinon' )

describe( 'index.js', () => {
  describe( 'printBadges()', () => {
    let spy;

    beforeEach( () => {
      spy = sinon.spy( console, 'log' );
    } );

    afterEach( () => {
      spy.restore();
    } );

    it( 'invokes console.log() once for each element in the passed-in array', () => {
      printBadges( [ 'Lisa', 'Kaitlin', 'Jan' ] );

      expect( spy.callCount )
        .to.eq( 3 );
    } );

    it( 'prints out a welcome badge for each employee', () => {
      printBadges( [ 'Joe', 'Gabe' ] );

      expect( spy.calledWithExactly( 'Welcome Joe! You are employee #1.' ) )
        .to.be
        .true;
      expect( spy.calledWithExactly( 'Welcome Gabe! You are employee #2.' ) )
        .to.be
        .true;
    } );

    it( 'returns the passed-in array', () => {
      const arr = [];

      expect( printBadges( arr ) )
        .to.eq( arr );
    } );
  } );

} );
