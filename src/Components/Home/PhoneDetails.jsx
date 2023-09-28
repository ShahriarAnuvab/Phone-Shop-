import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhoneDetailsCard from "./PhoneDetailsCard";

const PhoneDetails = () => {
  const [phone, setPhone] = useState({});
  const { id } = useParams();

  const phones = useLoaderData();
  useEffect(() => {
    const findPhone = phones?.find((matchPhoned) => matchPhoned.id === id);
    setPhone(findPhone);
  }, [id, phones]);
 

  return (
    <div className="flex justify-center items-center my-20">
      <PhoneDetailsCard phone={phone}></PhoneDetailsCard>
    </div>
  );
};

export default PhoneDetails;
