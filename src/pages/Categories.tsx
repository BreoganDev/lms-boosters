<<<<<<< HEAD
// src/pages/Categories.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
=======

import React, { useState } from 'react';
>>>>>>> e37e86e6ccda632c80d477b2d6de0d45860c5c1e
import MainLayout from '@/components/layout/MainLayout';
import { CategoryList } from '@/components/categories/CategoryList';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
<<<<<<< HEAD
import { Category } from '@/types';
import { categoryService } from '@/services/categoryService';
import { Spinner } from '@/components/ui/spinner';
=======
import { useNavigate } from 'react-router-dom';
>>>>>>> e37e86e6ccda632c80d477b2d6de0d45860c5c1e
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
<<<<<<< HEAD

const Categories = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');

  // Cargar categorías al montar el componente
  useEffect(() => {
    fetchCategories();
  }, []);

  // Función para obtener categorías
  const fetchCategories = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const data = await categoryService.getAll();
      setCategories(data);
    } catch (error) {
      console.error('Error al cargar categorías:', error);
      setError('No se pudieron cargar las categorías. Inténtelo de nuevo más tarde.');
      toast.error('Error al cargar categorías');
    } finally {
      setIsLoading(false);
    }
  };

  // Función para eliminar categoría
  const handleDeleteCategory = async (id: number) => {
    try {
      await categoryService.delete(id);
      setCategories(categories.filter(category => category.id !== id));
      toast.success('Categoría eliminada con éxito');
    } catch (error: any) {
      console.error('Error al eliminar categoría:', error);
      
      // Mostrar mensaje de error específico si está disponible
      const errorMessage = error.response?.data?.message || 'Error al eliminar categoría';
      toast.error(errorMessage);
    }
  };

  // Función para editar categoría
  const handleEditCategory = async (updatedCategory: Category) => {
    try {
      const result = await categoryService.update(updatedCategory.id, updatedCategory);
      
      // Actualizar la lista de categorías con la categoría actualizada
      setCategories(prevCategories => 
        prevCategories.map(category => 
          category.id === updatedCategory.id ? result : category
        )
      );
      
      toast.success('Categoría actualizada con éxito');
    } catch (error: any) {
      console.error('Error al actualizar categoría:', error);
      
      // Mostrar mensaje de error específico si está disponible
      const errorMessage = error.response?.data?.message || 'Error al actualizar categoría';
      toast.error(errorMessage);
    }
  };

  // Función para añadir categoría
  const handleAddCategory = async () => {
    if (newCategoryName.trim()) {
      try {
        // Generar slug a partir del nombre
        const slug = newCategoryName
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^\w\-]+/g, '')
          .replace(/\-\-+/g, '-')
          .replace(/^-+/, '')
          .replace(/-+$/, '');
        
        // Crear nueva categoría
        const newCategory = await categoryService.create({
          name: newCategoryName,
          slug,
          description: '',
          coursesCount: 0
        });
        
        // Añadir a la lista
        setCategories([...categories, newCategory]);
        
        // Limpiar y cerrar diálogo
        setNewCategoryName('');
        setIsAddDialogOpen(false);
        
        toast.success('Categoría añadida con éxito');
      } catch (error: any) {
        console.error('Error al añadir categoría:', error);
        
        // Mostrar mensaje de error específico si está disponible
        const errorMessage = error.response?.data?.message || 'Error al añadir categoría';
        toast.error(errorMessage);
      }
    }
  };

  // Función para navegar al formulario de nueva categoría
  const handleCreateCategory = () => {
    navigate('/categories/new');
=======
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
>>>>>>> e37e86e6ccda632c80d477b2d6de0d45860c5c1e
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">Categorías</h1>
<<<<<<< HEAD
          <Button onClick={handleCreateCategory} className="flex items-center gap-2">
=======
          <Button onClick={() => setIsAddDialogOpen(true)} className="flex items-center gap-2">
>>>>>>> e37e86e6ccda632c80d477b2d6de0d45860c5c1e
            <Plus size={16} /> Nueva Categoría
          </Button>
        </div>

<<<<<<< HEAD
        {isLoading ? (
          <div className="flex justify-center py-8">
            <Spinner className="h-8 w-8" />
          </div>
        ) : error ? (
          <div className="bg-destructive/15 text-destructive px-4 py-3 rounded-md">
            {error}
            <Button 
              variant="outline" 
              size="sm" 
              onClick={fetchCategories} 
              className="ml-2"
            >
              Reintentar
            </Button>
          </div>
        ) : (
          <CategoryList 
            categories={categories} 
            onDelete={handleDeleteCategory}
            onEdit={handleEditCategory}
          />
        )}
=======
        <CategoryList 
          categories={categories} 
          onDelete={handleDeleteCategory}
          onEdit={handleEditCategory}
        />
>>>>>>> e37e86e6ccda632c80d477b2d6de0d45860c5c1e

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

<<<<<<< HEAD
export default Categories;
=======
export default Categories;
>>>>>>> e37e86e6ccda632c80d477b2d6de0d45860c5c1e
