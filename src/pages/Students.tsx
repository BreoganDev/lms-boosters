
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { StudentList } from '@/components/students/StudentList';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Students = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">Estudiantes</h1>
          <Button onClick={() => navigate('/students/new')} className="flex items-center gap-2">
            <Plus size={16} /> Nuevo Estudiante
          </Button>
        </div>

        <StudentList />
      </div>
    </MainLayout>
  );
};

export default Students;
