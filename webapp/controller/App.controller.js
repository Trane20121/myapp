sap.ui.define(["./BaseController"], function (BaseController) {
  "use strict";

  return BaseController.extend("sap.ui.demo.walkthrough.controller.App", {
    onLogOff: function () {
      var oRouter = this.getOwnerComponent().getRouter();
      oRouter.navTo("login");
    },
  });
});
