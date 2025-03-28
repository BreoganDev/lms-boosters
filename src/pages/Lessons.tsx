
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { LessonList } from '@/components/lessons/LessonList';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Lessons = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">Lecciones</h1>
          <Button onClick={() => navigate('/lessons/new')} className="flex items-center gap-2">
            <Plus size={16} /> Nueva Lección
          </Button>
        </div>

        <LessonList />
      </div>
    </MainLayout>
  );
};

export default Lessons;
