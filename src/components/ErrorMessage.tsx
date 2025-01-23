const ErrorMessage = () => {
  return (
    <main>
      <div className="text-3xl flex flex-col gap-4 mt-10 font-semibold text-center">
        <p>We were not able to find any car models.</p>
        <p>Please, try again.</p>
      </div>
    </main>
  );
};

export default ErrorMessage;