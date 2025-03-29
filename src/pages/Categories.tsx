
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { CategoryList } from '@/components/categories/CategoryList';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">Categorías</h1>
          <Button onClick={() => navigate('/categories/new')} className="flex items-center gap-2">
            <Plus size={16} /> Nueva Categoría
          </Button>
        </div>

        <CategoryList />
      </div>
    </MainLayout>
  );
};

export default Categories;
