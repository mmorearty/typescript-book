exports.asdf = 123;
var porting;
(function (porting) {
    var foo = {};
    foo.bar = 123;
    foo.bas = 'hello';
})(porting || (porting = {}));
var assert;
(function (assert) {
    var foo = {};
    foo.bar = 123;
    foo.bas = 'hello';
})(assert || (assert = {}));
var sdfsdfsdf;
(function (sdfsdfsdf) {
    var foo;
    var bar = foo;
})(sdfsdfsdf || (sdfsdfsdf = {}));
