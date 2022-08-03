import React from "react";
import "./FAQ.css";
import FAQList from "./FAQList";

const FAQ = () => {
  return (
    <div>
      <FAQList />
      <section className="questions-bar">
        <div className="questions-bar__title">
          <h1>ხშირად დასმული კითხვები</h1>
        </div>
        <div className="questions-bar__list">
          <div className="questions-bar__list__item">
            <h3 className="questions-bar__list__item__title">
              როგორ დავამატო მისამართი თურქულ საიტებზე საიდანაც ვიწერ?
            </h3>
            <hr className="questions-bar__list__item__hr"></hr>
            <p className="questions-bar__list__item__input">
              თურქული საიტებიდან გამოწერისას უნდა გამოიყენოთ სლიქის თურქეთის
              ოფისის მისამართი, რომელსაც მიბმული აქვს თქვენი უნიკალური ID.
              მისამართის ინფორმაცია იხილეთ თქვენს პირად კაბინეტში, დააჭირეთ
              კოპირების ღილაკს და ჩასვით თურქული მაღაზიის გვერდზე.
            </p>
          </div>
          <div className="questions-bar__list__item">
            <h3 className="questions-bar__list__item__title">
              რა ღირს 1 კგ ტრანსპორტირება?
            </h3>
            <hr className="questions-bar__list__item__hr"></hr>
            <p className="questions-bar__list__item__input">
              ტრანსპორტირების საფასური ანგარიშდება რეალური წონით. 1კგ-ის
              ტრანსპორტირების საფასური შეადგენს 3$-ს.
            </p>
          </div>
          <div className="questions-bar__list__item">
            <h3 className="questions-bar__list__item__title">
              როგორ გამოვწერო სასურველი ნივთი?
            </h3>
            <hr className="questions-bar__list__item__hr"></hr>
            <p className="questions-bar__list__item__input">
              მას შემდეგ რაც აარჩევთ სასურველ ნივთს, ჩააგდეთ ის კალათში, შემდეგ
              აირჩიეთ სასურველი საბანკო ანგარიში საიდანაც გსურთ გადახდის
              განხორციელება, მიუთითეთ შესაბამისი ინფორმაცია ბარათის შესახებ და
              გადაიხადეთ. ანგარიშიდან თანხის ჩამოჭრის შემდეგ შეკვეთა ავტომატურად
              გააქტიურებულია.
            </p>
          </div>
          <div className="questions-bar__list__item">
            <h3 className="questions-bar__list__item__title">
              როდის ხდება საწყობში მისული ნივთების ასახვა პირად კაბინეტში?
            </h3>
            <hr className="questions-bar__list__item__hr"></hr>
            <p className="questions-bar__list__item__input">
              თურქეთის საწყობში მისული ამანათის ასახვა პირად კაბინეტში ხდება
              მისვლიდან რამოდენიმე წუთში
            </p>
          </div>
          <div className="questions-bar__list__item">
            <h3 className="questions-bar__list__item__title">
              როგორ დავადეკლკარირო ამანათი?
            </h3>
            <hr className="questions-bar__list__item__hr"></hr>
            <p className="questions-bar__list__item__input">
              დეკლარაციის შესავსებად უნდა შეხვიდეთ თქვენს კაბინეტში -"ამანათები
              საწყობში" (თუ სხვა სტატუსი აქვს შესაბამის გვერდზე) და ამანათის
              გასწვრივ მარჯვენა მხარეს დააჭირეთ ღილაკს "დეკლარირება". შემდეგ
              შეავსეთ ის ინფორმაცია, რომელსაც მოგთხოვთ ნივთის შესახებ და
              დააჭირეთ განახლებას
            </p>
          </div>
          <div className="questions-bar__list__item">
            <h3 className="questions-bar__list__item__title">
              რა მოხდება იმ შემთხვევაში თუ დეკლარაციას არ შევავსებ?
            </h3>
            <hr className="questions-bar__list__item__hr"></hr>
            <p className="questions-bar__list__item__input">
              არადეკლარირებული ნივთები ფასის გადამოწმების მიზნით ჩერდება
              საბაჟოზე, შესაბამისად დაგვიანდება მისი გაცემა.
            </p>
          </div>
          <div className="questions-bar__list__item">
            <h3 className="questions-bar__list__item__title">
              რა შემთხვევაშია სავალდებულო ინვოისის ატვირთვა?
            </h3>
            <hr className="questions-bar__list__item__hr"></hr>
            <p className="questions-bar__list__item__input">
              ინვოისის ატვირთვა სავალდებულოა მხოლოდ მაშინ თუ მომხმარებლის
              ამანათი გაივლის წითელ ან ყვითელ დერეფანში ანუ მოგიწევთ განბაჟება
              ან უბრალოდ გადამოწმდება მებაჟეების მიერ.
            </p>
          </div>
          <div className="questions-bar__list__item">
            <h3 className="questions-bar__list__item__title">
              როგორ და როდის გადავიხადო ტრანსპორტირების საფასური?
            </h3>
            <hr className="questions-bar__list__item__hr"></hr>
            <p className="questions-bar__list__item__input">
              დეკლარაციის შესავსებად უნდა შეხვიდეთ თქვენს კაბინეტში -"ამანათები
              საწყობში" (თუ სხვა სტატუსი აქვს შესაბამის გვერდზე) და ამანათის
              გასწვრივ მარჯვენა მხარეს დააჭირეთ ღილაკს "დეკლარირება". შემდეგ
              შეავსეთ ის ინფორმაცია, რომელსაც მოგთხოვთ ნივთის შესახებ და
              დააჭირეთ განახლებას
            </p>
          </div>
          <div className="questions-bar__list__item">
            <h3 className="questions-bar__list__item__title">
              როგორ დავადეკლკარირო ამანათი?
            </h3>
            <hr className="questions-bar__list__item__hr"></hr>
            <p className="questions-bar__list__item__input">
              ტრანსპორტირების საფასურის გადახდა შეგიძლიათ ამანათის პირად
              კაბინეტში ასახვის მომენტიდან მის გატანამდე ნებისმიერ ეტაპზე.
              თანხის გადახდა შესაძლებელია მხოლოდ პირადი კაბინეტიდან უნაღდო
              ანგარიშსწორებით. ამისთვის თავდაპირველად უნდა შეავსოთ საიტის
              ბალანსი - თანხის ჩარიცხვა შეგიძლიათ ნებისმიერი ქართული
              Visa/Mastercard ბარათით. ბალანსის შევსების შემდეგ ამანათის
              გასწვრივ უნდა დააჭიროთ ღილაკს “გადახდა”, რის შემდეგაც ამანათის
              ტრანსპორტირების საფასური ჩაითვლება გადახდილად 💳
            </p>
          </div>
          <div className="questions-bar__list__item">
            <h3 className="questions-bar__list__item__title">
              რა ღირს კურიერის მომსახურება?
            </h3>
            <hr className="questions-bar__list__item__hr"></hr>
            <p className="questions-bar__list__item__input">
              კურიერის მომსახურების საფასური თბილისსა და რეგიონებში შეადგენს 5
              ლარს
            </p>
          </div>
          <div className="questions-bar__list__item">
            <h3 className="questions-bar__list__item__title">
              შეიძლება რომ დეკლარაციაში ნაკლები თანხა მივუთითო?
            </h3>
            <hr className="questions-bar__list__item__hr"></hr>
            <p className="questions-bar__list__item__input">
              ამანათის დეკლარირება სავალდებულოა. დეკლარაციის სრულყოფილად და
              სწორად შევსებაზე მთლიანად პასუხისმგებელია მომხმარებელი.
              დეკლარაციის შევსება სავალდებულოა.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
