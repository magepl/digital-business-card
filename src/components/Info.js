import portrait from '../images/matt-plunkett-portrait.jpg';
import linkedin from '../images/linkedin.png';
import mail from '../images/mail.png';

function Info() {
  return (
    <div className="flex flex-col items-center overflow-hidden rounded-xl">
      <img
        src={portrait}
        alt="Matt Plunkett"
        className="w-full object-cover mb-8"
      />
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-2">Matt Plunkett</h1>
        <h3 className="mb-2 text-green-200">Frontend Developer</h3>
        <a href="https://mattplunkett.dev">My Website</a>
      </div>
      <div className="mt-4 grid grid-cols-2 space-x-2">
        <a
          href="mailto:marketlinkresearch@gmail.com?subject=Enquiries"
          target="blank"
        >
          <button className="text-black bg-white rounded-lg px-10 py-2 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            Email{' '}
          </button>
        </a>
        <a href="https://www.linkedin.com/in/matt-plunkett/" target="blank">
          <button className="bg-blue-400 text-white rounded-lg px-10 py-2 flex items-center">
            <img src={linkedin} alt="linkedin" className="h-6" />
            LinkedIn
          </button>
        </a>
      </div>
    </div>
  );
}

export default Info;
