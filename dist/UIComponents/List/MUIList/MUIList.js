"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MUIList;

var React = _interopRequireWildcard(require("react"));

var _List = _interopRequireDefault(require("@mui/material/List"));

var _ListItem = _interopRequireDefault(require("@mui/material/ListItem"));

var _ListItemIcon = _interopRequireDefault(require("@mui/material/ListItemIcon"));

var _ListItemText = _interopRequireDefault(require("@mui/material/ListItemText"));

var _ListSubheader = _interopRequireDefault(require("@mui/material/ListSubheader"));

var _SampleIcon = _interopRequireDefault(require("../../../Asset/Icon/SampleIcon.png"));

var _Button = _interopRequireDefault(require("../../Button/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var iconStyle = {
  width: 40,
  height: 40
};
var buttonStyle = {
  backgroundColor: '#B0BAD7',
  color: 'white',
  border: 0
};

function createData(title, description, style) {
  return {
    title: title,
    description: description,
    style: style
  };
}

var rows = [createData('Password', 'Change your password', {
  title: {},
  description: {
    color: '#B0BAD7',
    fontSize: 10
  }
}), createData('Security Phrase', 'Change your security phrase', {
  title: {},
  description: {
    color: '#B0BAD7',
    fontSize: 10
  }
}), createData('Security Image', 'Change the security image for login verification', {
  title: {},
  description: {
    color: '#B0BAD7',
    fontSize: 10
  }
}), createData('Security Questions', 'Change your personal security questions', {
  title: {},
  description: {
    color: '#B0BAD7',
    fontSize: 10
  }
}), createData('Secure2u', 'A faster way to authorize transactions', {
  title: {},
  description: {
    color: '#B0BAD7',
    fontSize: 10
  }
}), createData('Quick Touch', 'On', {
  title: {},
  description: {
    color: '#01CCCE'
  }
})];

function MUIList() {
  return /*#__PURE__*/React.createElement(_List.default, {
    sx: {
      width: '100%',
      maxWidth: 660,
      bgcolor: 'background.paper'
    },
    style: {
      margin: "auto"
    }
  }, rows.map(function (row, index) {
    var _row$style, _row$style2;

    return /*#__PURE__*/React.createElement(_ListItem.default, {
      key: index
    }, /*#__PURE__*/React.createElement(_ListItemIcon.default, null, /*#__PURE__*/React.createElement("img", {
      src: _SampleIcon.default,
      style: iconStyle
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement(_ListItemText.default, {
      primary: row === null || row === void 0 ? void 0 : row.title,
      style: row === null || row === void 0 ? void 0 : (_row$style = row.style) === null || _row$style === void 0 ? void 0 : _row$style.title
    }), /*#__PURE__*/React.createElement(_ListItemText.default, {
      primary: row === null || row === void 0 ? void 0 : row.description,
      style: row === null || row === void 0 ? void 0 : (_row$style2 = row.style) === null || _row$style2 === void 0 ? void 0 : _row$style2.description,
      primaryTypographyProps: {
        fontSize: '13px'
      }
    })), /*#__PURE__*/React.createElement(_Button.default, {
      style: buttonStyle,
      text: 'Change'
    }));
  }));
}