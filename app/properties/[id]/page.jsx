"use client";
import { fetchProperty } from "@/utils/requests";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
function SinglePropertyPage() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
      try {
        const fetchedProperty = await fetchProperty(id);
        setProperty(fetchedProperty);
        setLoading(false);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    if (property === null) fetchData();
  }, [property, id]);

  return <div>SinglePropertyPage</div>;
}

export default SinglePropertyPage;
