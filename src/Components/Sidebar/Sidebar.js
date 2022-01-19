import "./Sidebar.css";
const sidebutton = [
  {
    icon: "schedule",
    name: "Approvals",
    notification: 36
  },
  {
    icon: "receipt_long",
    name: "Bill Payment",
    notification: null
  },
  {
    icon: "monetization_on",
    name: "Transfer",
    notification: null
  },
  {
    icon: "event_note",
    name: "Scheduled Transactions",
    notification: null
  },
  {
    icon: "account_tree",
    name: "Bulk Payment",
    notification: null
  },
  {
    icon: "smartphone",
    name: "RPP",
    notification: null
  },
  {
    icon: "analytics",
    name: "Business Dashboard",
    notification: null
  },
  {
    icon: "post_add",
    name: "Apply",
    notification: null
  },
  {
    icon: "emoji_objects",
    name: "Investment",
    notification: null
  },
  {
    icon: "currency_exchange",
    name: "Forex Counter",
    notification: null
  },
  {
    icon: "inbox",
    name: "Inbox",
    notification: 86
  },
  {
    icon: "settings",
    name: "Settings",
    notification: null
  }
];

// Due to using tailwind css last time, need redo the classname in css file
const Sidebar = () => {
  return (
    <div className="containers">
      <div className="headers">Maybank2u Biz</div>
      <div className="flex">
        <div className="profileBorder" />
        <div className="profile">
          <div className="profileName">
            <div className="profileContent">
              <div className="profilePicture">

              </div>
              <div className="profileName">
                Canvas Valley
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="listContainer">
        {sidebutton.map((side) => (
          <div className="item">
            <i className="material-icons text-white">{side.icon}</i>
            <div className="itemName">
              {side.name}
            </div>
            <div
              className={
                side.notification === null
                  ? "hidden"
                  : "notifiation"
              }
            >
              {side.notification}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
