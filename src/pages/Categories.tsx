
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { CategoryList } from '@/components/categories/CategoryList';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from 'sonner';

// Type for the category data
export interface Category {
  id: number;
  name: string;
  slug: string;
  coursesCount: number;
}

// Initial categories data
export const initialCategories: Category[] = [
  { 
    id: 1, 
    name: 'Desarrollo Web', 
    slug: 'desarrollo-web',
    coursesCount: 12,
  },
  { 
    id: 2, 
    name: 'Programación', 
    slug: 'programacion',
    coursesCount: 8,
  },
  { 
    id: 3, 
    name: 'Diseño', 
    slug: 'diseno',
    coursesCount: 5,
  },
  { 
    id: 4, 
    name: 'Marketing Digital', 
    slug: 'marketing-digital',
    coursesCount: 7,
  },
  { 
    id: 5, 
    name: 'Idiomas', 
    slug: 'idiomas',
    coursesCount: 4,
  },
];

const Categories = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');

  const handleAddCategory = () => {
    if (newCategoryName.trim()) {
      const newCategory = {
        id: Math.max(...categories.map(c => c.id)) + 1,
        name: newCategoryName,
        slug: newCategoryName.toLowerCase().replace(/\s+/g, '-'),
        coursesCount: 0
      };
      
      const updatedCategories = [...categories, newCategory];
      setCategories(updatedCategories);
      setNewCategoryName('');
      setIsAddDialogOpen(false);
      toast.success('Categoría añadida con éxito');
    }
  };

  const handleDeleteCategory = (id: number) => {
    setCategories(categories.filter(category => category.id !== id));
    toast.success('Categoría eliminada con éxito');
  };

  const handleEditCategory = (editedCategory: Category) => {
    setCategories(categories.map(category => 
      category.id === editedCategory.id ? editedCategory : category
    ));
    toast.success('Categoría actualizada con éxito');
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">Categorías</h1>
          <Button onClick={() => setIsAddDialogOpen(true)} className="flex items-center gap-2">
            <Plus size={16} /> Nueva Categoría
          </Button>
        </div>

        <CategoryList 
          categories={categories} 
          onDelete={handleDeleteCategory}
          onEdit={handleEditCategory}
        />

        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Añadir Nueva Categoría</DialogTitle>
              <DialogDescription>
                Ingrese el nombre de la nueva categoría.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <Label htmlFor="categoryName">Nombre de la Categoría</Label>
              <Input
                id="categoryName"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                placeholder="Ej: Desarrollo Móvil"
                className="mt-2"
              />
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>Cancelar</Button>
              <Button onClick={handleAddCategory}>Guardar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </MainLayout>
  );
};

export default Categories;
