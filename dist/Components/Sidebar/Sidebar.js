"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./Sidebar.css");

var sidebutton = [{
  icon: "schedule",
  name: "Approvals",
  notification: 36
}, {
  icon: "receipt_long",
  name: "Bill Payment",
  notification: null
}, {
  icon: "monetization_on",
  name: "Transfer",
  notification: null
}, {
  icon: "event_note",
  name: "Scheduled Transactions",
  notification: null
}, {
  icon: "account_tree",
  name: "Bulk Payment",
  notification: null
}, {
  icon: "smartphone",
  name: "RPP",
  notification: null
}, {
  icon: "analytics",
  name: "Business Dashboard",
  notification: null
}, {
  icon: "post_add",
  name: "Apply",
  notification: null
}, {
  icon: "emoji_objects",
  name: "Investment",
  notification: null
}, {
  icon: "currency_exchange",
  name: "Forex Counter",
  notification: null
}, {
  icon: "inbox",
  name: "Inbox",
  notification: 86
}, {
  icon: "settings",
  name: "Settings",
  notification: null
}]; // Due to using tailwind css last time, need redo the classname in css file

var Sidebar = function Sidebar() {
  return /*#__PURE__*/React.createElement("div", {
    className: "containers"
  }, /*#__PURE__*/React.createElement("div", {
    className: "headers"
  }, "Maybank2u Biz"), /*#__PURE__*/React.createElement("div", {
    className: "flex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "profileBorder"
  }), /*#__PURE__*/React.createElement("div", {
    className: "profile"
  }, /*#__PURE__*/React.createElement("div", {
    className: "profileName"
  }, /*#__PURE__*/React.createElement("div", {
    className: "profileContent"
  }, /*#__PURE__*/React.createElement("div", {
    className: "profilePicture"
  }), /*#__PURE__*/React.createElement("div", {
    className: "profileName"
  }, "Canvas Valley"))))), /*#__PURE__*/React.createElement("div", {
    className: "listContainer"
  }, sidebutton.map(function (side) {
    return /*#__PURE__*/React.createElement("div", {
      className: "item",
      key: side.icon
    }, /*#__PURE__*/React.createElement("i", {
      className: "material-icons text-white"
    }, side.icon), /*#__PURE__*/React.createElement("div", {
      className: "itemName"
    }, side.name), /*#__PURE__*/React.createElement("div", {
      className: side.notification === null ? "hidden" : "notifiation"
    }, side.notification));
  })));
};

var _default = Sidebar;
exports.default = _default;