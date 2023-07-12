sap.ui.define(["sap/ui/core/library"], // library dependency
    function () {

        "use strict";

        /**
         * Custom library
         *
         * @namespace
         * @name umg.my.custom.library
         * @author François Mesmacque
         * @version 0.0.1
         * @public
         */

        // delegate further initialization of this library to the Core
        sap.ui.getCore().initLibrary({
            name: "umg.my.custom.library",
            version: "0.0.1",
            dependencies: ["sap.ui.core"],
            noLibraryCSS: true,
            types: [],
            interfaces: [],
            controls: [],
            elements: []
        });

        /* eslint-disable */
        // @ts-ignore
        return umg.my.custom.library;
        /* eslint-enable */

    }, /* bExport= */ false);