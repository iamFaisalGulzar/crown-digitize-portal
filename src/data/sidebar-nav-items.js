export default function() {
  return [
    {
      title: "Orders",
      to: "/",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "New Order",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/new-order"
    },
    {
      title: "Tables",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/tables"
    },
    {
      title: "Payments",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/payments"
    },
    {
      title: "User Profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite"
    }
  ];
}
