
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { CourseList } from '@/components/courses/CourseList';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">Cursos</h1>
          <Button onClick={() => navigate('/courses/new')} className="flex items-center gap-2">
            <Plus size={16} /> Nuevo Curso
          </Button>
        </div>

        <CourseList />
      </div>
    </MainLayout>
  );
};

export default Courses;
