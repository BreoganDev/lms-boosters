
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
import { Eye, Pencil, Trash2, Clock, PlayCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Temporary mock data until we integrate with a backend
const mockLessons = [
  { 
    id: 1, 
    title: 'Introducción a React Hooks', 
    course: 'Introducción a React',
    duration: '25 min',
    type: 'Video',
    status: 'Published',
  },
  { 
    id: 2, 
    title: 'Componentes Funcionales', 
    course: 'Introducción a React',
    duration: '18 min',
    type: 'Video',
    status: 'Published',
  },
  { 
    id: 3, 
    title: 'Manejo del Estado', 
    course: 'Introducción a React',
    duration: '30 min',
    type: 'Video',
    status: 'Draft',
  },
  { 
    id: 4, 
    title: 'Closures en JavaScript', 
    course: 'JavaScript Avanzado',
    duration: '22 min',
    type: 'Video',
    status: 'Published',
  },
  { 
    id: 5, 
    title: 'Prototipos y Herencia', 
    course: 'JavaScript Avanzado',
    duration: '40 min',
    type: 'Video',
    status: 'Draft',
  },
];

export const LessonList = () => {
  const navigate = useNavigate();

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Título</TableHead>
            <TableHead>Curso</TableHead>
            <TableHead>Duración</TableHead>
            <TableHead>Tipo</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockLessons.map((lesson) => (
            <TableRow key={lesson.id}>
              <TableCell className="font-medium">{lesson.title}</TableCell>
              <TableCell>{lesson.course}</TableCell>
              <TableCell className="flex items-center gap-1">
                <Clock size={14} />
                {lesson.duration}
              </TableCell>
              <TableCell className="flex items-center gap-1">
                <PlayCircle size={14} />
                {lesson.type}
              </TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  lesson.status === 'Published' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {lesson.status}
                </span>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="sm" onClick={() => navigate(`/lessons/${lesson.id}`)}>
                    <Eye size={16} />
                    <span className="sr-only">Ver</span>
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => navigate(`/lessons/${lesson.id}/edit`)}>
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
