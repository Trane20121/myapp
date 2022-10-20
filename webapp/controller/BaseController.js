sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/ui/core/routing/History",
    "sap/m/MenuItem",
  ],
  function (Controller) {
    "use strict";

    return Controller.extend(
      "sap.ui.demo.walkthrough.controller.BaseController",
      {
        onSelect: function (rb) {
          let button = rb.getSource().getId();
          switch (button) {
            case "container-walkthrough---home--rbtable":
              this.byId("calendar").setVisible(false);
              this.byId("table").setVisible(true);
              break;
            case "container-walkthrough---home--rbcalendar":
              this.byId("table").setVisible(false);
              this.byId("calendar").setVisible(true);
              break;
            default:
              this.byId("table").setVisible(true);
              this.byId("calendar").setVisible(false);
              break;
          }
        },
      }
    );
  }
);
