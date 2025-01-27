import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CourseDetail = () => {
  const { title } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5002/course/${title}`);
        const data = await response.json();
        setCourse(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch course details:", error);
        setLoading(false);
      }
    };

    fetchCourse();
  }, [title]);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (!course) {
    return <div className="text-center py-8">Course not found!</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-8">
          {course.title}
        </h1>
        <div className="text-center">
          <p className="text-lg text-gray-700">{course.description}</p>
        </div>
      </main>
    </div>
  );
};

export default CourseDetail;

