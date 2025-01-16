import { Skill } from "@/type";
import { Plus } from "lucide-react";
import React, { useState } from "react";

type Props = {
  skills: Skill[];
  setSkills: (skills: Skill[]) => void;
};

const SkillForm: React.FC<Props> = ({ skills, setSkills }) => {
  const [newSkill, setNewSkill] = useState<Skill>({
    name: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    fied: keyof Skill
  ) => {
    setNewSkill({ ...newSkill, [fied]: e.target.value });
  };

  //  cette fonction permet d'ajouter  les  experiences qui existe déjà (expereince)
  //  et après il ajoute les nouvel expériences (newExperience)

  const handleAddSkill = () => {
    setSkills([...skills, newSkill]);
    setNewSkill({
      name: "",
    });
  };

  return(
<div>
    <div className="mt-4">
      <input
        type="text"
        placeholder="Competence"
        value={newSkill.name}
        // onChange={(e)=> setPersonalDetails({...personalDetails, fullName:e.target.value})}
        onChange={(e) => handleChange(e, "name")}
        className="input input-bordered w-full "
      />
    </div>

    <button className="btn btn-primary mt-4 " onClick={handleAddSkill}>
      Ajouter
      <Plus className="w-4" />
    </button>
  </div>
   
  )
};
  
  

export default SkillForm;
