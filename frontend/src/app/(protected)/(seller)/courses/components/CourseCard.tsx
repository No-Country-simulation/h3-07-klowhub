"use client";
import DashCard from "@/components/cards/DashCard";
import { redirect } from "next/navigation";

import React from "react";

const CourseCard = ({
  course,
}: {
  course: { id: number; courseName: string; courseDescription: string };
}) => {
  const handleClick = (id: number) => {
    redirect(`/courses/${id}`);
  };
  return (
    <div key={course.id} onClick={() => handleClick(course.id)}>
      <DashCard classNames="h-[200px]">
        <h2 className="mb-6 font-bold">{course.courseName}</h2>
        <p className="text-sm font-semibold">{course.courseDescription}</p>
      </DashCard>
    </div>
  );
};

export default CourseCard;
