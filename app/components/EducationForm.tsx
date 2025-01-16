import { Education } from "@/type";
import { Plus } from "lucide-react";
import React, { useState } from "react";

type Props = {
  educations: Education[];
  setEducations: (educations: Education[]) => void;
};

const EducationForm: React.FC<Props> = ({ educations, setEducations }) => {
  const [newEducation, setNewEducation] = useState<Education>({
    school: "",
    degree: "",
    description: "",
    startDate: "",
    endDate: "",
  });


const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,fied: keyof Education) => {
    setNewEducation({ ...newEducation, [fied]: e.target.value });
  };

  //  cette fonction permet d'ajouter  les  experiences qui existe déjà (expereince)
  //  et après il ajoute les nouvel expériences (newExperience)

  const handleAddEducation = () => {
    setEducations([...educations, newEducation]);
    setNewEducation({
      school: "",
      degree: "",
      description: "",
      startDate: "",
      endDate: "",
    });
  }



  return (
    <div>
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <input
          type="text"
          placeholder="Nom de l'ecole"
          value={newEducation.school}
          // onChange={(e)=> setPersonalDetails({...personalDetails, fullName:e.target.value})}
          onChange={(e) => handleChange(e, "school")}
          className="input input-bordered w-full "
        />

        <input
          type="text"
          placeholder="diplôme"
          value={newEducation.degree}
          // onChange={(e)=> setPersonalDetails({...personalDetails, fullName:e.target.value})}
          onChange={(e) => handleChange(e, "degree")}
          className="input input-bordered w-full ml-4 "
        />
      </div>

      <div className="flex justify-between">
        <input
          type="text"
          placeholder="Date de début"
          onFocus={(e) => (e.target.type = "date")}
          value={newEducation.startDate}
          onBlur={(e) => {
            if (!e.target.value) e.target.type = "texte";
          }}
          // onChange={(e)=> setPersonalDetails({...personalDetails, fullName:e.target.value})}
          onChange={(e) => handleChange(e, "startDate")}
          className="input input-bordered w-full "
        />

        <input
          type="text"
          placeholder="Date de fin"
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => {
            if (!e.target.value) e.target.type = "texte";
          }}
          value={newEducation.endDate}
          // onChange={(e)=> setPersonalDetails({...personalDetails, fullName:e.target.value})}
          onChange={(e) => handleChange(e, "endDate")}
          className="input input-bordered w-full ml-4 "
        />
      </div>

      <textarea
        placeholder="description de la personne"
        value={newEducation.description}
        // onChange={(e)=> setPersonalDetails({...personalDetails, email:e.target.value})}
        onChange={(e) => handleChange(e, "description")}
        className="input input-bordered w-full "
      ></textarea>
    </div>

    <button className="btn btn-primary mt-4 " onClick={handleAddEducation}>
      Ajouter
      <Plus className="w-4" />
    </button>
  </div>
  );
};

export default EducationForm;
// function useState<T>(arg0: { school: string; degree: string; description: string; startDate: string; endDate: string; }): [any, any] {
//   throw new Error("Function not implemented.");
// }

