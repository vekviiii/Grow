import React from "react";

export const Card: React.FC<React.PropsWithChildren<{}>> = (props) => {
  return (
    <div className="border-[#85A947] border-b backdrop-blur-sm rounded px-2 py-4 shadow">
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