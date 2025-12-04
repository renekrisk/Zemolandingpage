import React from 'react';


interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, className = '', id = '', dark = false }) => {
    return (
        <section
            id={id}
            className={`
        py-16 md:py-24 lg:py-32 
        ${dark ? 'bg-zemoBlue text-white' : 'bg-white text-gray-900'}
        ${className}
      `}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                {children}
            </div>
        </section>
    );
};

export default Section;
