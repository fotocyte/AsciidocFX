/* Generated by Opal 0.6.3 */
(function($opal) {
  var $a, self = $opal.top, $scope = $opal, nil = $opal.nil, $breaker = $opal.breaker, $slice = $opal.slice, $klass = $opal.klass, $hash2 = $opal.hash2;

  if ($scope.RUBY_ENGINE['$==']("opal")) {};
  self.$include((($a = $opal.Object._scope.Asciidoctor) == null ? $opal.cm('Asciidoctor') : $a));
  return (function($base, $super) {
    function $UmlBlock(){};
    var self = $UmlBlock = $klass($base, $super, 'UmlBlock', $UmlBlock);

    var def = self._proto, $scope = self._scope;

    self.$use_dsl();

    self.$named("uml");

    self.$on_context("open");

    self.$parse_content_as("literal");

    return (def.$process = function(parent, reader, attrs) {
      var $a, self = this, content = nil, type = nil, title = nil, filename = nil;

      content = nil;
      type = "" + (attrs['$[]']("type"));
      title = "" + (attrs['$[]']("title"));
      filename = "" + (attrs['$[]']("filename"));

          console.log(parent.document);
          console.log(parent._id);

        content = app.plantUml(reader.$read(),type,filename);
     ;
      if ((($a = (type['$==']("ascii"))) !== nil && (!$a._isBoolean || $a == true))) {
        return self.$create_pass_block(parent, content, attrs, $hash2(["subs"], {"subs": nil}))
        } else {
        return self.$create_image_block(parent, $hash2(["target", "title"], {"target": content, "title": title}))
      };
    }, nil) && 'process';
  })(self, ($scope.Extensions)._scope.BlockProcessor);
})(Opal);
/* Generated by Opal 0.6.3 */
(function($opal) {
  var $a, $b, TMP_1, self = $opal.top, $scope = $opal, nil = $opal.nil, $breaker = $opal.breaker, $slice = $opal.slice;

  if ($scope.RUBY_ENGINE['$==']("opal")) {
    };
  return ($a = ($b = $scope.Extensions).$register, $a._p = (TMP_1 = function(){var self = TMP_1._s || this;

  return self.$block($scope.UmlBlock)}, TMP_1._s = self, TMP_1), $a).call($b);
})(Opal);