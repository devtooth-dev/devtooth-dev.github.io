(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{533:function(e,t,r){e.exports=function(){"use strict";return[{locale:"mk",pluralRuleFunction:function(e,t){var r=String(e).split("."),o=r[0],a=r[1]||"",i=!r[1],n=o.slice(-1),l=o.slice(-2),s=a.slice(-1),u=a.slice(-2);return t?1==n&&11!=l?"one":2==n&&12!=l?"two":7!=n&&8!=n||17==l||18==l?"other":"many":i&&1==n&&11!=l||1==s&&11!=u?"one":"other"},fields:{year:{displayName:"\u0433\u043e\u0434\u0438\u043d\u0430",relative:{0:"\u043e\u0432\u0430\u0430 \u0433\u043e\u0434\u0438\u043d\u0430",1:"\u0441\u043b\u0435\u0434\u043d\u0430\u0442\u0430 \u0433\u043e\u0434\u0438\u043d\u0430","-1":"\u043c\u0438\u043d\u0430\u0442\u0430\u0442\u0430 \u0433\u043e\u0434\u0438\u043d\u0430"},relativeTime:{future:{one:"\u0437\u0430 {0} \u0433\u043e\u0434\u0438\u043d\u0430",other:"\u0437\u0430 {0} \u0433\u043e\u0434\u0438\u043d\u0438"},past:{one:"\u043f\u0440\u0435\u0434 {0} \u0433\u043e\u0434\u0438\u043d\u0430",other:"\u043f\u0440\u0435\u0434 {0} \u0433\u043e\u0434\u0438\u043d\u0438"}}},"year-short":{displayName:"\u0433\u043e\u0434.",relative:{0:"\u043e\u0432\u0430\u0430 \u0433\u043e\u0434\u0438\u043d\u0430",1:"\u0441\u043b\u0435\u0434\u043d\u0430\u0442\u0430 \u0433\u043e\u0434\u0438\u043d\u0430","-1":"\u043c\u0438\u043d\u0430\u0442\u0430\u0442\u0430 \u0433\u043e\u0434\u0438\u043d\u0430"},relativeTime:{future:{one:"\u0437\u0430 {0} \u0433\u043e\u0434.",other:"\u0437\u0430 {0} \u0433\u043e\u0434."},past:{one:"\u043f\u0440\u0435\u0434 {0} \u0433\u043e\u0434.",other:"\u043f\u0440\u0435\u0434 {0} \u0433\u043e\u0434."}}},month:{displayName:"\u043c\u0435\u0441\u0435\u0446",relative:{0:"\u043e\u0432\u043e\u0458 \u043c\u0435\u0441\u0435\u0446",1:"\u0441\u043b\u0435\u0434\u043d\u0438\u043e\u0442 \u043c\u0435\u0441\u0435\u0446","-1":"\u043c\u0438\u043d\u0430\u0442\u0438\u043e\u0442 \u043c\u0435\u0441\u0435\u0446"},relativeTime:{future:{one:"\u0437\u0430 {0} \u043c\u0435\u0441\u0435\u0446",other:"\u0437\u0430 {0} \u043c\u0435\u0441\u0435\u0446\u0438"},past:{one:"\u043f\u0440\u0435\u0434 {0} \u043c\u0435\u0441\u0435\u0446",other:"\u043f\u0440\u0435\u0434 {0} \u043c\u0435\u0441\u0435\u0446\u0438"}}},"month-short":{displayName:"\u043c\u0435\u0441.",relative:{0:"\u043e\u0432\u043e\u0458 \u043c\u0435\u0441\u0435\u0446",1:"\u0441\u043b\u0435\u0434\u043d\u0438\u043e\u0442 \u043c\u0435\u0441\u0435\u0446","-1":"\u043c\u0438\u043d\u0430\u0442\u0438\u043e\u0442 \u043c\u0435\u0441\u0435\u0446"},relativeTime:{future:{one:"\u0437\u0430 {0} \u043c\u0435\u0441\u0435\u0446",other:"\u0437\u0430 {0} \u043c\u0435\u0441\u0435\u0446\u0438"},past:{one:"\u043f\u0440\u0435\u0434 {0} \u043c\u0435\u0441\u0435\u0446",other:"\u043f\u0440\u0435\u0434 {0} \u043c\u0435\u0441\u0435\u0446\u0438"}}},day:{displayName:"\u0434\u0435\u043d",relative:{0:"\u0434\u0435\u043d\u0435\u0441",1:"\u0443\u0442\u0440\u0435",2:"\u0437\u0430\u0434\u0443\u0442\u0440\u0435","-2":"\u0437\u0430\u0432\u0447\u0435\u0440\u0430","-1":"\u0432\u0447\u0435\u0440\u0430"},relativeTime:{future:{one:"\u0437\u0430 {0} \u0434\u0435\u043d",other:"\u0437\u0430 {0} \u0434\u0435\u043d\u0430"},past:{one:"\u043f\u0440\u0435\u0434 {0} \u0434\u0435\u043d",other:"\u043f\u0440\u0435\u0434 {0} \u0434\u0435\u043d\u0430"}}},"day-short":{displayName:"\u0434\u0435\u043d",relative:{0:"\u0434\u0435\u043d\u0435\u0441",1:"\u0443\u0442\u0440\u0435",2:"\u0437\u0430\u0434\u0443\u0442\u0440\u0435","-2":"\u0437\u0430\u0432\u0447\u0435\u0440\u0430","-1":"\u0432\u0447\u0435\u0440\u0430"},relativeTime:{future:{one:"\u0437\u0430 {0} \u0434\u0435\u043d",other:"\u0437\u0430 {0} \u0434\u0435\u043d\u0430"},past:{one:"\u043f\u0440\u0435\u0434 {0} \u0434\u0435\u043d",other:"\u043f\u0440\u0435\u0434 {0} \u0434\u0435\u043d\u0430"}}},hour:{displayName:"\u0447\u0430\u0441",relative:{0:"\u0447\u0430\u0441\u043e\u0432"},relativeTime:{future:{one:"\u0437\u0430 {0} \u0447\u0430\u0441",other:"\u0437\u0430 {0} \u0447\u0430\u0441\u0430"},past:{one:"\u043f\u0440\u0435\u0434 {0} \u0447\u0430\u0441",other:"\u043f\u0440\u0435\u0434 {0} \u0447\u0430\u0441\u0430"}}},"hour-short":{displayName:"\u0447.",relative:{0:"\u0447\u0430\u0441\u043e\u0432"},relativeTime:{future:{one:"\u0437\u0430 {0} \u0447\u0430\u0441",other:"\u0437\u0430 {0} \u0447\u0430\u0441\u0430"},past:{one:"\u043f\u0440\u0435\u0434 {0} \u0447\u0430\u0441",other:"\u043f\u0440\u0435\u0434 {0} \u0447\u0430\u0441\u0430"}}},minute:{displayName:"\u043c\u0438\u043d\u0443\u0442\u0430",relative:{0:"\u043e\u0432\u0430\u0430 \u043c\u0438\u043d\u0443\u0442\u0430"},relativeTime:{future:{one:"\u0437\u0430 {0} \u043c\u0438\u043d\u0443\u0442\u0430",other:"\u0437\u0430 {0} \u043c\u0438\u043d\u0443\u0442\u0438"},past:{one:"\u043f\u0440\u0435\u0434 {0} \u043c\u0438\u043d\u0443\u0442\u0430",other:"\u043f\u0440\u0435\u0434 {0} \u043c\u0438\u043d\u0443\u0442\u0438"}}},"minute-short":{displayName:"\u043c\u0438\u043d.",relative:{0:"\u043e\u0432\u0430\u0430 \u043c\u0438\u043d\u0443\u0442\u0430"},relativeTime:{future:{one:"\u0437\u0430 {0} \u043c\u0438\u043d.",other:"\u0437\u0430 {0} \u043c\u0438\u043d."},past:{one:"\u043f\u0440\u0435\u0434 {0} \u043c\u0438\u043d.",other:"\u043f\u0440\u0435\u0434 {0} \u043c\u0438\u043d."}}},second:{displayName:"\u0441\u0435\u043a\u0443\u043d\u0434\u0430",relative:{0:"\u0441\u0435\u0433\u0430"},relativeTime:{future:{one:"\u0437\u0430 {0} \u0441\u0435\u043a\u0443\u043d\u0434\u0430",other:"\u0437\u0430 {0} \u0441\u0435\u043a\u0443\u043d\u0434\u0438"},past:{one:"\u043f\u0440\u0435\u0434 {0} \u0441\u0435\u043a\u0443\u043d\u0434\u0430",other:"\u043f\u0440\u0435\u0434 {0} \u0441\u0435\u043a\u0443\u043d\u0434\u0438"}}},"second-short":{displayName:"\u0441\u0435\u043a.",relative:{0:"\u0441\u0435\u0433\u0430"},relativeTime:{future:{one:"\u0437\u0430 {0} \u0441\u0435\u043a.",other:"\u0437\u0430 {0} \u0441\u0435\u043a."},past:{one:"\u043f\u0440\u0435\u0434 {0} \u0441\u0435\u043a.",other:"\u043f\u0440\u0435\u0434 {0} \u0441\u0435\u043a."}}}}}]}()}}]);
//# sourceMappingURL=131.64eb4291.chunk.js.map