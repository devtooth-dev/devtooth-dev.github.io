(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{602:function(e,a,r){e.exports=function(){"use strict";return[{locale:"sr",pluralRuleFunction:function(e,a){var r=String(e).split("."),t=r[0],o=r[1]||"",i=!r[1],s=t.slice(-1),n=t.slice(-2),l=o.slice(-1),p=o.slice(-2);return a?"other":i&&1==s&&11!=n||1==l&&11!=p?"one":i&&s>=2&&s<=4&&(n<12||n>14)||l>=2&&l<=4&&(p<12||p>14)?"few":"other"},fields:{year:{displayName:"\u0433\u043e\u0434\u0438\u043d\u0430",relative:{0:"\u043e\u0432\u0435 \u0433\u043e\u0434\u0438\u043d\u0435",1:"\u0441\u043b\u0435\u0434\u0435\u045b\u0435 \u0433\u043e\u0434\u0438\u043d\u0435","-1":"\u043f\u0440\u043e\u0448\u043b\u0435 \u0433\u043e\u0434\u0438\u043d\u0435"},relativeTime:{future:{one:"\u0437\u0430 {0} \u0433\u043e\u0434\u0438\u043d\u0443",few:"\u0437\u0430 {0} \u0433\u043e\u0434\u0438\u043d\u0435",other:"\u0437\u0430 {0} \u0433\u043e\u0434\u0438\u043d\u0430"},past:{one:"\u043f\u0440\u0435 {0} \u0433\u043e\u0434\u0438\u043d\u0435",few:"\u043f\u0440\u0435 {0} \u0433\u043e\u0434\u0438\u043d\u0435",other:"\u043f\u0440\u0435 {0} \u0433\u043e\u0434\u0438\u043d\u0430"}}},"year-short":{displayName:"\u0433\u043e\u0434.",relative:{0:"\u043e\u0432\u0435 \u0433\u043e\u0434.",1:"\u0441\u043b\u0435\u0434\u0435\u045b\u0435 \u0433\u043e\u0434.","-1":"\u043f\u0440\u043e\u0448\u043b\u0435 \u0433\u043e\u0434."},relativeTime:{future:{one:"\u0437\u0430 {0} \u0433\u043e\u0434.",few:"\u0437\u0430 {0} \u0433\u043e\u0434.",other:"\u0437\u0430 {0} \u0433\u043e\u0434."},past:{one:"\u043f\u0440\u0435 {0} \u0433\u043e\u0434.",few:"\u043f\u0440\u0435 {0} \u0433\u043e\u0434.",other:"\u043f\u0440\u0435 {0} \u0433\u043e\u0434."}}},month:{displayName:"\u043c\u0435\u0441\u0435\u0446",relative:{0:"\u043e\u0432\u043e\u0433 \u043c\u0435\u0441\u0435\u0446\u0430",1:"\u0441\u043b\u0435\u0434\u0435\u045b\u0435\u0433 \u043c\u0435\u0441\u0435\u0446\u0430","-1":"\u043f\u0440\u043e\u0448\u043b\u043e\u0433 \u043c\u0435\u0441\u0435\u0446\u0430"},relativeTime:{future:{one:"\u0437\u0430 {0} \u043c\u0435\u0441\u0435\u0446",few:"\u0437\u0430 {0} \u043c\u0435\u0441\u0435\u0446\u0430",other:"\u0437\u0430 {0} \u043c\u0435\u0441\u0435\u0446\u0438"},past:{one:"\u043f\u0440\u0435 {0} \u043c\u0435\u0441\u0435\u0446\u0430",few:"\u043f\u0440\u0435 {0} \u043c\u0435\u0441\u0435\u0446\u0430",other:"\u043f\u0440\u0435 {0} \u043c\u0435\u0441\u0435\u0446\u0438"}}},"month-short":{displayName:"\u043c\u0435\u0441.",relative:{0:"\u043e\u0432\u043e\u0433 \u043c\u0435\u0441.",1:"\u0441\u043b\u0435\u0434\u0435\u045b\u0435\u0433 \u043c\u0435\u0441.","-1":"\u043f\u0440\u043e\u0448\u043b\u043e\u0433 \u043c\u0435\u0441."},relativeTime:{future:{one:"\u0437\u0430 {0} \u043c\u0435\u0441.",few:"\u0437\u0430 {0} \u043c\u0435\u0441.",other:"\u0437\u0430 {0} \u043c\u0435\u0441."},past:{one:"\u043f\u0440\u0435 {0} \u043c\u0435\u0441.",few:"\u043f\u0440\u0435 {0} \u043c\u0435\u0441.",other:"\u043f\u0440\u0435 {0} \u043c\u0435\u0441."}}},day:{displayName:"\u0434\u0430\u043d",relative:{0:"\u0434\u0430\u043d\u0430\u0441",1:"\u0441\u0443\u0442\u0440\u0430",2:"\u043f\u0440\u0435\u043a\u043e\u0441\u0443\u0442\u0440\u0430","-2":"\u043f\u0440\u0435\u043a\u0458\u0443\u0447\u0435","-1":"\u0458\u0443\u0447\u0435"},relativeTime:{future:{one:"\u0437\u0430 {0} \u0434\u0430\u043d",few:"\u0437\u0430 {0} \u0434\u0430\u043d\u0430",other:"\u0437\u0430 {0} \u0434\u0430\u043d\u0430"},past:{one:"\u043f\u0440\u0435 {0} \u0434\u0430\u043d\u0430",few:"\u043f\u0440\u0435 {0} \u0434\u0430\u043d\u0430",other:"\u043f\u0440\u0435 {0} \u0434\u0430\u043d\u0430"}}},"day-short":{displayName:"\u0434.",relative:{0:"\u0434\u0430\u043d\u0430\u0441",1:"\u0441\u0443\u0442\u0440\u0430",2:"\u043f\u0440\u0435\u043a\u043e\u0441\u0443\u0442\u0440\u0430","-2":"\u043f\u0440\u0435\u043a\u0458\u0443\u0447\u0435","-1":"\u0458\u0443\u0447\u0435"},relativeTime:{future:{one:"\u0437\u0430 {0} \u0434.",few:"\u0437\u0430 {0} \u0434.",other:"\u0437\u0430 {0} \u0434."},past:{one:"\u043f\u0440\u0435 {0} \u0434.",few:"\u043f\u0440\u0435 {0} \u0434.",other:"\u043f\u0440\u0435 {0} \u0434."}}},hour:{displayName:"\u0441\u0430\u0442",relative:{0:"\u043e\u0432\u043e\u0433 \u0441\u0430\u0442\u0430"},relativeTime:{future:{one:"\u0437\u0430 {0} \u0441\u0430\u0442",few:"\u0437\u0430 {0} \u0441\u0430\u0442\u0430",other:"\u0437\u0430 {0} \u0441\u0430\u0442\u0438"},past:{one:"\u043f\u0440\u0435 {0} \u0441\u0430\u0442\u0430",few:"\u043f\u0440\u0435 {0} \u0441\u0430\u0442\u0430",other:"\u043f\u0440\u0435 {0} \u0441\u0430\u0442\u0438"}}},"hour-short":{displayName:"\u0447.",relative:{0:"\u043e\u0432\u043e\u0433 \u0441\u0430\u0442\u0430"},relativeTime:{future:{one:"\u0437\u0430 {0} \u0447.",few:"\u0437\u0430 {0} \u0447.",other:"\u0437\u0430 {0} \u0447."},past:{one:"\u043f\u0440\u0435 {0} \u0447.",few:"\u043f\u0440\u0435 {0} \u0447.",other:"\u043f\u0440\u0435 {0} \u0447."}}},minute:{displayName:"\u043c\u0438\u043d\u0443\u0442",relative:{0:"\u043e\u0432\u043e\u0433 \u043c\u0438\u043d\u0443\u0442\u0430"},relativeTime:{future:{one:"\u0437\u0430 {0} \u043c\u0438\u043d\u0443\u0442",few:"\u0437\u0430 {0} \u043c\u0438\u043d\u0443\u0442\u0430",other:"\u0437\u0430 {0} \u043c\u0438\u043d\u0443\u0442\u0430"},past:{one:"\u043f\u0440\u0435 {0} \u043c\u0438\u043d\u0443\u0442\u0430",few:"\u043f\u0440\u0435 {0} \u043c\u0438\u043d\u0443\u0442\u0430",other:"\u043f\u0440\u0435 {0} \u043c\u0438\u043d\u0443\u0442\u0430"}}},"minute-short":{displayName:"\u043c\u0438\u043d.",relative:{0:"\u043e\u0432\u043e\u0433 \u043c\u0438\u043d\u0443\u0442\u0430"},relativeTime:{future:{one:"\u0437\u0430 {0} \u043c\u0438\u043d.",few:"\u0437\u0430 {0} \u043c\u0438\u043d.",other:"\u0437\u0430 {0} \u043c\u0438\u043d."},past:{one:"\u043f\u0440\u0435 {0} \u043c\u0438\u043d.",few:"\u043f\u0440\u0435 {0} \u043c\u0438\u043d.",other:"\u043f\u0440\u0435 {0} \u043c\u0438\u043d."}}},second:{displayName:"\u0441\u0435\u043a\u0443\u043d\u0434",relative:{0:"\u0441\u0430\u0434\u0430"},relativeTime:{future:{one:"\u0437\u0430 {0} \u0441\u0435\u043a\u0443\u043d\u0434\u0443",few:"\u0437\u0430 {0} \u0441\u0435\u043a\u0443\u043d\u0434\u0435",other:"\u0437\u0430 {0} \u0441\u0435\u043a\u0443\u043d\u0434\u0438"},past:{one:"\u043f\u0440\u0435 {0} \u0441\u0435\u043a\u0443\u043d\u0434\u0435",few:"\u043f\u0440\u0435 {0} \u0441\u0435\u043a\u0443\u043d\u0434\u0435",other:"\u043f\u0440\u0435 {0} \u0441\u0435\u043a\u0443\u043d\u0434\u0438"}}},"second-short":{displayName:"\u0441\u0435\u043a.",relative:{0:"\u0441\u0430\u0434\u0430"},relativeTime:{future:{one:"\u0437\u0430 {0} \u0441\u0435\u043a.",few:"\u0437\u0430 {0} \u0441\u0435\u043a.",other:"\u0437\u0430 {0} \u0441\u0435\u043a."},past:{one:"\u043f\u0440\u0435 {0} \u0441\u0435\u043a.",few:"\u043f\u0440\u0435 {0} \u0441\u0435\u043a.",other:"\u043f\u0440\u0435 {0} \u0441\u0435\u043a."}}}}},{locale:"sr-Cyrl",parentLocale:"sr"},{locale:"sr-Cyrl-BA",parentLocale:"sr-Cyrl"},{locale:"sr-Cyrl-ME",parentLocale:"sr-Cyrl"},{locale:"sr-Cyrl-XK",parentLocale:"sr-Cyrl"},{locale:"sr-Latn",pluralRuleFunction:function(e,a){return"other"},fields:{year:{displayName:"godina",relative:{0:"ove godine",1:"slede\u0107e godine","-1":"pro\u0161le godine"},relativeTime:{future:{one:"za {0} godinu",few:"za {0} godine",other:"za {0} godina"},past:{one:"pre {0} godine",few:"pre {0} godine",other:"pre {0} godina"}}},"year-short":{displayName:"god.",relative:{0:"ove god.",1:"slede\u0107e god.","-1":"pro\u0161le god."},relativeTime:{future:{one:"za {0} god.",few:"za {0} god.",other:"za {0} god."},past:{one:"pre {0} god.",few:"pre {0} god.",other:"pre {0} god."}}},month:{displayName:"mesec",relative:{0:"ovog meseca",1:"slede\u0107eg meseca","-1":"pro\u0161log meseca"},relativeTime:{future:{one:"za {0} mesec",few:"za {0} meseca",other:"za {0} meseci"},past:{one:"pre {0} meseca",few:"pre {0} meseca",other:"pre {0} meseci"}}},"month-short":{displayName:"mes.",relative:{0:"ovog mes.",1:"slede\u0107eg mes.","-1":"pro\u0161log mes."},relativeTime:{future:{one:"za {0} mes.",few:"za {0} mes.",other:"za {0} mes."},past:{one:"pre {0} mes.",few:"pre {0} mes.",other:"pre {0} mes."}}},day:{displayName:"dan",relative:{0:"danas",1:"sutra",2:"prekosutra","-2":"prekju\u010de","-1":"ju\u010de"},relativeTime:{future:{one:"za {0} dan",few:"za {0} dana",other:"za {0} dana"},past:{one:"pre {0} dana",few:"pre {0} dana",other:"pre {0} dana"}}},"day-short":{displayName:"d.",relative:{0:"danas",1:"sutra",2:"prekosutra","-2":"prekju\u010de","-1":"ju\u010de"},relativeTime:{future:{one:"za {0} d.",few:"za {0} d.",other:"za {0} d."},past:{one:"pre {0} d.",few:"pre {0} d.",other:"pre {0} d."}}},hour:{displayName:"sat",relative:{0:"ovog sata"},relativeTime:{future:{one:"za {0} sat",few:"za {0} sata",other:"za {0} sati"},past:{one:"pre {0} sata",few:"pre {0} sata",other:"pre {0} sati"}}},"hour-short":{displayName:"\u010d.",relative:{0:"ovog sata"},relativeTime:{future:{one:"za {0} \u010d.",few:"za {0} \u010d.",other:"za {0} \u010d."},past:{one:"pre {0} \u010d.",few:"pre {0} \u010d.",other:"pre {0} \u010d."}}},minute:{displayName:"minut",relative:{0:"ovog minuta"},relativeTime:{future:{one:"za {0} minut",few:"za {0} minuta",other:"za {0} minuta"},past:{one:"pre {0} minuta",few:"pre {0} minuta",other:"pre {0} minuta"}}},"minute-short":{displayName:"min.",relative:{0:"ovog minuta"},relativeTime:{future:{one:"za {0} min.",few:"za {0} min.",other:"za {0} min."},past:{one:"pre {0} min.",few:"pre {0} min.",other:"pre {0} min."}}},second:{displayName:"sekund",relative:{0:"sada"},relativeTime:{future:{one:"za {0} sekundu",few:"za {0} sekunde",other:"za {0} sekundi"},past:{one:"pre {0} sekunde",few:"pre {0} sekunde",other:"pre {0} sekundi"}}},"second-short":{displayName:"sek.",relative:{0:"sada"},relativeTime:{future:{one:"za {0} sek.",few:"za {0} sek.",other:"za {0} sek."},past:{one:"pre {0} sek.",few:"pre {0} sek.",other:"pre {0} sek."}}}}},{locale:"sr-Latn-BA",parentLocale:"sr-Latn"},{locale:"sr-Latn-ME",parentLocale:"sr-Latn"},{locale:"sr-Latn-XK",parentLocale:"sr-Latn"}]}()}}]);
//# sourceMappingURL=199.234b491f.chunk.js.map