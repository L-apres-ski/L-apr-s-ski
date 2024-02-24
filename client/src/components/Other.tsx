import "./Other.css";

export default function Other() {
  return (
    <div className="other-cont bg-red-50">
      <div className="soir px-2 py-3 text-center">
        <p className="pres-day text-3xl font-bold ">Le Soir</p>
        <p className=" text-base ">
          Raclettes, fondues, & planches de charcuterie
        </p>
      </div>
      <div className="px-2 py-3 text-center">
        <p className="pres-day text-3xl font-bold ">Le Midi</p>
        <p className="text-base">
          Nos plats cuisinés (à emporter ou sur place)
        </p>
      </div>
      <div className="bottom-cont  px-2 py-3 text-center">
        <p className="pres-day bar text-3xl font-bold">Bar lounge</p>
        <p className="text-base">Vin chaud et gourmandises</p>
        <p className="text-base">Planches apéro pour l'happy hour</p>
        <p className="text-base ">Pub en soirée</p>
      </div>
    </div>
  );
}
