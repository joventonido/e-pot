import React from "react";

// type PageProps = {
//   params: { id: string };
// };

const ServiceInfo = async ({
  params,
}: {
  params: Promise<{ serviceId: string }>;
}) => {
  const serviceId = (await params).serviceId;
  return (
    <div className="relative w-full h-screen flex justify-center flex-col">
      <div className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10">
        <div>Service ID: {serviceId}</div>
      </div>
    </div>
  );
};

export default ServiceInfo;
