
import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Eye, Pencil, Trash2, FileQuestion } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Temporary mock data until we integrate with a backend
const mockQuizzes = [
  { 
    id: 1, 
    title: 'Fundamentos de React', 
    course: 'Introducción a React',
    questions: 10,
    timeLimit: '20 min',
    status: 'Active',
  },
  { 
    id: 2, 
    title: 'JavaScript Básico', 
    course: 'JavaScript Avanzado',
    questions: 15,
    timeLimit: '30 min',
    status: 'Active',
  },
  { 
    id: 3, 
    title: 'CSS Avanzado', 
    course: 'Diseño UI/UX',
    questions: 8,
    timeLimit: '15 min',
    status: 'Draft',
  },
  { 
    id: 4, 
    title: 'Expresiones Regulares', 
    course: 'JavaScript Avanzado',
    questions: 12,
    timeLimit: '25 min',
    status: 'Active',
  },
  { 
    id: 5, 
    title: 'Principios de UX', 
    course: 'Diseño UI/UX',
    questions: 20,
    timeLimit: '40 min',
    status: 'Draft',
  },
];

export const QuizList = () => {
  const navigate = useNavigate();

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Título</TableHead>
            <TableHead>Curso</TableHead>
            <TableHead>Preguntas</TableHead>
            <TableHead>Tiempo Límite</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockQuizzes.map((quiz) => (
            <TableRow key={quiz.id}>
              <TableCell className="font-medium">{quiz.title}</TableCell>
              <TableCell>{quiz.course}</TableCell>
              <TableCell className="flex items-center gap-1">
                <FileQuestion size={14} />
                {quiz.questions}
              </TableCell>
              <TableCell>{quiz.timeLimit}</TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  quiz.status === 'Active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {quiz.status}
                </span>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="sm" onClick={() => navigate(`/quizzes/${quiz.id}`)}>
                    <Eye size={16} />
                    <span className="sr-only">Ver</span>
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => navigate(`/quizzes/${quiz.id}/edit`)}>
                    <Pencil size={16} />
                    <span className="sr-only">Editar</span>
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trash2 size={16} className="text-destructive" />
                    <span className="sr-only">Eliminar</span>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
