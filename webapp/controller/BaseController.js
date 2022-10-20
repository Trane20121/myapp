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
          const table = this.byId("app").getAggregation("pages")[0].byId("table");
          const calendar = this.byId("app").getAggregation("pages")[0].byId("calendar");

          if (rb.getParameter("item") === undefined) {
            var button = rb.getSource().getId();
          } else {
            var button = rb.getParameter("item").getId();
          }
          
          switch (button) {
            case "container-walkthrough---app--menuTable":
              calendar.setVisible(false);
              table.setVisible(true);
              break;
            case "container-walkthrough---app--menuCalendar":
              table.setVisible(false);
              calendar.setVisible(true);
              break;
            default:
              table.setVisible(true);
              calendar.setVisible(false);
              break;
          }
        },
      }
    );
  }
);
