
import { useState } from "react";
import { patients } from "../data/patients";
import PatientCard from "./PatientCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const PatientsList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredPatients = patients.filter(patient => 
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <>
      <div className="relative max-w-md mx-auto mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input 
          type="text" 
          placeholder="Search patients by name..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 border-2 focus:border-primary"
        />
      </div>
      
      {filteredPatients.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">No patients found matching your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPatients.map((patient) => (
            <div key={patient.id} className="transform transition-all duration-300 hover:-translate-y-2">
              <PatientCard patient={patient} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default PatientsList;
