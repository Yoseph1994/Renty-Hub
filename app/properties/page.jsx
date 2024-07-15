import properties from "@/DB/properties.json";
function PropertiesPage() {
  return (
    <section class="px-4 py-6">
      <div class="container-xl lg:container m-auto px-4 py-6">
        {properties.length === 0 ? (
          <p>No Properties found</p>
        ) : (
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) => (
              <li key={property._id}>{property.name}</li>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default PropertiesPage;
