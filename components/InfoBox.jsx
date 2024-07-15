import Link from "next/link";

function InfoBox({
  heading,
  textColor = "text-gray-800",
  buttonInfo,
  bgColor = "bg-gray-100",
  children,
}) {
  return (
    <div>
      <div className={`${bgColor} p-6 rounded-lg shadow-md`}>
        <h2 className={`${textColor} text-2xl font-bold`}>{heading}</h2>
        <p className={`${textColor} mt-2 mb-4`}>{children}</p>
        <Link
          href={buttonInfo.btnLink}
          className={`${buttonInfo.btnColor} inline-block  ${buttonInfo.textColor} rounded-lg px-4 py-2 hover:opacity-80`}
        >
          {buttonInfo.btnText}
        </Link>
      </div>
    </div>
  );
}

export default InfoBox;
