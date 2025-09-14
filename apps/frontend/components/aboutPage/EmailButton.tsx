import React from 'react'


const EMAIL_ADDRESS = "example@email.com"; // Change to your desired email

const EmailButton = () => {
  return (
    <a
      href={`mailto:${EMAIL_ADDRESS}`}
      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg font-medium gap-2 hover:bg-blue-700 transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8l8 5 8-5v10z" />
      </svg>
      Email
    </a>
  );
}

export default EmailButton