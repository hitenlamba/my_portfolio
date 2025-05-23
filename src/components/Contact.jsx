import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);
const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden px-5">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96 sm:left-10 sm:right-10">
          <ImageClipBox
            src="/img/Contact1.jpeg"
            clipClass="contact-clip-path-1 sm:scale-90 lg:scale-100"
          />
          <ImageClipBox
            src="/img/Contact1.jpeg"
            clipClass="contact-clip-path-2 sm:scale-90 lg:scale-100"
          />
          <ImageClipBox
            src="/img/Contact3.jpeg"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60 sm:scale-75"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80 sm:left-10 sm:right-10">
          <ImageClipBox
            src="/img/Contact4.jpeg"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          {/* Small Text */}
          <p className="mb-10 font-general text-[10px] uppercase"></p>

          <AnimatedTitle
            title="Le<b>T</b>'s Connec<b>t</b>"
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />
          <a
            href="https://www.linkedin.com/in/hiten00"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button title="Connect" containerClass="mt-10 cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};
