sap.ui.define([
    "sap/m/MessageToast"
], function (MessageToast) {

    "use strict";

    return {

        sayHello: function () {
            MessageToast.show("Hello from my custom library!");
        }

    };
});