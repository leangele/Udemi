System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var attendanceService;
    return {
        setters:[],
        execute: function() {
            attendanceService = (function () {
                function attendanceService() {
                }
                attendanceService.prototype.getAttendances = function () {
                    return [
                        { name: "Angelo", Age: 31, experience: 5 },
                        { name: "Jackie", Age: 28, experience: 3 },
                        { name: "Jeffry", Age: 28, experience: 3 }];
                };
                return attendanceService;
            }());
            exports_1("attendanceService", attendanceService);
        }
    }
});
//# sourceMappingURL=attendance.service.js.map