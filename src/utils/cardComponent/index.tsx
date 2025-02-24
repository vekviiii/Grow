import React from "react";

interface CardProps {
  className?: string;
  delay?: string;
}

export const Card: React.FC<React.PropsWithChildren<CardProps>> = (props) => {
  return (
    <div className={`${props.className} border-[#85A947] border-b backdrop-blur-sm rounded px-2 py-4 shadow-md`} style={{animationDelay: props.delay}}>
      {props.children}
    </div>
  );
};

export const CardNobrdr: React.FC<React.PropsWithChildren<{}>> = (props) => {
  return (
    <div className="backdrop-blur-sm rounded px-2 py-4">
      {props.children}
    </div>
  );
};