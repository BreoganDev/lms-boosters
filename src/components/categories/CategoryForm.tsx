
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

type CategoryFormData = {
  name: string;
  description: string;
  slug: string;
  icon: string;
};

const CategoryForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = Boolean(id);

  const form = useForm<CategoryFormData>({
    defaultValues: {
      name: '',
      description: '',
      slug: '',
      icon: '',
    },
  });

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  };

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    form.setValue('name', name);
    form.setValue('slug', generateSlug(name));
  };

  const onSubmit = (data: CategoryFormData) => {
    console.log('Categoría guardada:', data);
    
    // Aquí se integraría con una API real
    setTimeout(() => {
      toast.success(
        isEditing ? 'Categoría actualizada con éxito' : 'Categoría creada con éxito'
      );
      navigate('/categories');
    }, 500);
  };

  return (
    <MainLayout>
      <div className="space-y-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight">
          {isEditing ? 'Editar Categoría' : 'Crear Nueva Categoría'}
        </h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Información de la Categoría</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          placeholder="Ingrese el nombre de la categoría" 
                          onChange={onNameChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Descripción</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          placeholder="Describa brevemente la categoría"
                          className="min-h-32"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="slug"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Slug</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="nombre-de-la-categoria" />
                      </FormControl>
                      <FormDescription>
                        El slug se utiliza en las URLs. Se genera automáticamente a partir del nombre, pero puede editarlo.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="icon"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Icono (nombre de clase)</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Ej: fa-book, icon-web, etc." />
                      </FormControl>
                      <FormDescription>
                        Nombre de la clase CSS del icono que se mostrará junto a la categoría.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            <div className="flex gap-4 justify-end">
              <Button type="button" variant="outline" onClick={() => navigate('/categories')}>
                Cancelar
              </Button>
              <Button type="submit">Guardar Categoría</Button>
            </div>
          </form>
        </Form>
      </div>
    </MainLayout>
  );
};

export default CategoryForm;
