import React, { useEffect, useState } from 'react';

const Cards = ({ courses }) => {
    const [allCourses, setAllCourses] = useState([]);

    useEffect(() => {
        if (courses) {
            const fetchedCourses = [];
            Object.values(courses).forEach((courseCategory) => {
                courseCategory.forEach((course) => {
                    fetchedCourses.push(course);
                });
            });
            setAllCourses(fetchedCourses);
        }
    }, [courses]);

    return (
        <div>
            {allCourses.map((course) => (
                <Cards key={course.id} course={course} />
            ))}
        </div>
    );
};

export default Cards;