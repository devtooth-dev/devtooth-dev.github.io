(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{574:function(e,a,t){e.exports=function(){"use strict";return[{locale:"ru",pluralRuleFunction:function(e,a){var t=String(e).split("."),r=t[0],o=!t[1],n=r.slice(-1),i=r.slice(-2);return a?"other":o&&1==n&&11!=i?"one":o&&n>=2&&n<=4&&(i<12||i>14)?"few":o&&0==n||o&&n>=5&&n<=9||o&&i>=11&&i<=14?"many":"other"},fields:{year:{displayName:"\u0433\u043e\u0434",relative:{0:"\u0432 \u044d\u0442\u043e\u043c \u0433\u043e\u0434\u0443",1:"\u0432 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c \u0433\u043e\u0434\u0443","-1":"\u0432 \u043f\u0440\u043e\u0448\u043b\u043e\u043c \u0433\u043e\u0434\u0443"},relativeTime:{future:{one:"\u0447\u0435\u0440\u0435\u0437 {0} \u0433\u043e\u0434",few:"\u0447\u0435\u0440\u0435\u0437 {0} \u0433\u043e\u0434\u0430",many:"\u0447\u0435\u0440\u0435\u0437 {0} \u043b\u0435\u0442",other:"\u0447\u0435\u0440\u0435\u0437 {0} \u0433\u043e\u0434\u0430"},past:{one:"{0} \u0433\u043e\u0434 \u043d\u0430\u0437\u0430\u0434",few:"{0} \u0433\u043e\u0434\u0430 \u043d\u0430\u0437\u0430\u0434",many:"{0} \u043b\u0435\u0442 \u043d\u0430\u0437\u0430\u0434",other:"{0} \u0433\u043e\u0434\u0430 \u043d\u0430\u0437\u0430\u0434"}}},"year-short":{displayName:"\u0433.",relative:{0:"\u0432 \u044d\u0442\u043e\u043c \u0433.",1:"\u0432 \u0441\u043b\u0435\u0434. \u0433.","-1":"\u0432 \u043f\u0440\u043e\u0448\u043b\u043e\u043c \u0433."},relativeTime:{future:{one:"\u0447\u0435\u0440\u0435\u0437 {0} \u0433.",few:"\u0447\u0435\u0440\u0435\u0437 {0} \u0433.",many:"\u0447\u0435\u0440\u0435\u0437 {0} \u043b.",other:"\u0447\u0435\u0440\u0435\u0437 {0} \u0433."},past:{one:"{0} \u0433. \u043d\u0430\u0437\u0430\u0434",few:"{0} \u0433. \u043d\u0430\u0437\u0430\u0434",many:"{0} \u043b. \u043d\u0430\u0437\u0430\u0434",other:"{0} \u0433. \u043d\u0430\u0437\u0430\u0434"}}},month:{displayName:"\u043c\u0435\u0441\u044f\u0446",relative:{0:"\u0432 \u044d\u0442\u043e\u043c \u043c\u0435\u0441\u044f\u0446\u0435",1:"\u0432 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c \u043c\u0435\u0441\u044f\u0446\u0435","-1":"\u0432 \u043f\u0440\u043e\u0448\u043b\u043e\u043c \u043c\u0435\u0441\u044f\u0446\u0435"},relativeTime:{future:{one:"\u0447\u0435\u0440\u0435\u0437 {0} \u043c\u0435\u0441\u044f\u0446",few:"\u0447\u0435\u0440\u0435\u0437 {0} \u043c\u0435\u0441\u044f\u0446\u0430",many:"\u0447\u0435\u0440\u0435\u0437 {0} \u043c\u0435\u0441\u044f\u0446\u0435\u0432",other:"\u0447\u0435\u0440\u0435\u0437 {0} \u043c\u0435\u0441\u044f\u0446\u0430"},past:{one:"{0} \u043c\u0435\u0441\u044f\u0446 \u043d\u0430\u0437\u0430\u0434",few:"{0} \u043c\u0435\u0441\u044f\u0446\u0430 \u043d\u0430\u0437\u0430\u0434",many:"{0} \u043c\u0435\u0441\u044f\u0446\u0435\u0432 \u043d\u0430\u0437\u0430\u0434",other:"{0} \u043c\u0435\u0441\u044f\u0446\u0430 \u043d\u0430\u0437\u0430\u0434"}}},"month-short":{displayName:"\u043c\u0435\u0441.",relative:{0:"\u0432 \u044d\u0442\u043e\u043c \u043c\u0435\u0441.",1:"\u0432 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c \u043c\u0435\u0441.","-1":"\u0432 \u043f\u0440\u043e\u0448\u043b\u043e\u043c \u043c\u0435\u0441."},relativeTime:{future:{one:"\u0447\u0435\u0440\u0435\u0437 {0} \u043c\u0435\u0441.",few:"\u0447\u0435\u0440\u0435\u0437 {0} \u043c\u0435\u0441.",many:"\u0447\u0435\u0440\u0435\u0437 {0} \u043c\u0435\u0441.",other:"\u0447\u0435\u0440\u0435\u0437 {0} \u043c\u0435\u0441."},past:{one:"{0} \u043c\u0435\u0441. \u043d\u0430\u0437\u0430\u0434",few:"{0} \u043c\u0435\u0441. \u043d\u0430\u0437\u0430\u0434",many:"{0} \u043c\u0435\u0441. \u043d\u0430\u0437\u0430\u0434",other:"{0} \u043c\u0435\u0441. \u043d\u0430\u0437\u0430\u0434"}}},day:{displayName:"\u0434\u0435\u043d\u044c",relative:{0:"\u0441\u0435\u0433\u043e\u0434\u043d\u044f",1:"\u0437\u0430\u0432\u0442\u0440\u0430",2:"\u043f\u043e\u0441\u043b\u0435\u0437\u0430\u0432\u0442\u0440\u0430","-2":"\u043f\u043e\u0437\u0430\u0432\u0447\u0435\u0440\u0430","-1":"\u0432\u0447\u0435\u0440\u0430"},relativeTime:{future:{one:"\u0447\u0435\u0440\u0435\u0437 {0} \u0434\u0435\u043d\u044c",few:"\u0447\u0435\u0440\u0435\u0437 {0} \u0434\u043d\u044f",many:"\u0447\u0435\u0440\u0435\u0437 {0} \u0434\u043d\u0435\u0439",other:"\u0447\u0435\u0440\u0435\u0437 {0} \u0434\u043d\u044f"},past:{one:"{0} \u0434\u0435\u043d\u044c \u043d\u0430\u0437\u0430\u0434",few:"{0} \u0434\u043d\u044f \u043d\u0430\u0437\u0430\u0434",many:"{0} \u0434\u043d\u0435\u0439 \u043d\u0430\u0437\u0430\u0434",other:"{0} \u0434\u043d\u044f \u043d\u0430\u0437\u0430\u0434"}}},"day-short":{displayName:"\u0434\u043d.",relative:{0:"\u0441\u0435\u0433\u043e\u0434\u043d\u044f",1:"\u0437\u0430\u0432\u0442\u0440\u0430",2:"\u043f\u043e\u0441\u043b\u0435\u0437\u0430\u0432\u0442\u0440\u0430","-2":"\u043f\u043e\u0437\u0430\u0432\u0447\u0435\u0440\u0430","-1":"\u0432\u0447\u0435\u0440\u0430"},relativeTime:{future:{one:"\u0447\u0435\u0440\u0435\u0437 {0} \u0434\u043d.",few:"\u0447\u0435\u0440\u0435\u0437 {0} \u0434\u043d.",many:"\u0447\u0435\u0440\u0435\u0437 {0} \u0434\u043d.",other:"\u0447\u0435\u0440\u0435\u0437 {0} \u0434\u043d."},past:{one:"{0} \u0434\u043d. \u043d\u0430\u0437\u0430\u0434",few:"{0} \u0434\u043d. \u043d\u0430\u0437\u0430\u0434",many:"{0} \u0434\u043d. \u043d\u0430\u0437\u0430\u0434",other:"{0} \u0434\u043d. \u043d\u0430\u0437\u0430\u0434"}}},hour:{displayName:"\u0447\u0430\u0441",relative:{0:"\u0432 \u044d\u0442\u043e\u0442 \u0447\u0430\u0441"},relativeTime:{future:{one:"\u0447\u0435\u0440\u0435\u0437 {0} \u0447\u0430\u0441",few:"\u0447\u0435\u0440\u0435\u0437 {0} \u0447\u0430\u0441\u0430",many:"\u0447\u0435\u0440\u0435\u0437 {0} \u0447\u0430\u0441\u043e\u0432",other:"\u0447\u0435\u0440\u0435\u0437 {0} \u0447\u0430\u0441\u0430"},past:{one:"{0} \u0447\u0430\u0441 \u043d\u0430\u0437\u0430\u0434",few:"{0} \u0447\u0430\u0441\u0430 \u043d\u0430\u0437\u0430\u0434",many:"{0} \u0447\u0430\u0441\u043e\u0432 \u043d\u0430\u0437\u0430\u0434",other:"{0} \u0447\u0430\u0441\u0430 \u043d\u0430\u0437\u0430\u0434"}}},"hour-short":{displayName:"\u0447",relative:{0:"\u0432 \u044d\u0442\u043e\u0442 \u0447\u0430\u0441"},relativeTime:{future:{one:"\u0447\u0435\u0440\u0435\u0437 {0}\xa0\u0447.",few:"\u0447\u0435\u0440\u0435\u0437 {0} \u0447.",many:"\u0447\u0435\u0440\u0435\u0437 {0} \u0447.",other:"\u0447\u0435\u0440\u0435\u0437 {0} \u0447."},past:{one:"{0}\xa0\u0447. \u043d\u0430\u0437\u0430\u0434",few:"{0} \u0447. \u043d\u0430\u0437\u0430\u0434",many:"{0} \u0447. \u043d\u0430\u0437\u0430\u0434",other:"{0} \u0447. \u043d\u0430\u0437\u0430\u0434"}}},minute:{displayName:"\u043c\u0438\u043d\u0443\u0442\u0430",relative:{0:"\u0432 \u044d\u0442\u0443 \u043c\u0438\u043d\u0443\u0442\u0443"},relativeTime:{future:{one:"\u0447\u0435\u0440\u0435\u0437 {0} \u043c\u0438\u043d\u0443\u0442\u0443",few:"\u0447\u0435\u0440\u0435\u0437 {0} \u043c\u0438\u043d\u0443\u0442\u044b",many:"\u0447\u0435\u0440\u0435\u0437 {0} \u043c\u0438\u043d\u0443\u0442",other:"\u0447\u0435\u0440\u0435\u0437 {0} \u043c\u0438\u043d\u0443\u0442\u044b"},past:{one:"{0} \u043c\u0438\u043d\u0443\u0442\u0443 \u043d\u0430\u0437\u0430\u0434",few:"{0} \u043c\u0438\u043d\u0443\u0442\u044b \u043d\u0430\u0437\u0430\u0434",many:"{0} \u043c\u0438\u043d\u0443\u0442 \u043d\u0430\u0437\u0430\u0434",other:"{0} \u043c\u0438\u043d\u0443\u0442\u044b \u043d\u0430\u0437\u0430\u0434"}}},"minute-short":{displayName:"\u043c\u0438\u043d.",relative:{0:"\u0432 \u044d\u0442\u0443 \u043c\u0438\u043d\u0443\u0442\u0443"},relativeTime:{future:{one:"\u0447\u0435\u0440\u0435\u0437 {0} \u043c\u0438\u043d.",few:"\u0447\u0435\u0440\u0435\u0437 {0} \u043c\u0438\u043d.",many:"\u0447\u0435\u0440\u0435\u0437 {0} \u043c\u0438\u043d.",other:"\u0447\u0435\u0440\u0435\u0437 {0} \u043c\u0438\u043d."},past:{one:"{0} \u043c\u0438\u043d. \u043d\u0430\u0437\u0430\u0434",few:"{0} \u043c\u0438\u043d. \u043d\u0430\u0437\u0430\u0434",many:"{0} \u043c\u0438\u043d. \u043d\u0430\u0437\u0430\u0434",other:"{0} \u043c\u0438\u043d. \u043d\u0430\u0437\u0430\u0434"}}},second:{displayName:"\u0441\u0435\u043a\u0443\u043d\u0434\u0430",relative:{0:"\u0441\u0435\u0439\u0447\u0430\u0441"},relativeTime:{future:{one:"\u0447\u0435\u0440\u0435\u0437 {0} \u0441\u0435\u043a\u0443\u043d\u0434\u0443",few:"\u0447\u0435\u0440\u0435\u0437 {0} \u0441\u0435\u043a\u0443\u043d\u0434\u044b",many:"\u0447\u0435\u0440\u0435\u0437 {0} \u0441\u0435\u043a\u0443\u043d\u0434",other:"\u0447\u0435\u0440\u0435\u0437 {0} \u0441\u0435\u043a\u0443\u043d\u0434\u044b"},past:{one:"{0} \u0441\u0435\u043a\u0443\u043d\u0434\u0443 \u043d\u0430\u0437\u0430\u0434",few:"{0} \u0441\u0435\u043a\u0443\u043d\u0434\u044b \u043d\u0430\u0437\u0430\u0434",many:"{0} \u0441\u0435\u043a\u0443\u043d\u0434 \u043d\u0430\u0437\u0430\u0434",other:"{0} \u0441\u0435\u043a\u0443\u043d\u0434\u044b \u043d\u0430\u0437\u0430\u0434"}}},"second-short":{displayName:"\u0441\u0435\u043a.",relative:{0:"\u0441\u0435\u0439\u0447\u0430\u0441"},relativeTime:{future:{one:"\u0447\u0435\u0440\u0435\u0437 {0}\xa0\u0441\u0435\u043a.",few:"\u0447\u0435\u0440\u0435\u0437 {0}\xa0\u0441\u0435\u043a.",many:"\u0447\u0435\u0440\u0435\u0437 {0}\xa0\u0441\u0435\u043a.",other:"\u0447\u0435\u0440\u0435\u0437 {0}\xa0\u0441\u0435\u043a."},past:{one:"{0} \u0441\u0435\u043a. \u043d\u0430\u0437\u0430\u0434",few:"{0} \u0441\u0435\u043a. \u043d\u0430\u0437\u0430\u0434",many:"{0} \u0441\u0435\u043a. \u043d\u0430\u0437\u0430\u0434",other:"{0} \u0441\u0435\u043a. \u043d\u0430\u0437\u0430\u0434"}}}}},{locale:"ru-BY",parentLocale:"ru"},{locale:"ru-KG",parentLocale:"ru"},{locale:"ru-KZ",parentLocale:"ru"},{locale:"ru-MD",parentLocale:"ru"},{locale:"ru-UA",parentLocale:"ru"}]}()}}]);
//# sourceMappingURL=172.9da12bc1.chunk.js.map