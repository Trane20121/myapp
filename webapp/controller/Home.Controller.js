sap.ui.define(
  [
    "sap/ui/core/library",
    "sap/ui/core/Fragment",
    "./BaseController",
    "sap/ui/core/format/DateFormat",
    "sap/ui/model/json/JSONModel",
    "sap/ui/unified/library",
    "sap/m/MessageToast",
  ],
  function (
    coreLibrary,
    Fragment,
    BaseController,
    DateFormat,
    JSONModel,
    unifiedLibrary,
    MessageToast
  ) {
    "use strict";

    var CalendarDayType = unifiedLibrary.CalendarDayType;
    var ValueState = coreLibrary.ValueState;

    return BaseController.extend("sap.ui.demo.walkthrough.controller.Home", {
      onInit: function () {
        let table = new JSONModel("../model/vacc.json");
        var oModel = new JSONModel();
        oModel.setData({
          startDate: new Date(),
          appointments: [
            {
              title: "Meet John Miller",
              type: CalendarDayType.Type05,
              startDate: new Date("2022", "9", "8", "5", "0"),
              endDate: new Date("2022", "9", "8", "9", "0"),
            },
            {
              title: "Discussion of the plan",
              type: CalendarDayType.Type01,
              startDate: new Date("2022", "9", "8", "9", "0"),
              endDate: new Date("2022", "9", "8", "10", "9"),
            },
            {
              title: "Lunch",
              text: "canteen",
              type: CalendarDayType.Type05,
              startDate: new Date("2022", "9", "8", "7", "0"),
              endDate: new Date("2022", "9", "8", "8", "0"),
            },
            {
              title: "New Product",
              text: "room 105",
              type: CalendarDayType.Type01,
              icon: "sap-icon://meeting-room",
              startDate: new Date("2022", "9", "8", "8", "0"),
              endDate: new Date("2022", "9", "8", "9", "0"),
            },
            {
              title: "Team meeting",
              text: "Regular",
              type: CalendarDayType.Type01,
              icon: "sap-icon://home",
              startDate: new Date("2022", "9", "8", "9", "9"),
              endDate: new Date("2022", "9", "8", "10", "0"),
            },
            {
              title: "Discussion with clients",
              text: "Online meeting",
              type: CalendarDayType.Type08,
              icon: "sap-icon://home",
              startDate: new Date("2022", "9", "8", "10", "0"),
              endDate: new Date("2022", "9", "8", "11", "0"),
            },
            {
              title: "Discussion of the plan",
              text: "Online meeting",
              type: CalendarDayType.Type01,
              icon: "sap-icon://home",
              tentative: true,
              startDate: new Date("2022", "9", "8", "11", "0"),
              endDate: new Date("2022", "9", "8", "12", "0"),
            },
            {
              title: "Discussion with clients",
              type: CalendarDayType.Type08,
              icon: "sap-icon://home",
              startDate: new Date("2022", "9", "8", "12", "0"),
              endDate: new Date("2022", "9", "8", "13", "9"),
            },
            {
              title: "Meeting with the manager",
              type: CalendarDayType.Type03,
              startDate: new Date("2022", "9", "8", "13", "9"),
              endDate: new Date("2022", "9", "8", "13", "9"),
            },
            {
              title: "Meeting with the manager",
              type: CalendarDayType.Type03,
              startDate: new Date("2022", "9", "9", "9", "30"),
              endDate: new Date("2022", "9", "9", "7", "0"),
            },
            {
              title: "Lunch",
              type: CalendarDayType.Type05,
              startDate: new Date("2022", "9", "9", "7", "0"),
              endDate: new Date("2022", "9", "9", "8", "0"),
            },
            {
              title: "Team meeting",
              text: "online",
              type: CalendarDayType.Type01,
              startDate: new Date("2022", "9", "9", "8", "0"),
              endDate: new Date("2022", "9", "9", "9", "0"),
            },
            {
              title: "Discussion with clients",
              type: CalendarDayType.Type08,
              startDate: new Date("2022", "9", "9", "9", "0"),
              endDate: new Date("2022", "9", "9", "10", "0"),
            },
            {
              title: "Team meeting",
              text: "room 5",
              type: CalendarDayType.Type01,
              startDate: new Date("2022", "9", "9", "11", "0"),
              endDate: new Date("2022", "9", "9", "14", "0"),
            },
            {
              title: "Daily standup meeting",
              type: CalendarDayType.Type01,
              startDate: new Date("2022", "9", "9", "9", "0"),
              endDate: new Date("2022", "9", "9", "9", "15", "0"),
            },
            {
              title: "Private meeting",
              type: CalendarDayType.Type03,
              startDate: new Date("2022", "9", "11", "9", "9"),
              endDate: new Date("2022", "9", "11", "9", "20"),
            },
            {
              title: "Private meeting",
              type: CalendarDayType.Type03,
              startDate: new Date("2022", "9", "10", "9", "0"),
              endDate: new Date("2022", "9", "10", "10", "0"),
            },
            {
              title: "Meeting with the manager",
              type: CalendarDayType.Type03,
              startDate: new Date("2022", "9", "10", "15", "0"),
              endDate: new Date("2022", "9", "10", "15", "30"),
            },
            {
              title: "Meet John Doe",
              type: CalendarDayType.Type05,
              icon: "sap-icon://home",
              startDate: new Date("2022", "9", "11", "7", "0"),
              endDate: new Date("2022", "9", "11", "7", "30"),
            },
            {
              title: "Team meeting",
              text: "online",
              type: CalendarDayType.Type01,
              startDate: new Date("2022", "9", "11", "8", "0"),
              endDate: new Date("2022", "9", "11", "9", "30"),
            },
            {
              title: "Workshop",
              type: CalendarDayType.Type05,
              startDate: new Date("2022", "9", "11", "8", "30"),
              endDate: new Date("2022", "9", "11", "12", "0"),
            },
            {
              title: "Team collaboration",
              type: CalendarDayType.Type01,
              startDate: new Date("2022", "9", "12", "4", "0"),
              endDate: new Date("2022", "9", "12", "12", "30"),
            },
            {
              title: "Out of the office",
              type: CalendarDayType.Type05,
              startDate: new Date("2022", "9", "12", "15", "0"),
              endDate: new Date("2022", "9", "12", "19", "30"),
            },
            {
              title: "Working out of the building",
              type: CalendarDayType.Type05,
              startDate: new Date("2022", "9", "12", "20", "0"),
              endDate: new Date("2022", "9", "12", "21", "30"),
            },
            {
              title: "Reminder",
              type: CalendarDayType.Type09,
              startDate: new Date("2022", "9", "12", "00", "00"),
              endDate: new Date("2022", "9", "13", "00", "00"),
            },
            {
              title: "Team collaboration",
              type: CalendarDayType.Type01,
              startDate: new Date("2022", "9", "9", "00", "00"),
              endDate: new Date("2022", "9", "16", "00", "00"),
            },
            {
              title: "Workshop out of the country",
              type: CalendarDayType.Type05,
              startDate: new Date("2022", "9", "14", "00", "00"),
              endDate: new Date("2022", "9", "20", "00", "00"),
            },
            {
              title: "Payment reminder",
              type: CalendarDayType.Type09,
              startDate: new Date("2022", "9", "7", "00", "00"),
              endDate: new Date("2022", "9", "8", "00", "00"),
            },
            {
              title: "Meeting with the manager",
              type: CalendarDayType.Type03,
              startDate: new Date("2022", "9", "9", "9", "0"),
              endDate: new Date("2022", "9", "9", "10", "0"),
            },
            {
              title: "Daily standup meeting",
              type: CalendarDayType.Type01,
              startDate: new Date("2022", "9", "7", "10", "0"),
              endDate: new Date("2022", "9", "7", "10", "30"),
            },
            {
              title: "Private meeting",
              type: CalendarDayType.Type03,
              startDate: new Date("2022", "9", "9", "11", "30"),
              endDate: new Date("2022", "9", "9", "12", "0"),
            },
            {
              title: "Lunch",
              type: CalendarDayType.Type05,
              startDate: new Date("2022", "9", "9", "12", "0"),
              endDate: new Date("2022", "9", "9", "13", "0"),
            },
            {
              title: "Discussion of the plan",
              type: CalendarDayType.Type01,
              startDate: new Date("2022", "9", "16", "11", "0"),
              endDate: new Date("2022", "9", "16", "12", "0"),
            },
            {
              title: "Lunch",
              text: "canteen",
              type: CalendarDayType.Type05,
              startDate: new Date("2022", "9", "16", "12", "0"),
              endDate: new Date("2022", "9", "16", "13", "0"),
            },
            {
              title: "Team meeting",
              text: "room 200",
              type: CalendarDayType.Type01,
              icon: "sap-icon://meeting-room",
              startDate: new Date("2022", "9", "16", "16", "0"),
              endDate: new Date("2022", "9", "16", "17", "0"),
            },
            {
              title: "Discussion with clients",
              text: "Online meeting",
              type: CalendarDayType.Type08,
              icon: "sap-icon://home",
              startDate: new Date("2022", "6", "17", "15", "30"),
              endDate: new Date("2022", "10", "17", "16", "30"),
            },
          ],
        });
        this.getView().setModel(oModel);

        oModel = new JSONModel();
        oModel.setData({
          stickyMode: "None",
          enableAppointmentsDragAndDrop: true,
          enableAppointmentsResize: true,
          enableAppointmentsCreate: true,
        });
        this.getView().setModel(oModel, "settings");
        this.getView().setModel(table, "vacc");
        let myViewConfig = {
          table: true,
          calendar: false,
        };
        let calendar = new JSONModel(myViewConfig);
        this.getView().setModel(calendar, "view");
      },

      onBeforeRendering: function () {
        this.getView()
          .getParent()
          .getParent()
          .getParent()
          .byId("shellBar")
          .setVisible(true);
      },
      handleAppointmentDrop: function (oEvent) {
        var oAppointment = oEvent.getParameter("appointment"),
          oStartDate = oEvent.getParameter("startDate"),
          oEndDate = oEvent.getParameter("endDate"),
          bCopy = oEvent.getParameter("copy"),
          sAppointmentTitle = oAppointment.getTitle(),
          oModel = this.getView().getModel(),
          oNewAppointment;
  
        if (bCopy) {
          oNewAppointment = {
            title: sAppointmentTitle,
            icon: oAppointment.getIcon(),
            text: oAppointment.getText(),
            type: oAppointment.getType(),
            startDate: oStartDate,
            endDate: oEndDate
          };
          oModel.getData().appointments.push(oNewAppointment);
          oModel.updateBindings();
        } else {
          oAppointment.setStartDate(oStartDate);
          oAppointment.setEndDate(oEndDate);
        }
  
        MessageToast.show("Appointment with title \n'"
          + sAppointmentTitle
          + "'\n has been " + (bCopy ? "create" : "moved")
        );  
      },
      handleAppointmentResize: function (oEvent) {
        var oAppointment = oEvent.getParameter("appointment"),
          oStartDate = oEvent.getParameter("startDate"),
          oEndDate = oEvent.getParameter("endDate"),
          sAppointmentTitle = oAppointment.getTitle();

        oAppointment.setStartDate(oStartDate);
        oAppointment.setEndDate(oEndDate);

        MessageToast.show(
          "Appointment with title \n'" +
            sAppointmentTitle +
            "'\n has been resized"
        );
      },
      handleAppointmentSelect: function (oEvent) {
        var oAppointment = oEvent.getParameter("appointment"),
          oStartDate,
          oEndDate,
          oTrimmedStartDate,
          oTrimmedEndDate,
          bAllDate,
          oModel,
          oView = this.getView();

        if (
          (!oAppointment || !oAppointment.getSelected()) &&
          this._pDetailsPopover
        ) {
          this._pDetailsPopover.then(function (oResponsivePopover) {
            oResponsivePopover.close();
          });
          return;
        }

        oStartDate = oAppointment.getStartDate();
        oEndDate = oAppointment.getEndDate();
        oTrimmedStartDate = new Date(oStartDate);
        oTrimmedEndDate = new Date(oEndDate);
        bAllDate = false;
        oModel = this.getView().getModel("allDay");

        this._setHoursToZero(oTrimmedStartDate);
        this._setHoursToZero(oTrimmedEndDate);

        if (
          oStartDate.getTime() === oTrimmedStartDate.getTime() &&
          oEndDate.getTime() === oTrimmedEndDate.getTime()
        ) {
          bAllDate = true;
        }

        // oModel.getData().allDay = bAllDate;
        oModel.updateBindings();

        if (!this._pDetailsPopover) {
          this._pDetailsPopover = Fragment.load({
            id: oView.getId(),
            name: "sap.ui.demo.walkthrough.view.Details",
            controller: this,
          }).then(function (oDetailsPopover) {
            oView.addDependent(oDetailsPopover);
            return oDetailsPopover;
          });
        }
        this._pDetailsPopover.then(function (oDetailsPopover) {
          oDetailsPopover.setBindingContext(oAppointment.getBindingContext());
          oDetailsPopover.openBy(oAppointment);
        });
      },

      handleEditButton: function () {
        // The sap.m.Popover has to be closed before the sap.m.Dialog gets opened
        var oDetailsPopover = this.byId("detailsPopover");
        oDetailsPopover.close();
        this.sPath = oDetailsPopover.getBindingContext().getPath();
        this._arrangeDialogFragment("Edit appointment");
      },

      handlePopoverDeleteButton: function () {
        var oModel = this.getView().getModel(),
          oAppointments = oModel.getData().appointments,
          oDetailsPopover = this.byId("detailsPopover"),
          oAppointment = oDetailsPopover._getBindingContext().getObject();

        oDetailsPopover.close();

        oAppointments.splice(oAppointments.indexOf(oAppointment), 1);
        oModel.updateBindings();
      },

      _arrangeDialogFragment: function (sTitle) {
        var oView = this.getView();

        if (!this._pNewAppointmentDialog) {
          this._pNewAppointmentDialog = Fragment.load({
            id: oView.getId(),
            name: "sap.ui.demo.walkthrough.view.Create",
            controller: this,
          }).then(function (oModifyDialog) {
            oView.addDependent(oModifyDialog);
            return oModifyDialog;
          });
        }

        this._pNewAppointmentDialog.then(
          function (oModifyDialog) {
            this._arrangeDialog(sTitle, oModifyDialog);
          }.bind(this)
        );
      },

      _arrangeDialog: function (sTitle, oModifyDialog) {
        this._setValuesToDialogContent();
        oModifyDialog.setTitle(sTitle);
        oModifyDialog.open();
      },

      _setValuesToDialogContent: function () {
        var bAllDayAppointment = this.byId("allDay").getSelected(),
          sStartDatePickerID = bAllDayAppointment
            ? "DPStartDate"
            : "DTPStartDate",
          sEndDatePickerID = bAllDayAppointment ? "DPEndDate" : "DTPEndDate",
          oTitleControl = this.byId("appTitle"),
          oTextControl = this.byId("moreInfo"),
          oTypeControl = this.byId("appType"),
          oStartDateControl = this.byId(sStartDatePickerID),
          oEndDateControl = this.byId(sEndDatePickerID),
          oContext,
          oContextObject,
          oSPCStartDate,
          sTitle,
          sText,
          oStartDate,
          oEndDate,
          sType;

        if (this.sPath) {
          oContext = this.byId("detailsPopover").getBindingContext();
          oContextObject = oContext.getObject();
          sTitle = oContextObject.title;
          sText = oContextObject.text;
          oStartDate = oContextObject.startDate;
          oEndDate = oContextObject.endDate;
          sType = oContextObject.type;
        } else {
          sTitle = "";
          sText = "";
          oSPCStartDate = this.getView().byId("SPC1").getStartDate();
          oStartDate = new Date(oSPCStartDate);
          oStartDate.setHours(this._getDefaultAppointmentStartHour());
          oEndDate = new Date(oSPCStartDate);
          oEndDate.setHours(this._getDefaultAppointmentEndHour());
          sType = "Type01";
        }

        oTitleControl.setValue(sTitle);
        oTextControl.setValue(sText);
        oStartDateControl.setDateValue(oStartDate);
        oEndDateControl.setDateValue(oEndDate);
        // oTypeControl.setSelectedKey(sType);
      },

      handleDialogOkButton: function () {
        var bAllDayAppointment = this.byId("allDay").getSelected(),
          sStartDate = bAllDayAppointment ? "DPStartDate" : "DTPStartDate",
          sEndDate = bAllDayAppointment ? "DPEndDate" : "DTPEndDate",
          sTitle = this.byId("appTitle").getValue(),
          sText = this.byId("moreInfo").getValue(),
          oStartDate = this.byId(sStartDate).getDateValue(),
          oEndDate = this.byId(sEndDate).getDateValue(),
          oModel = this.getView().getModel(),
          sAppointmentPath;

        if (
          this.byId(sStartDate).getValueState() !== "Error" &&
          this.byId(sEndDate).getValueState() !== "Error"
        ) {
          if (this.sPath) {
            sAppointmentPath = this.sPath;
            oModel.setProperty(sAppointmentPath + "/title", sTitle);
            oModel.setProperty(sAppointmentPath + "/text", sText);
            oModel.setProperty(sAppointmentPath + "/type", sType);
            oModel.setProperty(sAppointmentPath + "/startDate", oStartDate);
            oModel.setProperty(sAppointmentPath + "/endDate", oEndDate);
          } else {
            oModel.getData().appointments.push({
              title: sTitle,
              text: sText,
              startDate: oStartDate,
              endDate: oEndDate,
            });
          }

          oModel.updateBindings();

          this.byId("modifyDialog").close();
        }
      },

      formatDate: function (oDate) {
        if (oDate) {
          var iHours = oDate.getHours(),
            iMinutes = oDate.getMinutes(),
            iSeconds = oDate.getSeconds();

          if (iHours !== 0 || iMinutes !== 0 || iSeconds !== 0) {
            return DateFormat.getDateTimeInstance({ style: "medium" }).format(
              oDate
            );
          } else {
            return DateFormat.getDateInstance({ style: "medium" }).format(
              oDate
            );
          }
        }
        return "";
      },

      handleDialogCancelButton: function () {
        this.sPath = null;
        this.byId("modifyDialog").close();
      },

      handleCheckBoxSelect: function (oEvent) {
        var bSelected = oEvent.getSource().getSelected(),
          sStartDatePickerID = bSelected ? "DTPStartDate" : "DPStartDate",
          sEndDatePickerID = bSelected ? "DTPEndDate" : "DPEndDate",
          oOldStartDate = this.byId(sStartDatePickerID).getDateValue(),
          oNewStartDate = new Date(oOldStartDate),
          oOldEndDate = this.byId(sEndDatePickerID).getDateValue(),
          oNewEndDate = new Date(oOldEndDate);

        if (!bSelected) {
          oNewStartDate.setHours(this._getDefaultAppointmentStartHour());
          oNewEndDate.setHours(this._getDefaultAppointmentEndHour());
        } else {
          this._setHoursToZero(oNewStartDate);
          this._setHoursToZero(oNewEndDate);
        }

        sStartDatePickerID = !bSelected ? "DTPStartDate" : "DPStartDate";
        sEndDatePickerID = !bSelected ? "DTPEndDate" : "DPEndDate";
        this.byId(sStartDatePickerID).setDateValue(oNewStartDate);
        this.byId(sEndDatePickerID).setDateValue(oNewEndDate);
      },

      _getDefaultAppointmentStartHour: function () {
        return 9;
      },

      _getDefaultAppointmentEndHour: function () {
        return 10;
      },

      _setHoursToZero: function (oDate) {
        oDate.setHours(0, 0, 0, 0);
      },

      handleAppointmentCreate: function () {
        this._createInitialDialogValues(
          this.getView().byId("SPC1").getStartDate()
        );
      },

      handleHeaderDateSelect: function (oEvent) {
        this._createInitialDialogValues(oEvent.getParameter("date"));
      },

      _createInitialDialogValues: function (oDate) {
        var oStartDate = new Date(oDate),
          oEndDate = new Date(oStartDate);

        oStartDate.setHours(this._getDefaultAppointmentStartHour());
        oEndDate.setHours(this._getDefaultAppointmentEndHour());
        this.sPath = null;

        this._arrangeDialogFragment("Create appointment");
      },

      handleStartDateChange: function (oEvent) {
        var oStartDate = oEvent.getParameter("date");
        MessageToast.show(
          "'startDateChange' event fired.\n\nNew start date is " +
            oStartDate.toString()
        );
      },

      updateButtonEnabledState: function (
        oDateTimePickerStart,
        oDateTimePickerEnd,
        oButton
      ) {
        var bEnabled =
          oDateTimePickerStart.getValueState() !== "Error" &&
          oDateTimePickerStart.getValue() !== "" &&
          oDateTimePickerEnd.getValue() !== "" &&
          oDateTimePickerEnd.getValueState() !== "Error";

        oButton.setEnabled(bEnabled);
      },

      handleDateTimePickerChange: function () {
        var oDateTimePickerStart = this.byId("DTPStartDate"),
          oDateTimePickerEnd = this.byId("DTPEndDate"),
          oStartDate = oDateTimePickerStart.getDateValue(),
          oEndDate = oDateTimePickerEnd.getDateValue(),
          bEndDateBiggerThanStartDate =
            oEndDate.getTime() <= oStartDate.getTime(),
          bErrorState = oStartDate && oEndDate && bEndDateBiggerThanStartDate;

        this._setDateValueState(oDateTimePickerStart, bErrorState);
        this._setDateValueState(oDateTimePickerEnd, bErrorState);
        this.updateButtonEnabledState(
          oDateTimePickerStart,
          oDateTimePickerEnd,
          this.byId("modifyDialog").getBeginButton()
        );
      },

      handleDatePickerChange: function () {
        var oDatePickerStart = this.byId("DPStartDate"),
          oDatePickerEnd = this.byId("DPEndDate"),
          oStartDate = oDatePickerStart.getDateValue(),
          oEndDate = oDatePickerEnd.getDateValue(),
          bEndDateBiggerThanStartDate =
            oEndDate.getTime() < oStartDate.getTime(),
          bErrorState = oStartDate && oEndDate && bEndDateBiggerThanStartDate;

        this._setDateValueState(oDatePickerStart, bErrorState);
        this._setDateValueState(oDatePickerEnd, bErrorState);
        this.updateButtonEnabledState(
          oDatePickerStart,
          oDatePickerEnd,
          this.byId("modifyDialog").getBeginButton()
        );
      },

      _setDateValueState: function (oPicker, bErrorState) {
        var sValueStateText = "Start date should be before End date";

        if (bErrorState) {
          oPicker.setValueState(ValueState.Error);
          oPicker.setValueStateText(sValueStateText);
        } else {
          oPicker.setValueState(ValueState.None);
        }
      },
      handleAppointmentDrop: function (oEvent) {
        var oAppointment = oEvent.getParameter("appointment"),
          oStartDate = oEvent.getParameter("startDate"),
          oEndDate = oEvent.getParameter("endDate"),
          bCopy = oEvent.getParameter("copy"),
          sAppointmentTitle = oAppointment.getTitle(),
          oModel = this.getView().getModel(),
          oNewAppointment;

        if (bCopy) {
          oNewAppointment = {
            title: sAppointmentTitle,
            icon: oAppointment.getIcon(),
            text: oAppointment.getText(),
            type: oAppointment.getType(),
            startDate: oStartDate,
            endDate: oEndDate,
          };
          oModel.getData().appointments.push(oNewAppointment);
          oModel.updateBindings();
        } else {
          oAppointment.setStartDate(oStartDate);
          oAppointment.setEndDate(oEndDate);
        }

        MessageToast.show(
          "Appointment with title \n'" +
            sAppointmentTitle +
            "'\n has been " +
            (bCopy ? "create" : "moved")
        );
      },

      handleAppointmentResize: function (oEvent) {
        var oAppointment = oEvent.getParameter("appointment"),
          oStartDate = oEvent.getParameter("startDate"),
          oEndDate = oEvent.getParameter("endDate"),
          sAppointmentTitle = oAppointment.getTitle();

        oAppointment.setStartDate(oStartDate);
        oAppointment.setEndDate(oEndDate);

        MessageToast.show(
          "Appointment with title \n'" +
            sAppointmentTitle +
            "'\n has been resized"
        );
      },

      handleAppointmentCreateDnD: function (oEvent) {
        var oStartDate = oEvent.getParameter("startDate"),
          oEndDate = oEvent.getParameter("endDate"),
          sAppointmentTitle = "New Appointment",
          oModel = this.getView().getModel(),
          oNewAppointment = {
            title: sAppointmentTitle,
            startDate: oStartDate,
            endDate: oEndDate,
          };

        oModel.getData().appointments.push(oNewAppointment);
        oModel.updateBindings();

        MessageToast.show(
          "Appointment with title \n'" +
            sAppointmentTitle +
            "'\n has been created"
        );
      },
      onLogOff: function () {
        var oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("login");
      },
    });
  }
);

