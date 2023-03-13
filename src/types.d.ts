// Fichier qui contient les types de données de l'application
// .d.ts notre compilateur reconnaitra les types qu'il contient comme étant globaux pour leprojet, pas besoin de les importer ou les exporter dans les fichiers

interface TodoItemProps {
    todo: {
      id: number;
      text: string;
      completed: boolean;
    };
  }