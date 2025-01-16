import { PersonalDetails } from "@/type";
import React from "react";

type Props = {
  personalDetails: PersonalDetails;
  setPersonalDetails: (pd: PersonalDetails) => void;
  setFile: (file: File | null) => void;
};

const PersonalDetailForm: React.FC<Props> = ({
  personalDetails,
  setPersonalDetails,
  setFile,
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    fied: keyof PersonalDetails
  ) => {
    setPersonalDetails({ ...personalDetails, [fied]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };
  return (
    <div className="flex flex-col gap-4">
      {/* <label className="block text-sm font-medium text-gray-700">Nom</label> */}
      <input
        type="text"
        placeholder="Nom complet"
        value={personalDetails.fullName}
        // onChange={(e)=> setPersonalDetails({...personalDetails, fullName:e.target.value})}
        onChange={(e) => handleChange(e, "fullName")}
        className="input input-bordered w-full "
      />

      <div className="flex ">
        {/* <label className="block text-sm font-medium text-gray-700 ">Email</label> */}
        <input
          type="email"
          placeholder="Email"
          value={personalDetails.email}
          // onChange={(e)=> setPersonalDetails({...personalDetails, email:e.target.value})}
          onChange={(e) => handleChange(e, "email")}
          className="input input-bordered w-full "
        />
        <input
          type="text"
          placeholder="Numéro de telephone"
          value={personalDetails.phone}
          // onChange={(e)=> setPersonalDetails({...personalDetails, email:e.target.value})}
          onChange={(e) => handleChange(e, "phone")}
          className="input input-bordered w-full ml-4"
        />
      </div>
      <input
        type="text"
        placeholder="Addresse"
        value={personalDetails.address}
        // onChange={(e)=> setPersonalDetails({...personalDetails, email:e.target.value})}
        onChange={(e) => handleChange(e, "address")}
        className="input input-bordered w-full "
      />
      <input
        type="file"
        accept="image/*"
        // onChange={(e)=> setPersonalDetails({...personalDetails, email:e.target.value})}
        onChange={handleFileChange}
        className="file-input file-input-bordered file-input-primary w-full "
      />

      <input
        type="text"
        placeholder="Poste Recherché"
        value={personalDetails.postSeeking}
        // onChange={(e)=> setPersonalDetails({...personalDetails, email:e.target.value})}
        onChange={(e) => handleChange(e, "postSeeking")}
        className="input input-bordered w-full "
      />

      <textarea
        placeholder="description de la personne"
        value={personalDetails.description}
        // onChange={(e)=> setPersonalDetails({...personalDetails, email:e.target.value})}
        onChange={(e) => handleChange(e, "description")}
        className="input input-bordered w-full "
      ></textarea>
    </div>
  )
}

export default PersonalDetailForm;
