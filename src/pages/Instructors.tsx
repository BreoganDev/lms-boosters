
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { InstructorList } from '@/components/instructors/InstructorList';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Instructors = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">Instructores</h1>
          <Button onClick={() => navigate('/instructors/new')} className="flex items-center gap-2">
            <Plus size={16} /> Nuevo Instructor
          </Button>
        </div>

        <InstructorList />
      </div>
    </MainLayout>
  );
};

export default Instructors;
