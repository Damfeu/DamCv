// import { experiencesPreset } from '@/presets'
import { Experience } from "@/type";
import { Plus } from "lucide-react";
import React, { useState } from "react";

type Props = {
  experience: Experience[];
  setExperiences: (experience: Experience[]) => void;
};
const ExperienceForm: React.FC<Props> = ({ experience, setExperiences }) => {
  const [newExperience, setNewExperience] = useState<Experience>({
    jobTitle: "",
    companyName: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    fied: keyof Experience
  ) => {
    setNewExperience({ ...newExperience, [fied]: e.target.value });
  };

  //  cette fonction permet d'ajouter de raouter les  experiencesqui existe déjà (expereince)
  //  et après il ajoute les nouvel expériences (newExperience)

  const handleAddExperience = () => {
    setExperiences([...experience, newExperience]);
    setNewExperience({
      jobTitle: "",
      companyName: "",
      startDate: "",
      endDate: "",
      description: "",
    });
  }
    
  

    return (
      <div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <input
              type="text"
              placeholder="Nom complet"
              value={newExperience.jobTitle}
              // onChange={(e)=> setPersonalDetails({...personalDetails, fullName:e.target.value})}
              onChange={(e) => handleChange(e, "jobTitle")}
              className="input input-bordered w-full "
            />

            <input
              type="text"
              placeholder="Nom de l'entreprise"
              value={newExperience.companyName}
              // onChange={(e)=> setPersonalDetails({...personalDetails, fullName:e.target.value})}
              onChange={(e) => handleChange(e, "companyName")}
              className="input input-bordered w-full ml-4 "
            />
          </div>

          <div className="flex justify-between">
            <input
              type="text"
              placeholder="Date de début"
              onFocus={(e) => (e.target.type = "date")}
              value={newExperience.startDate}
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
              value={newExperience.endDate}
              // onChange={(e)=> setPersonalDetails({...personalDetails, fullName:e.target.value})}
              onChange={(e) => handleChange(e, "endDate")}
              className="input input-bordered w-full ml-4 "
            />
          </div>

          <textarea
            placeholder="description de la personne"
            value={newExperience.description}
            // onChange={(e)=> setPersonalDetails({...personalDetails, email:e.target.value})}
            onChange={(e) => handleChange(e, "description")}
            className="input input-bordered w-full "
          ></textarea>
        </div>

        <button className="btn btn-primary mt-4 " onClick={handleAddExperience}>
          Ajouter
          <Plus className="w-4" />
        </button>
      </div>
    );
  };


export default ExperienceForm;