// sap.ui.define(
//   [
//     "sap/ui/core/mvc/Controller",
//     "sap/ui/model/json/JSONModel",
//     "sap/ui/model/Filter",
//     "sap/ui/model/FilterOperator",
//   ],
//   function (Controller, JSONModel, Filter, FilterOperator) {
//     "use strict";
//     return Controller.extend("sap.ui.demo.walkthrough.controller.Home", {
//       onInit: function () {
//         let table = new JSONModel("../model/vacc.json");
//         this.getView().setModel(table, "vacc");
//         let myViewConfig = {
//           table: true,
//           calendar: false,
//         };
//         let calendar = new JSONModel(myViewConfig);
//         this.getView().setModel(calendar, "view");
//       },
//       onSelect: function (rb) {
//         let button = rb.getSource().getId();
//         switch (button) {
//           case "container-walkthrough---home--rbtable":
//             this.byId("calendar").setVisible(false);
//             this.byId("table").setVisible(true);
//             break;
//           case "container-walkthrough---home--rbcalendar":
//             this.byId("table").setVisible(false);
//             this.byId("calendar").setVisible(true);
//             break;
//           default:
//             this.byId("table").setVisible(true);
//             this.byId("calendar").setVisible(false);
//             break;
//         }
//       },
//       formatDate: function (input) {
//         return new Date(input);
//       },
//       formatTDate: function (input) {
//         let currentDate = new Date();
//         let inputDate = new Date(input);
//         if (inputDate < currentDate) {
//           return "Success";
//         } else if (inputDate > currentDate) {
//           return "Warning";
//         } else {
//           return "Error";
//         }
// },
// onLogOff: function () {
//   var oRouter = this.getOwnerComponent().getRouter();
//   oRouter.navTo("login");
// },
//     });
//   }
// );
