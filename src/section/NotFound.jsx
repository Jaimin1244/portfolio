import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center px-4">
      <img
        src="/404.svg"
        alt="404 illustration"
        className="w-96 max-w-full mb-8"
      />
      <h2 className="text-2xl font-semibold">404 Not Found</h2>
      <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-center">
        Whoops! That page doesn’t exist.
      </h1>
      <p className="text-sm mb-6 text-center">
        Here are some helpful links instead:
      </p>
      <div className="flex gap-4 flex-wrap justify-center ">
        <Link to="/" className="btn btn-ghost">Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
