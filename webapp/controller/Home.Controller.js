sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  function (Controller, JSONModel, Filter, FilterOperator) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.Home", {
      onInit: function () {
        let table = new JSONModel("../model/vacc.json");
        this.getView().setModel(table, "vacc");
        let myViewConfig = {
          table: true,
          calendar: false,
        };
        let calendar = new JSONModel(myViewConfig);
        this.getView().setModel(calendar, "view");
      },
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
      // formatDate: function (input) {
      //   return new Date(input);
      // },
      // formatTDate: function (input) {
      //   let currentDate = new Date();
      //   let inputDate = new Date(input);
      //   if (inputDate < currentDate) {
      //     return "Success";
      //   } else if (inputDate > currentDate) {
      //     return "Warning";
      //   } else {
      //     return "Error";
      //   }
      // },
      onLogOff: function () {
        var oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("login");
      },
    });
  }
);
