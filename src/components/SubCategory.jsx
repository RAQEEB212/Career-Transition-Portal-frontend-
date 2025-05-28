// components/SubCategory.jsx
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from './ui/button';

const subCategoriesMap = {
  Engineering: [
    { label: '🛠️ Mechanical', description: '175 jobs in Turkey, including Mechanical Engineer positions in Istanbul. ' },
    { label: '⚡ Electrical', description: '98 positions in Istanbul, such as Electrical Engineer roles at companies like Eaton and Hitachi Energy. ' },
    { label: '🏗️ Civil', description: '31 jobs in Istanbul, including Civil Design Engineer positions at firms like Ghafari. .' },
    { label: '💻 Computer', description: 'Hardware and software systems engineering.' },
    { label: '💻 Software', description: '139 jobs in Istanbul, including Software Engineer positions at Dream Games and other startups. ' },
    { label: '🧪 Chemical', description: '17 jobs across Turkey, including Chemical Engineer positions in Istanbul. ' },
    { label: '🏭 Industrial', description: '62 positions in Istanbul, such as Industrial Engineer roles in manufacturing and logistics sectors.' }
  ],
  Education: [
    { label: '👶 Early Childhood', description: 'Teaching and care for young children.' },
    { label: '📚 Secondary Education', description: 'Teaching at the middle and high school level.' },
    { label: '📚 Education', description: '834 positions listed, including roles like Early Childhood Assistant and Director of English Studies. ' },
    { label: '📝 Director of English Studies', description: 'Leadership in English language education.' }
  ],
  Business: [
    { label: '📊 Economics', description: ': 252 jobs listed, including positions like Economic Analyst and Research Assistant. ' },
    { label: '💰 Finance', description: 'Management of money, banking, and investments.' },
    { label: '📒 Accounting', description: 'Over 1,000 positions available, including roles like Accounting Analyst at Barilla Group and Chief Accountant at Hilton.' },
    { label: '🏢 Business Administration', description: '333 openings across Turkey, with roles such as Business Development Specialist and Operations Coordinator. ' }
  ],
  'Computer Science': [
    { label: '🤖 AI Engineer', description: 'Development of artificial intelligence systems.' },
    { label: '💻 Computer', description: '301 positions in Turkey, encompassing roles like Data Scientist, AI Engineer, and Software Developer. ' },
    { label: '🧮 Data Scientist', description: 'Analysis and interpretation of complex data.' },
    { label: '🧑‍💻 Software Developer', description: 'Design and creation of software applications.' }
  ],
  Medicine: [
    { label: '🧑‍⚕️ Medical Roles', description: 'Various roles in healthcare and medicine.' },
    { label: '🦷 Dentistry', description: 'Covers positions like general dentists, dental assistants, and dental technicians in private clinics and dental hospitals.' },
    { label: '💉 Nursing', description: 'Offers roles for registered nurses, nurse assistants, and clinical support staff in both private and public healthcare facilities.' },
    { label: '💊 Pharmacy', description: 'Includes community and hospital pharmacist positions, pharmacy technicians, and roles in pharmaceutical companies.' }
  ]
};

const SubCategory = () => {
    const { mainCategory } = useParams();
    const navigate = useNavigate();
    const subFields = subCategoriesMap[mainCategory] || [];

    return (
      <div
        className="flex flex-wrap justify-center gap-20 my-20 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/category-bg.png)' }}
      >
        {subFields.map(({ label, description }) => (
          <Button
            key={label}
            onClick={() => navigate('/browse', { state: { query: label, description } })}
            className="border font-semibold px-6 py-12 duration-300 flex flex-col items-center justify-center bg-white bg-opacity-80 hover:bg-blue-100 shadow-md hover:shadow-lg w-60 h-60"
          >
            <span className="text-5xl">{label.split(' ')[0]}</span>
            <div className="text-sm mt-2 text-black font-medium text-center">
              {label.replace(/^[^\s]+\s/, '')}
            </div>
          </Button>
        ))}
      </div>
    );
};

export default SubCategory;