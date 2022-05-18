import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ServiceDetails = () => {
  const [services, setServices] = useState([]);
  const { serviceId } = useParams();
  useEffect(() => {
    axios
      .get("services.json")
      .then((res) => setServices(res.data))
      .catch((err) => toast.error("Something Went Wrong!!"));
  }, []);

  const selectedServices = services.find(
    (service) => service.id === Number(serviceId)
  );
  console.log(selectedServices);

  return (
    <div>
      <h1>Service Details</h1>
    </div>
  );
};

export default ServiceDetails;
