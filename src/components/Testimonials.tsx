import React from 'react';
import { TestimonialsCarousel } from './ui/testimonials-carousel';

/**
 * Testimonials section component
 * Wraps the carousel component for customer testimonials
 */
const Testimonials: React.FC = () => {
    return (
        <div id="testimonials">
            <TestimonialsCarousel />
        </div>
    );
};

export default Testimonials;
