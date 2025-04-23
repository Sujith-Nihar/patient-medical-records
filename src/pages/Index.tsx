import Header from "../components/Header";
import PatientsList from "../components/PatientsList";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary">Patient Profiles</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground">
            Browse our patient database to view profiles, access medical reports, and download PDF records. 
            Click on "Link to Profile" to view patient Instagram information.
          </p>
        </div>
        
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg mb-10">
          <PatientsList />
        </div>
      </main>
      <footer className="bg-gradient-to-r from-primary/10 to-secondary/10 py-8 mt-12 border-t border-accent">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-1 w-6 bg-primary rounded-full"></div>
            <div className="h-1 w-12 bg-secondary rounded-full"></div>
            <div className="h-1 w-6 bg-primary rounded-full"></div>
          </div>
          <p className="text-muted-foreground">Patient Medical Records &copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
