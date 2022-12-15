import github from '../images/github.png';
import twitter from '../images/twitter.svg';

function Footer() {
  return (
    <div className="bg-black w-full rounded-b-xl space-x-2 flex mt-auto h-20 justify-center align-middle items-center">
      <div className="bg-gray-200 rounded-md h-8">
        <a href="https://twitter.com/matplunkett" target="blank">
          <img src={twitter} alt="twitter" className="h-8" />
        </a>
      </div>
      <a href="https://github.com/mungo88" target="blank">
        <img src={github} alt="github" className="h-8" />
      </a>
    </div>
  );
}

export default Footer;
