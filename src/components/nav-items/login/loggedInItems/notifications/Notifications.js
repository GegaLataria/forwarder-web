import React from "react";
import { Context } from "../../../../App";
import Home from "../../../home/Home";
import LoggedInBar from "../loggedInBar/LoggedInBar";
import "./Notifications.css";

const Notifications = () => {
  const value = React.useContext(Context);
  if (value.loggedInUser) {
    return (
      <div className="notifications-page">
        <div className="login-column-left">
          <div className="notifications-list">
            <h1 className="notifications-title">შეტყობინებები</h1>
            <div className="notifications-list__item">
              <h3 className="notifications-list__item__left-title">
                მისამართი შეიცვალა
                <span className="notifications-list__item__right-title">
                  25.05.2022
                </span>
              </h3>
              <hr></hr>
              <p className="notifications-list__item__text">
                მოგესალმებით, გაცნობებთ რომ მომსახურების გაუმჯობესების მიზნით,
                შეიცვალა თურქეთის საწყობის მისამართი, 1 სექტემბრამდე გამოწერილი
                ნივთები ჩამოვა ჩვეულ რეჟიმში. გთხოვთ გაითვალისწინოთ და შეცვალოთ
                მისამართი შემდეგი შენაძენებისთვის.
              </p>
            </div>
            <div className="notifications-list__item">
              <h3 className="notifications-list__item__left-title">
                მისამართი შეიცვალა
                <span className="notifications-list__item__right-title">
                  25.05.2022
                </span>
              </h3>
              <hr></hr>
              <p className="notifications-list__item__text">
                მოგესალმებით, გაცნობებთ რომ მომსახურების გაუმჯობესების მიზნით,
                შეიცვალა თურქეთის საწყობის მისამართი, 1 სექტემბრამდე გამოწერილი
                ნივთები ჩამოვა ჩვეულ რეჟიმში. გთხოვთ გაითვალისწინოთ და შეცვალოთ
                მისამართი შემდეგი შენაძენებისთვის.
              </p>
            </div>
            <div className="notifications-list__item">
              <h3 className="notifications-list__item__left-title">
                მისამართი შეიცვალა
                <span className="notifications-list__item__right-title">
                  25.05.2022
                </span>
              </h3>
              <hr></hr>
              <p className="notifications-list__item__text">
                მოგესალმებით, გაცნობებთ რომ მომსახურების გაუმჯობესების მიზნით,
                შეიცვალა თურქეთის საწყობის მისამართი, 1 სექტემბრამდე გამოწერილი
                ნივთები ჩამოვა ჩვეულ რეჟიმში. გთხოვთ გაითვალისწინოთ და შეცვალოთ
                მისამართი შემდეგი შენაძენებისთვის.
              </p>
            </div>
          </div>
        </div>
        <LoggedInBar user={value.loggedInUser} />
      </div>
    );
  }
  return <Home />;
};

export default Notifications;
