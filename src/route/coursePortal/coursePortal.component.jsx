import { useState, useEffect } from 'react';
import { Card } from '../../components/card/card.component';
import { Input } from '../../components/input/input.component'
import { Search } from 'lucide-react';
import { Loader2 } from 'lucide-react';

// SearchBar Component
const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="relative max-w-xl mx-auto my-6">
      <Input
        type="text"
        placeholder="Search courses..."
        value={searchTerm}
        onChange={handleSearch}
        className="pl-10 pr-4 py-2 w-full"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
    </div>
  );
};

// CourseCard Component
const CourseCard = ({ course, onSelect }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <Card 
      className="cursor-pointer hover:shadow-lg transition-shadow duration-300 overflow-hidden"
      onClick={() => onSelect(course)}
    >
      <div className="flex bg-white rounded-lg overflow-hidden">
        <div className="w-1/2 p-6 flex flex-col justify-center">
          <div className="mb-4">
            <img 
              src="/logo.png" 
              alt="Bharat Acharya Education" 
              className="h-36 w-auto"
            />
          </div>
          <h2 className="text-4xl font-bold mb-2">{course.code}</h2>
          <p className="text-xl text-amber-700">{course.title}</p>
          {course.description && (
            <p className="text-sm text-gray-600 mt-2">{course.description}</p>
          )}
        </div>
        <div className="w-1/2">
          <img
            src={imageError ? '/placeholder.jpg' : course.imageUrl}
            alt={`${course.code} ${course.title}`}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        </div>
      </div>
    </Card>
  );
};

// Main CoursePortal Component
const CoursePortal = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simulated API call - replace with your actual API endpoint
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // Replace this with your actual API call
        // const response = await fetch('your-api-endpoint');
        // const data = await response.json();
        
        // Simulated data
        const data = [
          {
            id: 1,
            code: '8051',
            title: 'Microcontroller',
            imageUrl: 'public/bharatAcharyaPhoto.jpg',
            description: 'Learn about 8051 microcontroller architecture and programming'
          },
          {
            id: 2,
            code: '8085',
            title: 'Microprocessor',
            imageUrl: 'public/bharatAcharyaPhoto.jpg',
            description: 'Master 8085 microprocessor programming and interfacing'
          },
          {
            id: 3,
            code: '8086',
            title: 'Microprocessor',
            imageUrl: 'public/bharatAcharyaPhoto.jpg',
            description: 'Advanced concepts in 8086 microprocessor'
          },
          {
            id: 4,
            code: '80386',
            title: 'Microprocessor',
            imageUrl: 'public/bharatAcharyaPhoto.jpg',
            description: 'Study 80386 architecture and protected mode'
          },
          {
            id: 5,
            code: 'ARM7',
            title: 'Microcontroller',
            imageUrl: 'public/bharatAcharyaPhoto.jpg',
            description: 'Introduction to ARM7 architecture and programming'
          },
        ];

        setCourses(data);
        setFilteredCourses(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch courses. Please try again later.');
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = courses.filter(course => 
      course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (course.description && course.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredCourses(filtered);
  };

  const handleCourseSelect = (course) => {
    // Add your course selection logic here
    console.log('Selected course:', course);
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-red-600 py-8">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
    
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-blue-600 text-center mb-8">
          Select Your Course
        </h1>

        <SearchBar onSearch={handleSearch} />

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filteredCourses.map(course => (
              <CourseCard
                key={course.id}
                course={course}
                onSelect={handleCourseSelect}
              />
            ))}
            {filteredCourses.length === 0 && (
              <div className="col-span-full text-center text-gray-500 py-12">
                No courses found matching your search.
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default CoursePortal;