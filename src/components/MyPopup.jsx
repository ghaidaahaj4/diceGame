import "./MyPopup.css";

const MyPopup = () => (
  <Popup
    trigger={<button>Open Custom Popup</button>}
    position="right center"
    contentStyle={{
      width: "300px",
      padding: "20px",
      backgroundColor: "#f1f1f1",
      textAlign: "center",
    }}
  >
    <div>Custom Popup Content</div>
  </Popup>
);

export default MyPopup;
