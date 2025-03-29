
import React, { useState } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Pencil, Trash2, PlusCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Temporary mock data until we integrate with a backend
const initialCategories = [
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

export const CategoryList = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState(initialCategories);
  const [categoryToDelete, setCategoryToDelete] = useState<number | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');

  const handleDelete = (id: number) => {
    setCategoryToDelete(id);
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (categoryToDelete) {
      setCategories(categories.filter(category => category.id !== categoryToDelete));
      toast.success('Categoría eliminada con éxito');
      setIsDeleteDialogOpen(false);
      setCategoryToDelete(null);
    }
  };

  const handleAddCategory = () => {
    if (newCategoryName.trim()) {
      const newCategory = {
        id: Math.max(...categories.map(c => c.id)) + 1,
        name: newCategoryName,
        slug: newCategoryName.toLowerCase().replace(/\s+/g, '-'),
        coursesCount: 0
      };
      setCategories([...categories, newCategory]);
      setNewCategoryName('');
      setIsAddDialogOpen(false);
      toast.success('Categoría añadida con éxito');
    }
  };

  return (
    <>
      <div className="flex justify-end mb-4">
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <PlusCircle size={16} /> Añadir Categoría
            </Button>
          </DialogTrigger>
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

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead>Cursos</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.map((category) => (
              <TableRow key={category.id}>
                <TableCell>
                  <span className="font-medium">{category.name}</span>
                </TableCell>
                <TableCell>{category.slug}</TableCell>
                <TableCell>{category.coursesCount}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="sm" onClick={() => navigate(`/categories/${category.id}/edit`)}>
                      <Pencil size={16} />
                      <span className="sr-only">Editar</span>
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleDelete(category.id)}>
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

      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Está seguro de eliminar esta categoría?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta acción no se puede deshacer. La categoría será eliminada permanentemente del sistema.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-destructive text-destructive-foreground">
              Eliminar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
