import React from "react";

export const Card: React.FC<React.PropsWithChildren<{}>> = (props) => {
  return (
    <div className="border-[#85A947] border-b rounded-sm px-2 py-4">
      {props.children}
    </div>
  );
};

export const CardNobrdr: React.FC<React.PropsWithChildren<{}>> = (props) => {
  return (
    <div className="px-2 py-4 border border-purple-600">
      {props.children}
    </div>
  );
};