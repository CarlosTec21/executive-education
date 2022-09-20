
        function getParameterByName(name) {
            url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }
        function getDefaultValuesString() {
            values = '';
            values += '&Field119=' + getParameterByName('utm_source');
            values += '&Field1962=' + getParameterByName('utm_medium');
            values += '&Field1963=' + getParameterByName('utm_campaign');
            return values.toString();
        }
                  
                        function getGET() {
                            var loc = document.location.href;
                            if (loc.indexOf('?') > 0) {
                                var getString = loc.split('?')[1];
                                var GET = getString.split('&');
                                var get = {};

                                for (var i = 0, l = GET.length; i < l; i++) {
                                    var tmp = GET[i].split('=');
                                    get[tmp[0]] = unescape(decodeURI(tmp[1]));
                                }
                                return get;
                            }
                        }

                        var valores = getGET();

                        if (valores) {

                            //for (var index in valores) {
                                var mr9iulg16nqx41; (function (d, t) {
                                    var s = d.createElement(t), options = {
                                        'userName': 'egade',
                                        'formHash': 'mr9iulg16nqx41',
                                        'autoResize': true,
                                        'height': '1740',
                                        'async': true,
                                        'host': 'wufoo.eu',
                                        'header': 'show',
                                        'defaultValues': getDefaultValuesString(),
                                        'ssl': true
                                    };
                                    s.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'www.wufoo.eu/scripts/embed/form.js';

                                    s.onload = s.onreadystatechange = function () {
                                        var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return;
                                        try { mr9iulg16nqx41 = new WufooForm(); mr9iulg16nqx41.initialize(options); mr9iulg16nqx41.display(); }
                                        catch (e) { }
                                    };
                                    var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);
                                })(document, 'script');
                           // }


                        } else {
                            var mr9iulg16nqx41; (function (d, t) {
                                var s = d.createElement(t), options = {
                                    'userName': 'egade',
                                    'formHash': 'mr9iulg16nqx41',
                                    'autoResize': true,
                                    'height': '1740',
                                    'async': true,
                                    'host': 'wufoo.eu',
                                    'header': 'show',
                                    'defaultValues': 'field119=' + window.location.href,
                                    'ssl': true
                                };

                                s.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'www.wufoo.eu/scripts/embed/form.js';
                                s.onload = s.onreadystatechange = function () {
                                    var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return;
                                    try { mr9iulg16nqx41 = new WufooForm(); mr9iulg16nqx41.initialize(options); mr9iulg16nqx41.display(); } catch (e) { }
                                };
                                var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);
                            })(document, 'script');
                        }                       
    