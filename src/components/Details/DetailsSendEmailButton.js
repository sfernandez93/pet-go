import { DetailsContext } from "../../context/DetailsContext";
import { useContext } from "react";

const DetailsSendEmailButton = ({ fromEmail, namePet, agePet, racePet }) => {
  const { sendEmail, isButtonEmailClicked } = useContext(DetailsContext);

  return (
    <div className="mt-5">
      <form onSubmit={sendEmail}>
        <input type="hidden" value={fromEmail} name="from_email_user" />
        <input
          type="hidden"
          value="sabela.fernandez93@gmail.com"
          name="to_email_org"
        />
        <input type="hidden" value={namePet} name="name_pet" />
        <input type="hidden" value={agePet} name="age_pet" />
        <input type="hidden" value={racePet} name="race_pet" />
        <input
          className={`w-full border rounded-full py-2 px-4 text-xs font-semibold text-gray-700 cursor-pointer ${isButtonEmailClicked.info ? 'bg-gray-100': ''}`}
          type="submit"
          value="Solicitar información"
        />
      </form>
    </div>
  );
};
export default DetailsSendEmailButton;
