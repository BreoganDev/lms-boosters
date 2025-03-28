
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { QuizList } from '@/components/quizzes/QuizList';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Quizzes = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">Cuestionarios</h1>
          <Button onClick={() => navigate('/quizzes/new')} className="flex items-center gap-2">
            <Plus size={16} /> Nuevo Cuestionario
          </Button>
        </div>

        <QuizList />
      </div>
    </MainLayout>
  );
};

export default Quizzes;
