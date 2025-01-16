import { Hobby } from "@/type";
import { Plus } from "lucide-react";
import React, { useState } from "react";

type Props = {
  hobbies: Hobby[];
  setHobbies: (hobbies: Hobby[]) => void;
};

const HobbyForm: React.FC<Props> = ({ hobbies, setHobbies }) => {
  const [newHobby, setNewHobby] = useState<Hobby>({
    name: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    fied: keyof Hobby
  ) => {
    setNewHobby({ ...newHobby, [fied]: e.target.value });
  };

  //  cette fonction permet d'ajouter  les  experiences qui existe déjà (expereince)
  //  et après il ajoute les nouvel expériences (newExperience)

  const handleAddHobby = () => {
    setHobbies([...hobbies, newHobby]);
    setNewHobby({
      name: "",
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Hobby"
        value={newHobby.name}
        // onChange={(e)=> setPersonalDetails({...personalDetails, fullName:e.target.value})}
        onChange={(e) => handleChange(e, "name")}
        className="input input-bordered w-full mt-4 "
      />

      <button className="btn btn-primary mt-4 " onClick={handleAddHobby}>
        Ajouter
        <Plus className="w-4" />
      </button>
    </div>
  );
};

export default HobbyForm;
