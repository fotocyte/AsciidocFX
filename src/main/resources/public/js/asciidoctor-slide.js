/* Generated by Opal 0.6.3 */
var templateMap = {
    revealjs: {},
    deckjs: {}
};
(function ($opal) {
    var self = $opal.top, $scope = $opal, nil = $opal.nil, $breaker = $opal.breaker, $slice = $opal.slice, $module = $opal.module, $klass = $opal.klass, $hash2 = $opal.hash2;

    return (function ($base) {
        var self = $module($base, 'Asciidoctor');

        var def = self._proto, $scope = self._scope;

        (function ($base, $super) {
            function $SlideConverter() {
            };
            var self = $SlideConverter = $klass($base, $super, 'SlideConverter', $SlideConverter);

            var def = self._proto, $scope = self._scope;

            return (def.$convert = function (node, template_name, opts) {

                    var self = this;

                    window.selfo = this;
                    window.nodee = node;
                    window.optss = opts;

                    var obj = {};
                    obj.type = node.$type ? node.$type() : "";
                    obj.name = node.$node_name ? node.$node_name() : "";
                    obj.content = node.$content ? node.$content() : "";
                    obj.text = node.$text ? node.$text() : "";
                    obj.role = node.$role ? node.$role() : "";
                    obj.option = node.$option ? node.$option() : "";
                    obj.has_role = node.$has_role ? node.$has_role() : "";
                    obj.style = node.$style ? node.$style() : "";
                    obj.items = node.$items ? node.$items() : [];
                    obj.title = node.$title ? node.$title() : null;
                    obj.blocks = node.$blocks ? node.$blocks() : [];
                    obj.sections = node.$sections ? node.$sections() : [];
                    obj.level = node.$level ? node.$level() : null;
                    obj.id = node.$id ? node.$id() : null;
                    obj.columns = node.$columns ? node.$columns() : [];
                    obj.rows = node.$rows ? node.$rows() : [];
                    obj.captioned_title = node.$captioned_title ? node.$captioned_title() : null;
                    obj.attr = {};

                    obj.exist = function (e) {
                        return (typeof e) !== "undefined";
                    };

                    obj.disregard = function (arr1, arr2) {
                        var result = arr1.slice(0);
                        for (var i = 0; i < result.length; i++) {
                            var value = result[i];
                            if (arr2.indexOf(value) != -1)
                                result.splice(i, 1);
                        }
                        return result;
                    };
                    obj.self = self;
                    obj.document = {
                        attr: {}
                    };

                    var keys = node.$attributes().$keys();

                    for (var i = 0; i < keys.length; i++) {
                        var key = keys[i];
                        var value = node.$attributes()['$[]'](key);
                        obj.attr[key] = value;
                    }


                    obj.document.doctype = node.$document().$doctype();
                    obj.document.doctitle = node.$document().$doctitle ? node.$document().$doctitle() : "";

                    if (node.$document().$embedded)
                        obj.document.embedded = node.$document().$embedded();

                    var docKeys = node.$document().$attributes().$keys();
                    for (var i = 0; i < docKeys.length; i++) {
                        var key = docKeys[i];
                        var value = node.$document().$attributes()['$[]'](key);
                        obj.document.attr[key] = value;
                    }

                    // Cache disabled icin comment yap
                    var templateMap = {
                        revealjs: {},
                        deckjs: {}
                    };

                    window.slideType = obj.document.attr["doctype"] == "deckjs" ? "deckjs" : "revealjs";
                    var map = templateMap[window.slideType];

                    if (!map)
                        return "";

                    if (!map[obj.name]) {
                        var template = afx.getTemplate(obj.name + ".jade", window.slideType);
                        var fn = jade.compile(template, {pretty: true});
                        map[obj.name] = fn;
                    }

                    var result = map[obj.name](obj);

                    return result;


                    if (template_name == null) {
                        template_name = nil
                    }
                    if (opts == null) {
                        opts = $hash2([], {})
                    }
                    return nil;
                }, nil) && 'convert'
        })($scope.Converter, ($scope.Converter)._scope.Base)

    })(self)
})(Opal);