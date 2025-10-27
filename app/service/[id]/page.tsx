import React from "react";

type ServiceInfoProps = {
  params: {
    id: string;
  };
};

const ServiceInfo = async ({ params }: ServiceInfoProps) => {
  const id = (await params).id;
  return (
    <div className="relative w-full h-screen flex justify-center flex-col">
      <div className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10">
        <div>Service ID: {id}</div>
      </div>
    </div>
  );
};

export default ServiceInfo;
