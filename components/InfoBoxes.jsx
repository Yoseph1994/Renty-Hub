import Link from "next/link";
import InfoBox from "./InfoBox";

function InfoBoxes() {
  return (
    <div>
      <section>
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <InfoBox
              heading="For Renters"
              bgColor="bg-gray-100"
              buttonInfo={{
                btnLink: "/properties",
                textColor: "text-white",
                btnColor: "bg-black",
                btnText: " Browse Properties",
              }}
            >
              Find your dream rental property. Bookmark properties and contact
              owners.
            </InfoBox>

            <InfoBox
              bgColor="bg-blue-100"
              heading="For Property Owners"
              buttonInfo={{
                btnLink: "/properties/add",
                textColor: "text-white",
                btnColor: "bg-blue-500",
                btnText: " Add Property",
              }}
            >
              List your properties and reach potential tenants. Rent as an
              airbnb or long term.
            </InfoBox>
          </div>
        </div>
      </section>
    </div>
  );
}

export default InfoBoxes;
