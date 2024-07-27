import React from "react";
import "../Design/Menu.css";

export default function Menu() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div>
      <div className="widgetLg">
        <h3 className="widgetLgTitle"></h3>
        <table className="widgetLgTable">
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Followers</th>
            
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.gr-assets.com/authors/1561336084p8/4123863.jpg"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">abc</span>
            </td>
            <td className="widgetLgRemove">
              <div className="remove">Remove</div>
            </td>
            <td className="widgetLgPost">4</td>

            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
