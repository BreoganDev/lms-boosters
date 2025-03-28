
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
import { Eye, Pencil, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Temporary mock data until we integrate with a backend
const mockCourses = [
  { 
    id: 1, 
    title: 'Introducción a React', 
    category: 'Desarrollo Web',
    lessons: 10,
    students: 24,
    status: 'Published'
  },
  { 
    id: 2, 
    title: 'JavaScript Avanzado', 
    category: 'Programación',
    lessons: 8,
    students: 16,
    status: 'Draft'
  },
  { 
    id: 3, 
    title: 'Diseño UI/UX', 
    category: 'Diseño',
    lessons: 12,
    students: 32,
    status: 'Published'
  },
  { 
    id: 4, 
    title: 'Node.js para Principiantes', 
    category: 'Desarrollo Backend',
    lessons: 14,
    students: 18,
    status: 'Published'
  },
  { 
    id: 5, 
    title: 'Python Básico', 
    category: 'Programación',
    lessons: 9,
    students: 28,
    status: 'Draft'
  },
];

export const CourseList = () => {
  const navigate = useNavigate();

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Título</TableHead>
            <TableHead>Categoría</TableHead>
            <TableHead>Lecciones</TableHead>
            <TableHead>Estudiantes</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockCourses.map((course) => (
            <TableRow key={course.id}>
              <TableCell className="font-medium">{course.title}</TableCell>
              <TableCell>{course.category}</TableCell>
              <TableCell>{course.lessons}</TableCell>
              <TableCell>{course.students}</TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  course.status === 'Published' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {course.status}
                </span>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="sm" onClick={() => navigate(`/courses/${course.id}`)}>
                    <Eye size={16} />
                    <span className="sr-only">Ver</span>
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => navigate(`/courses/${course.id}/edit`)}>
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
