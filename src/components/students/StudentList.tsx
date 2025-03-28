
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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useNavigate } from 'react-router-dom';

// Temporary mock data until we integrate with a backend
const mockStudents = [
  { 
    id: 1, 
    name: 'Ana García', 
    email: 'ana.garcia@ejemplo.com',
    enrolledCourses: 3,
    progress: 75,
    status: 'Active',
    avatar: '',
  },
  { 
    id: 2, 
    name: 'Carlos Rodríguez', 
    email: 'carlos.rodriguez@ejemplo.com',
    enrolledCourses: 2,
    progress: 50,
    status: 'Active',
    avatar: '',
  },
  { 
    id: 3, 
    name: 'Laura Martínez', 
    email: 'laura.martinez@ejemplo.com',
    enrolledCourses: 4,
    progress: 90,
    status: 'Active',
    avatar: '',
  },
  { 
    id: 4, 
    name: 'Miguel Sánchez', 
    email: 'miguel.sanchez@ejemplo.com',
    enrolledCourses: 1,
    progress: 30,
    status: 'Inactive',
    avatar: '',
  },
  { 
    id: 5, 
    name: 'Elena Torres', 
    email: 'elena.torres@ejemplo.com',
    enrolledCourses: 2,
    progress: 60,
    status: 'Active',
    avatar: '',
  },
];

export const StudentList = () => {
  const navigate = useNavigate();

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Cursos</TableHead>
            <TableHead>Progreso</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockStudents.map((student) => (
            <TableRow key={student.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={student.avatar} />
                    <AvatarFallback>{student.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{student.name}</span>
                </div>
              </TableCell>
              <TableCell>{student.email}</TableCell>
              <TableCell>{student.enrolledCourses}</TableCell>
              <TableCell>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-primary h-2.5 rounded-full" 
                    style={{ width: `${student.progress}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-500 mt-1">{student.progress}%</span>
              </TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  student.status === 'Active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {student.status}
                </span>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="sm" onClick={() => navigate(`/students/${student.id}`)}>
                    <Eye size={16} />
                    <span className="sr-only">Ver</span>
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => navigate(`/students/${student.id}/edit`)}>
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
