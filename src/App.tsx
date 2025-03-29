
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Students from "./pages/Students";
import Lessons from "./pages/Lessons";
import Quizzes from "./pages/Quizzes";
import NotFound from "./pages/NotFound";
import CourseForm from "./components/courses/CourseForm";
import LessonForm from "./pages/LessonForm";
import Instructors from "./pages/Instructors";
import Categories from "./pages/Categories";
import InstructorForm from "./components/instructors/InstructorForm";
import CategoryForm from "./components/categories/CategoryForm";
import QuizForm from "./pages/QuizForm";
import StudentForm from "./pages/StudentForm";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          
          {/* Courses routes */}
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/new" element={<CourseForm />} />
          <Route path="/courses/:id" element={<Courses />} />
          <Route path="/courses/:id/edit" element={<CourseForm />} />
          
          {/* Lessons routes */}
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/lessons/new" element={<LessonForm />} />
          <Route path="/lessons/:id" element={<Lessons />} />
          <Route path="/lessons/:id/edit" element={<LessonForm />} />
          
          {/* Students routes */}
          <Route path="/students" element={<Students />} />
          <Route path="/students/new" element={<StudentForm />} />
          <Route path="/students/:id" element={<Students />} />
          <Route path="/students/:id/edit" element={<StudentForm />} />
          
          {/* Quizzes routes */}
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/quizzes/new" element={<QuizForm />} />
          <Route path="/quizzes/:id" element={<Quizzes />} />
          <Route path="/quizzes/:id/edit" element={<QuizForm />} />
          
          {/* Instructors routes */}
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/instructors/new" element={<InstructorForm />} />
          <Route path="/instructors/:id/edit" element={<InstructorForm />} />
          
          {/* Categories routes */}
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/new" element={<CategoryForm />} />
          <Route path="/categories/:id/edit" element={<CategoryForm />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
