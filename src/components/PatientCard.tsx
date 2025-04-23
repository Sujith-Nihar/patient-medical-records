
import { Patient } from "../types/patient";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileDown } from "lucide-react";

interface PatientCardProps {
  patient: Patient;
}

const PatientCard: React.FC<PatientCardProps> = ({ patient }) => {
  // Select the first report as the primary report
  const primaryReport = patient.reports[0];

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg border-2 border-accent animate-scale-in">
      <CardHeader className="p-0">
        <div className="relative w-full h-[400px] overflow-hidden">
          <img 
            src={patient.photoUrl} 
            alt={`${patient.name}'s photo`}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <h2 className="absolute bottom-4 left-4 text-2xl font-bold text-white drop-shadow-md">
            {patient.name}
          </h2>
        </div>
      </CardHeader>
      
      <CardContent className="pt-6 space-y-4">
        <Button 
          className="w-full flex items-center gap-2 bg-primary hover:bg-primary/90"
          asChild
        >
          <a href={patient.profileLink} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={16} />
            Link to Profile
          </a>
        </Button>
        
        {primaryReport && (
          <Button 
            variant="secondary" 
            className="w-full flex items-center gap-2"
            asChild
          >
            <a 
              href={primaryReport.fileUrl} 
              download={`${patient.name}-${primaryReport.name}.pdf`}
            >
              <FileDown size={16} />
              Download {primaryReport.name}
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default PatientCard;
