sap.ui.define(["sap/ui/test/Opa5"], function (Opa5) {
    "use strict";

    return Opa5.extend("com.epiuse.WebRangersMath.test.integration.arrangements.Startup", {
        iStartMyApp: function () {
            this.iStartMyUIComponent({
                componentConfig: {
                    name: "com.epiuse.WebRangersMath",
                    async: true,
                    manifest: true,
                },
            });
        },
    });
});
